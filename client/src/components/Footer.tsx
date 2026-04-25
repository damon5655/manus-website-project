/* ============================================================
   Footer — AG Best Cleaning Services
   Design System: Dark Precision / Liquid Glass
   - Company name, phone (clickable), email, service area
   - Page links matching navigation
   - "Get a Free Quote" CTA button
   ============================================================ */
import { Link } from "wouter";

export default function Footer() {
  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#quote-form";
    }
  };

  return (
    <footer
      style={{
        background: "#050608",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "4rem",
        paddingBottom: "2rem",
      }}
    >
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3rem",
            marginBottom: "3rem",
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontSize: "1.25rem",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "#ffffff",
                marginBottom: "1rem",
              }}
            >
              AG Best Cleaning Services
            </div>
            <p
              style={{
                fontSize: "0.875rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.7,
                maxWidth: "28rem",
                marginBottom: "1.5rem",
              }}
            >
              Residential and commercial cleaning in Abington and the Greater Boston area.
              Over 6 years serving homes and businesses with consistent, reliable results.
            </p>
            <a
              href="#quote-form"
              onClick={scrollToQuote}
              className="btn-primary"
              style={{ fontSize: "0.8125rem", padding: "0.625rem 1.5rem" }}
            >
              Get a Free Quote
            </a>
          </div>

          {/* Contact column */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              <a
                href="tel:+17818240404"
                style={{
                  fontSize: "0.9375rem",
                  color: "#ffffff",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                (781) 824-0404
              </a>
              <a
                href="mailto:contact@agbestcleaning.com"
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                }}
              >
                contact@agbestcleaning.com
              </a>
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                Abington, MA — Serving Greater Boston
              </span>
              <span style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                Mon–Sat, 8am–6pm
              </span>
            </div>
          </div>

          {/* Pages column */}
          <div>
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "1rem",
              }}
            >
              Pages
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    transition: "color 0.2s ease",
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            alignItems: "flex-start",
          }}
        >
          <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.3)" }}>
            © 2025 AG Best Cleaning Services. All rights reserved.
          </span>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 2fr 1fr 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
