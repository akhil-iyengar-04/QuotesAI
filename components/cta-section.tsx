import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="container py-16 lg:py-24">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          A New Standard for Data-Driven Decisions
        </h2>
        <p className="text-lg text-muted-foreground">
          The best brands make decisions with clarity, not guesswork. Operand helps you turn complex data into real
          strategy—see how it works.
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link href="https://calendly.com/akhiliyengar2004/operand">Book a Demo</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

