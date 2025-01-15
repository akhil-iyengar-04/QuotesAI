import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

export function FAQSection() {
  return (
    // Remove container and background classes here. Just return the FAQ content.
    <div>
      <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl mb-4">
        Frequently Asked Questions
      </h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>How do you keep my data secure?</AccordionTrigger>
          <AccordionContent>
            We take data security seriously. While we&apos;re early-stage, we
            securely store data using trusted cloud providers and rely on
            industry-standard APIs, including Shopify&apos;s, with top-grade
            security. Plus, we sign NDAs to guarantee your data remains private.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger>What&apos;s required to get started?</AccordionTrigger>
          <AccordionContent>
            Onboarding is simple: we just need a single 15-minute call to
            securely connect your data and a signed NDA. After that, we handle
            the heavy lifting while you focus on growing your store.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger>
            How will I know if Operand is working for my store?
          </AccordionTrigger>
          <AccordionContent>
            We use clear, industry-standard metrics like revenue uplift,
            improved conversion rates, and increased customer re-engagement.
            Results are shared transparently, and we work closely with you to
            ensure success.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger>How much does Operand cost?</AccordionTrigger>
          <AccordionContent>
            We offer a flexible monthly pricing model tailored to your needs. 
            Costs depend on your store&apos;s size, chosen service offerings, frequency of data tasks, 
            and any additional implementation requirements. Plus, we stand by our work with a 
            money-back guarantee if you&apos;re not satisfied.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Does Operand work for stores like mine?</AccordionTrigger>
          <AccordionContent>
            Operand supports stores of all sizes, from 1M to 100M GMV. We&apos;re
            experienced in handling diverse data infrastructures and workflows,
            tailoring our solutions to your store&apos;s unique needs.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger>
            Will Operand work with my existing data?
          </AccordionTrigger>
          <AccordionContent>
            Operand integrates seamlessly with Shopify, Klaviyo, Amazon,
            Walmart, Etsy, BigQuery, Excel files, Google/Meta Ads, CRMs, and more. Need
            custom integrations? We&apos;re happy to build them for you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-7">
          <AccordionTrigger>How does Operand fit into my daily workflow?</AccordionTrigger>
          <AccordionContent>
            Simply email us your data questions or tasks as often as you like. 
            We use our AI data analyst to perform the requested analysis and send you our final recommendations in whatever format you prefer within 24 hours.
            If needed, we can also automate the implementation of these recommendations.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
