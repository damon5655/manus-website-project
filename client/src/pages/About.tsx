/*
Design philosophy for this file: Refined Corporate Modernism.
About content should feel grounded, trustworthy, and operationally mature.
Use narrative blocks that connect professionalism with local Boston service context.
*/
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { aboutPillars, brand, processSteps } from "@/lib/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

const principles = [
  "Site-specific cleaning plans instead of one-size-fits-all scopes",
  "Clear communication with fast response expectations",
  "Documented inspections and issue follow-up",
  "Scheduling designed around building operations and occupant flow",
];

export default function About() {
  return (
    <SiteLayout>
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-center">
          <div className="space-y-5">
            <span className="eyebrow">About Harbor Shine</span>
            <h1 className="text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              A Boston commercial cleaning partner built around professionalism, accountability, and consistent upkeep.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Research across Boston cleaning competitors showed that trust grows when websites clearly convey service discipline, responsive communication, and local operational understanding. Harbor Shine is positioned around those same expectations, but with a more elevated presentation and clearer path to engagement.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
                <Link href="/contact">
                  Request a quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white px-6">
                <a href={brand.phoneHref}>Call {brand.phoneDisplay}</a>
              </Button>
            </div>
          </div>

          <div className="section-shell overflow-hidden rounded-[2.25rem] p-3">
            <div className="relative overflow-hidden rounded-[1.75rem]">
              <img
                src={brand.teamImage}
                alt="Professional commercial cleaning leadership and field team coordination in Boston"
                className="h-full min-h-[360px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/10 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white sm:p-8">
                <div className="rounded-[1.5rem] border border-white/15 bg-slate-950/60 p-5 backdrop-blur-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200">Local operating philosophy</p>
                  <p className="mt-3 text-base leading-7 text-slate-200">
                    We prioritize dependable service rhythms, practical communication, and building-specific execution across Greater Boston.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container grid gap-5 lg:grid-cols-3">
          {aboutPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="service-card">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-[Manrope] text-2xl font-bold text-slate-950">{pillar.title}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{pillar.description}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="angled-band bg-slate-950 pb-20 text-white sm:pb-24">
        <div className="container grid gap-10 lg:grid-cols-[0.88fr,1.12fr] lg:items-start">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              What guides our work
            </span>
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl">
              We focus on standards that matter to facility leaders, not vague cleaning promises.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              From proposal through ongoing service, our approach is shaped by operational clarity, visible quality control, and respect for how each building functions day to day.
            </p>
          </div>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-4 rounded-[1.6rem] border border-white/12 bg-white/6 p-5 backdrop-blur-sm">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-200" />
                <p className="text-base leading-7 text-slate-200">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-16 sm:pt-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <span className="eyebrow">How we work</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              A simple, documented workflow for onboarding and ongoing service.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              The best-performing commercial cleaning websites make their process easy to understand. We do the same here with a clean, buyer-friendly sequence.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step) => (
              <article key={step.step} className="rounded-[1.7rem] border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500">Step {step.step}</p>
                <h3 className="mt-3 font-[Manrope] text-2xl font-bold text-slate-950">{step.title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
