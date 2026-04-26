/**
 * Voss & Co — Single Page Website
 *
 * Design System:
 * - Font: Inter (Google Fonts, 400/500/600/700)
 * - Colors: gray-900 / gray-600 / gray-500 / #202A36 / white / gray-50
 * - Buttons: rounded-full, px-4 py-2, bg #202A36, white text, hover #1a2229
 * - Layout: max-w-7xl, px-8, centered
 * - Breakpoints: mobile-first, md, lg
 * - Transitions: transition-colors throughout
 *
 * Sections:
 * 1. Hero (video background, nav, headline, CTA)
 * 2. Logo Bar (tools & partners)
 * 3. Services (Website Design + Automated Lead System)
 * 4. How It Works (3 steps)
 * 5. Our Work (3 placeholder image cards)
 * 6. Form (lead capture)
 * 7. Footer
 */

import { useState } from "react";
import { Menu, X, Globe, Zap, ArrowRight } from "lucide-react";

// ─── Smooth scroll helper ────────────────────────────────────────────────────
function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

// ─── Navigation ──────────────────────────────────────────────────────────────
function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Home", target: "home" },
    { label: "Services", target: "services" },
    { label: "How It Works", target: "how-it-works" },
    { label: "Our Work", target: "our-work" },
    { label: "Contact", target: "form" },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-30">
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        {/* Brand */}
        <span className="text-2xl font-semibold text-gray-900 select-none">
          Voss &amp; Co
        </span>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => scrollTo(l.target)}
              className="text-gray-900 hover:text-gray-700 transition-colors text-sm font-medium"
            >
              {l.label}
            </button>
          ))}
        </div>

        {/* Desktop CTA */}
        <button
          onClick={() => scrollTo("form")}
          className="hidden md:inline-flex items-center px-4 py-2 rounded-full text-white text-sm font-medium transition-colors"
          style={{ backgroundColor: "#202A36" }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#1a2229")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
              "#202A36")
          }
        >
          Get a Free Preview
        </button>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden mx-4 rounded-2xl shadow-lg bg-white/95 backdrop-blur-sm px-6 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <button
              key={l.target}
              onClick={() => {
                scrollTo(l.target);
                setOpen(false);
              }}
              className="text-gray-900 hover:text-gray-700 transition-colors text-sm font-medium text-left py-1"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => {
              scrollTo("form");
              setOpen(false);
            }}
            className="mt-2 px-4 py-2 rounded-full text-white text-sm font-medium transition-colors text-center"
            style={{ backgroundColor: "#202A36" }}
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
      className="relative h-screen overflow-hidden bg-gray-50"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_091828_e240eb17-6edc-4129-ad9d-98678e3fd238.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40" />

      {/* Nav */}
      <Nav />

      {/* Hero content */}
      <div className="relative h-full flex flex-col">
        <div className="flex-1 flex items-center justify-center -mt-20">
          <div className="text-center px-4">
            {/* Headline */}
            <h1 className="leading-none tracking-tighter">
              <span className="block text-6xl md:text-7xl lg:text-8xl font-normal text-gray-500">
                Sales. Tech.
              </span>
              <span
                className="block text-6xl md:text-7xl lg:text-8xl font-normal"
                style={{ color: "#202A36", marginTop: "-12px" }}
              >
                New Clients.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              We build the system that brings clients in.
            </p>

            {/* CTA */}
            <button
              onClick={() => scrollTo("form")}
              className="px-6 py-3 rounded-full text-white font-medium transition-colors text-base"
              style={{ backgroundColor: "#202A36" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#1a2229")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#202A36")
              }
            >
              Get a Free Website Preview
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Logo Bar ─────────────────────────────────────────────────────────────────
function LogoBar() {
  // Six placeholder logo slots
  const logos = [
    "Webflow",
    "HubSpot",
    "Zapier",
    "Stripe",
    "Notion",
    "Figma",
  ];

  return (
    <section className="bg-gray-50 border-t border-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-8">
        <p className="text-center text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
          Powered by tools we trust
        </p>
        {/* Logo row — scrollable on mobile */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center"
              title={name}
            >
              {/* placeholder — replace with real logo */}
              <div className="h-8 w-24 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-xs text-gray-400 font-medium select-none">
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
      icon: <Globe size={28} strokeWidth={1.5} className="text-gray-600" />,
      title: "Website Design",
      description:
        "A website that doesn't convert is just an expense. We build sites structured to turn visitors into clients — clear, fast, and built to close.",
    },
    {
      icon: <Zap size={28} strokeWidth={1.5} className="text-gray-600" />,
      title: "Automated Lead System",
      description:
        "Stop chasing leads manually. We build the outreach infrastructure that runs in the background — so new client inquiries come to you.",
    },
  ];

  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-14 text-center tracking-tight">
          What We Build
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-gray-100 rounded-2xl p-10 flex flex-col gap-5 hover:shadow-md transition-shadow bg-gray-50"
            >
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm">
                {card.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">
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
      description:
        "Fill out the form below with your basic business details.",
    },
    {
      number: "02",
      title: "We Build Your Preview",
      description:
        "Our team puts together a free custom website preview tailored to your business.",
    },
    {
      number: "03",
      title: "Receive It Within 7 Days",
      description:
        "Your preview lands in your inbox within 7 business days.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-14 text-center tracking-tight">
          How It Works
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {steps.map((step, idx) => (
            <div key={step.number} className="flex flex-col md:flex-row items-start">
              {/* Step card */}
              <div className="flex-1 flex flex-col gap-4 px-0 md:px-6 pb-10 md:pb-0">
                <span
                  className="text-4xl font-bold tracking-tighter"
                  style={{ color: "#202A36" }}
                >
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {step.description}
                </p>
                {idx === 2 && (
                  <p className="text-gray-400 text-xs italic mt-1">
                    no commitment required
                  </p>
                )}
              </div>

              {/* Arrow between steps (desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex items-center self-start mt-4">
                  <ArrowRight size={20} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollTo("form")}
            className="px-6 py-3 rounded-full text-white font-medium transition-colors text-base"
            style={{ backgroundColor: "#202A36" }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#1a2229")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                "#202A36")
            }
          >
            Get a Free Website Preview
          </button>
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
    <section id="our-work" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-14 text-center tracking-tight">
          Our Work
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="flex flex-col gap-3">
              {/* placeholder — replace with real image */}
              <div
                className="w-full rounded-xl bg-gray-100 overflow-hidden"
                style={{ aspectRatio: "16/10" }}
              >
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
              <p className="text-sm text-gray-500 font-medium">{p.caption}</p>
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

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="form" className="bg-gray-50 py-24">
      <div className="max-w-2xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3 text-center tracking-tight">
          Get Your Free Website Preview
        </h2>
        <p className="text-center text-gray-600 mb-12 text-base leading-relaxed">
          Fill out the form below. We'll build a custom preview for your
          business and send it within 7 days — no cost, no commitment.
        </p>

        {submitted ? (
          <div className="text-center py-16">
            <p className="text-xl font-medium text-gray-900">
              You're all set. Check your inbox — your preview is on its way.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            {/* Business Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Business Name
              </label>
              <input
                type="text"
                name="businessName"
                value={form.businessName}
                onChange={handleChange}
                placeholder="Your business name"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your email address"
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
              />
            </div>

            {/* Has Website */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Do you currently have a website?
              </label>
              <div className="flex gap-6">
                {["Yes", "No"].map((opt) => (
                  <label
                    key={opt}
                    className="flex items-center gap-2 cursor-pointer text-sm text-gray-700"
                  >
                    <input
                      type="radio"
                      name="hasWebsite"
                      value={opt}
                      checked={form.hasWebsite === opt}
                      onChange={handleChange}
                      required
                      className="accent-gray-900"
                    />
                    {opt}
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-gray-700">
                Estimated Budget
              </label>
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-gray-300 transition appearance-none"
              >
                <option value="" disabled>
                  Select a range
                </option>
                <option value="under-1k">Under $1,000</option>
                <option value="1k-2.5k">$1,000–$2,500</option>
                <option value="2.5k-5k">$2,500–$5,000</option>
                <option value="5k+">$5,000+</option>
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full md:w-auto md:self-start px-6 py-3 rounded-full text-white font-medium transition-colors text-base mt-2"
              style={{ backgroundColor: "#202A36" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#1a2229")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "#202A36")
              }
            >
              Get My Free Preview
            </button>

            <p className="text-xs text-gray-400 leading-relaxed mt-1">
              Once submitted, you'll receive an automated confirmation email.
              Your custom website preview will be delivered to your inbox within
              7 business days.
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
          <span className="text-white text-lg font-semibold">Voss &amp; Co</span>
          <span className="text-gray-400 text-sm hidden md:inline">·</span>
          <span className="text-gray-400 text-sm">Roman Voss</span>
          <span className="text-gray-400 text-sm hidden md:inline">·</span>
          <a
            href="mailto:support@vossandco.com"
            className="text-gray-400 text-sm hover:text-white transition-colors"
          >
            support@vossandco.com
          </a>
        </div>
        <p className="text-gray-500 text-xs">
          © 2025 Voss &amp; Co. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: "'Inter', sans-serif" }}>
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
