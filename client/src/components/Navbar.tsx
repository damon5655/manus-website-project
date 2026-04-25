/* ============================================================
   Navbar — Liquid glass sticky navigation
   Design System: Dark Precision / Liquid Glass
   - Single nav for entire site, sticky on scroll
   - Liquid glass style: rgba dark + backdrop-blur
   - Logo: "AG Best" text mark
   - Links: About, Services, Gallery, Contact
   - CTA: "Get a Quote" button (white bg, black text)
   ============================================================ */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";

interface NavbarProps {
  currentPage?: string;
}

export default function Navbar({ currentPage }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("quote-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#quote-form";
    }
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        paddingLeft: "1.5rem",
        paddingRight: "1.5rem",
        paddingTop: "1.25rem",
        paddingBottom: scrolled ? "0.75rem" : "1.25rem",
        transition: "padding 0.3s ease",
      }}
    >
      <nav
        className="liquid-glass"
        style={{
          borderRadius: "0.75rem",
          padding: "0.5rem 1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontSize: "1.25rem",
              fontWeight: 600,
              letterSpacing: "-0.02em",
              color: "#ffffff",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            AG Best
          </span>
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "none",
            gap: "2rem",
            alignItems: "center",
          }}
          className="md-nav-links"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontSize: "0.875rem",
                color: location === link.href ? "#ffffff" : "rgba(255,255,255,0.65)",
                textDecoration: "none",
                transition: "color 0.2s ease",
                fontWeight: 400,
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a
            href="#quote-form"
            onClick={scrollToQuote}
            className="btn-primary"
            style={{
              padding: "0.5rem 1.25rem",
              fontSize: "0.8125rem",
              fontWeight: 500,
            }}
          >
            Get a Quote
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              color: "#ffffff",
              cursor: "pointer",
              padding: "0.25rem",
              display: "flex",
              flexDirection: "column",
              gap: "4px",
            }}
            className="mobile-menu-btn"
            aria-label="Toggle menu"
          >
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1.5px",
                background: "#ffffff",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1.5px",
                background: "#ffffff",
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: "20px",
                height: "1.5px",
                background: "#ffffff",
                transition: "transform 0.2s ease, opacity 0.2s ease",
                transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div
          className="liquid-glass"
          style={{
            borderRadius: "0.75rem",
            marginTop: "0.5rem",
            padding: "1rem",
            maxWidth: "1400px",
            margin: "0.5rem auto 0",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                display: "block",
                padding: "0.75rem 0.5rem",
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.85)",
                textDecoration: "none",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#quote-form"
            onClick={scrollToQuote}
            className="btn-primary"
            style={{
              display: "block",
              textAlign: "center",
              marginTop: "0.75rem",
              width: "100%",
            }}
          >
            Get a Free Quote
          </a>
        </div>
      )}

      <style>{`
        @media (min-width: 768px) {
          .md-nav-links { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
