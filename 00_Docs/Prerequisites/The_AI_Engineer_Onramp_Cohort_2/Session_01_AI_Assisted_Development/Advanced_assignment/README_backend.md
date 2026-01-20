# Backend API - Sentiment Analysis

## How to Run the App

### Prerequisites
Make sure you have Python 3.7+ installed.

**Security Best Practice**: If you need to store API keys or secrets, create a `.env` file in the project root. This file is already included in [.gitignore](/.gitignore#L138) to prevent accidentally committing sensitive information to version control.

### Installation

1. Install the required dependencies:
```bash
uv sync
```

### Running the Application

1. Navigate to the `advanced` directory:
```bash
cd advanced
```

2. Start the FastAPI server:
```bash
uv run uvicorn app:app --reload
```

The `--reload` flag enables auto-reload on code changes (useful for development).

3. The API will be available at:
   - **API Base URL**: `http://localhost:8000`
   - **Interactive API Docs**: `http://localhost:8000/docs` (Swagger UI)
   - **Alternative Docs**: `http://localhost:8000/redoc` (ReDoc)

### Testing the API

You can test the sentiment endpoint using curl:

```bash
curl -X POST "http://localhost:8000/sentiment" \
     -H "Content-Type: application/json" \
     -d '{"text": "I love this product!"}'
```

Expected response:
```json
{"sentiment": "positive"}
```

Or use the interactive documentation at `http://localhost:8000/docs` to test the endpoint directly in your browser.

### API Endpoint

**POST** `/sentiment`

**Request Body:**
```json
{
  "text": "Your text here"
}
```

**Response:**
```json
{
  "sentiment": "positive" | "negative" | "neutral"
}
```
