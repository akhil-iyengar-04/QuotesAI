import { BentoDemo } from "@/components/bento-features";
import { Icons } from "@/components/icons";
import BlurIn from "@/components/magicui/blur-in";
import { BorderBeam } from "@/components/magicui/border-beam";
import ShineBorder from "@/components/magicui/shine-border";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Image from 'next/image';


function HeroPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-20">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">

          {/* Backed by Y Combinator Banner */}
          <div className="mt-8">
            <ShineBorder
              className="text-center px-6 py-2 text-base font-medium bg-black bg-opacity-50"
              color={["#FF8C00", "#FFA500", "#FF4500"]}
            >
              Backed by Y Combinator
            </ShineBorder>
          </div>

          {/* Main Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl lg:text-8xl mt-6">
            Store Intelligence At Your Fingertips
          </h1>

          {/* Subheading */}
          <p className="max-w-[48rem] leading-normal text-muted-foreground sm:text-lg sm:leading-8 mt-4">
            Operand is the first autonomous data analyst designed to understand and grow your store.<br />
            Transform deep, accurate insights into instant action—within minutes, not days.
          </p>

          {/* Call to Action Button */}
          <div className="mt-6">
            <a
              href="https://calendly.com/akhiliyengar2004/operand"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Book Demo
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative rounded-xl mx-auto flex flex-col items-center lg:max-w-[1000px] overflow-hidden mt-10">
          <iframe
            className="w-full h-[500px] lg:h-[540px] rounded-[inherit] border object-contain shadow-lg"
            src="https://www.youtube.com/embed/OUTrgPXNgOQ?rel=0"
            title="Operand Overview"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <BorderBeam size={250} />
        </div>
      </section>

      {/* Features/Services Section */}
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-10"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h3 className="text-center text-sm font-semibold text-gray-500 pb-2">
            OUR SERVICES
          </h3>
          <p className="max-w-[42rem] text-gray-700 sm:text-lg sm:leading-7">
            Leveraging Operand&apos;s capabilities, we offer tailored strategies to address your store&apos;s unique data and challenges.
          </p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-3 mt-8">
          {/* Service 1: Cohort Selection */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-6 text-left flex flex-col items-center">
            <Image
              src="/customer.svg"
              alt="Cohort Selection Icon"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Cohort Selection</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Identify top customers and untapped segments.</li>
              <li>Utilize advanced methods like RFM analysis and collaborative filtering.</li>
              <li>Deliver personalized email campaigns that drive sales.</li>
            </ul>
          </div>

          {/* Service 2: Pricing & Promotion Optimization */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-6 text-left flex flex-col items-center">
            <Image
              src="/price.svg"
              alt="Pricing & Promotions Icon"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Pricing & Promotions</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Optimize discounts and promotions to boost sales.</li>
              <li>Maintain margins with data-driven strategies.</li>
              <li>Eliminate guesswork in pricing decisions.</li>
            </ul>
          </div>

          {/* Service 3: Ad Strategy Optimization */}
          <div className="relative overflow-hidden rounded-lg border bg-background p-6 text-left flex flex-col items-center">
            <Image
              src="/ad.svg"
              alt="Ad Strategy Icon"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Ad Strategy</h3>
            <ul className="list-disc list-inside text-sm text-muted-foreground">
              <li>Maximize PPC ROI with optimized keyword strategies.</li>
              <li>Identify high-performing advertising channels.</li>
              <li>Fine-tune campaigns for better conversions.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section
        id="success-stories"
        className="container py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[64rem] flex-col items-center gap-8 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            Success Stories
          </h2>

          <div className="grid gap-6 mt-6 sm:grid-cols-1 md:grid-cols-3">
            {/* Story 1 Card */}
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                4x Revenue & 3x Conversion on Email Campaigns
              </h3>
              <p className="text-sm text-muted-foreground">
                By deploying Operand&apos;s cohort selection and email generation capabilities, a client boosted
                revenue per recipient by 4x and tripled conversion rates compared to industry-standard tools.
              </p>
            </div>

            {/* Story 2 Card */}
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                $300K in Annual Savings
              </h3>
              <p className="text-sm text-muted-foreground">
                Operand&apos;s optimization of promotions and pricing enabled a brand to trim $300,000 in annual losses,
                transforming confusing discounting strategies into predictable growth.
              </p>
            </div>

            {/* Story 3 Card */}
            <div className="relative overflow-hidden rounded-lg border bg-background p-6 text-left">
              <h3 className="text-xl font-semibold mb-2">
                Hours Saved in PPC & Keyword Report Generation
              </h3>
              <p className="text-sm text-muted-foreground">
                Operand&apos;s automated keyword and ad spend insights allowed a team to reclaim hours each week,
                shifting focus from manual reporting to creative strategy development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flexibility Section */}
      <section
        id="flexibility"
        className="container py-8 md:py-12 lg:py-16 bg-gray-50 dark:bg-transparent"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center gap-6 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-4xl md:text-5xl">
            Tailored Solutions for Your Unique Needs
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Every store is unique, with its own set of challenges. Whether it&apos;s messy data,
            niche product categories, or unconventional workflows, we deploy our AI data analyst
            to address and solve your specific problems efficiently.
          </p>
          <div className="mt-6">
            <Link
              href="https://calendly.com/akhiliyengar2004/operand"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "px-6 py-3 bg-accent text-accent-foreground rounded-md"
              )}
            >
              Let&apos;s Discuss Your Needs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroPage;