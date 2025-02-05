import Link from "next/link"
import dynamic from "next/dynamic"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import ShineBorder from "@/components/ui/shine-border"

const VideoPlayer = dynamic(() => import("@/components/video-player").then((mod) => mod.VideoPlayer), {
  loading: () => <div className="w-full max-w-[600px] h-[400px] rounded-xl bg-gray-200 animate-pulse" />,
  ssr: false,
})

export function HeroSection() {
  return (
    <section className="relative space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-hidden">
      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start gap-6">
          <ShineBorder
            className="inline-flex items-center rounded-full px-4 py-1.5 text-sm"
            color={["rgba(255,140,0,0.15)", "rgba(255,165,0,0.15)", "rgba(255,69,0,0.15)"]}
            textColor="text-foreground font-medium"
          >
            <span>Backed by Y Combinator</span>
          </ShineBorder>
          <div className="max-w-[640px] space-y-4">
            <h1 className="font-heading text-4xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight">
              Operand makes data-driven decisions for retail & e-commerce
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-[540px]">
              Top consumer brands use Operand to optimize pricing, discounts, and marketing—without waiting on analysts
              or consultants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="https://calendly.com/d/cqw5-msn-pf2/operand-intro"
                className={cn(buttonVariants({ size: "lg" }))}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
        <div className="relative hidden lg:flex items-end justify-center">
          <div className="w-full max-w-[600px] h-[400px] rounded-xl overflow-hidden border border-white/40 shadow-[0_0_20px_rgba(255,255,255,0.2)] backdrop-blur-sm">
            <VideoPlayer />
          </div>
        </div>
      </div>
    </section>
  )
}

