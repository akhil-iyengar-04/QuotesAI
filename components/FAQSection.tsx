import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/Accordion";
  import TextReveal from "@/components/TextReveal";
  
  export function FAQSection() {
    return (
      <section
        id="faq"
        className="container py-8 md:py-12 lg:py-16 bg-slate-50 dark:bg-transparent"
      >
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[64rem]">
          {/* FAQ Section */}
          <div>
            <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {/* Data Security */}
              <AccordionItem value="item-1">
                <AccordionTrigger>How do you keep my data secure?</AccordionTrigger>
                <AccordionContent>
                  We take data security seriously. While we&apos;re early-stage, we
                  securely store data using trusted cloud providers like BigQuery
                  and rely on industry-standard APIs, including Shopify&apos;s, with
                  top-grade security. Plus, we sign NDAs to guarantee your data
                  remains private.
                </AccordionContent>
              </AccordionItem>
  
              {/* Onboarding */}
              <AccordionItem value="item-2">
                <AccordionTrigger>What&apos;s required to get started?</AccordionTrigger>
                <AccordionContent>
                  Onboarding is simple: we just need a single 15-minute call to
                  securely connect your data and a signed NDA. After that, we
                  handle the heavy lifting while you focus on growing your store.
                </AccordionContent>
              </AccordionItem>
  
              {/* Measuring Success */}
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  How will I know if Operand is working for my store?
                </AccordionTrigger>
                <AccordionContent>
                  We use clear, industry-standard metrics like revenue uplift,
                  improved conversion rates, and increased customer
                  re-engagement. Results are shared transparently, and we work
                  closely with you to ensure success.
                </AccordionContent>
              </AccordionItem>
  
              {/* Cost */}
              <AccordionItem value="item-4">
                <AccordionTrigger>How much does Operand cost?</AccordionTrigger>
                <AccordionContent>
                  During the holiday season, we&apos;re offering results-based pricing:
                  no upfront fees—you only pay if we achieve the agreed-upon
                  results.
                </AccordionContent>
              </AccordionItem>
  
              {/* Scalability */}
              <AccordionItem value="item-5">
                <AccordionTrigger>Does Operand work for stores like mine?</AccordionTrigger>
                <AccordionContent>
                  Operand supports stores of all sizes, from 1M to 100M GMV. We&apos;re
                  experienced in handling diverse data infrastructures and
                  workflows, tailoring our solutions to your store&apos;s unique needs.
                </AccordionContent>
              </AccordionItem>
  
              {/* Integrations */}
              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Will Operand fit into my existing workflows?
                </AccordionTrigger>
                <AccordionContent>
                  Operand integrates seamlessly with Shopify, Klaviyo, Amazon,
                  Walmart, Etsy, BigQuery, CSVs, Google/Meta Ads, and more. Need
                  custom integrations? We&apos;re happy to build them for you.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
  
          {/* Word Reveal */}
          <div className="flex items-center justify-center">
            <TextReveal text="Operand: Your Partner in Store Growth." />
          </div>
        </div>
      </section>
    );
  }
  