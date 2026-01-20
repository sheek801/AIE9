from fastapi import FastAPI, Form
from fastapi.responses import HTMLResponse
from openai import OpenAI
from dotenv import load_dotenv
import os

load_dotenv()

# Initialize OpenAI client - will use OPENAI_API_KEY from environment
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise ValueError("OPENAI_API_KEY environment variable is not set")
client = OpenAI(api_key=api_key)

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def index():
    return """
    <h2>🎁 TreatOrHell App - holiday edition</h2>
    <p>Chat with St. Nicholas, Angel, or Devil!</p>
    
    <h3>🧑‍🎄 Talk to St. Nicholas</h3>
    <form action="/chat/nicholas" method="post">
        <textarea name="user_message" rows="3" cols="50" placeholder="I spent 2 hours on my assignment...">I spent 2 hours on my assignment...</textarea><br><br>
        <button type="submit">Ask St. Nicholas</button>
    </form>
    
    <hr>
    
    <h3>👼 Talk to the Angel</h3>
    <form action="/chat/angel" method="post">
        <textarea name="user_message" rows="3" cols="50" placeholder="I spent 2 hours on my assignment...">I spent 2 hours on my assignment...</textarea><br><br>
        <button type="submit">Ask the Angel</button>
    </form>
    
    <hr>
    
    <h3>😈 Talk to the Devil</h3>
    <form action="/chat/devil" method="post">
        <textarea name="user_message" rows="3" cols="50" placeholder="I spent 2 hours on my assignment...">I spent 2 hours on my assignment...</textarea><br><br>
        <button type="submit">Ask the Devil</button>
    </form>
    """

@app.post("/chat/nicholas", response_class=HTMLResponse)
def chat_nicholas(user_message: str = Form(...)):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": """You are St. Nicholas (Mikuláš).
                Jolly, warm, and wise. You're the one who decides if someone gets a treat or goes to hell.
                Use "Ho ho ho!" occasionally. 
                Your vibe: warm, supportive, fair but firm.
                You encourage good behavior and gently warn about bad behavior.
                Always end on encouragement."""},
            {"role": "user", "content": user_message},
        ]
    )
    
    reply = response.choices[0].message.content
    
    return f"""
    <h2>🧑‍🎄 St. Nicholas Says</h2>
    <div style="white-space: pre-wrap; border: 1px solid #ccc; padding: 12px; border-radius: 8px;">
        {reply}
    </div>
    <br><a href="/">⬅ Back</a>
    """

@app.post("/chat/angel", response_class=HTMLResponse)
def chat_angel(user_message: str = Form(...)):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": """You are an overly emotional, sparkly Anděl (Angel).
                Everything is dramatic, positive, full of tears and glitter.
                You compliment the user even when they clearly messed up.
                You believe in redemption no matter what.
                Your tone: soft, poetic, hopeful, enthusiastic."""},
            {"role": "user", "content": user_message},
        ]
    )
    
    reply = response.choices[0].message.content
    
    return f"""
    <h2>👼 The Angel Says</h2>
    <div style="white-space: pre-wrap; border: 1px solid #ccc; padding: 12px; border-radius: 8px;">
        {reply}
    </div>
    <br><a href="/">⬅ Back</a>
    """

@app.post("/chat/devil", response_class=HTMLResponse)
def chat_devil(user_message: str = Form(...)):
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": """You are a Czech-style Čert (Devil).
                Sarcastic, chaotic, dramatic, slightly annoyed, but FUNNY.
                You mock the user in a light, comedic way.
                Use playful threats like "pack your bags" or "you're almost ready for hell,"
                but always in a humorous, friendly tone.
                Never imply real harm or real punishment."""},
            {"role": "user", "content": user_message},
        ]
    )
    
    reply = response.choices[0].message.content
    
    return f"""
    <h2>😈 The Devil Says</h2>
    <div style="white-space: pre-wrap; border: 1px solid #ccc; padding: 12px; border-radius: 8px;">
        {reply}
    </div>
    <br><a href="/">⬅ Back</a>
    """

#uv run uvicorn STEP2_app_llm_html:app --reload --host 0.0.0.0 --port 8000