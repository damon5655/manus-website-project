/*
Design philosophy for this file: Refined Corporate Modernism.
The contact experience should feel low-friction, professional, and reassuring.
Use structured inputs, clear contact alternatives, and strong service-context cues.
*/
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brand, contactDetails, services } from "@/lib/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const quoteBenefits = [
  "Fast response for Boston-area commercial inquiries",
  "Scope recommendations based on facility type and schedule",
  "Flexible options for recurring or project-based service",
];

export default function Contact() {
  return (
    <SiteLayout>
      <section className="pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
          <div className="space-y-6">
            <span className="eyebrow">Contact & quote request</span>
            <h1 className="text-4xl font-extrabold tracking-[-0.06em] text-slate-950 sm:text-5xl">
              Tell us about your building and we will shape a cleaning plan around your operating needs.
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Many competitor sites rely on short contact forms with limited context. This page improves the experience by pairing clear service options, direct contact paths, and a more complete request structure for faster scoping.
            </p>
            <div className="grid gap-4">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{item.title}</div>
                        <div className="mt-2 text-base font-semibold text-slate-900">{item.value}</div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="section-shell rounded-[2rem] px-6 py-6">
              <h2 className="font-[Manrope] text-2xl font-bold text-slate-950">Why request a walkthrough?</h2>
              <div className="mt-5 grid gap-3">
                {quoteBenefits.map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-700" />
                    <p className="text-sm leading-6 text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-shell overflow-hidden rounded-[2.25rem] p-3">
            <div className="grid gap-0 rounded-[1.8rem] bg-white lg:grid-cols-[0.92fr,1.08fr]">
              <div className="relative min-h-[280px] overflow-hidden lg:min-h-full">
                <img
                  src={brand.contactImage}
                  alt="Boston commercial cleaning consultation and facility walkthrough planning"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-950/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">Service types</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {services.slice(0, 5).map((service) => (
                      <span key={service.slug} className="rounded-full border border-white/18 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur-sm">
                        {service.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <form className="p-6 sm:p-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-5">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Quote form</p>
                    <h2 className="mt-2 font-[Manrope] text-3xl font-extrabold tracking-[-0.04em] text-slate-950">
                      Request a custom estimate
                    </h2>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      Share your building type, cleaning needs, and preferred service timing. We will follow up to discuss scope and scheduling.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-semibold text-slate-700">Full name</label>
                      <Input id="name" placeholder="Jordan Smith" className="h-12 rounded-2xl border-slate-200 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-semibold text-slate-700">Company</label>
                      <Input id="company" placeholder="Boston Property Group" className="h-12 rounded-2xl border-slate-200 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-slate-700">Email</label>
                      <Input id="email" type="email" placeholder="name@company.com" className="h-12 rounded-2xl border-slate-200 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-slate-700">Phone</label>
                      <Input id="phone" placeholder="(617) 555-0123" className="h-12 rounded-2xl border-slate-200 bg-slate-50" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="facility" className="text-sm font-semibold text-slate-700">Facility type</label>
                      <Input id="facility" placeholder="Office, clinic, school, multi-tenant building" className="h-12 rounded-2xl border-slate-200 bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="timing" className="text-sm font-semibold text-slate-700">Preferred timing</label>
                      <Input id="timing" placeholder="After-hours, overnight, weekends" className="h-12 rounded-2xl border-slate-200 bg-slate-50" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="details" className="text-sm font-semibold text-slate-700">Scope details</label>
                    <Textarea
                      id="details"
                      placeholder="Tell us about building size, current cleaning challenges, desired frequency, and any special requirements."
                      className="min-h-36 rounded-[1.5rem] border-slate-200 bg-slate-50"
                    />
                  </div>

                  <Button className="w-full rounded-full bg-slate-950 px-7 text-white hover:bg-slate-800 sm:w-auto">
                    Submit quote request
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-xs leading-5 text-slate-500">
                    This front-end demo form is intentionally non-submitting in the static build. For production lead capture, a backend form handler or CRM integration can be added.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="service-area" className="pb-24">
        <div className="container section-shell rounded-[2.25rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-12">
          <div className="grid gap-8 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <span className="eyebrow">Local coverage</span>
              <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.05em] text-slate-950 sm:text-4xl">
                Serving downtown Boston and surrounding commercial submarkets.
              </h2>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-base leading-8 text-slate-600">
                We support clients in {brand.serviceArea}. If your portfolio spans multiple sites, we can discuss phased rollouts, standardized task lists, and scheduling across locations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
