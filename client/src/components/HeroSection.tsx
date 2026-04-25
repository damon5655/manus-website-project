import { useState, useEffect } from "react";

// ─── FadeIn Component ────────────────────────────────────────────────────────
interface FadeInProps {
  delay?: number;
  duration?: number;
  children: React.ReactNode;
  className?: string;
}

function FadeIn({ delay = 0, duration = 1000, children, className = "" }: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── AnimatedHeading Component ───────────────────────────────────────────────
interface AnimatedHeadingProps {
  text: string;
  initialDelay?: number;
  charDelay?: number;
  className?: string;
}

function AnimatedHeading({
  text,
  initialDelay = 200,
  charDelay = 30,
  className = "",
}: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <h1 className={className} style={{ letterSpacing: "-0.04em" }}>
      {lines.map((line, lineIndex) => {
        const chars = line.split("");
        const lineLength = chars.length;
        return (
          <span key={lineIndex} style={{ display: "block" }}>
            {chars.map((char, charIndex) => {
              const delay =
                lineIndex * lineLength * charDelay + charIndex * charDelay;
              return (
                <span
                  key={charIndex}
                  style={{
                    display: "inline-block",
                    opacity: animated ? 1 : 0,
                    transform: animated ? "translateX(0)" : "translateX(-18px)",
                    transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}

// ─── Navbar ──────────────────────────────────────────────────────────────────
function Navbar() {
  return (
    <div className="px-6 md:px-12 lg:px-16 pt-6">
      <nav className="liquid-glass rounded-xl px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-semibold tracking-tight text-white">VEX</span>

        {/* Center links */}
        <div className="hidden md:flex items-center gap-8">
          {["Story", "Investing", "Building", "Advisory"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-white transition-colors duration-200 hover:text-gray-300"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 hover:bg-gray-100">
          Start a Chat
        </button>
      </nav>
    </div>
  );
}

// ─── HeroSection ─────────────────────────────────────────────────────────────
export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex flex-col overflow-hidden bg-black">
      {/* Video Background - no overlay, no dimming */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Navbar */}
        <Navbar />

        {/* Hero Content - pushed to bottom */}
        <div className="flex-1 flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end">
            {/* Left Column */}
            <div>
              {/* Animated Heading */}
              <AnimatedHeading
                text={"Shaping tomorrow\nwith vision and action."}
                initialDelay={200}
                charDelay={30}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
              />

              {/* Subheading */}
              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg text-gray-300 mb-5">
                  We back visionaries and craft ventures that define what comes next.
                </p>
              </FadeIn>

              {/* Buttons */}
              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-white text-black px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-gray-100">
                    Start a Chat
                  </button>
                  <button className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200 hover:bg-white hover:text-black">
                    Explore Now
                  </button>
                </div>
              </FadeIn>
            </div>

            {/* Right Column - Tag */}
            <div className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0">
              <FadeIn delay={1400} duration={1000}>
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
                    Investing. Building. Advisory.
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
