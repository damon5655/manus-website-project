import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { aboutPillars, processSteps, brand, primaryCTA, testimonials } from "@/lib/siteData";
import { ArrowRight, CheckCircle2, Quote } from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const principles = [
  "We show up on time, every time — your schedule is respected.",
  "Every clean is owner-supervised or team-lead reviewed for quality.",
  "We use safe, effective products and adapt to your preferences.",
  "Clear communication before, during, and after every service.",
  "We're flexible — reschedules, scope changes, and special requests are handled without friction.",
  "Your satisfaction is the standard we measure every job against.",
];

export default function About() {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-50 to-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="container grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="space-y-5">
            <span className="eyebrow">About AG Best Cleaning</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              A local team that{" "}
              <span style={{ color: "#79abdc" }}>genuinely cares</span>{" "}
              about your space
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              AG Best Cleaning Services was founded by Aninha with a clear purpose: to deliver professional, reliable cleaning that makes a real difference for the families and businesses we serve. Based in Abington, MA, we've been trusted by Greater Boston clients for over 6 years.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                asChild
                className="rounded-full px-7 text-white shadow-md"
                style={{ backgroundColor: "#5dab3b" }}
              >
                <Link href={primaryCTA.href}>
                  {primaryCTA.label}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full border-slate-200 bg-white px-7 text-slate-700 hover:border-[#79abdc] hover:text-[#79abdc]"
              >
                <a href={brand.phoneHref}>Call {brand.phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200/80">
            <img
              src={brand.teamImage}
              alt="AG Best Cleaning Services team"
              className="h-[420px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our pillars */}
      <section className="bg-white pb-16 pt-12 sm:pb-20">
        <div className="container">
          <div className="mb-10 max-w-xl">
            <span className="eyebrow">What we stand for</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              The values behind every clean
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {aboutPillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.article
                  key={pillar.title}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md"
                    style={{ backgroundColor: i % 2 === 0 ? "#79abdc" : "#5dab3b" }}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">{pillar.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles band */}
      <section className="py-16 sm:py-20" style={{ backgroundColor: "#1e293b" }}>
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <span
              className="inline-flex rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-widest"
              style={{ borderColor: "rgba(121,171,220,0.4)", color: "#79abdc" }}
            >
              What guides our work
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              We focus on what actually matters to our clients.
            </h2>
            <p className="text-base leading-8 text-slate-300">
              From first estimate to ongoing service, our approach is built around reliability, clear communication, and results you can see and feel every time we visit.
            </p>
          </div>
          <div className="grid gap-3">
            {principles.map((principle, i) => (
              <motion.div
                key={principle}
                className="flex gap-4 rounded-2xl border p-5"
                style={{ borderColor: "rgba(255,255,255,0.08)", backgroundColor: "rgba(255,255,255,0.04)" }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" style={{ color: "#5dab3b" }} />
                <p className="text-sm leading-7 text-slate-300">{principle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-slate-50 pb-20 pt-16 sm:pt-20">
        <div className="container grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-start">
          <div className="space-y-4">
            <span className="eyebrow">How we work</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A simple process from estimate to clean space
            </h2>
            <p className="text-base leading-8 text-slate-600">
              Getting started is easy. We handle everything from the first call to the final walkthrough — so you can focus on what matters most.
            </p>
          </div>
          <div className="grid gap-4">
            {processSteps.map((step, i) => (
              <motion.article
                key={step.step}
                className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-extrabold text-white"
                  style={{ backgroundColor: i % 2 === 0 ? "#79abdc" : "#5dab3b" }}
                >
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">{step.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-600">{step.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white pb-20 pt-12">
        <div className="container">
          <div className="mb-10 text-center">
            <span className="eyebrow">Client feedback</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What our clients say
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Quote className="mb-3 h-6 w-6" style={{ color: "#79abdc" }} />
                <p className="flex-1 text-sm leading-7 text-slate-700 italic">"{t.quote}"</p>
                <div className="mt-5 border-t border-slate-200 pt-4">
                  <p className="text-sm font-bold text-slate-900">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
