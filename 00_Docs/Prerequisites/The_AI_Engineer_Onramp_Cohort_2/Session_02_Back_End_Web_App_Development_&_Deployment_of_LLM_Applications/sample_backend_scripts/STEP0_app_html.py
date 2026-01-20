from fastapi import FastAPI, Form, Response
from fastapi.responses import HTMLResponse

app = FastAPI()

@app.get("/", response_class=HTMLResponse)
def form():
    return """
    <h2>🎁 TreatOrHell App - holiday edition</h2>
    <form action="/result" method="post">
        How many hours did you spend on the assignment? <input name="hours" type="number" min="0" step="0.5"><br><br>
        <button type="submit">Evaluate</button>
    </form>
    """

@app.post("/result", response_class=HTMLResponse)
def result(hours: float = Form(...)):
    # Calculate position on Treat -> Hell meter (0 = Hell, 10 = Treat)
    # More hours = closer to Treat, fewer hours = closer to Hell
    if hours <= 2:
        meter_value = max(0, hours)
    elif hours <= 5:
        meter_value = 2 + (hours - 2) * 2  # Scale from 2 to 8
    else:
        meter_value = min(10, 8 + (hours - 5) * 0.4)  # Scale from 8 to 10
    
    # Normalize to 0-10 scale
    meter_value = min(10, max(0, meter_value))
    treat_percent = int((meter_value / 10) * 100)
    hell_percent = 100 - treat_percent
    
    # Determine final label based on percentage
    if treat_percent >= 70:
        final_label = "🎁 Treat"
    elif treat_percent <= 30:
        final_label = "🔥 Hell"
    else:
        final_label = "🎯 Somewhere in between"
    
    return f"""
    <h2>🎁 TreatOrHell Results</h2>
    <p><b>Hours spent:</b> {hours}</p>
    <p><b>Result:</b> {final_label}</p>
    <div style="width: 500px; height: 50px; border: 3px solid #333; position: relative; margin: 20px 0; background: linear-gradient(to right, #ff4444 0%, #ffaa00 50%, #44ff44 100%); border-radius: 5px;">
        <div style="position: absolute; left: 15px; top: 50%; transform: translateY(-50%); color: white; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">🔥 Hell</div>
        <div style="position: absolute; right: 15px; top: 50%; transform: translateY(-50%); color: white; font-weight: bold; text-shadow: 2px 2px 4px rgba(0,0,0,0.8);">🎁 Treat</div>
        <div style="position: absolute; left: {treat_percent}%; top: -5px; transform: translateX(-50%); width: 0; height: 0; border-left: 10px solid transparent; border-right: 10px solid transparent; border-top: 15px solid #000;"></div>
    </div>
    <p><b>Treat → Hell Meter:</b> {treat_percent}% Treat / {hell_percent}% Hell</p>
    <a href="/">Back</a>
    """

@app.get("/favicon.ico", include_in_schema=False)
def favicon():
    return Response(status_code=204)

# Run locally:
#uv run uvicorn STEP0_app_html:app --reload --host 0.0.0.0 --port 8000

# make sure to kill your port
# pkill -f uvicorn || true