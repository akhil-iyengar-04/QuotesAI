import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/Accordion"

const faqs = [
  {
    question: "What makes Operand different from other e-commerce analytics tools?",
    answer:
      "Operand is an AI-powered data analyst that not only provides insights but also recommends actionable strategies tailored to your specific e-commerce store.",
  },
  {
    question: "How quickly can I see results after implementing Operand?",
    answer:
      "Many of our clients see significant improvements within the first month of using Operand, with continued optimization over time.",
  },
  {
    question: "Is Operand suitable for small e-commerce businesses?",
    answer:
      "Operand is designed to scale with your business, providing valuable insights whether you're just starting out or managing a large online store.",
  },
  {
    question: "How does Operand ensure the security of my store's data?",
    answer:
      "We take data security seriously. Operand uses industry-standard encryption and security protocols to protect your data, and we never share your information with third parties.",
  },
  {
    question: "How do you keep my data secure?",
    answer:
      "We take data security seriously. While we're early-stage, we securely store data using trusted cloud providers and rely on industry-standard APIs, including Shopify's, with top-grade security. Plus, we sign NDAs to guarantee your data remains private.",
  },
]

export function FAQSection() {
  return (
    <div>
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}

