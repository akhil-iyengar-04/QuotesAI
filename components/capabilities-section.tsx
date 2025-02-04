export function CapabilitiesSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container">
        <div className="max-w-[64rem] space-y-24">
          <div className="space-y-6">
            <div className="inline-flex rounded-full px-4 py-1.5 text-sm font-medium text-foreground border">
              Simplifying data management
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading tracking-tight">
              Connects to your data once, understands it forever.
            </h2>
            <p className="text-xl text-muted-foreground max-w-[42rem] leading-normal">
              Operand continuously learns about your business by integrating with every data source. It detects
              mismatched SKUs, flags unrealistic sales spikes, and identifies inconsistencies—ensuring clean, reliable
              data for every decision.
            </p>
          </div>
          {/* Additional capabilities will be added here */}
        </div>
      </div>
    </section>
  )
}

