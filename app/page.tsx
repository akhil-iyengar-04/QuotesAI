import { HeroSection } from "@/components/hero-section"
import { DataManagementSection } from "@/components/data-management-section"
import { OnDemandIntelligenceSection } from "@/components/on-demand-intelligence-section"
import { ExpertReviewSection } from "@/components/expert-review-section"
import { FAQSection } from "@/components/FAQSection"
import { CTASection } from "@/components/cta-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <DataManagementSection />
      <OnDemandIntelligenceSection />
      <ExpertReviewSection />
      <section className="container py-8 md:py-12 lg:py-24">
        <FAQSection />
      </section>
      <CTASection />
    </>
  )
}

