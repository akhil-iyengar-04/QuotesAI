"use client"

import type React from "react"
import { cn } from "@/lib/utils"

type TColorProp =
  | `#${string}`
  | `rgba(${number},${number},${number},${number})`
  | (`#${string}` | `rgba(${number},${number},${number},${number})`)[]

interface ShineBorderProps {
  borderRadius?: number
  borderWidth?: number
  duration?: number
  color?: TColorProp
  textColor?: string
  className?: string
  children: React.ReactNode
}

export default function ShineBorder({
  borderRadius = 9999,
  borderWidth = 1,
  duration = 5,
  color = ["rgba(255,140,0,0.15)", "rgba(255,165,0,0.15)", "rgba(255,69,0,0.15)"],
  textColor = "text-foreground",
  className,
  children,
}: ShineBorderProps) {
  return (
    <div
      style={
        {
          "--border-radius": `${borderRadius}px`,
        } as React.CSSProperties
      }
      className={cn("relative inline-flex items-center rounded-[--border-radius] bg-background p-[1px]", className)}
    >
      <div
        style={
          {
            "--border-width": `${borderWidth}px`,
            "--border-radius": `${borderRadius}px`,
            "--shine-pulse-duration": `${duration}s`,
            "--background-radial-gradient": `radial-gradient(transparent,transparent, ${Array.isArray(color) ? color.join(",") : color},transparent,transparent)`,
          } as React.CSSProperties
        }
        className={`absolute inset-0 rounded-[--border-radius] before:absolute before:inset-[0] before:rounded-[--border-radius] before:p-[--border-width] before:bg-[length:300%_300%] before:[background-image:var(--background-radial-gradient)] motion-safe:before:animate-[shine-pulse_var(--shine-pulse-duration)_infinite_linear]`}
      ></div>
      <div className={`relative z-10 ${textColor} rounded-[calc(var(--border-radius)-1px)]`}>{children}</div>
    </div>
  )
}

