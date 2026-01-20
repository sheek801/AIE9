"use client"

import { useEffect, useState } from "react"
import { Sparkles } from "lucide-react"

type Theme = "default" | "snow" | "aurora" | "gingerbread"

export function SpiritMeter({
  wishCount,
  onThemeChange,
}: {
  wishCount: number
  onThemeChange: (theme: Theme) => void
}) {
  const [spirit, setSpirit] = useState(0)
  const [unlockedThemes, setUnlockedThemes] = useState<Theme[]>(["default"])
  const [activeTheme, setActiveTheme] = useState<Theme>("default")

  useEffect(() => {
    const newSpirit = Math.min(wishCount * 20, 100)
    setSpirit(newSpirit)

    if (newSpirit >= 20 && !unlockedThemes.includes("snow")) {
      setUnlockedThemes((prev) => [...prev, "snow"])
    }
    if (newSpirit >= 60 && !unlockedThemes.includes("aurora")) {
      setUnlockedThemes((prev) => [...prev, "aurora"])
    }
    if (newSpirit >= 100 && !unlockedThemes.includes("gingerbread")) {
      setUnlockedThemes((prev) => [...prev, "gingerbread"])
    }
  }, [wishCount, unlockedThemes])

  const handleThemeChange = (theme: Theme) => {
    setActiveTheme(theme)
    onThemeChange(theme)
  }

  const getCharacter = () => {
    if (spirit >= 100) return "🎅"
    if (spirit >= 60) return "🦌"
    if (spirit >= 20) return "⛄"
    return "🎄"
  }

  const themes = [
    { id: "default" as Theme, name: "Classic", icon: "🎄", required: 0 },
    { id: "snow" as Theme, name: "Snow", icon: "❄️", required: 20 },
    { id: "aurora" as Theme, name: "Aurora", icon: "✨", required: 60 },
    { id: "gingerbread" as Theme, name: "Gingerbread", icon: "🍪", required: 100 },
  ]

  return (
    <div
      className="mb-6 p-6 rounded-lg border-2 backdrop-blur-sm relative overflow-hidden"
      style={{
        borderColor: "#D4A373",
        background: "linear-gradient(135deg, rgba(246, 240, 228, 0.6) 0%, rgba(212, 163, 115, 0.2) 100%)",
        boxShadow: "0 0 30px rgba(212, 163, 115, 0.3), inset 0 0 30px rgba(212, 163, 115, 0.1)",
      }}
    >
      {/* Gold shimmer overlay */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          background: "linear-gradient(45deg, transparent 30%, rgba(212, 163, 115, 0.4) 50%, transparent 70%)",
          backgroundSize: "200% 200%",
          animation: "shimmer 3s infinite",
        }}
      />

      <div className="flex items-center justify-between mb-4 relative z-10">
        <div className="flex items-center gap-2">
          <h3
            className="text-xl font-serif font-bold"
            style={{
              color: "#6E0F0F",
              textShadow: "0 1px 4px rgba(212, 163, 115, 0.3)",
            }}
          >
            Christmas Spirit Meter
          </h3>
        </div>
        <div className="text-3xl animate-bounce drop-shadow-lg">{getCharacter()}</div>
      </div>

      <div
        className="relative h-8 rounded-full overflow-hidden border-2 shadow-inner"
        style={{
          borderColor: "#D4A373",
          background: "linear-gradient(to bottom, rgba(212, 163, 115, 0.2), rgba(246, 240, 228, 0.8))",
          boxShadow: "inset 0 2px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div
          className="h-full transition-all duration-1000 ease-out relative"
          style={{
            width: `${spirit}%`,
            background: "linear-gradient(90deg, #6E0F0F 0%, #D4A373 50%, #0F3D2E 100%)",
            boxShadow: "0 0 20px rgba(212, 163, 115, 0.6)",
          }}
        >
          {spirit > 0 && (
            <>
              <Sparkles
                className="absolute top-1/2 left-1/4 -translate-y-1/2 w-4 h-4 text-yellow-200 animate-pulse drop-shadow-lg"
                style={{ animationDelay: "0s" }}
              />
              <Sparkles
                className="absolute top-1/2 left-1/2 -translate-y-1/2 w-4 h-4 text-yellow-200 animate-pulse drop-shadow-lg"
                style={{ animationDelay: "0.3s" }}
              />
              <Sparkles
                className="absolute top-1/2 left-3/4 -translate-y-1/2 w-4 h-4 text-yellow-200 animate-pulse drop-shadow-lg"
                style={{ animationDelay: "0.6s" }}
              />
            </>
          )}
        </div>
        <span
          className="absolute inset-0 flex items-center justify-center text-sm font-bold drop-shadow-md"
          style={{
            color: spirit > 50 ? "white" : "#0F3D2E",
            textShadow: spirit > 50 ? "0 1px 3px rgba(0, 0, 0, 0.5)" : "0 1px 3px rgba(255, 255, 255, 0.8)",
          }}
        >
          {spirit}% Spirit
        </span>
      </div>

      <div className="mt-4 relative z-10">
        <p className="text-xs font-sans mb-2" style={{ color: "#6E0F0F" }}>
          Unlocked Themes:
        </p>
        <div className="flex gap-2 flex-wrap">
          {themes.map((theme) => {
            const isUnlocked = unlockedThemes.includes(theme.id)
            const isActive = activeTheme === theme.id

            return (
              <button
                key={theme.id}
                onClick={() => isUnlocked && handleThemeChange(theme.id)}
                disabled={!isUnlocked}
                className={`px-4 py-2 rounded-full text-sm font-serif border-2 transition-all duration-300 ${
                  isActive ? "scale-110" : ""
                } ${!isUnlocked ? "opacity-30 cursor-not-allowed" : "hover:scale-105 cursor-pointer"}`}
                style={{
                  borderColor: isActive ? "#D4A373" : isUnlocked ? "#D4A373" : "#ccc",
                  backgroundColor: isUnlocked ? "#F6F0E4" : "#e5e7eb",
                  color: isUnlocked ? "#0F3D2E" : "#6b7280",
                  boxShadow: isActive
                    ? "0 0 20px rgba(212, 163, 115, 0.6)"
                    : isUnlocked
                      ? "0 2px 8px rgba(212, 163, 115, 0.2)"
                      : "none",
                }}
              >
                <span className="mr-1">{theme.icon}</span>
                {theme.name}
                {!isUnlocked && ` (${theme.required}%)`}
              </button>
            )
          })}
        </div>
      </div>

      {spirit >= 20 && spirit < 60 && (
        <p className="text-sm font-serif italic mt-3 animate-pulse" style={{ color: "#0F3D2E" }}>
          Great start! Keep going to unlock more themes!
        </p>
      )}
      {spirit >= 60 && spirit < 100 && (
        <p className="text-sm font-serif italic mt-3 animate-pulse" style={{ color: "#0F3D2E" }}>
          Amazing! You're spreading Christmas cheer everywhere!
        </p>
      )}
      {spirit >= 100 && (
        <p className="text-sm font-serif italic mt-3 animate-pulse" style={{ color: "#6E0F0F" }}>
          Maximum Christmas Spirit achieved! Santa is very impressed! 🎅
        </p>
      )}
    </div>
  )
}
