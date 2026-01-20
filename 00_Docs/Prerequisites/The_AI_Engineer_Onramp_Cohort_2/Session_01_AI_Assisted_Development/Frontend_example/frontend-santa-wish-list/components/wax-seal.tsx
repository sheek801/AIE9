"use client"

import { useEffect, useState } from "react"

export function WaxSeal() {
  const [isStamping, setIsStamping] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsStamping(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative inline-flex items-center justify-center">
      <div
        className={`relative w-32 h-32 rounded-full shadow-2xl transition-all duration-1000 ${
          isStamping ? "scale-0 rotate-180" : "scale-100 rotate-0"
        }`}
        style={{
          background: "radial-gradient(circle at 30% 30%, #c41e3a 0%, #8b0000 60%, #5a0000 100%)",
          boxShadow:
            "0 10px 40px rgba(139, 0, 0, 0.5), inset 0 -2px 8px rgba(0, 0, 0, 0.3), 0 0 30px rgba(212, 163, 115, 0.3)",
        }}
      >
        {/* Wax texture */}
        <div className="absolute inset-0 rounded-full bg-[url('/wax-texture.jpg')] opacity-20" />

        {/* Enhanced seal with gold shimmer */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center relative">
            <div
              className="absolute inset-0 blur-sm opacity-30"
              style={{ background: "radial-gradient(circle, rgba(212, 163, 115, 0.5), transparent)" }}
            />
            <div className="text-4xl mb-1 relative drop-shadow-lg">🎅</div>
            <div
              className="text-xs font-serif font-bold tracking-wider relative"
              style={{
                color: "#f4e8d8",
                textShadow: "0 1px 3px rgba(0, 0, 0, 0.5)",
              }}
            >
              SANTA
            </div>
            <div
              className="text-[8px] font-serif relative"
              style={{
                color: "#f4e8d8",
                textShadow: "0 1px 2px rgba(0, 0, 0, 0.5)",
              }}
            >
              NORTH POLE
            </div>
          </div>
        </div>

        {/* Wax drips with gold shimmer */}
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-20 h-6 rounded-b-full blur-sm"
          style={{
            background: "linear-gradient(to bottom, #8b0000 0%, rgba(212, 163, 115, 0.1) 50%, transparent 100%)",
          }}
        />
      </div>

      {/* Stamp shadow while stamping */}
      {isStamping && <div className="absolute inset-0 bg-[#2a1810] rounded-full blur-xl opacity-50 animate-pulse" />}
    </div>
  )
}
