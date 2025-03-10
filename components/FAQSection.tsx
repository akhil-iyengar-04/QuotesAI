import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion"

const faqs = [
  {
    question: "How is Operand different from hiring a consultant or analyst?",
    answer:
      "Operand provides expert-level data analysis, without the high costs or delays of traditional consulting. Instead of waiting weeks for reports, you get rigorous, data-backed recommendations that help you act faster and drive measurable results.",
  },
  {
    question: "What types of data sources can Operand connect to?",
    answer:
      "Operand integrates with Shopify, Amazon, Google Ads, Meta Ads, ERP systems, inventory management tools, and more. It unifies all your data into a single system, ensuring a complete, real-time understanding of your business.",
  },
  {
    question: "How does Operand ensure its recommendations are accurate?",
    answer:
      "Operand combines advanced data analysis with expert review before delivering final recommendations. This ensures that every insight is actionable, precise, and aligned with your business reality.",
  },
  {
    question: "How difficult is it to set up Operand?",
    answer:
      "Operand connects to your data sources in minutes with no technical setup required on your end. Once integrated, it continuously refines its understanding of your business without requiring manual input.",
  },
  {
    question: "How do I receive Operand's recommendations?",
    answer:
      "Final recommendations are delivered in structured reports or Excel files, ensuring they are easy to review, share, and implement in your existing workflow.",
  },
  {
    question: "How quickly can I see results after implementing Operand?",
    answer:
      "Most businesses see measurable improvements within the first month. Operand continuously optimizes over time for even greater long-term impact.",
  },
  {
    question: "How does Operand keep my data secure?",
    answer:
      "Operand follows strict security protocols, including encryption and compliance with industry best practices. We use industry-trusted APIs and never share your data with third parties.",
  },
  {
    question: "How much does Operand cost?",
    answer:
      "Operand operates on a flat monthly fee, with tiered pricing based on business size and selected service offerings. Contact us for a custom quote tailored to your needs.",
  },
  {
    question: "What support do you offer for implementation and ongoing use?",
    answer:
      "We provide dedicated support to ensure smooth onboarding and ongoing success. Whether you need help interpreting recommendations or refining your strategy, our team is available to assist.",
  },
]

export function FAQSection() {
  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl text-center mb-8">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

