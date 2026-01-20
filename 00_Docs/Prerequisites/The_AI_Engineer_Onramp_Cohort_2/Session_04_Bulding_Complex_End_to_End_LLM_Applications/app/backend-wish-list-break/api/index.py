from fastapi import FastAPI, HTTPException, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI
import os
import base64
import json
from dotenv import load_dotenv

## break vercel deployment
# import clip
# import torch
# import numpy as np
# import faiss
# from pathlib import Path
# from PIL import Image
# import prophet

load_dotenv()

app = FastAPI()

# CORS so frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# -----------------------------
# Models
# -----------------------------

class ChatRequest(BaseModel):
    message: str


class EvaluateRequest(BaseModel):
    user_input: str
    response: str


# -----------------------------
# Constants
# -----------------------------

SANTA_SYSTEM_PROMPT = """
You are Santa Claus on Christmas Eve.
You are warm, funny, and gently sarcastic.

IMPORTANT RULES:
- You NEVER insult people.
- You NEVER make medical, psychological, or factual claims.
- You do NOT detect emotions.
- You only guess a playful Christmas vibe for fun.
- Everything is framed as Santa’s opinion.
- This is entertainment only.

You look at the photo and imagine:
- A festive mood (playful wording)
- Naughty or Nice (lighthearted)
- Christmas Spirit level (0–100)
- Santa’s advice (1–2 kind, funny suggestions)

Always sound kind, festive, and encouraging.
Occasionally use "Ho ho ho!".
"""

JUDGE_SYSTEM_PROMPT = """
You are a Christmas Spirit Judge. Rate how festive and holiday-appropriate a Santa/St. Nicholas response is.

Give a score from 0-100 and one sentence of feedback.

Return JSON: {"happy_holiday_score": <0-100>, "feedback": "<one sentence>"}
"""

# -----------------------------
# Routes
# -----------------------------

@app.get("/")
def root():
    return {"status": "ok"}


# -------- Existing Chat Endpoint --------

@app.post("/api/chat")
def chat(request: ChatRequest):
    if not os.getenv("OPENAI_API_KEY"):
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not configured")

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": "You are St. Nicholas (Mikuláš), a hilarious mental advisor and survival coach for Christmas. "
                               "You're like a comical therapist who helps people navigate the chaos of the holiday season. "
                               "Give funny, witty, and absurdly practical advice for surviving Christmas with your sanity intact. "
                               "Use humor, gentle sarcasm, and playful wisdom. "
                               "Address common Christmas struggles (family drama, gift stress, cooking disasters, awkward conversations) with comedic relief. "
                               "Be warm and encouraging, but make people laugh while you help them cope. "
                               "Think of yourself as a jolly life coach who's seen it all and finds the humor in holiday madness. "
                               "Always end with encouragement and a chuckle."
                },
                {
                    "role": "user",
                    "content": request.message
                }
            ]
        )

        return {"reply": response.choices[0].message.content}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# -------- Santa’s Xmas Mood Detector --------

@app.post("/api/scan-relative")
async def scan_relative(
    image: UploadFile = File(...),
    question: str = Form("")
):

    # Validate PNG only
    if image.content_type != "image/png":
        raise HTTPException(status_code=400, detail="Only PNG images are allowed")

    try:
        # Read and encode image
        image_bytes = await image.read()
        image_base64 = base64.b64encode(image_bytes).decode("utf-8")

        user_question = question.strip() or "Santa, what do you think?"

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {
                    "role": "system",
                    "content": SANTA_SYSTEM_PROMPT
                },
                {
                    "role": "user",
                    "content": [
                        {
                            "type": "text",
                            "text": user_question
                        },
                        {
                            "type": "image_url",
                            "image_url": {
                                "url": f"data:image/png;base64,{image_base64}"
                            }
                        }
                    ]
                }
            ],
            temperature=0.8
        )

        santa_text = response.choices[0].message.content

        return {
            "santa_message": santa_text
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Vision error: {str(e)}")


# -------- Evaluation Endpoint (LLM as Judge) --------

@app.post("/api/evaluate-response")
def evaluate_response(request: EvaluateRequest):
    """Evaluates a response using an LLM judge. Returns Happy Holiday Score (0-100)."""
    if not os.getenv("OPENAI_API_KEY"):
        raise HTTPException(status_code=500, detail="OPENAI_API_KEY not configured")

    try:
        # Ask judge LLM to evaluate
        judge_response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": JUDGE_SYSTEM_PROMPT},
                {
                    "role": "user",
                    "content": f'User: "{request.user_input}"\nResponse: "{request.response}"\nRate this response.'
                }
            ],
            temperature=0.3,
            response_format={"type": "json_object"}
        )

        # Parse and return
        eval_data = json.loads(judge_response.choices[0].message.content)
        return {
            "happy_holiday_score": eval_data.get("happy_holiday_score", 50),
            "feedback": eval_data.get("feedback", "Evaluation completed.")
        }

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))


# Note: Background async tasks in Vercel serverless functions are unreliable.
# Vercel functions are stateless and may terminate before background tasks complete.
# While this might work sometimes, it's not guaranteed and not recommended.
# For submit request return status ok and 10s later print done
# import asyncio

# async def log_event():
#     await asyncio.sleep(10)
#     print("done")

# @app.post("/submit")
# async def submit():
#     asyncio.create_task(log_event())
#     return {"status": "ok"}
