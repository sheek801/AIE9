import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  // Get backend URL from environment variable, fallback to localhost for development
  // Remove trailing slash if present to avoid double slashes
  const BACKEND_URL = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000").replace(/\/$/, "")

  try {
    const { message } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    console.log("[v0] Calling FastAPI backend at", BACKEND_URL)
    console.log("[v0] Message:", message)

    // Call all three endpoints in parallel
    const [angelResponse, devilResponse, nicholasResponse] = await Promise.all([
      fetch(`${BACKEND_URL}/chat/angel`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }),
      fetch(`${BACKEND_URL}/chat/devil`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }),
      fetch(`${BACKEND_URL}/chat/nicholas`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message }),
      }),
    ])

    console.log("[v0] All responses received")

    // Check for errors
    if (!angelResponse.ok || !devilResponse.ok || !nicholasResponse.ok) {
      console.error("[v0] One or more backend calls failed")
      return NextResponse.json({ error: "Backend request failed" }, { status: 500 })
    }

    // Parse responses
    const [angelData, devilData, nicholasData] = await Promise.all([
      angelResponse.json(),
      devilResponse.json(),
      nicholasResponse.json(),
    ])

    console.log("[v0] Successfully parsed all responses")

    // Return combined data
    return NextResponse.json({
      angelReply: angelData.reply,
      devilReply: devilData.reply,
      nicholasReply: nicholasData.reply,
    })
  } catch (error) {
    console.error("[v0] Error in API route:", error)
    return NextResponse.json(
      { error: `Failed to connect to backend at ${BACKEND_URL}. Check your NEXT_PUBLIC_BACKEND_URL environment variable.` },
      { status: 500 },
    )
  }
}
