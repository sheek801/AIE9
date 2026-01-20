> [!TIP]
> 🎯 Our **Goal** is to check the vibes today; of AI Makerspace, your peers and peer supporters, and of the Personal Assistant that we'll be building by leveraging [The AI Engineer Challenge](https://aimakerspace.io/aie-challenge) work we've already completed.

# 🪂 Overview

In this session, we’ll kick off the cohort! You’ll get introduced to AI Makerspace and to how we operate The AI Engineering Bootcamp. You’ll meet the people who will be part of your journey throughout the course.

The core **concept** we’ll cover in Session 1 is, of course, AI Engineering. We'll overview the evolution of the term into both Context and Agents, and we'll introduce the primary patterns we leverage for prototyping LLM applications: prompt engineering, Retrieval Augmented Generation (RAG), and Agents. We’ll dig much more deeply into each of these in subsequent sessions. We will also discuss the importance of a cursory evaluation on prototypes, which can be done using simple prompts. This is called *vibe checking* by practitioners in the industry.

The **code** for this session is focused on understanding and taking what you did in [The AI Engineering Bootcamp Challenge](https://aimakerspace.io/aie-challenge/) to the next level! We’ll adapt our build to a new application, then we'll vibe-check (e.g., evaluate) the assistant we build. We will also get clear on how to manage assignments and submit homework directly from your personal GitHub repo.

## **📛 Required Tooling & Account Setup**

1. Go through the supplied pre-requisite materials as needed to show up to class ready to code.
2. 🔑 Set up a fresh API key for [OpenAI](https://platform.openai.com/docs/models) that you can use throughout the bootcamp!

## **🧑‍💻 Recommended Pre-Work**

1. Read [Agent Engineering: A New Discipline](https://www.blog.langchain.com/agent-engineering-a-new-discipline/) to prepare for AI Engineering
2. Read [In Defense of AI Evals](https://www.sh-reya.com/blog/in-defense-ai-evals/) to prepare for vibe checking
3. If you do not have an idea yet, please chat with [ChatGPT Use Cases for Work](https://chatgpt.com/g/g-h5aUtVu0G-chatgpt-use-cases-for-work) before class!
4. We recommend checking out the [Language Models are Few-Shot Learners (2020)](https://arxiv.org/abs/2005.14165) and [Chain-of-Thought (2022)](https://arxiv.org/abs/2201.11903) papers this week.

# 🧑‍💻 What is AI Engineering?

AI Engineering refers to the industry-relevant skills that data science and engineering teams need to successfully **build, deploy, operate, and improve Large Language Model (LLM) applications in production environments.**

In 2026, AI Engineers are responsible for building agents.

[Agent Engineering](https://blog.langchain.com/agent-engineering-a-new-discipline/), an emerging discipline, is defined as the iterative process of refining non-deterministic LLM systems into reliable production experiences.

In practice, Agent Engineering requires understanding how to prototype and productionize.

During the *prototyping* phase, we want to have the skills to:

1. Deploy End-to-End LLM Applications to Users
2. Build Agentic RAG Applications
3. Build Deep Agents
4. Build Multi-Agent Applications
5. Monitor Agentic RAG Applications
6. Build and Implement Evals for Agentic RAG Applications
7. Improve Retrieval Pipelines

When *productionizing*, we want to make sure we have the skills to:

1. Build Agents with Production-Grade Components
2. Deploy Production Agent Servers
3. Deploy Production LLM Servers
4. Deploy MCP Servers

# 🌀 Design Patterns of AI Engineering

There are three patterns we’ll see time after time as we build, ship, and share throughout this course. The patterns will occur at different levels of abstraction and will work together to help us create more powerful and useful production-grade LLM applications.

The three patterns are:

- 💬 Prompt Engineering = Putting instructions *in the context window* =  `In-Context Learning`
- 🗂️ RAG = Giving the LLM ***access** to **new knowledge* = `Dense Vector Retrieval + In-Context Learning`
- 🕴️ Agents = Enhanced Search & Retrieval (e.g., Agentic RAG) = Giving the LLM access to tools = The [Reasoning-Action (ReAct)](https://arxiv.org/abs/2210.03629) pattern

There is, technically, a fourth pattern that we no longer teach in this course, and that often comes later in the production AI application cycle. You can learn all about it for free through our [open-source LLM Engineering course](https://aimakerspace.io/llm-engineering) or our YouTube channel.

- ⚖️ Fine-Tuning = Teaching the LLM *how to **act* = Modifying LLM behavior through weight updates

Typically, we apply these patterns in this order when prototyping LLM applications. That is, we typically first work to optimize what we search and retrieve to put in context, then we optimize the performance of the LLMs we use, whether they are standard chat models, embedding models, or more specialized types of models - for example rerankers - that we might use in our retrieval systems.

<p align="center">
  <img src="https://github.com/user-attachments/assets/bfebe848-c6a4-4a45-80c5-9cd442189289" width="80%" />
</p>

In the end, it's all about optimizing what we put in context at any given conversation turn or within any user session. In short, you might say it's all Context Engineering.

# 🔵 Context Engineering

From the outset, it’s important to address the elephant in the AI Engineering and Agent Engineering room: Context Engineering.

Originally coined by [Dexter Horthy](https://x.com/dexhorthy/status/1940895400065749412) during his talk on June 3, 2025 at The AI Engineer Summit, the term has taken on a life of its own. Everything is, indeed, context, as our [recommended 2020 paper](https://arxiv.org/abs/2005.14165) taught us.

<p align="center">
  <img src="https://github.com/user-attachments/assets/b6924dab-4a9c-46da-b15b-402952fcdeb8" width="80%" />
</p>

In the [Decade of Agents](https://www.latent.space/p/s3?open=false#%C2%A7closing-recap) (2025-??) ahead, as we're already seeing, to score highly on the latest benchmarks out there today - benchies like [Deep Research Bench](https://huggingface.co/spaces/Ayanami0730/DeepResearch-Leaderboard) - it’s not just the model that we’re putting up to the test, but rather the agent’s ability to produce a final answer - one that often requires managing context along the way - context beyond the simple input-output schema of an LLM on it’s own.

Beyond [comparisons between model labs and agent labs](https://www.swyx.io/cognition?utm_source=tldrai#agent-labs-vs-model-labs), there are practical implications of being able to embrace this higher level of abstraction. Perhaps most importantly, if we don't, we risk being left behind, as coders today are already all too aware of.

In this course, we’ll investigate from first principles how the game keeps changing under our feet as we learn how to play it. Beyond optimizing dense vector retrieval (RAG), search/tools (Agents), and prompts and instructions *in the service* of application-level goals, we'll also find ourselves managing it all in the context of the times!

# 🎸 Vibe Checking

Every time we build an application, we need to evaluate the application.  We need to test it, like a user would!

The pattern is simple: build, evaluate, iterate.

Vibe checking is the simplest form of evaluation, and it allows us to test and critique various aspects of performance by providing a large array of inputs and looking at corresponding outputs. Vibe checking is largely a qualitative practice, and we can think of it as an informal term for a cursory unstructured, non-comprehensive **evaluation of LLM-powered systems**. The idea is to loosely evaluate our applications to cover significant and crucial functions where failure would be immediately noticeable and severe.

In essence, it's a first look to ensure your system isn't experiencing catastrophic failure; that is, there is nothing obvious going on that is likely to make our users have a really bad time.

--

Do you have any questions about how to best prepare for Session 1 after reading? Please don't hesitate to provide direct feedback to `greg@aimakerspace.io` or `Dr Greg` on Discord!
