from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class SentimentRequest(BaseModel):
    text: str


@app.get("/")
async def root():
    return {
        "message": "Sentiment Analysis API",
        "endpoints": {
            "sentiment": "POST /sentiment",
            "docs": "GET /docs",
            "health": "GET /health"
        }
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}


@app.post("/sentiment")
async def sentiment(payload: SentimentRequest):
    text = payload.text.lower()
    if "good" in text or "love" in text:
        return {"sentiment": "positive"}
    if "bad" in text or "hate" in text:
        return {"sentiment": "negative"}
    return {"sentiment": "neutral"}
