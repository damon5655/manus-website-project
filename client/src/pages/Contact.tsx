/* ============================================================
   Contact Page — AG Best Cleaning Services
   Design System: Dark Precision / Liquid Glass
   ============================================================ */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "2rem", marginBottom: "1rem" }}>✓</div>
        <div style={{ fontSize: "1.25rem", fontWeight: 500, marginBottom: "0.5rem" }}>
          Message received
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
            Phone
          </label>
          <input
            className="form-input"
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>
        <div>
          <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>
            Service Type
          </label>
          <select
            className="form-input"
            value={formData.serviceType}
            onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
            style={{ cursor: "pointer" }}
          >
            <option value="" style={{ background: "#0a0c0f" }}>Select a service</option>
            <option value="residential" style={{ background: "#0a0c0f" }}>Residential Cleaning</option>
            <option value="commercial" style={{ background: "#0a0c0f" }}>Commercial Cleaning</option>
            <option value="moveinout" style={{ background: "#0a0c0f" }}>Move In / Move Out</option>
            <option value="postconstruction" style={{ background: "#0a0c0f" }}>Post-Construction</option>
            <option value="deepclean" style={{ background: "#0a0c0f" }}>First-Time Deep Clean</option>
          </select>
        </div>
      </div>
      <div>
        <label style={{ display: "block", fontSize: "0.8125rem", color: "rgba(255,255,255,0.55)", marginBottom: "0.4rem" }}>
          Message
        </label>
        <textarea
          className="form-input"
          placeholder="Tell us about your space and what you need..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          style={{ resize: "vertical" }}
        />
      </div>
      <button type="submit" className="btn-primary" style={{ marginTop: "0.5rem", justifyContent: "center" }}>
        Send Message
      </button>
    </form>
  );
}

export default function Contact() {
  return (
    <div style={{ background: "#0a0c0f", minHeight: "100vh", color: "#ffffff" }}>
      <Navbar />

      {/* Page header */}
      <section
        style={{
          paddingTop: "9rem",
          paddingBottom: "4rem",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="container">
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>
            Contact
          </div>
          <h1
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "36rem" }}
          >
            Get in touch.
          </h1>
        </div>
      </section>

      {/* Contact layout */}
      <section className="section-pad">
        <div className="container">
          <div className="contact-layout">
            {/* Left: contact info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <div className="section-label" style={{ marginBottom: "0.75rem" }}>
                  Reach us directly
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <a
                    href="tel:+17818240404"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      textDecoration: "none",
                      color: "#ffffff",
                      padding: "1rem",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "background 0.2s ease",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.15rem" }}>Phone</div>
                      <div style={{ fontSize: "1rem", fontWeight: 500 }}>(781) 824-0404</div>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@agbestcleaning.com"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      textDecoration: "none",
                      color: "#ffffff",
                      padding: "1rem",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>
                      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.15rem" }}>Email</div>
                      <div style={{ fontSize: "0.9375rem" }}>contact@agbestcleaning.com</div>
                    </div>
                  </a>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.15rem" }}>Address</div>
                      <div style={{ fontSize: "0.9375rem" }}>729 Old Randolph St, Abington, MA 02351</div>
                    </div>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      padding: "1rem",
                      background: "rgba(255,255,255,0.04)",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: "rgba(255,255,255,0.5)", flexShrink: 0 }}>
                      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
                    </svg>
                    <div>
                      <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", marginBottom: "0.15rem" }}>Hours</div>
                      <div style={{ fontSize: "0.9375rem" }}>Mon–Sat, 8am–6pm</div>
                    </div>
                  </div>
                </div>
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
              <h2 style={{ fontSize: "1.25rem", fontWeight: 400, marginBottom: "1.5rem", letterSpacing: "-0.02em" }}>
                Send us a message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />

      <style>{`
        @media (min-width: 1024px) {
          .contact-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 4rem; align-items: start; }
        }
        .contact-layout { display: flex; flex-direction: column; gap: 2.5rem; }
        @media (min-width: 768px) {
          .form-grid-2 { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}
