import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import SiteLayout from "@/components/SiteLayout";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Quote } from "lucide-react";
import { testimonials, processSteps, primaryCTA, brand } from "@/lib/siteData";
import { Button } from "@/components/ui/button";

function TestimonialsSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <span className="eyebrow">What they're saying</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by families & businesses
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-slate-600">
            Real feedback from real clients who rely on AG Best Cleaning Services for their homes and workplaces.
          </p>
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
  );
}

function ProcessSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-5">
            <span className="eyebrow">How we work</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              A simple process from estimate to clean space
            </h2>
            <p className="text-base leading-7 text-slate-600">
              We make it easy to get started. No complicated contracts, no surprises — just a straightforward path to a cleaner home or office.
            </p>
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
          </div>
          <div className="space-y-4">
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
      </div>
    </section>
  );
}

function CTABannerSection() {
  return (
    <section
      className="py-14 sm:py-16"
      style={{ background: "linear-gradient(135deg, #79abdc 0%, #5dab3b 100%)" }}
    >
      <div className="container text-center">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Ready for a cleaner space?
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-base text-white/90">
          Get your free estimate in 30 seconds. No commitment, no pressure — just a clear quote from a team you can trust.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <Button
            asChild
            size="lg"
            className="rounded-full bg-white px-8 font-bold shadow-lg hover:bg-slate-50"
            style={{ color: "#5dab3b" }}
          >
            <Link href="/contact">Get a free estimate</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-full border-white/60 bg-transparent px-8 text-white hover:bg-white/10"
          >
            <a href={brand.phoneHref}>Call {brand.phoneDisplay}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <TestimonialsSection />
      <ProcessSection />
      <CTABannerSection />
    </SiteLayout>
  );
}
