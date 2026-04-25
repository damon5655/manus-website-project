/* ============================================================
   Services Page — AG Best Cleaning Services
   Design System: Dark Precision / Liquid Glass
   ============================================================ */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const services = [
  {
    num: "01",
    title: "Residential Cleaning",
    desc: "Regular and one-time cleaning for homes of any size. We handle kitchens, bathrooms, bedrooms, living areas, and common spaces. Scheduling is flexible — weekly, bi-weekly, monthly, or as needed.",
    includes: ["Kitchen and bathrooms", "Bedrooms and living areas", "Floors, surfaces, and fixtures", "Flexible scheduling"],
  },
  {
    num: "02",
    title: "Commercial Cleaning",
    desc: "Office, retail, and workspace cleaning scheduled around your business hours. We keep commercial environments clean and presentable without disrupting operations.",
    includes: ["Office spaces and workstations", "Restrooms and break rooms", "Lobbies and common areas", "After-hours scheduling available"],
  },
  {
    num: "03",
    title: "Move In / Move Out Cleaning",
    desc: "Thorough cleaning before or after a move. We cover every room, including inside appliances, cabinets, and closets — the areas that standard cleaning often skips.",
    includes: ["All rooms and closets", "Inside appliances and cabinets", "Bathrooms and kitchens", "Baseboards and window sills"],
  },
  {
    num: "04",
    title: "Post-Construction Cleaning",
    desc: "Dust, debris, and residue removal after renovation or new construction. We handle the cleanup so the space is ready to use.",
    includes: ["Dust and debris removal", "Surface and floor cleaning", "Window and fixture cleaning", "Final walkthrough ready"],
  },
  {
    num: "05",
    title: "First-Time Deep Clean",
    desc: "A comprehensive initial clean to bring any space up to a consistent standard. Recommended for new clients before starting a regular schedule.",
    includes: ["Full top-to-bottom clean", "All surfaces and fixtures", "Appliances and cabinets", "Establishes baseline for regular service"],
  },
];

export default function Services() {
  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = "/#quote-form";
  };

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
            Services
          </div>
          <h1
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "36rem" }}
          >
            Residential and commercial cleaning in Greater Boston.
          </h1>
        </div>
      </section>

      {/* Services list */}
      <section className="section-pad">
        <div className="container">
          <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
            {services.map((service) => (
              <div
                key={service.num}
                style={{
                  padding: "2.5rem 0",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  display: "grid",
                  gap: "2rem",
                }}
                className="service-detail-row"
              >
                {/* Left: number + title */}
                <div>
                  <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.3)", fontWeight: 500, marginBottom: "0.5rem", letterSpacing: "0.05em" }}>
                    {service.num}
                  </div>
                  <h2 style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)", fontWeight: 300, letterSpacing: "-0.03em", color: "#ffffff" }}>
                    {service.title}
                  </h2>
                </div>

                {/* Right: description + includes */}
                <div>
                  <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "1.5rem" }}>
                    {service.desc}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {service.includes.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: "0.6rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                        <span style={{ color: "rgba(255,255,255,0.25)" }}>—</span>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "3rem", display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
            <a href="/#quote-form" onClick={scrollToQuote} className="btn-primary">
              Request a Free Quote
            </a>
            <a href="tel:+17818240404" className="btn-secondary">
              (781) 824-0404
            </a>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="section-pad" style={{ background: "#080a0d" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>
            Service area
          </div>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1.5rem" }}
          >
            Abington, MA and surrounding communities.
          </h2>
          <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.7, maxWidth: "40rem" }}>
            We are based in Abington and serve the Greater Boston South Shore area.
            Call us at (781) 824-0404 to confirm availability in your area.
          </p>
        </div>
      </section>

      <Footer />
      <MobileCTA />

      <style>{`
        @media (min-width: 768px) {
          .service-detail-row {
            grid-template-columns: 1fr 2fr !important;
            align-items: start;
          }
        }
      `}</style>
    </div>
  );
}
