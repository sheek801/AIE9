"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Snowfall } from "@/components/snowfall"
import { WaxSeal } from "@/components/wax-seal"
import { SpiritMeter } from "@/components/spirit-meter"
import { PlusCircle, Sparkles } from "lucide-react"

type Wish = {
  id: number
  text: string
  rating: "nice" | "naughty" | null
  isWriting: boolean
}

type Theme = "default" | "snow" | "aurora" | "gingerbread"

const getSantaRating = (wish: string): "nice" | "naughty" => {
  const naughtyWords = ["money", "expensive", "destroy", "prank", "revenge"]
  const lowerWish = wish.toLowerCase()

  const hasNaughtyWord = naughtyWords.some((word) => lowerWish.includes(word))
  if (hasNaughtyWord) return "naughty"

  return Math.random() > 0.3 ? "nice" : "naughty"
}

export default function SantaWishList() {
  const [wishes, setWishes] = useState<Wish[]>([])
  const [currentWish, setCurrentWish] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [theme, setTheme] = useState<Theme>("default")
  const [explosionTrigger, setExplosionTrigger] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      audioRef.current = new Audio("/placeholder.svg?height=1&width=1")
    }
  }, [])

  const getThemeGradient = () => {
    switch (theme) {
      case "snow":
        return "linear-gradient(135deg, #E8EEF5 0%, #F6F0E4 50%, #E8EEF5 100%)"
      case "aurora":
        return "linear-gradient(135deg, #0F3D2E 0%, #6E0F0F 50%, #D4A373 100%)"
      case "gingerbread":
        return "linear-gradient(135deg, #6E0F0F 0%, #D4A373 50%, #F6F0E4 100%)"
      default:
        return "#1A0F0A"
    }
  }

  const playSound = () => {
    const audioContext = new AudioContext()
    const oscillator = audioContext.createOscillator()
    const gainNode = audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioContext.destination)

    oscillator.frequency.value = 400
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5)

    oscillator.start(audioContext.currentTime)
    oscillator.stop(audioContext.currentTime + 0.5)
  }

  const addWish = () => {
    if (!currentWish.trim()) return

    const newWish: Wish = {
      id: Date.now(),
      text: currentWish,
      rating: null,
      isWriting: true,
    }

    setWishes((prev) => [...prev, newWish])
    setCurrentWish("")

    playSound()
    setExplosionTrigger((prev) => prev + 1)

    setTimeout(() => {
      setWishes((prev) =>
        prev.map((w) => (w.id === newWish.id ? { ...w, isWriting: false, rating: getSantaRating(w.text) } : w)),
      )
    }, 2000)
  }

  const completeList = () => {
    if (wishes.length === 0) return
    setIsComplete(true)
    playSound()
  }

  const resetList = () => {
    setWishes([])
    setIsComplete(false)
  }

  const spiritLevel = Math.min(wishes.length / 10, 1)

  return (
    <>
      <Snowfall spiritLevel={spiritLevel} triggerExplosion={explosionTrigger} />

      <div
        className="fixed inset-0 -z-10 transition-all duration-1000"
        style={{
          background: `
            radial-gradient(circle at 20% 50%, rgba(212, 163, 115, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(15, 61, 46, 0.1) 0%, transparent 50%),
            ${getThemeGradient()}
          `,
        }}
      />

      <div className="relative z-10 w-full max-w-2xl">
        <div className="flex justify-center mb-8">
          <div className="relative group">
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-40 animate-pulse group-hover:opacity-60 transition-all duration-500"
              style={{ background: "radial-gradient(circle, #D4A373 0%, rgba(212, 163, 115, 0) 70%)" }}
            />
            <img
              src="/cool_santa.png"
              alt="Cool Santa"
              className="relative w-48 h-48 md:w-56 md:h-56 object-cover rounded-full border-4 shadow-2xl hover:scale-105 transition-transform duration-300"
              style={{ borderColor: "#D4A373" }}
            />
          </div>
        </div>

        <div className="relative parchment-container">
          <div
            className="relative overflow-hidden shadow-2xl parchment-paper"
            style={{
              background: `
                radial-gradient(ellipse at top, rgba(212, 163, 115, 0.2) 0%, transparent 50%),
                radial-gradient(ellipse at bottom, rgba(212, 163, 115, 0.2) 0%, transparent 50%),
                linear-gradient(to bottom, rgba(0,0,0,0.03) 0%, transparent 5%, transparent 95%, rgba(0,0,0,0.03) 100%),
                #F6F0E4
              `,
              borderLeft: "2px solid rgba(212, 163, 115, 0.4)",
              borderRight: "2px solid rgba(212, 163, 115, 0.4)",
              boxShadow: `
                0 0 40px rgba(212, 163, 115, 0.3),
                inset 0 0 60px rgba(212, 163, 115, 0.1)
              `,
            }}
          >
            <div className="relative p-8">
              <div className="text-center mb-6">
                <h1
                  className="text-4xl md:text-5xl font-serif mb-2 tracking-wide text-balance relative"
                  style={{
                    color: "#0F3D2E",
                    textShadow: "0 2px 8px rgba(212, 163, 115, 0.3), 0 0 20px rgba(212, 163, 115, 0.2)",
                  }}
                >
                  <span className="relative inline-block">
                    Santa's Magical Wish List
                    <div
                      className="absolute -inset-1 blur-sm opacity-30"
                      style={{ background: "linear-gradient(90deg, transparent, #D4A373, transparent)" }}
                    />
                  </span>
                </h1>
                <div className="flex items-center justify-center gap-2" style={{ color: "#6E0F0F" }}>
                  <Sparkles className="w-5 h-5 animate-pulse" style={{ color: "#D4A373" }} />
                  <p className="text-lg font-serif italic">Write your wishes upon the enchanted scroll</p>
                  <Sparkles className="w-5 h-5 animate-pulse" style={{ color: "#D4A373", animationDelay: "0.5s" }} />
                </div>
              </div>

              <div className="mb-6">
                <SpiritMeter wishCount={wishes.length} onThemeChange={setTheme} />
              </div>

              <div className="min-h-[300px] max-h-[400px] overflow-y-auto scrollbar-parchment mb-6 space-y-4 px-2">
                {wishes.length === 0 && (
                  <p className="text-center italic font-serif py-12" style={{ color: "#0F3D2E" }}>
                    The scroll awaits your wishes...
                  </p>
                )}

                {wishes.map((wish, index) => (
                  <div
                    key={wish.id}
                    className={`flex items-start gap-3 transition-all duration-500 ${
                      wish.isWriting ? "opacity-50" : "opacity-100"
                    }`}
                  >
                    <span className="text-xl font-serif mt-1" style={{ color: "#6E0F0F" }}>
                      {index + 1}.
                    </span>
                    <div className="flex-1">
                      <p
                        className={`text-lg font-serif leading-relaxed ${wish.isWriting ? "animate-pulse" : ""}`}
                        style={{ color: "#0F3D2E" }}
                      >
                        {wish.text}
                      </p>
                      {wish.rating && !wish.isWriting && (
                        <div className="mt-2 flex items-center gap-2">
                          <span className="text-xs font-sans" style={{ color: "#6E0F0F" }}>
                            Santa's verdict:
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold ${
                              wish.rating === "nice"
                                ? "bg-green-600 text-white shadow-lg shadow-green-500/50"
                                : "bg-red-600 text-white shadow-lg shadow-red-500/50"
                            }`}
                          >
                            {wish.rating === "nice" ? "✨ NICE" : "🔥 NAUGHTY"}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {!isComplete && (
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <Input
                      value={currentWish}
                      onChange={(e) => setCurrentWish(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && addWish()}
                      placeholder="Type your Christmas wish here..."
                      className="flex-1 bg-white/70 border-2 text-base font-serif focus:ring-2 backdrop-blur-sm shadow-lg"
                      style={{
                        borderColor: "#D4A373",
                        color: "#0F3D2E",
                        boxShadow: "0 0 20px rgba(212, 163, 115, 0.2)",
                      }}
                    />
                    <Button
                      onClick={addWish}
                      className="text-white font-serif shadow-lg hover:opacity-90 transition-all hover:shadow-xl"
                      style={{
                        background: "linear-gradient(135deg, #6E0F0F 0%, #8b1a1a 100%)",
                        boxShadow: "0 0 20px rgba(110, 15, 15, 0.3)",
                      }}
                    >
                      <PlusCircle className="w-5 h-5" />
                    </Button>
                  </div>

                  {wishes.length > 0 && (
                    <Button
                      onClick={completeList}
                      className="w-full text-white font-serif text-lg py-6 shadow-xl hover:opacity-90 transition-all hover:shadow-2xl relative overflow-hidden group"
                      style={{
                        background: "linear-gradient(135deg, #6E0F0F 0%, #0F3D2E 50%, #6E0F0F 100%)",
                        boxShadow: "0 0 30px rgba(212, 163, 115, 0.4)",
                      }}
                    >
                      <span className="relative z-10">Complete My List</span>
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: "linear-gradient(90deg, transparent, rgba(212, 163, 115, 0.3), transparent)",
                        }}
                      />
                    </Button>
                  )}
                </div>
              )}

              {isComplete && (
                <div className="text-center space-y-6">
                  <WaxSeal />
                  <div className="space-y-3">
                    <p className="text-2xl font-serif font-bold" style={{ color: "#6E0F0F" }}>
                      Ho Ho Ho!
                    </p>
                    <p className="text-base font-serif leading-relaxed" style={{ color: "#0F3D2E" }}>
                      Your wishes have been sealed and sent to the North Pole!
                    </p>
                    <p className="text-sm font-serif italic" style={{ color: "#6E0F0F" }}>
                      Santa will review your list carefully.
                    </p>
                    <Button
                      onClick={resetList}
                      variant="outline"
                      className="mt-4 border-2 hover:text-white font-serif bg-transparent"
                      style={{ borderColor: "#6E0F0F", color: "#6E0F0F" }}
                    >
                      Make Another List
                    </Button>
                  </div>
                </div>
              )}
            </div>

            <div className="absolute -bottom-8 left-0 right-0 h-6 flex items-center justify-center z-20">
              <div
                className="w-full h-6 rounded-full shadow-xl relative"
                style={{
                  background:
                    "linear-gradient(180deg, #D4A373 0%, #8b6f47 30%, #6b5636 50%, #8b6f47 70%, #D4A373 100%)",
                  boxShadow: "0 4px 20px rgba(107, 86, 54, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
              >
                <div
                  className="absolute inset-0 rounded-full opacity-30"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.3) 50%, transparent 100%)",
                  }}
                />
              </div>
              <div
                className="absolute -left-4 w-12 h-8 rounded-full shadow-2xl relative overflow-hidden"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #D4A373 0%, #8b6f47 50%, #6b5636 100%)",
                  boxShadow: "0 4px 20px rgba(107, 86, 54, 0.6), inset -2px -2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  className="absolute top-1 left-1 w-4 h-4 rounded-full opacity-50"
                  style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)" }}
                />
              </div>
              <div
                className="absolute -right-4 w-12 h-8 rounded-full shadow-2xl relative overflow-hidden"
                style={{
                  background: "radial-gradient(circle at 30% 30%, #D4A373 0%, #8b6f47 50%, #6b5636 100%)",
                  boxShadow: "0 4px 20px rgba(107, 86, 54, 0.6), inset -2px -2px 8px rgba(0, 0, 0, 0.3)",
                }}
              >
                <div
                  className="absolute top-1 left-1 w-4 h-4 rounded-full opacity-50"
                  style={{ background: "radial-gradient(circle, rgba(255, 255, 255, 0.6), transparent)" }}
                />
              </div>
            </div>
          </div>

          <div
            className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 rounded-tl-lg shadow-lg"
            style={{
              borderColor: "#D4A373",
              boxShadow: "0 0 15px rgba(212, 163, 115, 0.4)",
            }}
          />
          <div
            className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 rounded-tr-lg shadow-lg"
            style={{
              borderColor: "#D4A373",
              boxShadow: "0 0 15px rgba(212, 163, 115, 0.4)",
            }}
          />
          <div
            className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 rounded-bl-lg shadow-lg"
            style={{
              borderColor: "#D4A373",
              boxShadow: "0 0 15px rgba(212, 163, 115, 0.4)",
            }}
          />
          <div
            className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 rounded-br-lg shadow-lg"
            style={{
              borderColor: "#D4A373",
              boxShadow: "0 0 15px rgba(212, 163, 115, 0.4)",
            }}
          />
        </div>
      </div>
    </>
  )
}
