"use client"

import { useState, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

interface Wish {
  id: string
  text: string
  verdict: "NICE" | "NAUGHTY"
}

interface ChatMessage {
  id: string
  text: string
  sender: "user" | "santa"
  timestamp: Date
}

export default function WishListApp() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [currentWish, setCurrentWish] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState("")
  const [isChatLoading, setIsChatLoading] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Generate snowflake configurations only on client to avoid hydration errors
  const snowflakes = useMemo(() => {
    if (!isMounted) return []
    return Array.from({ length: 50 }, (_, i) => {
      const animations = ["snowfall", "snowfall-left", "snowfall-zigzag"]
      return {
        id: i,
        animation: animations[i % 3],
        size: 3 + Math.random() * 6,
        duration: 8 + Math.random() * 12,
        delay: Math.random() * 10,
        left: Math.random() * 100,
      }
    })
  }, [isMounted])

  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Calculate spirit percentage based on number of wishes
  const spiritPercentage = Math.min((wishes.length / 5) * 100, 100)

  // Determine unlocked themes based on spirit
  const themes = [
    { name: "Classic", icon: "🎄", unlocked: true, requiredSpirit: 0 },
    { name: "Snow", icon: "❄️", unlocked: spiritPercentage >= 20, requiredSpirit: 20 },
    { name: "Aurora", icon: "🌌", unlocked: spiritPercentage >= 60, requiredSpirit: 60 },
    { name: "Gingerbread", icon: "🍪", unlocked: spiritPercentage >= 100, requiredSpirit: 100 },
  ]

  const addWish = async () => {
    if (!currentWish.trim()) return

    setIsLoading(true)

    try {
      // Call Santa endpoint to get verdict
      const response = await fetch("/api/chat/single", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: currentWish.trim(), character: "nicholas" }),
      })

      if (!response.ok) {
        throw new Error("Failed to get Santa's verdict")
      }

      const data = await response.json()

      // Determine verdict based on Santa's response
      const verdict: "NICE" | "NAUGHTY" =
        data.reply.toLowerCase().includes("nice") ||
        data.reply.toLowerCase().includes("dobr") ||
        data.reply.toLowerCase().includes("good")
          ? "NICE"
          : "NAUGHTY"

      const newWish: Wish = {
        id: Date.now().toString(),
        text: currentWish.trim(),
        verdict,
      }

      setWishes((prev) => [...prev, newWish])
      setCurrentWish("")
    } catch (error) {
      console.error("Error adding wish:", error)
      // Fallback: random verdict if backend fails
      const newWish: Wish = {
        id: Date.now().toString(),
        text: currentWish.trim(),
        verdict: Math.random() > 0.5 ? "NICE" : "NAUGHTY",
      }
      setWishes((prev) => [...prev, newWish])
      setCurrentWish("")
    } finally {
      setIsLoading(false)
    }
  }

  const sendChatMessage = async () => {
    if (!chatInput.trim() || isChatLoading) return

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: chatInput.trim(),
      sender: "user",
      timestamp: new Date(),
    }

    setChatMessages((prev) => [...prev, userMessage])
    setChatInput("")
    setIsChatLoading(true)

    try {
      const response = await fetch("/api/santa-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage.text }),
      })

      if (!response.ok) {
        throw new Error("Failed to get Santa's response")
      }

      const data = await response.json()

      const santaMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: data.reply,
        sender: "santa",
        timestamp: new Date(),
      }

      setChatMessages((prev) => [...prev, santaMessage])
    } catch (error) {
      console.error("Error chatting with Santa:", error)
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Ho ho ho! I'm having trouble hearing you right now. Please try again!",
        sender: "santa",
        timestamp: new Date(),
      }
      setChatMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsChatLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#2d1f1a] relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {snowflakes.map((snowflake) => (
          <div
            key={snowflake.id}
            className="absolute bg-white rounded-full"
            style={{
              top: "-10vh",
              left: `${snowflake.left}%`,
              width: `${snowflake.size}px`,
              height: `${snowflake.size}px`,
              animation: `${snowflake.animation} ${snowflake.duration}s linear ${snowflake.delay}s infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <div className="flex justify-center mb-8">
          <div className="w-56 h-56 rounded-full border-8 border-amber-600 overflow-hidden shadow-2xl bg-white">
            <img src="/images/cool-santa.png" alt="Cool Santa" className="w-full h-full object-cover" />
          </div>
        </div>

        <div className="bg-[#f5ebe0] rounded-2xl shadow-2xl border-8 border-[#c9a961] p-8 md:p-12 relative">
          <div
            className="absolute -top-1 left-0 right-0 h-3 bg-[#f5ebe0]"
            style={{
              clipPath:
                "polygon(0 0, 2% 100%, 4% 0, 6% 100%, 8% 0, 10% 100%, 12% 0, 14% 100%, 16% 0, 18% 100%, 20% 0, 22% 100%, 24% 0, 26% 100%, 28% 0, 30% 100%, 32% 0, 34% 100%, 36% 0, 38% 100%, 40% 0, 42% 100%, 44% 0, 46% 100%, 48% 0, 50% 100%, 52% 0, 54% 100%, 56% 0, 58% 100%, 60% 0, 62% 100%, 64% 0, 66% 100%, 68% 0, 70% 100%, 72% 0, 74% 100%, 76% 0, 78% 100%, 80% 0, 82% 100%, 84% 0, 86% 100%, 88% 0, 90% 100%, 92% 0, 94% 100%, 96% 0, 98% 100%, 100% 0)",
            }}
          />

          <h1 className="text-5xl md:text-6xl font-bold text-center text-[#3a5546] mb-3 text-balance font-serif">
            Santa's Magical Wish List
          </h1>
          <p className="text-center text-[#8b6f47] italic mb-12 text-lg text-pretty flex items-center justify-center gap-2">
            <span className="text-amber-600">✨</span>
            Write your wishes upon the enchanted scroll
            <span className="text-amber-600">✨</span>
          </p>

          <div className="bg-[#f0dcc4] border-3 border-[#c9a961] rounded-xl p-6 mb-8 shadow-inner">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#7a2c2c] font-serif">Christmas Spirit Meter</h2>
              <span className="text-3xl">
                {spiritPercentage < 20 ? "🎄" : spiritPercentage < 60 ? "⛄" : spiritPercentage < 100 ? "🌟" : "🎁"}
              </span>
            </div>

            <div className="mb-6">
              <Progress value={spiritPercentage} className="h-8 bg-[#e8d4bc]" />
              <p className="text-center mt-2 font-semibold text-[#3d2614] text-lg">
                {Math.round(spiritPercentage)}% Spirit
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold text-[#7a2c2c] mb-3">Unlocked Themes:</p>
              <div className="flex flex-wrap gap-2">
                {themes.map((theme) => (
                  <button
                    key={theme.name}
                    className={`px-4 py-2 rounded-full border-2 flex items-center gap-2 text-sm font-medium transition-all ${
                      theme.unlocked
                        ? "bg-white border-[#c9a961] text-[#3d2614] hover:shadow-md"
                        : "bg-[#f0dcc4] border-[#d4c4ae] text-[#9a8b7d] opacity-60"
                    }`}
                    disabled={!theme.unlocked}
                  >
                    <span>{theme.icon}</span>
                    <span>{theme.name}</span>
                    {!theme.unlocked && <span className="text-xs">({theme.requiredSpirit}%)</span>}
                  </button>
                ))}
              </div>
              {spiritPercentage < 100 && (
                <p className="text-xs text-[#7a5c4a] italic mt-3 text-pretty">
                  Great start! Keep going to unlock more themes!
                </p>
              )}
            </div>
          </div>

          {wishes.length > 0 && (
            <div className="mb-8 space-y-4">
              {wishes.map((wish, index) => (
                <div key={wish.id} className="flex items-start gap-3">
                  <span className="text-[#7a2c2c] font-bold text-lg">{index + 1}.</span>
                  <div className="flex-1">
                    <p className="text-[#3d2614] text-lg mb-2 leading-relaxed">{wish.text}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-[#7a2c2c] font-semibold">Santa's verdict:</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold text-white flex items-center gap-1 ${
                          wish.verdict === "NICE" ? "bg-green-600" : "bg-red-600"
                        }`}
                      >
                        {wish.verdict === "NICE" ? "🎄" : "🔥"}
                        {wish.verdict}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {wishes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-2xl text-[#7a5c4a] italic text-balance">The scroll awaits your wishes...</p>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex gap-3">
              <Input
                value={currentWish}
                onChange={(e) => setCurrentWish(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isLoading && addWish()}
                placeholder="Type your Christmas wish here..."
                className="flex-1 border-3 border-[#8b6f47] bg-white text-[#3d2614] placeholder:text-[#9a7b5f] h-14 text-base rounded-lg shadow-md"
                disabled={isLoading}
              />
              <Button
                onClick={addWish}
                disabled={isLoading || !currentWish.trim()}
                className="h-14 w-14 bg-[#7a2c2c] hover:bg-[#5c1f1f] text-white rounded-full shadow-lg disabled:opacity-50 flex items-center justify-center"
              >
                {isLoading ? <div className="animate-spin text-xl">⚖️</div> : <span className="text-xl">⊕</span>}
              </Button>
            </div>

            <div className="bg-white border-3 border-[#8b6f47] rounded-xl shadow-inner overflow-hidden">
              <div className="bg-[#7a2c2c] text-white px-4 py-3 flex items-center gap-2">
                <span className="text-2xl">🎅</span>
                <h3 className="font-bold text-lg">Chat with Santa</h3>
              </div>

              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatMessages.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-[#7a5c4a] italic">Ho ho ho! Ask Santa anything about Christmas!</p>
                  </div>
                )}

                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[75%] px-4 py-3 rounded-2xl ${
                        message.sender === "user"
                          ? "bg-[#7a2c2c] text-white rounded-br-none"
                          : "bg-[#f0dcc4] text-[#3d2614] rounded-bl-none border-2 border-[#c9a961]"
                      }`}
                    >
                      {message.sender === "santa" && (
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xl">🎅</span>
                          <span className="font-bold text-sm text-[#7a2c2c]">Santa</span>
                        </div>
                      )}
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                    </div>
                  </div>
                ))}

                {isChatLoading && (
                  <div className="flex justify-start">
                    <div className="bg-[#f0dcc4] text-[#3d2614] px-4 py-3 rounded-2xl rounded-bl-none border-2 border-[#c9a961]">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">🎅</span>
                        <div className="flex gap-1">
                          <span className="animate-bounce">.</span>
                          <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                            .
                          </span>
                          <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                            .
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t-2 border-[#e8d4bc] p-3 bg-[#f9f3ed]">
                <div className="flex gap-2">
                  <Input
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !isChatLoading && sendChatMessage()}
                    placeholder="Ask Santa anything..."
                    className="flex-1 border-2 border-[#c9a961] bg-white text-[#3d2614] placeholder:text-[#9a7b5f] h-11 text-sm rounded-lg"
                    disabled={isChatLoading}
                  />
                  <Button
                    onClick={sendChatMessage}
                    disabled={isChatLoading || !chatInput.trim()}
                    className="h-11 px-6 bg-[#7a2c2c] hover:bg-[#5c1f1f] text-white rounded-lg shadow-md disabled:opacity-50 font-semibold text-sm"
                  >
                    Send
                  </Button>
                </div>
              </div>
            </div>

            {wishes.length > 0 && (
              <Button
                className="w-full h-14 bg-[#7a2c2c] hover:bg-[#5c1f1f] text-white text-lg font-semibold rounded-lg shadow-lg"
                onClick={() => alert("Your wish list is complete! Santa has been notified! 🎅")}
              >
                Complete My List
              </Button>
            )}
          </div>
        </div>

        <div
          className="h-3 bg-[#f5ebe0] -mt-1 rounded-b-2xl"
          style={{
            clipPath:
              "polygon(0 100%, 2% 0, 4% 100%, 6% 0, 8% 100%, 10% 0, 12% 100%, 14% 0, 16% 100%, 18% 0, 20% 100%, 22% 0, 24% 100%, 26% 0, 28% 100%, 30% 0, 32% 100%, 34% 0, 36% 100%, 38% 0, 40% 100%, 42% 0, 44% 100%, 46% 0, 48% 100%, 50% 0, 52% 100%, 54% 0, 56% 100%, 58% 0, 60% 100%, 62% 0, 64% 100%, 66% 0, 68% 100%, 70% 0, 72% 100%, 74% 0, 76% 100%, 78% 0, 80% 100%, 82% 0, 84% 100%, 86% 0, 88% 100%, 90% 0, 92% 100%, 94% 0, 96% 100%, 98% 0, 100% 100%)",
          }}
        />
      </div>
    </div>
  )
}
