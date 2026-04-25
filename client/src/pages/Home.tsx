/* ============================================================
   Home Page — AG Best Cleaning Services
   Design System: Dark Precision / Liquid Glass
   Sections:
   1. Hero (video background, liquid glass nav, animated heading)
   2. Trust Signals (reviews + stats)
   3. Services (numbered rows)
   4. Mid-page CTA
   5. Quote Form (id="quote-form")
   6. Footer
   ============================================================ */
import { useState } from "react";
import AnimatedHeading from "@/components/AnimatedHeading";
import FadeIn from "@/components/FadeIn";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

// Google "G" SVG logo
const GoogleLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

// Star rating component
const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="stars" style={{ display: "flex", gap: "2px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const reviews = [
  {
    name: "Jane Twombly",
    text: "We've been using AG Cleaning for about 3 years now and can't say enough about the company. Very thorough, always on time, professional and reliable. House always looks and smells amazing when they are done. They are quick to respond to messages and are super thoughtful.",
    time: "10 months ago",
  },
  {
    name: "Peter Kenney",
    text: "The AG Best Cleaning Services personnel are professional, friendly, flexible and care about their clients. I recommend AG Best Cleaning Services to friends and acquaintances all the time because I know they will be as happy with their service as I am.",
    time: "1 year ago",
  },
  {
    name: "Stacey Pretti",
    text: "Anna and her team were responsive and thorough during my family's first deep clean service. I appreciated that, through the chaos of moving, there was reliability and attentiveness to our requests.",
    time: "1 year ago",
  },
  {
    name: "Richard McKeraghan",
    text: "I had AG Best do a deep cleaning on an apartment that was very run down. The word 'Best' perfectly describes the job that Anna and her crew did. It looks brand new and the price was very reasonable. I highly recommend this company.",
    time: "2 years ago",
  },
  {
    name: "Lora Di",
    text: "Anna and her team are very professional and friendly. The quality of cleaning is excellent. They are dependable. A morning appointment is very important to me and they always keep that time frame. I also feel very confident that my home is secure during their visits.",
    time: "5 years ago",
  },
  {
    name: "Marguerite Rock",
    text: "I started using AG Best Cleaning a month ago. They have a true talent for cleaning. My walk-in shower hasn't sparkled like this since it was new. They are very communicative about when they are coming and the team is in and out in an hour or less.",
    time: "1 year ago",
  },
  {
    name: "Patricia Grazioso",
    text: "Dependable, extremely reasonable and speedy. It is always great to walk into a fresh smelling clean home. We have been using Aninha and her crew for 6 months now and it really alleviates stress to take this off my shoulders.",
    time: "1 year ago",
  },
];

const services = [
  { num: "01", title: "Residential Cleaning", desc: "Regular and one-time cleaning for homes of any size in Abington and Greater Boston." },
  { num: "02", title: "Commercial Cleaning", desc: "Office, retail, and workspace cleaning scheduled around your business hours." },
  { num: "03", title: "Move In / Move Out", desc: "Thorough cleaning before or after a move, including all rooms and appliances." },
  { num: "04", title: "Post-Construction Cleaning", desc: "Dust, debris, and residue removal after renovation or new construction." },
  { num: "05", title: "First-Time Deep Clean", desc: "A comprehensive initial clean to bring any space up to a consistent standard." },
];

function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceArea: "Abington, MA",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "3rem 1rem",
        }}
      >
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
        <div style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "0.5rem" }}>
          Request received
        </div>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9375rem" }}>
          We'll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <div style={{ display: "grid", gap: "1rem" }} className="form-grid-2">
        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>
            Name
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="Your name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>
            Email
          </label>
          <input
            className="form-input"
            type="email"
            placeholder="your@email.com"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>
      </div>
      <div style={{ display: "grid", gap: "1rem" }} className="form-grid-2">
        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>
            Phone Number
          </label>
          <input
            className="form-input"
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>
            Service Area
          </label>
          <input
            className="form-input"
            type="text"
            placeholder="City, MA"
            value={formData.serviceArea}
            onChange={(e) => setFormData({ ...formData, serviceArea: e.target.value })}
          />
        </div>
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
        Request a Free Quote
      </button>
    </form>
  );
}

export default function Home() {
  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#0a0c0f", minHeight: "100vh", color: "#ffffff" }}>
      <Navbar />

      {/* ============================================================
          SECTION 1 — HERO
          ============================================================ */}
      <section
        style={{
          position: "relative",
          height: "100vh",
          minHeight: "600px",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Hero Background Image */}
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/oK7JsatenncDakA4439osZ/hero-bg-RqLGDsuZ4EST3TYJpGi4JV.webp"
          alt="Clean commercial space"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
        {/* Dark overlay for text readability */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
            zIndex: 1,
          }}
        />

        {/* Hero Content — bottom of viewport */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
            paddingBottom: "3rem",
          }}
          className="hero-content-pad"
        >
          <div className="hero-bottom-grid">
            {/* Left column */}
            <div>
              <h1
                className="display-heading"
                style={{
                  fontSize: "clamp(2.5rem, 6vw, 5rem)",
                  marginBottom: "1rem",
                  letterSpacing: "-0.04em",
                  fontWeight: 300,
                }}
              >
                <AnimatedHeading
                  text={"Commercial cleaning\nin Abington and Boston."}
                  initialDelay={200}
                />
              </h1>

              <FadeIn delay={800} duration={1000}>
                <p
                  style={{
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    color: "rgba(255,255,255,0.7)",
                    marginBottom: "1.5rem",
                    maxWidth: "36rem",
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  Residential and commercial cleaning you can schedule and rely on.
                  Serving Abington, MA and the Greater Boston area.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
                  <a href="#quote-form" onClick={scrollToQuote} className="btn-primary">
                    Get a Free Quote
                  </a>
                  <a href="tel:+17818240404" className="btn-secondary liquid-glass">
                    (781) 824-0404
                  </a>
                </div>
              </FadeIn>
            </div>

            {/* Right column — tag */}
            <FadeIn delay={1400} duration={1000}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="liquid-glass"
                  style={{
                    borderRadius: "0.75rem",
                    padding: "0.75rem 1.5rem",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <div style={{ fontSize: "clamp(1rem, 2vw, 1.25rem)", fontWeight: 300, color: "#ffffff" }}>
                    5.0 ★ — 33 Google reviews
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2 — TRUST SIGNALS (Reviews)
          ============================================================ */}
      <section className="section-pad" style={{ background: "#0a0c0f" }}>
        <div className="container">
          <div style={{ marginBottom: "3rem" }}>
            <div className="section-label" style={{ marginBottom: "0.75rem" }}>
              What clients say
            </div>
            <h2
              className="display-heading"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", maxWidth: "32rem" }}
            >
              33 reviews. All five stars.
            </h2>
          </div>

          {/* Reviews grid */}
          <div className="reviews-grid" style={{ display: "grid", gap: "1rem" }}>
            {reviews.map((review, i) => (
              <div key={i} className="review-card">
                {/* Platform logo top-right */}
                <div
                  style={{
                    position: "absolute",
                    top: "1rem",
                    right: "1rem",
                  }}
                >
                  <GoogleLogo />
                </div>

                <Stars />
                <p
                  style={{
                    fontSize: "0.9375rem",
                    color: "rgba(255,255,255,0.75)",
                    lineHeight: 1.65,
                    margin: "0.75rem 0",
                    paddingRight: "1.5rem",
                  }}
                >
                  "{review.text}"
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500, color: "#ffffff" }}>
                    {review.name}
                  </span>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
                    {review.time}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Stats bar */}
          <div
            className="liquid-glass stats-bar"
            style={{
              borderRadius: "0.75rem",
              padding: "1.5rem 2rem",
              marginTop: "2.5rem",
              display: "grid",
              gap: "1.5rem",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { num: "6+", label: "Years in operation" },
              { num: "33", label: "Five-star reviews" },
              { num: "5.0", label: "Google rating" },
              { num: "Mon–Sat", label: "Available hours" },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "clamp(1.5rem, 3vw, 2rem)",
                    fontWeight: 300,
                    letterSpacing: "-0.03em",
                    color: "#ffffff",
                    marginBottom: "0.25rem",
                  }}
                >
                  {stat.num}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.45)" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          SERVICES SECTION
          ============================================================ */}
      <section className="section-pad" style={{ background: "#080a0d" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gap: "4rem",
              alignItems: "start",
            }}
            className="services-layout"
          >
            {/* Left: heading */}
            <div style={{ position: "sticky", top: "6rem" }}>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                What we do
              </div>
              <h2
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", marginBottom: "1.5rem" }}
              >
                Cleaning services for homes and businesses.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                We work in Abington, MA and surrounding areas in Greater Boston.
                Scheduling is straightforward — call or fill out the form below.
              </p>
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                <a href="#quote-form" onClick={(e) => { e.preventDefault(); document.getElementById("quote-form")?.scrollIntoView({ behavior: "smooth" }); }} className="btn-primary">
                  Request a Quote
                </a>
                <a href="/services" className="btn-secondary">
                  View All Services
                </a>
              </div>
            </div>

            {/* Right: service rows */}
            <div>
              {services.map((service) => (
                <div key={service.num} className="service-row">
                  <span className="service-number">{service.num}</span>
                  <div>
                    <div
                      style={{
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "#ffffff",
                        marginBottom: "0.25rem",
                      }}
                    >
                      {service.title}
                    </div>
                    <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                      {service.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MID-PAGE CTA
          ============================================================ */}
      <section
        style={{
          background: "#ffffff",
          padding: "4rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "1.25rem",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: 300,
              letterSpacing: "-0.04em",
              color: "#0a0c0f",
              maxWidth: "30rem",
              lineHeight: 1.15,
            }}
          >
            Ready to schedule a cleaning?
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(0,0,0,0.55)", maxWidth: "24rem" }}>
            Fast response. No obligation.
          </p>
          <a
            href="#quote-form"
            onClick={scrollToQuote}
            style={{
              background: "#0a0c0f",
              color: "#ffffff",
              padding: "0.875rem 2.5rem",
              borderRadius: "0.5rem",
              fontWeight: 500,
              fontSize: "0.9375rem",
              textDecoration: "none",
              transition: "background 0.2s ease",
            }}
          >
            Get a Free Quote
          </a>
        </div>
      </section>

      {/* ============================================================
          QUOTE FORM (Block 7)
          ============================================================ */}
      <section
        id="quote-form"
        className="section-pad"
        style={{ background: "#0a0c0f" }}
      >
        <div className="container">
          <div className="quote-form-layout">
            {/* Left: heading */}
            <div>
              <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                Free quote
              </div>
              <h2
                className="display-heading"
                style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", marginBottom: "1rem" }}
              >
                Request a quote.
              </h2>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                Fill out the form and we'll get back to you within one business day.
                Or call us directly at{" "}
                <a
                  href="tel:+17818240404"
                  style={{ color: "#ffffff", textDecoration: "underline" }}
                >
                  (781) 824-0404
                </a>
                .
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  "Residential and commercial",
                  "Abington, MA and Greater Boston",
                  "Mon–Sat, 8am–6pm",
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.55)",
                    }}
                  >
                    <span style={{ color: "rgba(255,255,255,0.3)" }}>—</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: form */}
            <div
              className="liquid-glass"
              style={{
                borderRadius: "1rem",
                padding: "2rem",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <QuoteForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />

      <style>{`
        @media (min-width: 1024px) {
          .hero-content-pad {
            padding-left: 4rem !important;
            padding-right: 4rem !important;
            padding-bottom: 4rem !important;
          }
          .hero-bottom-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            align-items: flex-end;
            gap: 2rem;
          }
          .reviews-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .services-layout {
            grid-template-columns: 1fr 1fr !important;
          }
          .quote-form-layout {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
          }
        }
        @media (min-width: 768px) {
          .reviews-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stats-bar {
            grid-template-columns: repeat(4, 1fr) !important;
          }
          .form-grid-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        .hero-bottom-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .quote-form-layout {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }
        .stats-bar {
          grid-template-columns: repeat(2, 1fr) !important;
        }
      `}</style>
    </div>
  );
}
