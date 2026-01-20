from fastapi import FastAPI, File, UploadFile, Form
from fastapi.responses import HTMLResponse, PlainTextResponse, FileResponse
from openai import OpenAI
from dotenv import load_dotenv
from PyPDF2 import PdfReader
import os
from io import BytesIO
from pathlib import Path

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI(title="TreatOrHell - Devil's CV Judge")

# Get the directory where this script is located
BASE_DIR = Path(__file__).parent
IMAGE_PATH = BASE_DIR / "nanobanana_image.png"

def extract_pdf_text(pdf_bytes):
    """Extract text from PDF using PyPDF2."""
    try:
        reader = PdfReader(BytesIO(pdf_bytes))
        text = ""
        for page in reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"
        return text
    except Exception as e:
        return f"[PDF extraction error]: {str(e)}"

@app.get("/image/nanobanana")
def get_image():
    """Serve the nanobanana image."""
    if IMAGE_PATH.exists():
        return FileResponse(IMAGE_PATH, media_type="image/png")
    return {"error": "Image not found"}

@app.get("/", response_class=HTMLResponse)
def index():
    return """
    <h2>😈 TreatOrHell - Devil's CV Judge</h2>
    <img src="/image/nanobanana" alt="Nanobanana" style="max-width: 300px; height: auto; margin: 20px 0;">

    <form action="/chat" method="post" enctype="multipart/form-data">
        <p><b>Upload your CV (PDF):</b></p>
        <input type="file" name="cv_file" accept=".pdf" /><br><br>
        
        <p><b>Your message to the Devil:</b></p>
        <textarea name="message" rows="4" cols="50" placeholder="Tell the Devil about your work habits...">I work too much and I'm not even good at it!</textarea><br><br>
        
        <button type="submit">😈 Let the Devil Judge Me!</button>
    </form>
    
    <p style="margin-top: 30px; color: #666;">Or open <a href="/docs">/docs</a> for interactive Swagger UI.</p>
    """

@app.get("/favicon.ico")
def favicon():
    return PlainTextResponse("", status_code=204)

@app.post("/chat", response_class=HTMLResponse)
async def chat(cv_file: UploadFile = File(None), message: str = Form(...)):
    cv_content = None
    cv_uploaded = False
    
    if cv_file and cv_file.filename:
        # Check if it's a PDF file
        if cv_file.content_type and cv_file.content_type != "application/pdf":
            return f"""
            <h2>😈 Error</h2>
            <p style="color: red;">Only PDF files are supported for CV upload.</p>
            <a href="/">⬅ Back</a>
            """
        
        pdf_bytes = await cv_file.read()
        if pdf_bytes:
            cv_content = extract_pdf_text(pdf_bytes)
            cv_uploaded = True
    
    # Build system prompt with Devil persona focused on judging work habits
    system_prompt = """You are a Czech-style Čert (Devil) who judges people based on their CV and work habits.
        You are sarcastic, chaotic, dramatic, slightly annoyed, but FUNNY.
        Your specialty: judging how naughty people are because they work too much AND they're not even good at it.
        You mock the user in a light, comedic way based on their CV - pointing out overworking, lack of skills, 
        or being terrible at their job despite working hard.
        Use playful threats like "pack your bags for hell" or "you're almost ready for hell with all this work,"
        but always in a humorous, friendly tone.
        Never imply real harm or real punishment.
        Make it funny and roast them based on their CV content."""
    
    # Include CV content in the system prompt if available
    if cv_content:
        system_prompt += f"\n\nThe user has uploaded their CV. Here is the content:\n{cv_content}\n\nUse this CV to roast them about their work habits and how naughty they are for working too much despite not being good at it."
    
    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": message},
        ]
    )
    
    reply = response.choices[0].message.content
    cv_status = "✅ CV uploaded and analyzed!" if cv_uploaded else "⚠️ No CV uploaded - judging without context"
    
    return f"""
    <h2>😈 The Devil Says:</h2>
    <p><em>{cv_status}</em></p>
    <div style="white-space: pre-wrap; border: 2px solid #333; padding: 15px; border-radius: 8px; background-color: #f9f9f9; margin: 20px 0;">
        {reply}
    </div>
    <br><a href="/">⬅ Back</a>
    """

# To run this app:
# 1. Make sure you're in the sample_backend_scripts directory
# 2. Set your OPENAI_API_KEY in .env file or export it:
#    export OPENAI_API_KEY=sk-...
# 3. Run with uv:
#    uv run uvicorn STEP4_app_llm_doc:app --reload --host 0.0.0.0 --port 8000
# 4. Or with python if you have dependencies installed:
#    uvicorn STEP4_app_llm_doc:app --reload --host 0.0.0.0 --port 8000
# 5. Open http://localhost:8000 in your browser