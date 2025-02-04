import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function FlexibilitySection() {
  return (
    <section id="flexibility" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Tailored Solutions for Your Unique Needs
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Every store is unique. We deploy our AI data analyst to address and solve your specific problems efficiently.
        </p>
        <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "mt-4")}>
          Let's Discuss Your Needs
        </Link>
      </div>
    </section>
  )
}

