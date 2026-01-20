"use client"

import { useEffect, useState } from "react"
import { Package, Wrench, Gift, Laugh as Sleigh } from "lucide-react"

type WorkshopStage = "queued" | "crafting" | "packed" | "loaded"

type WorkshopWish = {
  id: number
  text: string
  stage: WorkshopStage
}

export function WorkshopTracker({ wishes }: { wishes: { id: number; text: string }[] }) {
  const [workshopWishes, setWorkshopWishes] = useState<WorkshopWish[]>([])

  useEffect(() => {
    const newWishes = wishes.filter((w) => !workshopWishes.find((ww) => ww.id === w.id))

    if (newWishes.length > 0) {
      setWorkshopWishes((prev) => [...prev, ...newWishes.map((w) => ({ ...w, stage: "queued" as WorkshopStage }))])

      newWishes.forEach((wish, index) => {
        setTimeout(
          () => {
            setWorkshopWishes((prev) =>
              prev.map((w) => (w.id === wish.id ? { ...w, stage: "crafting" as WorkshopStage } : w)),
            )
          },
          1000 + index * 500,
        )

        setTimeout(
          () => {
            setWorkshopWishes((prev) =>
              prev.map((w) => (w.id === wish.id ? { ...w, stage: "packed" as WorkshopStage } : w)),
            )
          },
          3000 + index * 500,
        )

        setTimeout(
          () => {
            setWorkshopWishes((prev) =>
              prev.map((w) => (w.id === wish.id ? { ...w, stage: "loaded" as WorkshopStage } : w)),
            )
          },
          5000 + index * 500,
        )
      })
    }
  }, [wishes])

  const getStageIcon = (stage: WorkshopStage) => {
    switch (stage) {
      case "queued":
        return <Package className="w-5 h-5" />
      case "crafting":
        return <Wrench className="w-5 h-5 animate-spin" />
      case "packed":
        return <Gift className="w-5 h-5" />
      case "loaded":
        return <Sleigh className="w-5 h-5" />
    }
  }

  const getStageColor = (stage: WorkshopStage) => {
    switch (stage) {
      case "queued":
        return "#6b7280"
      case "crafting":
        return "#f59e0b"
      case "packed":
        return "#10b981"
      case "loaded":
        return "#3b82f6"
    }
  }

  const getStageName = (stage: WorkshopStage) => {
    switch (stage) {
      case "queued":
        return "Queued"
      case "crafting":
        return "Being Crafted"
      case "packed":
        return "Packed"
      case "loaded":
        return "Loaded on Sleigh"
    }
  }

  if (workshopWishes.length === 0) return null

  return (
    <div className="mt-6 p-6 rounded-lg border-2 bg-white/80 backdrop-blur-sm" style={{ borderColor: "#92400e" }}>
      <div className="flex items-center gap-2 mb-4">
        <Wrench className="w-6 h-6" style={{ color: "#dc2626" }} />
        <h3 className="text-xl font-serif font-bold" style={{ color: "#16a34a" }}>
          North Pole Workshop Tracker
        </h3>
      </div>

      <div className="space-y-3">
        {workshopWishes.map((wish) => (
          <div
            key={wish.id}
            className="flex items-center gap-4 p-3 rounded-lg bg-white border"
            style={{ borderColor: "#92400e" }}
          >
            <div className="flex-shrink-0 flex items-center gap-2">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                style={{ backgroundColor: getStageColor(wish.stage), color: "white" }}
              >
                {getStageIcon(wish.stage)}
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-serif truncate" style={{ color: "#78350f" }}>
                {wish.text}
              </p>
              <p className="text-xs font-sans mt-1" style={{ color: getStageColor(wish.stage) }}>
                {getStageName(wish.stage)}
              </p>
            </div>

            {/* Conveyor belt progress */}
            <div className="flex-shrink-0 flex gap-1">
              {["queued", "crafting", "packed", "loaded"].map((stage, index) => (
                <div
                  key={stage}
                  className="w-2 h-2 rounded-full transition-all duration-500"
                  style={{
                    backgroundColor:
                      ["queued", "crafting", "packed", "loaded"].indexOf(wish.stage) >= index
                        ? getStageColor(stage as WorkshopStage)
                        : "#d1d5db",
                  }}
                />
              ))}
            </div>

            {/* Elf worker */}
            {wish.stage === "crafting" && <div className="flex-shrink-0 text-2xl animate-bounce">🧝</div>}
          </div>
        ))}
      </div>
    </div>
  )
}
