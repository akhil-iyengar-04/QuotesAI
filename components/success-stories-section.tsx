const successStories = [
  {
    title: "4x Revenue & 3x Conversion Rates",
    description: "Analyzed customer purchase history to create high-value segments for subscription & promotion sales.",
  },
  {
    title: "$300K in Average Savings",
    description:
      "Evaluated pricing patterns and costs across channels to recommend pricing adjustments and discount campaigns.",
  },
  {
    title: "20+ Hours Saved on Weekly Ad Reporting",
    description: "Automated analysis of ad metrics, creating regular reports for marketing teams to optimize ad spend.",
  },
]

export function SuccessStoriesSection() {
  return (
    <section id="success-stories" className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">Success Stories</h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          See how Operand has transformed e-commerce businesses.
        </p>
      </div>
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3 lg:gap-8">
        {successStories.map((story) => (
          <div key={story.title} className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <h3 className="font-bold">{story.title}</h3>
              <p className="text-sm text-muted-foreground">{story.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

