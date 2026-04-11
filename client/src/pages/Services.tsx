/*
Design philosophy for this file: Refined Corporate Modernism.
Service content should feel structured, credible, and easy for B2B buyers to scan.
Each module should reduce uncertainty around scope, building fit, and next steps.
*/
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { faqs, brand, serviceComparison, services } from "@/lib/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-3xl space-y-4">
      <span className="eyebrow">{eyebrow}</span>
      <h1 className="text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
        {title}
      </h1>
      <p className="text-lg leading-8 text-slate-600">{description}</p>
    </div>
  );
}

export default function Services() {
  return (
    <SiteLayout>
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
          <SectionIntro
            eyebrow="Commercial cleaning services"
            title="Detailed service lines for Boston buildings that need reliable upkeep and visible standards."
            description="Competitor analysis showed that strong commercial cleaning sites clearly organize services by operational need. This page expands that pattern with building-fit guidance, task lists, and a sharper quote path for facilities teams."
          />
          <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-6 shadow-[0_24px_60px_-36px_rgba(15,23,42,0.45)] backdrop-blur-sm sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Primary coverage</div>
                <p className="mt-3 text-lg font-semibold text-slate-950">{brand.serviceArea}</p>
              </div>
              <div>
                <div className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">Scheduling options</div>
                <p className="mt-3 text-lg font-semibold text-slate-950">Daytime, after-hours, overnight, and weekend service</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="rounded-full bg-slate-950 px-6 text-white hover:bg-slate-800">
                <Link href="/contact">Request a facility quote</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-slate-300 bg-white px-6">
                <a href={brand.phoneHref}>Call {brand.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container grid gap-5 xl:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article
                id={service.slug}
                key={service.slug}
                className="section-shell rounded-[2rem] px-6 py-7 sm:px-8 sm:py-8"
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-900/15">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-extrabold tracking-[-0.04em] text-slate-950 sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-4 text-lg leading-8 text-slate-600">{service.description}</p>
                  </div>
                  <div className="rounded-[1.5rem] border border-cyan-200 bg-cyan-50 px-5 py-4 text-sm font-semibold text-cyan-900">
                    {service.short}
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[1fr,0.9fr]">
                  <div>
                    <h3 className="font-[Manrope] text-lg font-bold text-slate-950">Typical service scope</h3>
                    <div className="mt-4 grid gap-3">
                      {service.bullets.map((item) => (
                        <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                          <p className="text-sm leading-6 text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-[Manrope] text-lg font-bold text-slate-950">Ideal building types</h3>
                    <div className="mt-4 flex flex-wrap gap-3">
                      {service.idealFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 rounded-[1.5rem] bg-slate-950 p-5 text-white">
                      <p className="text-sm uppercase tracking-[0.24em] text-cyan-200">Next step</p>
                      <p className="mt-3 text-base leading-7 text-slate-200">
                        Share your building size, schedule preference, and any compliance or hygiene
                        requirements so we can recommend an efficient scope.
                      </p>
                      <Button asChild className="mt-5 rounded-full bg-white px-5 text-slate-950 hover:bg-slate-100">
                        <Link href="/contact">
                          Ask about this service
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="angled-band bg-slate-950 pb-20 text-white sm:pb-24">
        <div className="container grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-white/16 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-200">
              Program planning guide
            </span>
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-white sm:text-4xl">
              Different scopes solve different operational problems.
            </h2>
            <p className="text-lg leading-8 text-slate-300">
              Boston commercial properties often need a combination of routine janitorial support,
              floor care, and project work. The table below helps clarify where each scope fits.
            </p>
          </div>

          <div className="overflow-hidden rounded-[1.8rem] border border-white/12 bg-white/6 backdrop-blur-sm">
            <div className="grid grid-cols-3 border-b border-white/10 px-5 py-4 text-sm font-bold uppercase tracking-[0.18em] text-slate-300">
              <div>Service type</div>
              <div>Typical cadence</div>
              <div>Primary focus</div>
            </div>
            {serviceComparison.map((row) => (
              <div key={row.segment} className="grid grid-cols-3 gap-4 border-b border-white/8 px-5 py-5 text-sm leading-6 text-slate-200 last:border-b-0">
                <div className="font-semibold text-white">{row.segment}</div>
                <div>{row.frequency}</div>
                <div>{row.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 pt-16 sm:pt-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <span className="eyebrow">Frequently asked questions</span>
            <h2 className="text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
              Common questions before starting service.
            </h2>
            <p className="text-lg leading-8 text-slate-600">
              These answers address the most common procurement concerns we see during early facility conversations.
            </p>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-[Manrope] text-lg font-bold text-slate-950">{faq.question}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
