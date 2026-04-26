/**
 * Voss & Co — Single Page Website
 *
 * Typography: Geist (Vercel) — minimal modern, all weights
 * Colors: #0a0a0a / #171717 / #404040 / #737373 / #a3a3a3 / #f5f5f5 / white
 * Hero accent: #202A36
 * Buttons: rounded-full, bg #0a0a0a, white text, hover #171717
 * Layout: max-w-7xl, px-8, centered
 */

import { useState } from "react";
import { Menu, X, Globe, Zap, ArrowRight } from "lucide-react";

const font: React.CSSProperties = { fontFamily: "'Geist', 'Inter', system-ui, sans-serif" };

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── CTA Button ───────────────────────────────────────────────────────────────
function CtaButton({
  label,
  target,
  fullWidthMobile = false,
  variant = "dark",
}: {
  label: string;
  target: string;
  fullWidthMobile?: boolean;
  variant?: "dark" | "outline";
}) {
  const base =
    "inline-flex items-center justify-center px-6 py-2.5 rounded-full text-[13px] font-medium tracking-tight transition-colors";

  if (variant === "outline") {
    return (
      <button
        onClick={() => scrollTo(target)}
        className={`${base} ${fullWidthMobile ? "w-full md:w-auto" : ""} border border-white/20 text-white hover:bg-white/10`}
        style={font}
      >
        {label}
      </button>
    );
  }

  return (
    <button
      onClick={() => scrollTo(target)}
      className={`${base} ${fullWidthMobile ? "w-full md:w-auto" : ""} bg-[#0a0a0a] text-white hover:bg-[#171717]`}
      style={font}
    >
      {label}
    </button>
  );
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home",         target: "home" },
    { label: "Services",     target: "services" },
    { label: "How It Works", target: "how-it-works" },
    { label: "Our Work",     target: "our-work" },
    { label: "Contact",      target: "form" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <span className="text-[15px] font-semibold text-white tracking-tight" style={font}>
          Voss &amp; Co
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="text-[13px] font-normal text-white/60 hover:text-white transition-colors"
              style={font}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <CtaButton label="Get a Free Preview" target="form" variant="outline" />

        {/* Mobile hamburger */}
        <button className="md:hidden text-white ml-4" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mx-4 mt-1 rounded-xl shadow-xl bg-[#111]/95 backdrop-blur-md border border-white/10 px-5 py-4 flex flex-col gap-2">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => { scrollTo(l.target); setOpen(false); }}
              className="text-[13px] font-normal text-white/60 hover:text-white transition-colors text-left py-1.5"
              style={font}
            >
              {l.label}
            </button>
          ))}
          <div className="mt-2 pt-3 border-t border-white/10">
            <CtaButton label="Get a Free Preview" target="form" fullWidthMobile />
          </div>
        </div>
      )}
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-[#0a0a0a]">
      {/* Background image — placeholder: replace with real hero image */}
      <img
        src="/hero-bg.jpg"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="eager"
      />
      {/* Gradient vignette */}
      <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, rgba(10,10,10,0.7) 100%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,10,10,0.3) 0%, rgba(10,10,10,0.1) 50%, rgba(10,10,10,0.6) 100%)" }} />

      <Nav />

      <div className="relative h-full flex items-center justify-center">
        <div className="text-center px-6 max-w-4xl mx-auto">
          <h1
            className="text-[64px] md:text-[88px] lg:text-[108px] font-semibold leading-[0.95] tracking-[-0.04em] text-white"
            style={font}
          >
            <span className="block text-white/40">Sales. Tech.</span>
            <span className="block">New Clients.</span>
          </h1>

          <p
            className="mt-6 text-[15px] md:text-[17px] text-white/50 font-normal tracking-tight max-w-sm mx-auto"
            style={font}
          >
            We build the system that brings clients in.
          </p>

          <div className="mt-8">
            <button
              onClick={() => scrollTo("form")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#0a0a0a] text-[13px] font-semibold tracking-tight hover:bg-white/90 transition-colors"
              style={font}
            >
              Get a Free Website Preview
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Logo Bar ─────────────────────────────────────────────────────────────────
function LogoBar() {
  const logos = ["Webflow", "HubSpot", "Zapier", "Stripe", "Notion", "Figma"];

  return (
    <section className="bg-[#f5f5f5] border-b border-neutral-200 py-8">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-[11px] font-medium text-neutral-400 tracking-widest uppercase mb-7" style={font}>
          Powered by tools we trust
        </p>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {logos.map((name) => (
            <div key={name} title={name}>
              {/* placeholder — replace with real logo */}
              <div className="h-7 w-20 bg-neutral-200 rounded-md flex items-center justify-center">
                <span className="text-[11px] text-neutral-400 font-medium select-none" style={font}>{name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function Services() {
  const cards = [
    {
      icon: <Globe size={20} strokeWidth={1.5} className="text-neutral-500" />,
      title: "Website Design",
      description:
        "A website that doesn't convert is just an expense. We build sites structured to turn visitors into clients — clear, fast, and built to close.",
    },
    {
      icon: <Zap size={20} strokeWidth={1.5} className="text-neutral-500" />,
      title: "Automated Lead System",
      description:
        "Stop chasing leads manually. We build the outreach infrastructure that runs in the background — so new client inquiries come to you.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-[13px] font-medium text-neutral-400 tracking-widest uppercase mb-12" style={font}>
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-100">
          {cards.map((card) => (
            <div key={card.title} className="bg-white p-10 flex flex-col gap-4">
              <div className="w-9 h-9 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="text-[22px] font-semibold text-[#0a0a0a] tracking-tight leading-snug" style={font}>
                {card.title}
              </h3>
              <p className="text-[14px] text-neutral-500 leading-relaxed font-normal" style={font}>
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Submit Your Info",
      description: "Fill out the form below with your basic business details.",
    },
    {
      number: "02",
      title: "We Build Your Preview",
      description: "Our team puts together a free custom website preview tailored to your business.",
    },
    {
      number: "03",
      title: "Receive It Within 7 Days",
      description: "Your preview lands in your inbox within 7 business days.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#f5f5f5] py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-[13px] font-medium text-neutral-400 tracking-widest uppercase mb-12" style={font}>
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-neutral-200">
          {steps.map((step, idx) => (
            <div key={step.number} className="bg-[#f5f5f5] p-8 flex flex-col gap-3">
              <span className="text-[11px] font-medium text-neutral-400 tracking-widest" style={font}>
                {step.number}
              </span>
              <h3 className="text-[18px] font-semibold text-[#0a0a0a] tracking-tight" style={font}>
                {step.title}
              </h3>
              <p className="text-[13px] text-neutral-500 leading-relaxed font-normal" style={font}>
                {step.description}
              </p>
              {idx === 2 && (
                <p className="text-[12px] text-neutral-400 italic mt-1" style={font}>
                  no commitment required
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10">
          <CtaButton label="Get a Free Website Preview" target="form" />
        </div>
      </div>
    </section>
  );
}

// ─── Our Work ─────────────────────────────────────────────────────────────────
function OurWork() {
  const projects = [
    { caption: "Real Estate" },
    { caption: "Legal Services" },
    { caption: "Home Services" },
  ];

  return (
    <section id="our-work" className="bg-white py-24 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-[13px] font-medium text-neutral-400 tracking-widest uppercase mb-12" style={font}>
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <div key={i} className="group flex flex-col gap-2.5">
              {/* placeholder — replace with real image */}
              <div className="w-full rounded-lg bg-neutral-50 border border-neutral-100 overflow-hidden" style={{ aspectRatio: "16/10" }}>
                <img
                  src={
                    i === 0
                      ? "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80"
                      : i === 1
                      ? "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80"
                      : "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80"
                  }
                  alt={p.caption}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-[1.02]"
                />
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[12px] font-medium text-neutral-500 tracking-tight" style={font}>
                  Project — {p.caption}
                </span>
                <span className="text-[11px] text-neutral-300 font-normal" style={font}>↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Form ─────────────────────────────────────────────────────────────────────
function FormSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    businessName: "",
    phone: "",
    email: "",
    hasWebsite: "",
    budget: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-3.5 py-2.5 rounded-lg border border-neutral-200 bg-white text-[#0a0a0a] placeholder-neutral-300 text-[13px] font-normal focus:outline-none focus:ring-2 focus:ring-neutral-300 transition";

  const labelClass = "text-[11px] font-medium text-neutral-400 tracking-widest uppercase";

  return (
    <section id="form" className="bg-[#f5f5f5] py-24">
      <div className="max-w-xl mx-auto px-8">
        <h2 className="text-[13px] font-medium text-neutral-400 tracking-widest uppercase mb-3" style={font}>
          Free Preview
        </h2>
        <p className="text-[28px] font-semibold text-[#0a0a0a] tracking-tight leading-snug mb-2" style={font}>
          Get Your Free Website Preview
        </p>
        <p className="text-[14px] text-neutral-500 font-normal mb-10 leading-relaxed" style={font}>
          Fill out the form below. We'll build a custom preview for your business and send it within 7 days — no cost, no commitment.
        </p>

        {submitted ? (
          <div className="py-14 border border-neutral-200 rounded-xl bg-white text-center">
            <p className="text-[18px] font-semibold text-[#0a0a0a] tracking-tight" style={font}>
              You're all set.
            </p>
            <p className="text-[13px] text-neutral-500 mt-1" style={font}>
              Check your inbox — your preview is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label className={labelClass} style={font}>Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" required className={inputClass} style={font} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass} style={font}>Business Name</label>
              <input type="text" name="businessName" value={form.businessName} onChange={handleChange} placeholder="Your business name" required className={inputClass} style={font} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass} style={font}>Phone Number</label>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" required className={inputClass} style={font} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass} style={font}>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email address" required className={inputClass} style={font} />
            </div>

            <div className="flex flex-col gap-2">
              <label className={labelClass} style={font}>Do you currently have a website?</label>
              <div className="flex gap-5">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-[13px] text-neutral-600 font-normal" style={font}>
                    <input type="radio" name="hasWebsite" value={opt} checked={form.hasWebsite === opt} onChange={handleChange} required className="accent-[#0a0a0a]" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className={labelClass} style={font}>Estimated Budget</label>
              <select name="budget" value={form.budget} onChange={handleChange} required className={`${inputClass} appearance-none`} style={font}>
                <option value="" disabled>Select a range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-2.5k">$1,000–$2,500</option>
                <option value="2.5k-5k">$2,500–$5,000</option>
                <option value="5k+">$5,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-2.5 rounded-full bg-[#0a0a0a] text-white text-[13px] font-semibold tracking-tight hover:bg-[#171717] transition-colors"
                style={font}
              >
                Get My Free Preview
              </button>
            </div>

            <p className="text-[11px] text-neutral-400 font-normal leading-relaxed" style={font}>
              Once submitted, you'll receive an automated confirmation email. Your custom website preview will be delivered to your inbox within 7 business days.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="bg-[#0a0a0a] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex flex-col md:flex-row items-center gap-1.5 md:gap-5">
          <span className="text-[14px] font-semibold text-white tracking-tight" style={font}>Voss &amp; Co</span>
          <span className="text-neutral-700 hidden md:inline text-sm">·</span>
          <span className="text-[12px] text-neutral-500 font-normal" style={font}>Roman Voss</span>
          <span className="text-neutral-700 hidden md:inline text-sm">·</span>
          <a href="mailto:support@vossandco.com" className="text-[12px] text-neutral-500 font-normal hover:text-white transition-colors" style={font}>
            support@vossandco.com
          </a>
        </div>
        <p className="text-[11px] text-neutral-600 font-normal" style={font}>
          © 2026 Voss &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-white" style={font}>
      <Hero />
      <LogoBar />
      <Services />
      <HowItWorks />
      <OurWork />
      <FormSection />
      <Footer />
    </div>
  );
}
