/**
 * Voss & Co — Single Page Website
 *
 * Design System:
 * - Headline font: Cormorant Garamond (300/400/500/600, italic available)
 * - Body font: DM Sans (300/400/500/600)
 * - Colors: gray-900 / gray-600 / gray-500 / #202A36 / white / gray-50
 * - Buttons: rounded-full, px-6 py-3, bg #202A36, white text, hover #1a2229
 * - Layout: max-w-7xl, px-8, centered
 * - Breakpoints: mobile-first, md, lg
 * - Transitions: transition-colors throughout
 */

import { useState } from "react";
import { Menu, X, Globe, Zap, ArrowRight } from "lucide-react";

// ─── Font helpers ─────────────────────────────────────────────────────────────
const fontHeadline: React.CSSProperties = { fontFamily: "'Cormorant Garamond', Georgia, serif" };
const fontBody: React.CSSProperties    = { fontFamily: "'DM Sans', system-ui, sans-serif" };

// ─── Smooth scroll helper ────────────────────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── CTA Button ──────────────────────────────────────────────────────────────
interface CtaButtonProps {
  label: string;
  target: string;
  fullWidthMobile?: boolean;
  className?: string;
}

function CtaButton({ label, target, fullWidthMobile = false, className = "" }: CtaButtonProps) {
  return (
    <button
      onClick={() => scrollTo(target)}
      className={`${fullWidthMobile ? "w-full md:w-auto" : ""} px-6 py-3 rounded-full text-white font-medium transition-colors text-sm tracking-widest uppercase ${className}`}
      style={{ ...fontBody, backgroundColor: "#202A36", letterSpacing: "0.12em" }}
      onMouseEnter={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a2229")
      }
      onMouseLeave={(e) =>
        ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#202A36")
      }
    >
      {label}
    </button>
  );
}

// ─── Navigation ──────────────────────────────────────────────────────────────
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
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Brand */}
        <span
          className="text-2xl font-light text-white select-none tracking-widest uppercase"
          style={fontHeadline}
        >
          Voss &amp; Co
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="text-white/70 hover:text-white transition-colors text-xs font-normal tracking-widest uppercase"
              style={fontBody}
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("form")}
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full text-white text-xs font-normal tracking-widest uppercase transition-colors border border-white/25 backdrop-blur-sm"
          style={{ ...fontBody, backgroundColor: "rgba(32,42,54,0.6)", letterSpacing: "0.12em" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(26,34,41,0.9)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "rgba(32,42,54,0.6)")
          }
        >
          Get a Free Preview
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mx-4 rounded-2xl shadow-lg bg-gray-900/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => { scrollTo(l.target); setOpen(false); }}
              className="text-white/70 hover:text-white transition-colors text-xs font-normal tracking-widest uppercase text-left py-1"
              style={fontBody}
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => { scrollTo("form"); setOpen(false); }}
            className="mt-2 px-5 py-2 rounded-full text-white text-xs font-normal tracking-widest uppercase transition-colors text-center"
            style={{ ...fontBody, backgroundColor: "#202A36", letterSpacing: "0.12em" }}
          >
            Get a Free Preview
          </button>
        </div>
      )}
    </nav>
  );
}

// ─── Hero Section ─────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden"
      style={{ backgroundColor: "#0d1117" }}
    >
      {/* Static image background — placeholder: replace with real hero image */}
      <img
        src="/hero-bg.jpg"
        alt="Voss & Co hero background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0.55) 0%, rgba(13,17,23,0.40) 55%, rgba(13,17,23,0.75) 100%)" }}
      />

      {/* Nav */}
      <Nav />

      {/* Hero content */}
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center -mt-16">
          <div className="text-center px-4">

            {/* Headline — Cormorant Garamond, editorial weight */}
            <h1 className="leading-none" style={{ letterSpacing: "-0.01em" }}>
              <span
                className="block text-7xl md:text-8xl lg:text-9xl font-light text-white/50"
                style={fontHeadline}
              >
                Sales. Tech.
              </span>
              <span
                className="block text-7xl md:text-8xl lg:text-9xl font-light text-white"
                style={{ ...fontHeadline, marginTop: "-8px" }}
              >
                New Clients.
              </span>
            </h1>

            {/* Subtitle — DM Sans, airy */}
            <p
              className="mt-7 text-base md:text-lg text-white/60 max-w-xl mx-auto mb-10 font-light tracking-wide"
              style={fontBody}
            >
              We build the system that brings clients in.
            </p>

            {/* CTA */}
            <CtaButton label="Get a Free Website Preview" target="form" />
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
    <section className="bg-gray-50 border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <p
          className="text-center text-xs font-normal text-gray-400 uppercase tracking-widest mb-8"
          style={fontBody}
        >
          Powered by tools we trust
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((name) => (
            <div key={name} className="flex items-center justify-center" title={name}>
              {/* placeholder — replace with real logo */}
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400 font-normal select-none" style={fontBody}>
                  {name}
                </span>
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
      icon: <Globe size={26} strokeWidth={1.2} className="text-gray-500" />,
      title: "Website Design",
      description:
        "A website that doesn't convert is just an expense. We build sites structured to turn visitors into clients — clear, fast, and built to close.",
    },
    {
      icon: <Zap size={26} strokeWidth={1.2} className="text-gray-500" />,
      title: "Automated Lead System",
      description:
        "Stop chasing leads manually. We build the outreach infrastructure that runs in the background — so new client inquiries come to you.",
    },
  ];

  return (
    <section id="services" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center"
          style={{ ...fontHeadline, letterSpacing: "0.01em" }}
        >
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-gray-100 rounded-2xl p-10 flex flex-col gap-5 hover:shadow-md transition-shadow bg-gray-50"
            >
              <div className="w-11 h-11 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                {card.icon}
              </div>
              <h3
                className="text-2xl font-light text-gray-900"
                style={fontHeadline}
              >
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-light" style={fontBody}>
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
    <section id="how-it-works" className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center"
          style={{ ...fontHeadline, letterSpacing: "0.01em" }}
        >
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex flex-row md:flex-col">
              <div className="flex-1 flex flex-col gap-4 px-0 md:px-6 pb-10 md:pb-0">
                <span
                  className="text-5xl font-light tracking-tighter"
                  style={{ ...fontHeadline, color: "#202A36" }}
                >
                  {step.number}
                </span>
                <h3 className="text-xl font-light text-gray-900" style={fontHeadline}>
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light" style={fontBody}>
                  {step.description}
                </p>
                {idx === 2 && (
                  <p className="text-gray-400 text-xs italic mt-1" style={fontBody}>
                    no commitment required
                  </p>
                )}
              </div>

              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center self-start mt-6">
                  <ArrowRight size={18} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <CtaButton label="Get a Free Website Preview" target="form" />
        </div>
      </div>
    </section>
  );
}

// ─── Our Work ─────────────────────────────────────────────────────────────────
function OurWork() {
  const projects = [
    { caption: "Project — Real Estate" },
    { caption: "Project — Legal Services" },
    { caption: "Project — Home Services" },
  ];

  return (
    <section id="our-work" className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-8">
        <h2
          className="text-4xl md:text-5xl font-light text-gray-900 mb-16 text-center"
          style={{ ...fontHeadline, letterSpacing: "0.01em" }}
        >
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* placeholder — replace with real image */}
              <div className="w-full rounded-xl bg-gray-100 overflow-hidden" style={{ aspectRatio: "16/10" }}>
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
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-xs text-gray-400 font-normal tracking-widest uppercase" style={fontBody}>
                {p.caption}
              </p>
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
    "w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-800 placeholder-gray-300 text-sm font-light focus:outline-none focus:ring-2 focus:ring-gray-300 transition";

  return (
    <section id="form" className="bg-gray-50 py-28">
      <div className="max-w-2xl mx-auto px-8">
        <h2
          className="text-4xl md:text-5xl font-light text-gray-900 mb-3 text-center"
          style={{ ...fontHeadline, letterSpacing: "0.01em" }}
        >
          Get Your Free Website Preview
        </h2>
        <p className="text-center text-gray-400 mb-14 text-sm font-light leading-relaxed" style={fontBody}>
          Fill out the form below. We'll build a custom preview for your business and send it within 7 days — no cost, no commitment.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <p className="text-2xl font-light text-gray-900" style={fontHeadline}>
              You're all set. Check your inbox — your preview is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-gray-500 uppercase tracking-widest" style={fontBody}>Full Name</label>
              <input type="text" name="fullName" value={form.fullName} onChange={handleChange} placeholder="Your name" required className={inputClass} style={fontBody} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-gray-500 uppercase tracking-widest" style={fontBody}>Business Name</label>
              <input type="text" name="businessName" value={form.businessName} onChange={handleChange} placeholder="Your business name" required className={inputClass} style={fontBody} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-gray-500 uppercase tracking-widest" style={fontBody}>Phone Number</label>
              <input type="text" name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" required className={inputClass} style={fontBody} />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-gray-500 uppercase tracking-widest" style={fontBody}>Email Address</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email address" required className={inputClass} style={fontBody} />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-normal text-gray-500 uppercase tracking-widest" style={fontBody}>Do you currently have a website?</label>
              <div className="flex gap-6">
                {["Yes", "No"].map((opt) => (
                  <label key={opt} className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 font-light" style={fontBody}>
                    <input type="radio" name="hasWebsite" value={opt} checked={form.hasWebsite === opt} onChange={handleChange} required className="accent-gray-900" />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-normal text-gray-500 uppercase tracking-widest" style={fontBody}>Estimated Budget</label>
              <select name="budget" value={form.budget} onChange={handleChange} required className={`${inputClass} appearance-none`} style={fontBody}>
                <option value="" disabled>Select a range</option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-2.5k">$1,000–$2,500</option>
                <option value="2.5k-5k">$2,500–$5,000</option>
                <option value="5k+">$5,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full md:w-auto md:self-start px-6 py-3 rounded-full text-white font-normal transition-colors text-xs tracking-widest uppercase mt-2"
              style={{ ...fontBody, backgroundColor: "#202A36", letterSpacing: "0.12em" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1a2229")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.backgroundColor = "#202A36")}
            >
              Get My Free Preview
            </button>

            <p className="text-xs text-gray-400 font-light leading-relaxed mt-1" style={fontBody}>
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
    <footer style={{ backgroundColor: "#202A36" }} className="py-10">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span className="text-white text-xl font-light tracking-widest uppercase" style={fontHeadline}>
            Voss &amp; Co
          </span>
          <span className="text-gray-500 text-sm hidden md:inline">·</span>
          <span className="text-gray-400 text-xs font-light tracking-wide" style={fontBody}>Roman Voss</span>
          <span className="text-gray-500 text-sm hidden md:inline">·</span>
          <a href="mailto:support@vossandco.com" className="text-gray-400 text-xs font-light hover:text-white transition-colors tracking-wide" style={fontBody}>
            support@vossandco.com
          </a>
        </div>
        <p className="text-gray-500 text-xs font-light tracking-wide" style={fontBody}>
          © 2026 Voss &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" style={fontBody}>
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
