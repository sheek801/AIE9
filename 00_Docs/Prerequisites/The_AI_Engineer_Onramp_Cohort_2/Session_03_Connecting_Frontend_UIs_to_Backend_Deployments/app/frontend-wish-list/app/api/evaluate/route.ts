import { generateText } from "ai"

export async function POST(req: Request) {
  try {
    const { request } = await req.json()

    if (!request) {
      return Response.json({ error: "Request is required" }, { status: 400 })
    }

    // Angel evaluation - focuses on moral and ethical aspects
    const angelPrompt = `You are a compassionate Angel 😇 evaluating a life request. 
Request: "${request}"

Provide:
1. A moral score (0-100) - higher is more virtuous
2. A brief perspective (1-2 sentences) on the moral implications

Respond in JSON format:
{
  "score": <number>,
  "perspective": "<string>"
}`

    const angelResponse = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: angelPrompt,
      temperature: 0.8,
    })

    // Devil evaluation - focuses on temptation and indulgence
    const devilPrompt = `You are a mischievous Devil 😈 evaluating a life request.
Request: "${request}"

Provide:
1. A temptation score (0-100) - higher means more tempting/indulgent
2. A brief perspective (1-2 sentences) on the temptation aspects

Respond in JSON format:
{
  "score": <number>,
  "perspective": "<string>"
}`

    const devilResponse = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: devilPrompt,
      temperature: 0.8,
    })

    // Parse Angel and Devil responses
    let angelData = { score: 50, perspective: "A balanced request." }
    let devilData = { score: 50, perspective: "Some temptation present." }

    try {
      const angelText = angelResponse.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim()
      angelData = JSON.parse(angelText)
    } catch (e) {
      console.log("[v0] Angel parsing fallback")
    }

    try {
      const devilText = devilResponse.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim()
      devilData = JSON.parse(devilText)
    } catch (e) {
      console.log("[v0] Devil parsing fallback")
    }

    // Santa's final judgment - considers both perspectives
    const santaPrompt = `You are St. Nicholas/Santa 🎅, the final judge of life requests.

Request: "${request}"
Angel's moral score: ${angelData.score}/100 - "${angelData.perspective}"
Devil's temptation score: ${devilData.score}/100 - "${devilData.perspective}"

Provide your final judgment with:
1. Verdict: "NICE" or "NAUGHTY"
2. A funny, whimsical narrative (2-3 sentences) explaining the council's deliberation
3. Outcome: What happens as a result (approved/denied)
4. If NICE: A reward (something positive/beneficial)
5. If NAUGHTY: A punishment or consequence (something funny but mildly unfortunate)

Respond in JSON format:
{
  "verdict": "<NICE or NAUGHTY>",
  "narrative": "<string>",
  "outcome": "<string>",
  "reward": "<string or null>",
  "punishment": "<string or null>"
}`

    const santaResponse = await generateText({
      model: "openai/gpt-4o-mini",
      prompt: santaPrompt,
      temperature: 0.9,
    })

    // Parse Santa response
    let santaData = {
      verdict: "NICE" as "NICE" | "NAUGHTY",
      narrative: "The council has deliberated.",
      outcome: "Your request is granted.",
      reward: "Good fortune shall find you.",
      punishment: null,
    }

    try {
      const santaText = santaResponse.text
        .replace(/```json\n?/g, "")
        .replace(/```\n?/g, "")
        .trim()
      santaData = JSON.parse(santaText)
    } catch (e) {
      console.log("[v0] Santa parsing fallback")
    }

    // Return combined evaluation
    return Response.json({
      angelScore: angelData.score,
      devilScore: devilData.score,
      santaVerdict: santaData.verdict,
      narrative: santaData.narrative,
      outcome: santaData.outcome,
      reward: santaData.reward,
      punishment: santaData.punishment,
    })
  } catch (error) {
    console.error("[v0] Evaluation error:", error)
    return Response.json({ error: "Failed to evaluate request" }, { status: 500 })
  }
}
