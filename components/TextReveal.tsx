"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface TextRevealProps {
  text: string
  lineBreaks: number[]
  textClassName?: string
}

const TextReveal: React.FC<TextRevealProps> = ({ text, lineBreaks, textClassName }) => {
  const [visibleLines, setVisibleLines] = useState<number>(0)
  const ref = useRef<HTMLDivElement>(null)

  const textLines = lineBreaks.reduce<string[]>((lines, breakIndex, i) => {
    const prevBreak = i === 0 ? 0 : lineBreaks[i - 1]
    lines.push(text.slice(prevBreak, breakIndex).trim())
    return lines
  }, [])
  textLines.push(text.slice(lineBreaks[lineBreaks.length - 1]).trim())

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let lineIndex = 0
          const interval = setInterval(() => {
            setVisibleLines((prev) => {
              if (prev < textLines.length) {
                lineIndex++
                return prev + 1
              } else {
                clearInterval(interval)
                return prev
              }
            })
          }, 400)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) observer.observe(ref.current)

    return () => {
      if (ref.current) observer.unobserve(ref.current)
    }
  }, [textLines])

  return (
    <div ref={ref} className="flex flex-col items-start justify-center bg-transparent space-y-2">
      {textLines.map((line, index) => (
        <span
          key={index}
          className={`transition-opacity duration-700 ease-out transform ${
            index < visibleLines ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          } ${textClassName} block text-left`}
          style={{ transitionDelay: `${index * 200}ms` }}
        >
          {line}
        </span>
      ))}
    </div>
  )
}

export default TextReveal

