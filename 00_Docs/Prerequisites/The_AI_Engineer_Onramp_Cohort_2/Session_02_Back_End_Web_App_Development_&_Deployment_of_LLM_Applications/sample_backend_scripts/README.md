<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>

## <h1 align="center" id="heading"> 🎁 TreatOrHell App — Holiday Edition LLM App Variants</h1>

This repo contains a few minimal FastAPI examples that progress from a basic HTML page to an LLM-backed UI with document upload. Features St. Nicholas, Angel, and Devil characters for holiday-themed interactions. Keep the vibe, keep it simple.

Our deployed Vercel applications are here: 
1. https://aim-hot-mess-coach.vercel.app/
   with GitHub repo available here: https://github.com/katgaw/AIM-hot-mess-coach
2. https://aim-hot-mess-coach-upload.vercel.app/
    with GitHub repo available here: https://github.com/katgaw/AIM-hot-mess-coach-upload
    
### Quick Start

```bash
cd sample_backend_scripts
uv sync  # Install dependencies from pyproject.toml
export OPENAI_API_KEY=sk-...   # required for LLM variants
# Or create a .env file with: OPENAI_API_KEY=sk-...
```

### App Variants (FastAPI)

- **STEP0_app_html.py** - TreatOrHell Meter
  - Simple FastAPI app with HTML form asking "How many hours did you spend on the assignment?"
  - Returns a Treat → Hell meter showing if you're closer to a treat or hell.
  - Run:
    ```bash
    uv run uvicorn STEP0_app_html:app --reload --host 0.0.0.0 --port 8000
    ```
  - Open `http://127.0.0.1:8000`

- **STEP1_app_llm.py** - Chat API with St. Nicholas, Angel, and Devil
  - LLM backend with three character endpoints (no UI).
  - Endpoints: `POST /chat/nicholas`, `/chat/angel`, `/chat/devil`
  - Run:
    ```bash
    uv run uvicorn STEP1_app_llm:app --reload --host 0.0.0.0 --port 8000
    ```
  - Try Swagger: `http://127.0.0.1:8000/docs`

- **STEP2_app_llm_html.py** - Chat UI with All Three Characters
  - LLM backend wrapped in a minimal HTML UI.
  - Chat with St. Nicholas, Angel, or Devil directly from the browser.
  - Run:
    ```bash
    uv run uvicorn STEP2_app_llm_html:app --reload --host 0.0.0.0 --port 8000
    ```
  - Open `http://127.0.0.1:8000`

- **STEP4_app_llm_doc.py** - Devil's CV Judge
  - FastAPI app with PDF CV upload functionality.
  - The Devil judges your work habits based on your CV and roasts you for working too much!
  - Includes nanobanana image display.
  - Run:
    ```bash
    uv run uvicorn STEP4_app_llm_doc:app --reload --host 0.0.0.0 --port 8000
    ```
  - Open `http://127.0.0.1:8000` or try Swagger UI at `/docs`
