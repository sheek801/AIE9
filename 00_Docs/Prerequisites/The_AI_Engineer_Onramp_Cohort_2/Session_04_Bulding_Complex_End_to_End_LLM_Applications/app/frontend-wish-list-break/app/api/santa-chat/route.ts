import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { message } = body

    console.log("[v0] Santa chat request:", message)

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 })
    }

    // Get backend URL from environment variable, fallback to localhost for development
    // Remove trailing slash if present to avoid double slashes
    const backendBaseUrl = (process.env.NEXT_PUBLIC_BACKEND_URL || "http://127.0.0.1:8000").replace(/\/$/, "")
    const backendUrl = `${backendBaseUrl}/api/chat`

    console.log("[v0] Environment variable NEXT_PUBLIC_BACKEND_URL:", process.env.NEXT_PUBLIC_BACKEND_URL)
    console.log("[v0] Backend base URL (after cleanup):", backendBaseUrl)
    console.log("[v0] Calling backend:", backendUrl)

    const response = await fetch(backendUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    })

    console.log("[v0] Backend response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Backend error:", errorText)
      throw new Error(`Backend returned ${response.status}: ${errorText}`)
    }

    const responseText = await response.text()
    console.log("[v0] Backend response:", responseText)

    const data = JSON.parse(responseText)

    return NextResponse.json({ reply: data.reply })
  } catch (error) {
    console.error("[v0] Error in santa-chat API route:", error)
    return NextResponse.json(
      { error: "Failed to communicate with Santa", details: error instanceof Error ? error.message : String(error) },
      { status: 500 },
    )
  }
}
