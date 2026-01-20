"use client"

import { useEffect, useState } from "react"

type Snowflake = {
  id: number
  left: number
  animationDuration: number
  size: number
  delay: number
  rotation: number
  swayDistance: number
  isBig: boolean
  isExploding: boolean
}

interface SnowfallProps {
  spiritLevel?: number
  triggerExplosion?: number
}

export function Snowfall({ spiritLevel = 0, triggerExplosion = 0 }: SnowfallProps) {
  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([])
  const [explosionFlakes, setExplosionFlakes] = useState<Snowflake[]>([])

  const speedMultiplier = 1 + spiritLevel * 0.5

  useEffect(() => {
    const baseCount = 80
    const bigFlakeChance = 0.1 // 10% chance for big snowflakes

    const flakes: Snowflake[] = Array.from({ length: baseCount }, (_, i) => {
      const isBig = Math.random() < bigFlakeChance

      return {
        id: i,
        left: Math.random() * 100,
        animationDuration: isBig ? 15 + Math.random() * 10 : 5 + Math.random() * 15,
        size: isBig ? 12 + Math.random() * 8 : 4 + Math.random() * 8,
        delay: Math.random() * 10,
        rotation: Math.random() * 360,
        swayDistance: isBig ? 10 + Math.random() * 20 : 20 + Math.random() * 40,
        isBig,
        isExploding: false,
      }
    })
    setSnowflakes(flakes)
  }, [])

  useEffect(() => {
    if (triggerExplosion === 0) return

    const explosionCount = 30
    const newExplosionFlakes: Snowflake[] = Array.from({ length: explosionCount }, (_, i) => {
      const angle = (Math.PI * 2 * i) / explosionCount
      const distance = 20 + Math.random() * 30

      return {
        id: Date.now() + i,
        left: 50 + Math.cos(angle) * distance,
        animationDuration: 2 + Math.random() * 2,
        size: 6 + Math.random() * 6,
        delay: 0,
        rotation: Math.random() * 360,
        swayDistance: 0,
        isBig: false,
        isExploding: true,
      }
    })

    setExplosionFlakes(newExplosionFlakes)

    setTimeout(() => {
      setExplosionFlakes([])
    }, 4000)
  }, [triggerExplosion])

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute top-0 animate-fall-sway"
          style={{
            left: `${flake.left}%`,
            animationDuration: `${flake.animationDuration / speedMultiplier}s`,
            animationDelay: `${flake.delay}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
            transform: flake.isBig ? "translateZ(20px)" : "translateZ(0)",
            // @ts-ignore
            "--sway-distance": `${flake.swayDistance}px`,
          }}
        >
          <div
            className={`w-full h-full bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)] animate-spin-slow ${
              flake.isBig ? "opacity-70" : "opacity-90"
            }`}
            style={{
              animationDuration: flake.isBig ? `${8 + Math.random() * 4}s` : `${3 + Math.random() * 3}s`,
              transform: `rotate(${flake.rotation}deg)`,
              boxShadow: flake.isBig
                ? "0 0 16px rgba(255,255,255,0.9), 0 0 24px rgba(212,163,115,0.3)"
                : "0 0 8px rgba(255,255,255,0.8)",
            }}
          />
        </div>
      ))}

      {explosionFlakes.map((flake) => (
        <div
          key={flake.id}
          className="absolute animate-explode"
          style={{
            left: `${flake.left}%`,
            top: "50%",
            animationDuration: `${flake.animationDuration}s`,
            width: `${flake.size}px`,
            height: `${flake.size}px`,
          }}
        >
          <div
            className="w-full h-full bg-white rounded-full opacity-90 shadow-[0_0_12px_rgba(255,255,255,0.9)]"
            style={{
              transform: `rotate(${flake.rotation}deg)`,
              boxShadow: "0 0 12px rgba(255,255,255,0.9), 0 0 20px rgba(212,163,115,0.4)",
            }}
          />
        </div>
      ))}

      <style jsx>{`
        @keyframes fall-sway {
          0% {
            transform: translateY(-10px) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(var(--sway-distance)) rotate(180deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) translateX(0) rotate(360deg);
            opacity: 0;
          }
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes explode {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 1;
          }
          50% {
            transform: translate(calc((var(--tx, 0) - 50) * 2vw), calc((var(--ty, 0) - 50) * 2vh)) scale(1.5);
            opacity: 0.8;
          }
          100% {
            transform: translate(calc((var(--tx, 0) - 50) * 3vw), calc((var(--ty, 0) - 50) * 3vh + 100px)) scale(0.5);
            opacity: 0;
          }
        }
        .animate-fall-sway {
          animation: fall-sway linear infinite;
        }
        .animate-spin-slow {
          animation: spin-slow linear infinite;
        }
        .animate-explode {
          animation: explode ease-out forwards;
        }
      `}</style>
    </div>
  )
}
