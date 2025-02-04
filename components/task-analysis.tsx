import Image from "next/image"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronDown } from "lucide-react"

export function TaskAnalysis() {
  return (
    <div className="mx-auto w-full max-w-4xl">
      <div className="mb-4 flex justify-between">
        <h2 className="text-lg font-medium text-muted-foreground">Current Task</h2>
        <h2 className="text-lg font-medium text-muted-foreground">ETA: 2 hours</h2>
      </div>

      <div className="flex items-center justify-center space-x-3 rounded-lg border border-border bg-card p-4">
        <Image src="/images/icons/gmail-icon.svg" alt="Gmail Icon" width={24} height={24} className="h-6 w-6" />
        <span className="text-lg font-medium">Setting price and discount strategy for February</span>
      </div>

      <div className="mt-6 flex justify-center space-x-4">
        <div className="h-3 w-1/3 bg-primary"></div>
        <div className="h-3 w-1/3 bg-primary"></div>
        <div className="h-3 w-1/3 border border-white bg-background"></div>
      </div>

      <div className="mt-8 space-y-4">
        <Accordion type="single" defaultValue="analysis" collapsible>
          <AccordionItem
            value="understanding"
            className="mb-4 overflow-hidden rounded-lg border-2 border-border bg-card"
          >
            <AccordionTrigger className="px-6 py-4 text-base font-medium hover:no-underline">
              {/* Update 1 */}
              <div className="flex items-center justify-between px-6 py-4 text-base font-medium">
                <span>Understanding Task</span>
                <ChevronDown className="h-4 w-4 shrink-0" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t border-border bg-background px-6 py-4">
              {/* Content will be added later */}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="analysis"
            className="overflow-hidden rounded-lg border-2 border-border bg-card relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-white/50 before:animate-border-beam"
          >
            <AccordionTrigger className="px-6 py-4 text-base font-medium hover:no-underline">
              {/* Update 2 */}
              <div className="flex items-center justify-between px-6 py-4 text-base font-medium">
                <span>Performing Analysis</span>
                <ChevronDown className="h-4 w-4 shrink-0 transform rotate-180" />
              </div>
            </AccordionTrigger>
            <AccordionContent className="border-t border-border bg-background px-6 py-4">
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">[Update – January 26, 9:13 AM]</div>
                  <p className="text-sm text-muted-foreground">
                    We've just integrated the latest competitor pricing updates and ad performance signals for the last
                    week of January. Early comparisons show a slight undercut from two major competitors, prompting us
                    to reassess both our baseline prices and ongoing ad spend efficiency.
                  </p>
                </div>

                <div className="relative aspect-[16/9] w-full max-w-sm mx-auto overflow-hidden rounded-lg border-2 border-white shadow-lg">
                  <Image
                    src="/chart.svg"
                    alt="Discount Level vs Projected Net Revenue Chart"
                    fill
                    className="object-contain"
                  />
                </div>

                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">[Update – January 26, 9:17 AM]</div>
                  <p className="text-sm text-muted-foreground">
                    Our model tested discounts ranging from 0% to 10%, and it's currently pointing to a 5% discount as
                    the most profitable balance, projecting an 11% increase in daily orders with minimal margin erosion.
                    We'll continue to watch for any major shifts—like sudden competitor drops or spikes in ad costs—and
                    automatically re-run these simulations if conditions change.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

