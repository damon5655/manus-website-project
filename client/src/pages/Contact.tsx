import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { brand, contactDetails, services } from "@/lib/siteData";
import { ArrowRight, CheckCircle2, Clock } from "lucide-react";
import { motion } from "framer-motion";

const quoteBenefits = [
  "Free estimate — no commitment, no pressure",
  "We respond within 24 hours for all inquiries",
  "Flexible scheduling around your home or business hours",
  "Customized cleaning plan built for your specific space",
];

export default function Contact() {
  return (
    <SiteLayout>
      <section className="bg-gradient-to-br from-slate-50 to-white pb-16 pt-12 sm:pb-20 sm:pt-16">
        <div className="container grid gap-10 lg:grid-cols-[0.92fr,1.08fr] lg:items-start">
          {/* Left: info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="eyebrow">Get a free estimate</span>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Tell us about your space and we'll build a{" "}
              <span style={{ color: "#79abdc" }}>cleaning plan around you</span>
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              Whether you need a one-time deep clean or a recurring service for your home or business, we make it easy to get started. Fill out the form or reach us directly — we're happy to help.
            </p>

            {/* Contact detail cards */}
            <div className="grid gap-3">
              {contactDetails.map((item, i) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.title}
                    href={item.href}
                    className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#79abdc]"
                  >
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                      style={{ backgroundColor: i % 2 === 0 ? "#79abdc" : "#5dab3b" }}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-slate-500">{item.title}</div>
                      <div className="mt-1 text-base font-semibold text-slate-900">{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Hours */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
              <Clock className="h-5 w-5 shrink-0" style={{ color: "#5dab3b" }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Hours</p>
                <p className="mt-0.5 text-sm font-semibold text-slate-900">Monday – Saturday, 8am – 6pm</p>
              </div>
            </div>

            {/* Why request */}
            <div className="rounded-2xl border border-slate-100 bg-slate-50 p-5">
              <h2 className="font-bold text-slate-900">Why request a free estimate?</h2>
              <div className="mt-4 grid gap-2.5">
                {quoteBenefits.map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" style={{ color: "#5dab3b" }} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: form */}
          <motion.div
            className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-lg sm:p-8"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="text-2xl font-extrabold text-slate-900">Request your free estimate</h2>
            <p className="mt-2 text-sm text-slate-500">We'll get back to you within 24 hours.</p>

            <form className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Full name
                  </label>
                  <Input
                    placeholder="Your name"
                    className="rounded-xl border-slate-200 bg-slate-50 focus:border-[#79abdc] focus:ring-[#79abdc]/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                    Phone number
                  </label>
                  <Input
                    type="tel"
                    placeholder="(xxx) xxx-xxxx"
                    className="rounded-xl border-slate-200 bg-slate-50 focus:border-[#79abdc]"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Email address
                </label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  className="rounded-xl border-slate-200 bg-slate-50 focus:border-[#79abdc]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Service needed
                </label>
                <select className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-sm text-slate-700 focus:border-[#79abdc] focus:outline-none focus:ring-2 focus:ring-[#79abdc]/20">
                  <option value="">Select a service...</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                  Message / details
                </label>
                <Textarea
                  placeholder="Tell us about your space, preferred schedule, or any special requests..."
                  rows={4}
                  className="rounded-xl border-slate-200 bg-slate-50 focus:border-[#79abdc]"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-xl text-white shadow-md"
                style={{ backgroundColor: "#5dab3b" }}
              >
                Get my free estimate
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>

              <p className="text-center text-xs text-slate-400">
                No commitment required. We'll reach out to confirm details.
              </p>
            </form>

            {/* Service area chips */}
            <div className="mt-6 border-t border-slate-100 pt-5">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Services we offer</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {services.map((service) => (
                  <span
                    key={service.slug}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {service.name}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </SiteLayout>
  );
}
