import { motion } from "framer-motion";
import { differentiators, trustStats } from "@/lib/siteData";

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container">
        {/* Stats row */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {trustStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-center shadow-sm"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div
                className="text-3xl font-extrabold tracking-tight"
                style={{ color: "#79abdc" }}
              >
                {stat.value}
              </div>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Main about content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Left: heading + body */}
          <motion.div
            className="space-y-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="eyebrow">Why AG Best Cleaning</span>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Providing the best services{" "}
              <span style={{ color: "#79abdc" }}>for homes</span>{" "}
              &{" "}
              <span style={{ color: "#5dab3b" }}>businesses</span>
            </h2>
            <p className="text-base leading-8 text-slate-600">
              AG Best Cleaning Services was built on a simple idea: every client deserves a clean space they can be proud of, delivered by a team that genuinely cares. Aninha and her crew bring over 6 years of hands-on experience to every job — whether it's a weekly home clean or a full commercial contract.
            </p>
            <p className="text-base leading-8 text-slate-600">
              We're not a faceless franchise. We're a local team that knows our clients by name, adapts to their schedules, and takes pride in the results we deliver. That's why our clients keep coming back — and keep referring us to their friends.
            </p>
          </motion.div>

          {/* Right: differentiator cards */}
          <div className="space-y-4">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50 p-5 shadow-sm"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                    style={{ backgroundColor: i % 2 === 0 ? "#79abdc" : "#5dab3b" }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600">{item.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
