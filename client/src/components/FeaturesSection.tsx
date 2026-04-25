import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { services } from "@/lib/siteData";

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="container">
        {/* Header */}
        <div className="mb-12 max-w-2xl">
          <span className="eyebrow">Our services</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Professional cleaning services{" "}
            <span style={{ color: "#79abdc" }}>tailored for your needs</span>
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600">
            From weekly home cleaning to full commercial contracts, we offer a complete range of services — each one delivered with the same attention to detail and care.
          </p>
        </div>

        {/* Service cards grid */}
        <div
          ref={ref}
          className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {services.map((service, i) => {
            const Icon = service.icon;
            const isBlue = i % 3 === 0;
            const isGreen = i % 3 === 1;
            const iconBg = isBlue ? "#79abdc" : isGreen ? "#5dab3b" : "#79abdc";

            return (
              <motion.article
                key={service.slug}
                id={service.slug}
                className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-md"
                  style={{ backgroundColor: iconBg }}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{service.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 flex-1">{service.short}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.bullets.slice(0, 3).map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2 text-xs text-slate-500">
                      <span
                        className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: iconBg }}
                      />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/services#${service.slug}`}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 hover:gap-2.5"
                  style={{ color: iconBg }}
                >
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border-2 px-7 py-3 text-sm font-bold transition hover:bg-[#79abdc] hover:text-white"
            style={{ borderColor: "#79abdc", color: "#79abdc" }}
          >
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
