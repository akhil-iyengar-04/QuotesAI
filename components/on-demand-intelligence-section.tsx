import { ServiceCard } from "@/components/service-card"
import { TaskAnalysis } from "@/components/task-analysis"
import { MessageCircle, Mail, Globe } from "lucide-react"

const services = [
  {
    title: "Pricing & Promotion Optimization",
    description:
      "Operand factors in competitor pricing, ad performance, inventory levels, and demand trends to recommend strategic price changes and promotions that maximize revenue and profitability.",
    flagship: true,
    icon: "/images/icons/price-icon.svg",
  },
  {
    title: "Ad Spend Management",
    description:
      "Operand continuously analyzes ad performance, customer behavior, and sales data to determine the most effective budget allocation—ensuring your marketing dollars are spent where they generate the highest return.",
    icon: "/images/icons/ad-icon.svg",
  },
  {
    title: "Customer Engagement",
    description:
      "Operand clusters customers based on purchase behavior, interactions, and lifetime value, helping you personalize marketing, optimize retention, and improve targeting strategies with data-backed precision.",
    icon: "/images/icons/customer-icon.svg",
  },
  {
    title: "Need a Custom Solution?",
    description:
      "We're expanding our capabilities—if you have a specific data-driven challenge in retail or e-commerce, talk to us to how Operand can help. ",
    isCustom: true,
    icon: "/images/icons/question-circle-icon.svg",
  },
]

const communicationChannels = [
  { name: "Slack", icon: MessageCircle },
  { name: "Email", icon: Mail },
  { name: "Operand Platform", icon: Globe },
]

export function OnDemandIntelligenceSection() {
  return (
    <section id="on-demand-intelligence" className="container py-16 lg:py-24">
      <div className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-4">
            <p className="text-xs font-bold text-foreground uppercase tracking-wide">Your own data consultant</p>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight">
              Ask a business question, get a rigorous analysis.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              Operand interprets your question, analyzes your data, and delivers a deeply considered
              recommendation—grounded in operational understanding and real numbers.
            </p>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-medium text-foreground">Ask your questions through:</p>
            <div className="flex flex-wrap gap-4">
              {communicationChannels.map((channel) => (
                <div key={channel.name} className="flex items-center space-x-2 bg-secondary rounded-full px-4 py-2">
                  <channel.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{channel.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <TaskAnalysis />
        </div>
      </div>
    </section>
  )
}

