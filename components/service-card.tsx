"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  flagship?: boolean
  isCustom?: boolean
  icon: string
}

export function ServiceCard({ title, description, flagship, isCustom, icon }: ServiceCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        flagship && "border-primary",
        isCustom && "border-dashed",
      )}
    >
      <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex items-center gap-3">
          <Image
            src={icon || "/placeholder.svg"}
            alt={`${title} icon`}
            width={24}
            height={24}
            className="flex-shrink-0"
          />
          <h3 className={cn("text-base font-medium", flagship && "text-primary")}>{title}</h3>
        </div>
        <ChevronDown className={cn("h-5 w-5 transition-transform", isOpen && "transform rotate-180")} />
      </div>
      {isOpen && (
        <div className="px-4 pb-4 pl-[3.25rem]">
          <p className="text-sm text-muted-foreground">
            {description}
            {isCustom && (
              <Link href="https://calendly.com/d/cmzk-vyr-2s8" className="text-primary hover:underline ml-1">
                Book a demo
              </Link>
            )}
          </p>
        </div>
      )}
    </div>
  )
}

