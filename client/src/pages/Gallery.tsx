/* ============================================================
   Gallery Page — AG Best Cleaning Services
   Design System: Dark Precision / Liquid Glass
   ============================================================ */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    alt: "Clean modern kitchen",
    label: "Kitchen",
  },
  {
    src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    alt: "Sparkling bathroom",
    label: "Bathroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    alt: "Clean living room",
    label: "Living Room",
  },
  {
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80",
    alt: "Clean office space",
    label: "Commercial",
  },
  {
    src: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800&q=80",
    alt: "Clean bedroom",
    label: "Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
    alt: "Clean home exterior",
    label: "Move-In Ready",
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/oK7JsatenncDakA4439osZ/services-accent-mVLBeHb6EMsS7kH5ACj8CD.webp",
    alt: "Professional cleaning detail",
    label: "Detail Work",
  },
  {
    src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
    alt: "Post-construction cleanup",
    label: "Post-Construction",
  },
];

export default function Gallery() {
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
            Gallery
          </div>
          <h1
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "36rem" }}
          >
            Our cleaning work.
          </h1>
        </div>
      </section>

      {/* Gallery grid */}
      <section className="section-pad">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0.75rem",
            }}
            className="gallery-grid"
          >
            {galleryImages.map((img, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  aspectRatio: i % 3 === 0 ? "4/3" : "1/1",
                  background: "#111318",
                }}
                className={i % 3 === 0 ? "gallery-wide" : ""}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLImageElement).style.transform = "scale(1)";
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "0.75rem",
                    background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%)",
                  }}
                >
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
                    {img.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div style={{ marginTop: "3rem", textAlign: "center" }}>
            <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.5)", marginBottom: "1.25rem" }}>
              Ready to see results like these in your space?
            </p>
            <a href="/#quote-form" onClick={scrollToQuote} className="btn-primary">
              Request a Free Quote
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />

      <style>{`
        @media (min-width: 768px) {
          .gallery-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
          .gallery-wide {
            grid-column: span 2;
          }
        }
      `}</style>
    </div>
  );
}
