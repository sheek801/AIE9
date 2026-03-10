"""An agent graph with an ELI5 (Explain Like I'm 5) simplicity check loop.

After the agent responds, a secondary node scores how accessible the explanation is.
If score >= 7, end; otherwise, inject specific feedback (jargon to simplify, etc.)
and loop back until the response is clear enough for a beginner.
"""
from __future__ import annotations

from pydantic import BaseModel, Field

from langgraph.graph import StateGraph, START, END
from langgraph.prebuilt import ToolNode
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.messages import AIMessage

from app.state import MessagesState
from app.models import get_chat_model
from app.tools import get_tool_belt


class ELI5Result(BaseModel):
    simplicity_score: int = Field(
        description="Score from 1 to 10 for how easy the explanation is to follow. 10 = a smart child could understand; 1 = full of jargon and complex sentences."
    )
    feedback: str = Field(
        description="Specific feedback: list any jargon or complex phrases that should be simplified, and suggest simpler alternatives. If score >= 7, briefly affirm what made it clear."
    )


def _build_model_with_tools():
    """Return a chat model instance bound to the current tool belt."""
    model = get_chat_model()
    return model.bind_tools(get_tool_belt())


def call_model(state: MessagesState) -> dict:
    """Invoke the model with the accumulated messages and append its response."""
    model = _build_model_with_tools()
    response = model.invoke(state["messages"])
    return {"messages": [response]}


def route_to_action_or_eli5(state: MessagesState):
    """Decide whether to execute tools or run the ELI5 checker."""
    last_message = state["messages"][-1]
    if getattr(last_message, "tool_calls", None):
        return "action"
    return "eli5_check"


_eli5_prompt = ChatPromptTemplate.from_template(
    "You are an expert at judging whether explanations are accessible to beginners. "
    "Given an initial query and a final response, score the response from 1 to 10 on "
    "how simple and easy to follow it is.\n\n"
    "Scoring guide:\n"
    "- 10: A smart 10-year-old could understand. Short sentences, everyday words, "
    "helpful analogies, no unexplained jargon.\n"
    "- 1: Dense jargon, long sentences, no analogies. Requires expertise to follow.\n\n"
    "Provide specific feedback: if score < 7, list the jargon or complex phrases that "
    "need simplification and suggest simpler alternatives. If score >= 7, briefly "
    "affirm what made it clear.\n\n"
    "Initial Query:\n{initial_query}\n\n"
    "Final Response:\n{final_response}"
)


def eli5_check_node(state: MessagesState) -> dict:
    """Evaluate simplicity of the latest response; inject feedback if score < 7."""
    if len(state["messages"]) > 10:
        return {"messages": [AIMessage(content="ELI5:END")]}

    initial_query = state["messages"][0]
    final_response = state["messages"][-1]

    structured_model = get_chat_model(model_name="gpt-4.1-mini").with_structured_output(
        ELI5Result
    )
    result = (_eli5_prompt | structured_model).invoke(
        {
            "initial_query": initial_query.content,
            "final_response": final_response.content,
        }
    )

    content = f"ELI5:{result.simplicity_score} - {result.feedback}"
    return {"messages": [AIMessage(content=content)]}


def eli5_decision(state: MessagesState):
    """End if score >= 7 or safety limit hit; otherwise loop back to agent."""
    last = state["messages"][-1]
    text = getattr(last, "content", "")
    if text == "ELI5:END":
        return END
    if text.startswith("ELI5:"):
        try:
            score_part = text.split(" - ")[0]
            score = int(score_part.replace("ELI5:", ""))
            if score >= 7:
                return "end"
        except (ValueError, IndexError):
            pass
    return "continue"


def build_graph():
    """Build an agent graph with an ELI5 simplicity evaluation loop."""
    graph = StateGraph(MessagesState)
    tool_node = ToolNode(get_tool_belt())
    graph.add_node("agent", call_model)
    graph.add_node("action", tool_node)
    graph.add_node("eli5_check", eli5_check_node)
    graph.add_edge(START, "agent")
    graph.add_conditional_edges(
        "agent",
        route_to_action_or_eli5,
        {"action": "action", "eli5_check": "eli5_check"},
    )
    graph.add_conditional_edges(
        "eli5_check",
        eli5_decision,
        {"continue": "agent", "end": END, END: END},
    )
    graph.add_edge("action", "agent")
    return graph


graph = build_graph().compile()
