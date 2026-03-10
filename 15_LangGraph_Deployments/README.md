<p align = "center" draggable="false" ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719"
     width="200px"
     height="auto"/>
</p>

## <h1 align="center" id="heading">Session 15: Build & Serve Agentic Graphs with LangGraph</h1>

| 📰 Session Sheet                                             | ⏺️ Recording                           | 🖼️ Slides                                  | 👨‍💻 Repo    | 📝 Homework                                      | 📁 Feedback                                          |
| ------------------------------------------------------------ | -------------------------------------- | ------------------------------------------- | ------------- | ------------------------------------------------ | ---------------------------------------------------- |
| [Agent Servers](https://github.com/AI-Maker-Space/AIE9/tree/main/00_Docs/Session_Sheets/15_Agent_Servers) |[Recording!](https://us02web.zoom.us/rec/share/lORjByDju6fv4TdE3r93dorY3aNgmSKL_Qk_cX_AMcCQ6cNfSW77unaA1LMVV60.OcI8uEnfVmRAgjSn) <br> passcode: `Dc@&pv1T`| [Session 15 Slides](https://www.canva.com/design/DAG-EJqkRaM/FR3WG_yMA5_BqbWpQlHR9g/edit?utm_content=DAG-EJqkRaM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) | You are here! | [Session 15 Assignment: Agent Servers](https://forms.gle/Vb3HNDsyVPQ1jqKX7) | [Feedback 3/3](https://forms.gle/kYmhbVUEMog16mKv8) |

### Prerequisites

Before starting, ensure you have the following:

- **Python 3.11+** installed
- An **OpenAI API Key**
- A **Tavily API Key**
- (Optional) **LangSmith** credentials for tracing

Create a `.env` file in this directory with your API keys:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   TAVILY_API_KEY=your_tavily_api_key_here
   ```
2. Run `uv sync` to install dependencies.

# Build 🏗️

Run the repository and complete the following:

- 🤝 Breakout Room Part #1 — Building and serving your LangGraph Agent Graph
  - Task 1: Getting Dependencies & Environment
    - Configure `.env` (OpenAI, Tavily, optional LangSmith)
  - Task 2: Serve the Graph Locally
    - `uv run langgraph dev` (API on http://localhost:2024)
  - Task 3: Call the API from a different terminal
    - `uv run test_served_graph.py` (sync SDK example)
  - Task 4: Explore assistants (from `langgraph.json`)
    - `agent` → `simple_agent` (tool-using agent)
    - `agent_helpful` → `agent_with_helpfulness` (separate helpfulness node)

- 🤝 Breakout Room Part #2 — Using LangSmith Studio to visualize the graph
  - Task 1: Open Studio while the server is running
    - https://smith.langchain.com/studio?baseUrl=http://localhost:2024
  - Task 2: Visualize & Stream
    - Start a run and observe node-by-node updates
  - Task 3: Compare Flows
    - Contrast `agent` vs `agent_helpful` (tool calls vs helpfulness decision)

<details>
<summary>🚧 Advanced Build 🚧 (OPTIONAL - <i>open this section for the requirements</i>)</summary>

>NOTE: This can be done in place of the Main Assignment

- Create and deploy a locally hosted MCP server with FastMCP.
- Extend your tools in `tools.py` to allow your LangGraph to consume the MCP Server.

When submitting, provide:
- Your Loom video link demonstrating the MCP server integration
- The GitHub URL to your completed Advanced Build

Have fun!
</details>

### Questions & Activities

#### Question 1:
What is the key architectural difference between the `simple_agent` and `agent_with_helpfulness` graphs? Specifically, explain how the helpfulness evaluation loop works and what mechanisms are in place to prevent it from running indefinitely.

##### Answer:
The key architectural difference is in how each graph routes after the agent produces a response. `simple_agent` uses LangGraph's built-in `tools_condition` to make a binary decision: if the response contains tool calls, execute them; otherwise, terminate. `agent_with_helpfulness` replaces this with a custom `route_to_action_or_helpfulness` function that adds a third path: when the agent produces a final text response (no tool calls), instead of ending, it routes to a dedicated `helpfulness` node.

The helpfulness node acts as a quality evaluator. It sends the original user query and the agent's latest response to `gpt-4.1-mini` (a separate, more capable model than the agent's `gpt-4.1-nano`) with a prompt asking whether the response is "extremely helpful." The model is forced to return a structured boolean output via `.with_structured_output(HelpfulnessResult)`, producing either `HELPFULNESS:Y` or `HELPFULNESS:N`. If the response is deemed helpful, the graph ends. If not, it loops back to the agent to try again.

Two mechanisms prevent the loop from running indefinitely. First, a hard message count check at the start of `helpfulness_node` exits immediately with `HELPFULNESS:END` if the state has more than 10 messages, bypassing the LLM call entirely. Second, `helpfulness_decision` explicitly handles this sentinel value and routes to `END`, ensuring the graph always terminates even if the agent never produces a "helpful" response.


#### Question 2:
What is the role of `langgraph.json` in the LangGraph Deployments? Describe each of its key fields and how the platform uses this file to discover and serve your graphs.

##### Answer:
`langgraph.json` serves as the deployment manifest that tells the LangGraph platform what to load, where to find it, and how to expose it to API consumers. It contains six key fields:

- `version`: The schema version for the config format itself (currently `1`).
- `dependencies`: A list of Python package paths to install. Setting it to `["."]` tells the platform to install the current directory as a package using the local `pyproject.toml`.
- `env`: The path to the environment file (`.env`) that the platform loads at startup to inject API keys and configuration variables like `OPENAI_API_KEY` and `TAVILY_API_KEY`.
- `python_version`: The Python version constraint for the runtime environment (e.g., `"3.13"`).
- `graphs`: Maps graph IDs to Python module paths using `module:attribute` syntax (e.g., `"app.graphs.simple_agent:graph"`). This is how the platform discovers and imports each compiled `StateGraph` at startup.
- `assistants`: Maps user-facing assistant IDs (like `"agent"` and `"agent_helpful"`) to underlying graph IDs via `graph_id`, along with a human-readable `name` and `description`. This creates an abstraction layer between the internal graph implementations and the API surface, allowing the same graph to be exposed under multiple assistant configurations if needed.

The critical distinction is between `graphs` and `assistants`: `graphs` handles the Python import layer (finding and loading the code), while `assistants` handles the API-facing layer (defining what consumers see when they query the server for available agents).

#### Activity #1:
Create your own agent graph! Build a new graph in `app/graphs/` with a custom evaluation node (e.g., a vibe checker, a fact verifier, a summarizer — get creative!). Register it in `langgraph.json`, serve it with `uv run langgraph dev`

##### Answer:
I built `agent_with_eli5_check`, an ELI5 (Explain Like I'm 5) agent that ensures explanations are accessible to beginners. Unlike the helpfulness graph, I intentionally omit a system prompt so the agent responds in its natural, technical style on the first pass. This lets the evaluation loop do the real work: (1) an eli5_check node scores readability 1-10 via `gpt-4.1-mini` with structured output, returning both a simplicity score and specific feedback (e.g., "Replace 'stochastic gradient descent' with 'a way to adjust guesses step by step'"); (2) a threshold of 7 means only scores >= 7 pass. When the score is below 7, the evaluator lists jargon to simplify and suggests alternatives, and the agent revises on the next loop. A 10-message safety limit prevents infinite loops. The result is a visible before-and-after: a technical first response gets refined into a beginner-friendly explanation through the evaluation feedback loop.


# Ship 🚢

- The completed notebook.
- 5min. Loom Video

# Share 🚀

- Walk through your notebook and explain what you've completed in the Loom video
- Make a social media post about your final application and tag @AIMakerspace
- Share 3 lessons learned
- Share 3 lessons not learned

# Submitting Your Homework

### Main Homework Assignment

Follow these steps to prepare and submit your homework:

1. Pull the latest updates from upstream into the main branch of your AIE9 repo:
    - _(You should have completed this process already.)_ For your initial repo setup, see [Initial_Setup](https://github.com/AI-Maker-Space/AIE9/tree/main/00_Docs/Prerequisites/Initial_Setup)
    - To get the latest updates from AI Makerspace into your own AIE9 repo, run the following commands:
    ```
    git checkout main
    git pull upstream main
    git push origin main
    ```
2. **IMPORTANT:** Start Cursor from the `15_LangGraph_Platform` folder (you can also use the _File -> Open Folder_ menu option of an existing Cursor window)
3. Answer Questions 1 - 2 using the `##### Answer:` markdown cell below them in the README
4. Complete Activity #1 in the README
5. Add, commit and push your modified files to your GitHub repository.

When submitting your homework, provide:
- Your Loom video link
- The GitHub URL to the `15_LangGraph_Platform` folder on your assignment branch
