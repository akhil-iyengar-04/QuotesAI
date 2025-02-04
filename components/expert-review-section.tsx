"use client"

import { motion } from "framer-motion"
import { CheckCircle, Users, FileText, ArrowRight } from "lucide-react"

const ProcessStep = ({
  icon: Icon,
  title,
  description,
  delay,
}: {
  icon: typeof CheckCircle
  title: string
  description: string
  delay: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="relative flex items-center space-x-4 p-4"
  >
    <div className="relative flex-shrink-0">
      <div className="p-2 rounded-full border border-white/10 backdrop-blur-sm">
        <Icon className="w-6 h-6 text-white" />
      </div>
    </div>
    <div>
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{description}</p>
    </div>
  </motion.div>
)

const CaseStudy = ({ title, description, index }: { title: string; description: string; index: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="mb-8 last:mb-0 relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-gradient-to-b before:from-primary/50 before:to-primary/10"
  >
    <div className="absolute left-0 top-0 w-4 h-4 bg-primary rounded-full transform -translate-x-[7px]" />
    <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
    <p className="text-sm text-muted-foreground">{description}</p>
  </motion.div>
)

export function ExpertReviewSection() {
  return (
    <section className="container py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-16">
        {/* Left side - Text content and Process */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold text-foreground uppercase tracking-wide">Expert-Reviewed Recommendations</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
              Accurate analyses, delivered how you need.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Every Operand recommendation is reviewed by human experts to ensure accuracy and reliability. Final
              analyses are provided in structured reports or Excel files, ready for your team to use.
            </p>
          </div>

          {/* Process steps */}
          <div className="space-y-4 mt-8">
            <ProcessStep
              icon={CheckCircle}
              title="AI Analysis"
              description="Advanced algorithms process your data and generate initial insights"
              delay={0}
            />
            <ProcessStep
              icon={Users}
              title="Expert Review"
              description="Experienced analysts validate and refine the recommendations"
              delay={0.2}
            />
            <ProcessStep
              icon={FileText}
              title="Delivery"
              description="Receive polished reports in your preferred format"
              delay={0.4}
            />
          </div>
        </div>

        {/* Right side - Case Studies */}
        <div className="w-full lg:w-1/2 lg:pt-16">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <span className="mr-2">Case Studies</span>
            <ArrowRight className="w-5 h-5 text-primary" />
          </h3>
          <div className="space-y-8">
            <CaseStudy
              index={0}
              title="6 Figures in Average Savings Across Sales Channels"
              description="Evaluated pricing patterns, seasonality effects & product-specific costs across D2C and wholesale channels to recommend pricing adjustments, discount campaigns, and product bundling strategies."
            />
            <CaseStudy
              index={1}
              title="4x Revenue & 3x Conversion Rates on Marketing Campaigns"
              description="Analyzed customer purchase history to create high value segments for subscription & promotion sales, provide personalized product recommendations, and write customer-specific marketing content."
            />
            <CaseStudy
              index={2}
              title="20+ Hours Saved on Weekly Ad Reporting"
              description="Automated analysis of click-through rates, conversion rates, and cost-per-acquisition metrics across ad channels, creating regular reports for marketing teams to optimize ad spend across channels, regions, and campaigns."
            />
          </div>
        </div>
      </div>
    </section>
  )
}

