/* ============================================================
   MobileCTA — Sticky bottom bar on mobile only
   Design System: Dark Precision / Liquid Glass
   - Phone number (clickable) + "Get a Free Quote" button
   - Hidden on desktop (md+)
   - Applied to every page
   ============================================================ */

export default function MobileCTA() {
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
    <div className="mobile-cta-bar">
      <a
        href="tel:+17818240404"
        style={{
          color: "rgba(255,255,255,0.85)",
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: 500,
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          flexShrink: 0,
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        (781) 824-0404
      </a>
      <a
        href="#quote-form"
        onClick={scrollToQuote}
        className="btn-primary"
        style={{
          padding: "0.625rem 1.25rem",
          fontSize: "0.8125rem",
          flex: 1,
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Get a Free Quote
      </a>
    </div>
  );
}
