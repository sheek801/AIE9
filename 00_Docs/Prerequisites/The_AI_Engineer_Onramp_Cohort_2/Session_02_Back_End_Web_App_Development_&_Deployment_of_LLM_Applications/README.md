<p align = "center" draggable="false" ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>

## <h1 align="center" id="heading">Session 2: ⚡ LLM APIs & Backend Web App Development & Deployment</h1>

⏺️ Recording     | 🖼️ Slides        | 👨‍💻 Repo         |
|:-----------------|:-----------------|:-----------------|
| [Recording!](https://us02web.zoom.us/rec/share/IXFR3_h72eZ1TbXWWVRiaE4xTSQIPBnpIRZUR-M5450uR8CIo-5kza1ixH9BanrA.KKu-OIqI1YHr3cfZ ) (=7Ld3A2L) | [Slides](https://www.canva.com/design/DAG492HUYsU/d98h86nIBAbpLsJ2TBFriQ/edit?utm_content=DAG492HUYsU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton) | [Repo](https://github.com/AI-Maker-Space/AIEO2/tree/main/Session_02_Back_End_Web_App_Development_%26_Deployment_of_LLM_Applications) |
---

## Prerequisites

- Python 3.12+
- Cursor IDE
- GitHub account
- Vercel account
- uv (Python package manager)
- OPENAI_API_KEY (set as an environment variable in Vercel)
- Optional: Vercel CLI (only if deploying from terminal):
  ```bash
  npm install -g vercel
  ```

## Project Setup Files

You'll need to create the following configuration files:
- `pyproject.toml` - Python project configuration with dependencies
- `requirements.txt` - Python package dependencies (for Vercel deployment)
- `vercel.json` - Vercel deployment configuration

See the [Assignment](./Assignment.md) for detailed instructions on setting up these files.

## Tools and Frameworks

In today's code, we also use several new tools and frameworks:
- [OpenAI API](https://platform.openai.com/docs/guides/text)
- [FastAPI](https://fastapi.tiangolo.com/tutorial/first-steps/)
- [HTML](https://www.w3schools.com/html/)
- [Streamlit](https://docs.streamlit.io/get-started/fundamentals/main-concepts) 

Note: You are **not expected or required** to know these yet; this list is simply here for reference and exploration.


---

# Build 🏗️

In this session, you'll build a Python FastAPI backend called **TreatOrHell** (Holiday Edition), add LLM chat endpoints for St. Nicholas, an Angel, and a Devil, optionally add document analysis (PDF/CSV), and deploy to Vercel. Advanced: generate a frontend in v0 and connect it to your backend.

- 🤝 [Assignment](./Assignment.md)
    - Set up environment and create FastAPI
    - Add LLM chat endpoints with different personas (St. Nicholas, Angel, Devil)
    - Test locally and deploy to Vercel
    - Advanced: generate a frontend in v0, connect to backend, deploy frontend

# Ship 🚢

The deployed TreatOrHell backend on Vercel (and optional frontend connected to it)!

Our deployed Vercel applications are here: 
1. https://backend-treat-or-hell-1f5w4f0gb-kats-projects-e3077004.vercel.app/

<details>
<summary>🚧 Advanced Modules (OPTIONAL) — <i>open for details</i></summary>

**Advanced Backend: Add Student Questions & Context Awareness**
- Create a form/endpoint that collects 4 student questions about their assignment handling, help-seeking behavior, class engagement, and time spent
- Save the responses to a text file (e.g., `student_responses.txt`)
- Update your `/chat/angel` endpoint to read from the saved responses file
- Include the student's answers in the LLM system prompt so the Angel can personalize responses based on the student's behavior
- Iterate locally, then re-deploy

**Advanced Frontend (v0):**
- Generate a frontend with v0 that calls your backend (e.g., `POST /chat/angel`, `/chat/nicholas`, `/chat/devil`)
- Connect via fetch and deploy the frontend to Vercel

</details>

### Deliverables

- A short Loom video of either:
  - Your deployed TreatOrHell backend (and optional frontend) showcasing the features you built
  - A walkthrough of your GitFlow + multi-agent workflow
  - Your advanced module (student questions & context awareness or v0 frontend)

# Share 🚀

Make a social media post about your final application!

### Deliverables

- Make a post on any social media platform about what you built!

Here's a template to get you started:

```
🎁 Exciting News! 🎁

I just built and deployed TreatOrHell — a holiday-themed FastAPI backend with AI-powered chat! Chat with St. Nicholas, an Angel, or a Devil using OpenAI's API! 🧑‍🎄👼😈

🔍 Three Key Takeaways:

1️⃣ FastAPI makes building Python backends fast and fun — perfect for LLM-powered applications

2️⃣ GitFlow and feature branching enable clean, organized development workflows

3️⃣ Vercel makes serverless deployment seamless — from code to production in minutes!

Built with FastAPI, OpenAI API, and deployed on Vercel. The app features three unique AI personas, each with their own personality and response style!

Check out my app: [Your Vercel URL]

Shout out to @AIMakerspace !

#WebDevelopment #AI #FastAPI #Python #Vercel #OpenAI #BackendDevelopment #Innovation #TechMilestone

Feel free to reach out if you're curious or would like to collaborate on similar projects! 🤝🔥
```
