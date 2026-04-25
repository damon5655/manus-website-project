import { motion } from "framer-motion";
import { ArrowRight, Phone, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { brand, primaryCTA, summaryHighlights } from "@/lib/siteData";

const CUSTOM_EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-28">
      {/* Decorative background blobs */}
      <div
        className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ backgroundColor: "#79abdc" }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 -left-16 h-72 w-72 rounded-full opacity-15 blur-3xl"
        style={{ backgroundColor: "#5dab3b" }}
        aria-hidden="true"
      />

      <div className="container relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: Copy & CTA */}
          <div className="max-w-xl space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: CUSTOM_EASE }}
            >
              <span className="eyebrow">Welcome to AG Best Cleaning</span>
            </motion.div>

            <motion.h1
              className="text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: CUSTOM_EASE }}
            >
              Quality Cleaning{" "}
              <span style={{ color: "#79abdc" }}>for Homes</span>{" "}
              &{" "}
              <span style={{ color: "#5dab3b" }}>Businesses</span>
            </motion.h1>

            <motion.p
              className="text-lg leading-8 text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: CUSTOM_EASE }}
            >
              Serving Abington and Greater Boston for over 6 years. Aninha and her team deliver dependable, detail-oriented cleaning — tailored to your schedule and your space.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: CUSTOM_EASE }}
            >
              <Button
                asChild
                size="lg"
                className="rounded-full px-7 text-white shadow-lg shadow-green-200/50"
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
                size="lg"
                className="rounded-full border-slate-200 bg-white px-7 text-slate-700 hover:border-[#79abdc] hover:text-[#79abdc]"
              >
                <a href={brand.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  {brand.phoneDisplay}
                </a>
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              className="flex flex-wrap gap-3 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45, ease: CUSTOM_EASE }}
            >
              {summaryHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 shadow-sm"
                  >
                    <Icon className="h-3.5 w-3.5" style={{ color: "#5dab3b" }} />
                    {item.label}
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right: Hero image card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: CUSTOM_EASE }}
          >
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl shadow-slate-200/80">
              <img
                src={brand.heroImage}
                alt="AG Best Cleaning Services — professional cleaning team"
                className="h-[420px] w-full object-cover sm:h-[480px]"
              />
              {/* Overlay card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/90 p-4 backdrop-blur-md shadow-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#5dab3b" }}>
                      Free estimate
                    </p>
                    <p className="mt-0.5 text-sm font-bold text-slate-900">
                      Get a quote in 30 seconds
                    </p>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full text-white shadow-md"
                    style={{ backgroundColor: "#79abdc" }}
                  >
                    <Link href="/contact">Start now</Link>
                  </Button>
                </div>
                <div className="mt-3 flex items-center gap-4 border-t border-slate-100 pt-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#5dab3b" }} />
                    No commitment
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#5dab3b" }} />
                    Mon–Sat available
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <CheckCircle2 className="h-3.5 w-3.5" style={{ color: "#5dab3b" }} />
                    6+ years trusted
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
