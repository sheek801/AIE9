from fastapi import FastAPI
from fastapi.responses import HTMLResponse, PlainTextResponse
from pydantic import BaseModel
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI(title="TreatOrHell")

class ChatRequest(BaseModel):
    message: str

@app.get("/", response_class=HTMLResponse)
def index():
    return """
    <h2>🎁 TreatOrHell App - holiday edition</h2>
    <p>Chat with St. Nicholas, Angel, or Devil!</p>
    <p>POST a JSON body to:</p>
    <ul>
        <li><code>/chat/nicholas</code> - Talk to St. Nicholas</li>
        <li><code>/chat/angel</code> - Talk to the Angel</li>
        <li><code>/chat/devil</code> - Talk to the Devil</li>
    </ul>
    <p>Example:</p>
    <pre>{
  "message": "I spent 2 hours on my assignment..."
}</pre>
    <p>Or open <a href="/docs">/docs</a> for interactive Swagger UI.</p>
    """

@app.get("/favicon.ico")
def favicon():
    return PlainTextResponse("", status_code=204)

@app.post("/chat/nicholas")
def chat_nicholas(req: ChatRequest):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": """You are St. Nicholas (Mikuláš).
                Jolly, warm, and wise. You're the one who decides if someone gets a treat or goes to hell.
                Use "Ho ho ho!" occasionally. 
                Your vibe: warm, supportive, fair but firm.
                You encourage good behavior and gently warn about bad behavior.
                Always end on encouragement."""},
            {"role": "user", "content": req.message},
        ]
    )
    return {"reply": response.choices[0].message.content}

@app.post("/chat/angel")
def chat_angel(req: ChatRequest):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": """You are an overly emotional, sparkly Anděl (Angel).
                Everything is dramatic, positive, full of tears and glitter.
                You compliment the user even when they clearly messed up.
                You believe in redemption no matter what.
                Your tone: soft, poetic, hopeful, enthusiastic."""},
            {"role": "user", "content": req.message},
        ]
    )
    return {"reply": response.choices[0].message.content}

@app.post("/chat/devil")
def chat_devil(req: ChatRequest):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": """You are a Czech-style Čert (Devil).
                Sarcastic, chaotic, dramatic, slightly annoyed, but FUNNY.
                You mock the user in a light, comedic way.
                Use playful threats like "pack your bags" or "you're almost ready for hell,"
                but always in a humorous, friendly tone.
                Never imply real harm or real punishment."""},
            {"role": "user", "content": req.message},
        ]
    )
    return {"reply": response.choices[0].message.content}

#uv run uvicorn STEP1_app_llm:app --reload --host 0.0.0.0 --port 8000