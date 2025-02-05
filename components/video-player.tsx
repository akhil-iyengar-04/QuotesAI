"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export function VideoPlayer() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className="relative rounded-xl overflow-hidden h-full">
      <div className="absolute inset-0 rounded-xl border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-sm z-10 pointer-events-none" />
      {isClient ? (
        <video
          className="w-full h-full rounded-[inherit] object-cover"
          controls
          preload="none"
          poster="/images/video-thumbnail.jpg"
        >
          <source src="/video/operand-overview-akhil-short.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <Image
          src="/images/video-thumbnail.jpg"
          alt="Video thumbnail"
          layout="fill"
          objectFit="cover"
          className="rounded-[inherit]"
        />
      )}
    </div>
  )
}

