import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  // Get backend URL from environment variable, fallback to localhost for development
  // Remove trailing slash if present to avoid double slashes
  const BACKEND_URL = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000").replace(/\/$/, "")

  try {
    const { message, character } = await request.json()

    if (!message || typeof message !== "string") {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    if (!character || !["angel", "devil", "nicholas"].includes(character)) {
      return NextResponse.json({ error: "Invalid character" }, { status: 400 })
    }

    // Map character to endpoint
    const endpoint = `/chat/${character}`

    console.log("[v0] Calling FastAPI backend:", `${BACKEND_URL}${endpoint}`)
    console.log("[v0] Message:", message)

    const response = await fetch(`${BACKEND_URL}${endpoint}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    })

    if (!response.ok) {
      console.error("[v0] Backend call failed with status:", response.status)
      return NextResponse.json({ error: "Backend request failed" }, { status: 500 })
    }

    const textResponse = await response.text()
    console.log("[v0] Raw response:", textResponse)

    let data
    try {
      data = JSON.parse(textResponse)
    } catch (parseError) {
      console.error("[v0] JSON parse error:", parseError)
      console.error("[v0] Response was:", textResponse)
      return NextResponse.json({ error: "Invalid JSON response from backend" }, { status: 500 })
    }

    console.log("[v0] Successfully received response:", data)

    return NextResponse.json({
      reply: data.reply,
    })
  } catch (error) {
    console.error("[v0] Error in API route:", error)
    return NextResponse.json(
      { error: `Failed to connect to backend at ${BACKEND_URL}. Check your NEXT_PUBLIC_BACKEND_URL environment variable.` },
      { status: 500 },
    )
  }
}
