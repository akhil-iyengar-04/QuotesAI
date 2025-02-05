"use client"

import dynamic from "next/dynamic"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Plus } from "lucide-react"
import { useState, useEffect } from "react"

const SpacetimeCurveAnimation = dynamic(
  () => import("@/components/spacetime-curve").then((mod) => mod.SpacetimeCurveAnimation),
  { ssr: false, loading: () => <div className="w-full h-full bg-gray-800 animate-pulse rounded-xl" /> },
)

const integrations = [
  {
    name: "Shopify",
    logo: "/images/logos/shopify-logo.svg",
  },
  {
    name: "Amazon",
    logo: "/images/logos/amazon-logo.svg",
  },
  {
    name: "Salesforce",
    logo: "/images/logos/salesforce-logo.svg",
  },
  {
    name: "Google Analytics",
    logo: "/images/logos/google-analytics-logo.svg",
  },
  {
    name: "Google Ads",
    logo: "/images/logos/google-ads-logo.svg",
  },
  {
    name: "Meta",
    logo: "/images/logos/meta-logo.svg",
  },
  {
    name: "Excel",
    logo: "/images/logos/excel-icon.svg",
  },
]

export function DataManagementSection() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <section className="container py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold text-foreground uppercase tracking-wide">Simplifying Data Management</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
              Connects to your data once, understands it forever.
            </h2>
            <div className="text-base text-muted-foreground leading-relaxed">
              <p>Operand unifies all your data and automatically catches errors.</p>
              <p>No more messy spreadsheets or missing information.</p>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4 sm:gap-6 max-w-[400px]">
            {integrations.map((integration) => (
              <Card
                key={integration.name}
                className="aspect-square p-2 sm:p-3 flex items-center justify-center bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-colors border border-white/40"
              >
                <Image
                  src={integration.logo || "/placeholder.svg"}
                  alt={`${integration.name} logo`}
                  width={32}
                  height={32}
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                />
              </Card>
            ))}
            <Card className="aspect-square p-2 sm:p-3 flex items-center justify-center bg-background/50 backdrop-blur-sm hover:bg-accent/50 transition-colors border border-white/40">
              <Plus className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
            </Card>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px]">{isClient && <SpacetimeCurveAnimation />}</div>
      </div>
    </section>
  )
}

