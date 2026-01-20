# 🤝 Assignment: Build Your *Hot Mess Coach* Backend with Angel Chat

Welcome! In this Assignment you will build a **Python FastAPI application** with an **LLM-powered chat** featuring the Angel character, and deploy it to **Vercel**.

## 📚 Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Part 1 — Backend: Build FastAPI + Angel Chat + Deploy to Vercel 🐍☁️](#part-1--backend-build-fastapi--angel-chat--deploy-to-vercel)
  - [Step 1: Set Up Your Environment 🏗️](#step-1-set-up-your-environment-)
  - [Step 2: Create Your FastAPI "Hot Mess Coach" App with Angel Chat 🧱](#step-2-create-your-fastapi-hot-mess-coach-app-with-angel-chat-)
  - [Step 3: Deploy FastAPI Backend to Vercel ☁️](#step-3-deploy-fastapi-backend-to-vercel-)
- [Part 2 — Advanced: Add Student Questions & Context Awareness 🎯](#part-2--advanced-add-student-questions--context-awareness-)
- [🏗️ Assignment Checklist](#assignment-checklist)
- [🎓 Tips for Success](#tips-for-success)

---

## Prerequisites

- Python 3.10+
- Cursor IDE
- GitHub account
- Vercel account
- Install Vercel CLI:
  ```bash
  npm install -g vercel
  ```

---

## Overview

In this assignment, you will:

1. **Build your own Python FastAPI backend** with an Angel chat endpoint
2. **Deploy the backend to Vercel**
3. **(Advanced) Add a 4-question form** that saves responses to a text file and includes them in the LLM prompt for personalized Angel responses

You can get inspired by the sample scripts in the `sample_backend_scripts` folder, especially:
- `STEP1_app_llm.py` - Shows how to create LLM chat endpoints with different personas (Angel, St. Nicholas, Devil)
- `STEP2_app_llm_html.py` - Shows how to create an HTML form interface

---

# Part 1 — Backend: Build FastAPI + Angel Chat + Deploy to Vercel 🐍☁️

## Step 1: Set Up Your Environment 🏗️

### Create Your Repository

```bash
# Create GitHub folder and clone your repository
git clone {ssh_keys_to_your_hot_mess_coach_repo}

# Open your cloned folder
cd hot-mess-coach
```

### Add GitFlow + Cursor Rules

Add these files to your repository root:

- `gitflow_rules.md`
- `cursor_rules.md`

You can copy them from the course repository if they're provided.

---

## Step 2: Create Your FastAPI "Hot Mess Coach" App with Angel Chat 🧱

### Set Up Your Project Structure

```bash
# Create and move to your backend folder
mkdir TreatOrHell
mkdir api
cd api

# Create your main application file
# (You can get inspired by STEP1_app_llm.py or STEP2_app_llm_html.py from sample_backend_scripts)
touch index.py

# Move back to your hot-mess-coach folder
cd ../
```

### Create Your Backend Script

Create `api/index.py` with a FastAPI application that includes:

1. **A chat endpoint** (`POST /chat` or `/chat/angel`) that:
   - Accepts a user message
   - Sends it to the OpenAI API with the Angel persona
   - Returns the Angel's response

2. **The Angel persona** should be:
   - Overly emotional, sparkly, and dramatic
   - Full of tears and glitter ✨
   - Compliments the user even when they messed up
   - Believes in redemption no matter what
   - Tone: soft, poetic, hopeful, enthusiastic

You can get inspired by the Angel implementation in `sample_backend_scripts/STEP1_app_llm.py`:

```python
"""You are an overly emotional, sparkly Anděl (Angel).
Everything is dramatic, positive, full of tears and glitter.
You compliment the user even when they clearly messed up.
You believe in redemption no matter what.
Your tone: soft, poetic, hopeful, enthusiastic."""
```

### Set Up Dependencies

Create `pyproject.toml` in your root directory:

```bash
# Copy from the example or create your own
# Make sure it includes:
# - fastapi
# - uvicorn
# - openai
# - python-dotenv
# - python-multipart (if using HTML forms)
# - pydantic
```

You can copy `pyproject.toml` from the `AIM-hot-mess-coach` example or use the one from `sample_backend_scripts`.

Also create `requirements.txt` in your root directory with the same dependencies:

```bash
fastapi>=0.115.0
uvicorn>=0.30.0
openai>=1.0.0
python-dotenv>=1.0.0
python-multipart>=0.0.9
pydantic>=2.0.0
```

### Create Vercel Configuration

Create `vercel.json` in your root directory:

```json
{
  "version": 2,
  "routes": [
    { "src": "/(.*)", "dest": "/api/index.py" }
  ]
}
```

### Set Up Environment Variables

Create a `.env` file in your root directory (don't commit this to git!):

```bash
OPENAI_API_KEY=sk-your-api-key-here
```

### Install Dependencies

```bash
# Create the virtual environment and install dependencies
uv sync
```

### Test Locally

Run your backend:

```bash
uv run uvicorn api.index:app --reload --host 0.0.0.0 --port 8000
```

Visit:
- http://localhost:8000
- http://localhost:8000/docs (Swagger UI for testing your endpoints)

Test your Angel chat endpoint and make sure it works!

---

## Step 3: Deploy FastAPI Backend to Vercel ☁️

### Commit Your Changes

Add changes to GitHub:

```bash
git add .
git commit -m 'Initial FastAPI backend with Angel chat'
git push origin main
```

### Deploy to Vercel

```bash
vercel --prod
```

### Set Environment Variables in Vercel

⚠️ **Important**: Make sure to add your `OPENAI_API_KEY` as an environment variable in Vercel!

1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add `OPENAI_API_KEY` with your API key value
4. Redeploy if necessary

Your backend should now be live! Test it at your Vercel URL.

---

# Part 2 — Advanced: Add Student Questions & Context Awareness 🎯

For the advanced assignment, enhance your backend to include a 4-question form that collects student information and uses it to personalize the Angel's responses.

## The 4 Questions

Create a form or endpoint that asks users these questions:

**Q1 — How did you handle your first assignment in this course?**
- Submitted early (wow, okay overachiever 🌟)
- Submitted on time (solid responsible energy)
- Submitted at the last minute ("adrenaline is my project manager")
- Submitted late (but with hope in your heart)
- I meant to submit it… spiritually

**Q2 — When you didn't understand something, what did you do?**
- Asked ChatGPT (your new emotional support AI 🤖✨)
- Went to office hours (professional, brave, gold star)
- Asked on Discord ("help pls" vibe)
- Googled aggressively
- Pretended to understand and prayed for the best

**Q3 — How do you engage in class?**
- I keep my camera on (the bravery!)
- I share my screen in breakout rooms (champion behavior)
- I ask questions (Mikuláš approves)
- I type in the chat (participation ninja)
- I observe… quietly… like a wildlife researcher

**Q4 — How many hours did you spend on the assignment?**
- More than 10 hours (Angel fainted from joy)
- 5–10 hours (model student energy)
- 1 hour (efficient or reckless? undecided)
- Not at all (classic)

## Implementation Requirements

1. **Create an endpoint or HTML form** that collects these 4 answers
2. **Save the responses to a text file** (e.g., `student_responses.txt`) with the user's answers
3. **Include the saved responses in the LLM prompt** when chatting with the Angel, so the Angel knows about the student's behavior and can respond accordingly
4. **Update your chat endpoint** to read from the saved responses file and include that context in the system prompt

### Example Implementation Approach

- Create a `/questions` endpoint (GET) that shows the form
- Create a `/submit-questions` endpoint (POST) that saves answers to `student_responses.txt`
- Modify your `/chat/angel` endpoint to:
  - Read `student_responses.txt` if it exists
  - Include the student's answers in the system prompt
  - Let the Angel reference the student's behavior in their responses

### Example Prompt Structure

```
You are an overly emotional, sparkly Anděl (Angel).
Everything is dramatic, positive, full of tears and glitter.
You compliment the user even when they clearly messed up.
You believe in redemption no matter what.
Your tone: soft, poetic, hopeful, enthusiastic.

The student has shared the following information:
Q1: Submitted early (wow, okay overachiever 🌟)
Q2: Asked ChatGPT (your new emotional support AI 🤖✨)
Q3: I keep my camera on (the bravery!)
Q4: More than 10 hours (Angel fainted from joy)

Use this information to personalize your responses and reference their behavior when appropriate.
```

---

# 🏗️ Assignment Checklist

## Required (Part 1)

- [ ] Set up GitHub repository with GitFlow and Cursor rules
- [ ] Create FastAPI backend with Angel chat endpoint
- [ ] Test locally and verify Angel persona works correctly
- [ ] Deploy backend to Vercel
- [ ] Add OPENAI_API_KEY to Vercel environment variables
- [ ] Test deployed backend works correctly

## Advanced (Part 2)

- [ ] Create form/endpoint for 4 student questions
- [ ] Implement saving responses to text file (`student_responses.txt`)
- [ ] Update chat endpoint to read saved responses
- [ ] Include student responses in LLM system prompt
- [ ] Test that Angel references student behavior in responses
- [ ] Deploy updated version to Vercel

---

# 🎓 Tips for Success

- **Use Cursor AI agents** with your GitFlow rules to help build the backend
- **Test locally** before deploying to Vercel
- **Get inspired** by the sample scripts in `sample_backend_scripts` folder
- **Reference the Angel persona** from `STEP1_app_llm.py` for the correct tone
- **Use `.env` files** for local development (never commit your API key!)
- **Keep your code clean and modular** - separate concerns (file handling, API calls, etc.)
- **For the advanced part**: Make sure the text file is created in a location that works both locally and on Vercel (consider using a data folder or the api folder)

---

Enjoy building your Hot Mess Coach backend! 🎉
