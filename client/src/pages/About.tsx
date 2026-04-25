/* ============================================================
   About Page — AG Best Cleaning Services
   Design System: Dark Precision / Liquid Glass
   ============================================================ */
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";

const Stars = ({ count = 5 }: { count?: number }) => (
  <div style={{ display: "flex", gap: "2px" }}>
    {Array.from({ length: count }).map((_, i) => (
      <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#f59e0b">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ))}
  </div>
);

const GoogleLogo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" aria-label="Google">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function About() {
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
            About us
          </div>
          <h1
            className="display-heading"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", maxWidth: "36rem" }}
          >
            Six years cleaning homes and businesses in Greater Boston.
          </h1>
        </div>
      </section>

      {/* Main content */}
      <section className="section-pad">
        <div className="container">
          <div className="about-layout">
            {/* Left: image */}
            <div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663543184064/oK7JsatenncDakA4439osZ/about-image-GDjwhqAMzz4QJXTcyCuVrF.webp"
                alt="AG Best Cleaning Services owner"
                style={{
                  width: "100%",
                  borderRadius: "0.75rem",
                  objectFit: "cover",
                  aspectRatio: "3/4",
                  display: "block",
                }}
              />
            </div>

            {/* Right: content */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
              <div>
                <h2
                  className="display-heading"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "1rem" }}
                >
                  We started in Abington and have stayed focused on the South Shore.
                </h2>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75, marginBottom: "1rem" }}>
                  AG Best Cleaning Services has been operating in Abington, MA since 2019. We handle
                  residential cleaning, commercial spaces, move-in and move-out jobs, and post-construction
                  cleanup. Our work area covers Abington and the surrounding Greater Boston communities.
                </p>
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.75 }}>
                  We are a women-owned business. Anna leads the team and is directly involved in every job.
                  We keep our crew consistent so clients know who is coming into their space. Reliability and
                  punctuality are the two things clients mention most in reviews, and we take both seriously.
                </p>
              </div>

              {/* Values */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {[
                  { title: "Punctuality", desc: "We confirm appointments and show up on time, every time." },
                  { title: "Consistent crew", desc: "You know who is coming into your home or office." },
                  { title: "Direct communication", desc: "We respond to messages quickly and confirm scheduling clearly." },
                  { title: "Thorough work", desc: "We don't rush. Every job gets the same level of attention." },
                ].map((item, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      gap: "1rem",
                      padding: "1rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "rgba(255,255,255,0.3)",
                        fontWeight: 500,
                        minWidth: "1.5rem",
                        paddingTop: "0.1rem",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <div style={{ fontSize: "0.9375rem", fontWeight: 500, color: "#ffffff", marginBottom: "0.2rem" }}>
                        {item.title}
                      </div>
                      <div style={{ fontSize: "0.875rem", color: "rgba(255,255,255,0.5)" }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <a href="/#quote-form" onClick={scrollToQuote} className="btn-primary" style={{ alignSelf: "flex-start" }}>
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section className="section-pad" style={{ background: "#080a0d" }}>
        <div className="container">
          <div className="section-label" style={{ marginBottom: "0.75rem" }}>
            What clients say
          </div>
          <h2
            className="display-heading"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", marginBottom: "2.5rem" }}
          >
            5.0 on Google — 33 reviews
          </h2>

          <div className="reviews-grid-2" style={{ display: "grid", gap: "1rem" }}>
            {[
              { name: "Morgan Morris", text: "Anna and her team are great. They are always on time and she texts me every other week to confirm my cleaning. We have one dog and three long haired cats — so lots of pet hair. You'd never know we have pets after the cleaning.", time: "5 years ago" },
              { name: "Jessica Nakajima", text: "We recently had our home deep cleaned by AG Best and are so happy with the results. They came to do an evaluation, provided us a list of products to supply and quotes, and then came back and did an amazing job.", time: "3 years ago" },
              { name: "Chiaki Zimmerman", text: "Anna and her team did a wonderful, amazing job with my apartment. I'd definitely have them again. Just well done for a good price and an amazing job. You won't be disappointed.", time: "2 years ago" },
            ].map((review, i) => (
              <div key={i} className="review-card">
                <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                  <GoogleLogo />
                </div>
                <Stars />
                <p style={{ fontSize: "0.9375rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, margin: "0.75rem 0", paddingRight: "1.5rem" }}>
                  "{review.text}"
                </p>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "0.875rem", fontWeight: 500 }}>{review.name}</span>
                  <span style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>{review.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <MobileCTA />

      <style>{`
        @media (min-width: 1024px) {
          .about-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 5rem; align-items: start; }
          .reviews-grid-2 { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (min-width: 768px) {
          .reviews-grid-2 { grid-template-columns: repeat(2, 1fr) !important; }
        }
        .about-layout { display: flex; flex-direction: column; gap: 2.5rem; }
      `}</style>
    </div>
  );
}
