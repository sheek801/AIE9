<p align="center" draggable="false"><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" width="200px" height="auto"/></p>

## <h1 align="center" id="heading"> 🎁 TreatOrHell App — Holiday Edition</h1>

A FastAPI app that lets you chat with St. Nicholas, an Angel, or a Devil using the OpenAI Chat Completions API. Each character has their own unique personality and response style!

### Quick Start

```bash
uv init
uv sync
export OPENAI_API_KEY=sk-...   # required
uv run uvicorn api.index:app --reload --host 0.0.0.0 --port 8000
```

Open http://localhost:8000

## Run locally

### Option A: Using uv (recommended)
1) Create and activate a local venv
```bash
uv init --python 3.12
uv sync
```
2) Install deps
```bash
uv sync
```
3) Set your API key (or use a `.env` file with `OPENAI_API_KEY=...`)
```bash
export OPENAI_API_KEY="sk-..."
```
4) Start the server
```bash
uv run uvicorn api.index:app --reload --host 0.0.0.0 --port 8000
```
Open http://localhost:8000

### Option B: Using venv + pip
1) Create and activate venv
```bash
python3 -m venv .venv
source .venv/bin/activate
```
2) Install deps
```bash
pip install -r api/requirements.txt
```
3) Set your API key (or use a `.env` file with `OPENAI_API_KEY=...`)
```bash
export OPENAI_API_KEY="sk-..."
```
4) Start the server
```bash
uvicorn api.index:app --reload --host 0.0.0.0 --port 8000
```
Open http://localhost:8000

Notes:
- You can place a `.env` file at the repo root with `OPENAI_API_KEY=...`.
- The app entrypoint is `api/index.py` (FastAPI). Vercel deploy uses the same file.

