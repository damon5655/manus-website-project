/*
Design philosophy for this file: Refined Corporate Modernism.
The homepage should lead with operational trust, not generic hype.
Use asymmetrical composition, disciplined hierarchy, and strong quote pathways.
*/
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  brand,
  differentiators,
  industries,
  primaryCTA,
  processSteps,
  secondaryCTA,
  services,
  summaryHighlights,
  testimonials,
  trustStats,
} from "@/lib/siteData";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Link } from "wouter";

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
        {title}
      </h2>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <section className="relative overflow-hidden pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="container grid items-end gap-10 lg:grid-cols-[1.08fr,0.92fr]">
          <div className="space-y-8">
            <span className="eyebrow">Boston commercial cleaning specialists</span>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-extrabold tracking-[-0.07em] text-slate-950 sm:text-6xl lg:text-7xl">
                Cleaner buildings, clearer standards, and dependable service across Boston.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                Harbor Shine helps offices, medical spaces, schools, and multi-tenant properties stay
                consistently clean with tailored janitorial programs, documented quality checks, and
                responsive local support.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800">
                <Link href={primaryCTA.href}>
                  {primaryCTA.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-slate-300 bg-white px-7">
                <a href={secondaryCTA.href}>{secondaryCTA.label}</a>
              </Button>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {summaryHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="rounded-2xl border border-white/70 bg-white/75 p-4 shadow-sm backdrop-blur-sm">
                    <Icon className="mb-3 h-5 w-5 text-cyan-700" />
                    <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-10 top-8 hidden h-40 w-40 rounded-full bg-cyan-200/50 blur-3xl lg:block" />
            <div className="absolute -bottom-6 right-8 hidden h-36 w-36 rounded-full bg-amber-200/30 blur-3xl lg:block" />
            <div className="section-shell overflow-hidden rounded-[2.25rem] border-white/70">
              <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[16/14] lg:aspect-[4/5]">
                <img
                  src={brand.heroImage}
                  alt="Commercial cleaning professionals servicing a modern Boston office building"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="grid gap-4 rounded-[1.75rem] border border-white/20 bg-slate-950/70 p-5 text-white backdrop-blur-md sm:grid-cols-3">
                    {trustStats.slice(0, 3).map((stat) => (
                      <div key={stat.label}>
                        <div className="text-2xl font-extrabold tracking-[-0.05em]">{stat.value}</div>
                        <p className="mt-2 text-sm leading-6 text-slate-200">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 sm:pb-12">
        <div className="container grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {trustStats.map((stat) => (
            <div key={stat.label} className="stat-card">
              <div className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950">{stat.value}</div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-20 pt-10 sm:pb-24">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <SectionHeading
            eyebrow="Why facilities teams choose us"
            title="A polished, inspection-driven service model built for commercial properties."
            description="Across reviewed Boston competitors, the strongest sites emphasized trust, clarity, and visible service breadth. This concept translates those patterns into a cleaner, more premium B2B experience with stronger structure and clearer decision-making cues."
          />
          <div className="grid gap-5">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="service-card flex gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-[Manrope] text-xl font-bold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[2rem]">
              <img
                src={brand.servicesImage}
                alt="Detailed commercial cleaning service equipment and high-standard facility maintenance"
                className="h-full min-h-[340px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/55 to-transparent" />
            </div>
            <div className="space-y-8">
              <SectionHeading
                eyebrow="Service overview"
                title="Commercial cleaning programs tailored to how your building actually operates."
                description="The most effective competitor sites clearly segmented services and building types. This experience sharpens that pattern with concise service cards, ideal-use guidance, and a direct route into quote requests."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {services.slice(0, 4).map((service) => {
                  const Icon = service.icon;
                  return (
                    <div key={service.slug} className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
                      <Icon className="h-5 w-5 text-cyan-700" />
                      <h3 className="mt-4 font-[Manrope] text-lg font-bold text-slate-950">{service.name}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{service.short}</p>
                    </div>
                  );
                })}
              </div>
              <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white px-6">
                <Link href="/services">
                  Explore service details
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="angled-band bg-slate-950 pb-20 text-white sm:pb-24">
        <div className="container grid gap-10 lg:grid-cols-[1fr,1fr] lg:items-start">
          <SectionHeading
            eyebrow="How engagement starts"
            title="A clear rollout process that keeps operations moving."
            description="Commercial clients need fast scoping, realistic scheduling, and visible accountability. The onboarding flow is built to reduce uncertainty from the first walkthrough onward."
          />
          <div className="grid gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-[1.75rem] border border-white/12 bg-white/6 p-6 backdrop-blur-sm">
                <div className="text-sm font-bold uppercase tracking-[0.26em] text-cyan-200">{step.step}</div>
                <h3 className="mt-3 font-[Manrope] text-2xl font-bold text-white">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-300">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 pt-16 sm:pb-24 sm:pt-20">
        <div className="container grid gap-8 lg:grid-cols-[0.82fr,1.18fr] lg:items-start">
          <SectionHeading
            eyebrow="Industries served"
            title="Built for facility types that need reliability, visibility, and professional communication."
            description="Our scope fits organizations that value a clean first impression, predictable maintenance, and responsive issue handling across busy shared spaces."
          />
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry} className="rounded-[1.35rem] border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-700 shadow-sm">
                <CheckCircle2 className="mr-3 inline h-4 w-4 text-cyan-700" />
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container section-shell px-6 py-10 sm:px-8 sm:py-12 lg:px-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Client feedback"
              title="Testimonials that reinforce professionalism and follow-through."
              description="Across the category, testimonials consistently serve as trust anchors. Here, they are paired with a premium card system that highlights responsiveness, quality control, and operational fit."
            />
            <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white px-6">
              <Link href="/contact">Get a custom quote</Link>
            </Button>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {testimonials.map((item) => (
              <article key={item.name} className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-sm">
                <Quote className="h-8 w-8 text-cyan-700" />
                <p className="mt-5 text-base leading-7 text-slate-700">“{item.quote}”</p>
                <div className="mt-6 border-t border-slate-200 pt-4">
                  <div className="font-[Manrope] text-base font-bold text-slate-950">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container">
          <div className="overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_90px_-40px_rgba(15,23,42,0.8)] sm:px-8 sm:py-12 lg:px-12 lg:py-14">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
              <div>
                <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
                  Ready to quote your building
                </span>
                <h2 className="mt-5 max-w-2xl text-3xl font-extrabold tracking-[-0.05em] sm:text-4xl">
                  Need a Boston commercial cleaning partner with clear communication and dependable follow-through?
                </h2>
                <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
                  Tell us your building type, preferred service hours, and the scope you need. We will map out a site-specific plan and a realistic start path.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end lg:flex-col">
                <Button asChild size="lg" className="rounded-full bg-cyan-300 px-7 text-slate-950 hover:bg-cyan-200">
                  <Link href="/contact">Request a quote</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="rounded-full border-white/20 bg-transparent px-7 text-white hover:bg-white/10 hover:text-white">
                  <a href={brand.phoneHref}>Call {brand.phoneDisplay}</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
