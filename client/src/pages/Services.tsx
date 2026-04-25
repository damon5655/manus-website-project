import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { faqs, brand, serviceComparison, services, primaryCTA } from "@/lib/siteData";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[0.95fr,1.05fr] lg:items-end">
          <div className="space-y-5">
            <span className="eyebrow">Our cleaning services</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Professional cleaning services{" "}
              <span style={{ color: "#79abdc" }}>tailored for your needs</span>
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              From weekly home cleaning to full commercial contracts, we offer a complete range of services — each one delivered with the same care and attention to detail. Based in Abington, serving Greater Boston.
            </p>
          </div>
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Primary coverage</div>
                <p className="mt-2 text-base font-semibold text-slate-900">{brand.serviceArea}</p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">Scheduling options</div>
                <p className="mt-2 text-base font-semibold text-slate-900">Daytime, evening, and weekend service</p>
              </div>
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full px-6 text-white shadow-md"
                style={{ backgroundColor: "#5dab3b" }}
              >
                <Link href="/contact">{primaryCTA.label}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-200 bg-white px-6 text-slate-700 hover:border-[#79abdc] hover:text-[#79abdc]"
              >
                <a href={brand.phoneHref}>Call {brand.phoneDisplay}</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service cards */}
      <section className="bg-white pb-20 sm:pb-24">
        <div className="container grid gap-6 xl:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            const iconBg = i % 2 === 0 ? "#79abdc" : "#5dab3b";
            return (
              <motion.article
                id={service.slug}
                key={service.slug}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                  <div className="max-w-2xl">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg"
                      style={{ backgroundColor: iconBg }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                      {service.name}
                    </h2>
                    <p className="mt-3 text-base leading-7 text-slate-600">{service.description}</p>
                  </div>
                </div>
                <div className="mt-6 grid gap-6 lg:grid-cols-2">
                  <div>
                    <h3 className="font-bold text-slate-900">What's included</h3>
                    <div className="mt-3 grid gap-2">
                      {service.bullets.map((item) => (
                        <div key={item} className="flex gap-3 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2.5">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: iconBg }} />
                          <p className="text-sm leading-6 text-slate-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">Ideal for</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {service.idealFor.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border px-3 py-1 text-xs font-semibold text-slate-700"
                          style={{ borderColor: iconBg + "40", backgroundColor: iconBg + "10" }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    <div
                      className="mt-5 rounded-2xl p-5 text-white"
                      style={{ backgroundColor: "#1e293b" }}
                    >
                      <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#79abdc" }}>
                        Ready to get started?
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        Tell us about your space and schedule — we'll put together a free, no-obligation estimate.
                      </p>
                      <Button
                        asChild
                        className="mt-4 rounded-full bg-white px-5 text-slate-900 hover:bg-slate-100"
                        size="sm"
                      >
                        <Link href="/contact">
                          Get a free estimate
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      {/* Service comparison */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#1e293b" }}>
        <div className="container grid gap-8 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-4">
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: "rgba(121,171,220,0.4)", color: "#79abdc" }}
            >
              Service comparison
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Which service is right for you?
            </h2>
            <p className="text-base leading-8 text-slate-300">
              Not sure which service fits your needs? This quick comparison helps clarify what each option covers and how often it's typically scheduled.
            </p>
          </div>
          <div className="overflow-hidden rounded-[1.8rem] border" style={{ borderColor: "rgba(255,255,255,0.1)", backgroundColor: "rgba(255,255,255,0.04)" }}>
            <div className="grid grid-cols-3 border-b px-5 py-4 text-xs font-bold uppercase tracking-widest text-slate-400" style={{ borderColor: "rgba(255,255,255,0.1)" }}>
              <div>Service type</div>
              <div>Typical cadence</div>
              <div>Primary focus</div>
            </div>
            {serviceComparison.map((row, i) => (
              <div
                key={row.segment}
                className="grid grid-cols-3 gap-4 border-b px-5 py-5 text-sm leading-6 text-slate-200 last:border-b-0"
                style={{ borderColor: "rgba(255,255,255,0.06)" }}
              >
                <div className="font-semibold text-white">{row.segment}</div>
                <div style={{ color: i % 2 === 0 ? "#79abdc" : "#5dab3b" }}>{row.frequency}</div>
                <div>{row.focus}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white pb-24 pt-16 sm:pt-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <span className="eyebrow">Frequently asked questions</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Common questions before getting started
            </h2>
            <p className="text-base leading-8 text-slate-600">
              We want you to feel confident before booking. Here are the questions we hear most often from new clients.
            </p>
            <Button
              asChild
              className="rounded-full px-7 text-white shadow-md"
              style={{ backgroundColor: "#5dab3b" }}
            >
              <Link href="/contact">
                Still have questions? Contact us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <h3 className="font-bold text-slate-900">{faq.question}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
