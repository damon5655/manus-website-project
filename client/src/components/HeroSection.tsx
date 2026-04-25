/*
 * HeroSection — Full viewport height cinematic hero
 * Design: Analog Warmth / Darkroom Aesthetic
 *
 * Structure:
 * - p-4 md:p-6 outer padding (inset effect)
 * - Inner container: rounded-2xl md:rounded-[2rem] overflow-hidden
 * - Background video with noise overlay + gradient
 * - Absolutely positioned navbar (black pill)
 * - Bottom-aligned content: 12-col grid (8 heading + 4 text/button)
 */

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import WordsPullUp from "./WordsPullUp";

const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

const NAV_ITEMS = [
  "Our story",
  "Collective",
  "Workshops",
  "Programs",
  "Inquiries",
];

const CUSTOM_EASE = [0.16, 1, 0.3, 1] as const;

export default function HeroSection() {
  return (
    <section className="h-screen p-4 md:p-6 bg-black">
      {/* Inner container with rounded corners and overflow hidden */}
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden">
        {/* Background video */}
        <video
          src={HERO_VIDEO_URL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Noise overlay */}
        <div
          className="noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none"
          aria-hidden="true"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none"
          aria-hidden="true"
        />

        {/* Navbar — black pill hanging from top center */}
        <nav className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black rounded-b-2xl md:rounded-b-3xl px-4 py-2 md:px-8">
            <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[10px] sm:text-xs md:text-sm transition-colors duration-200"
                    style={{ color: "rgba(225, 224, 204, 0.8)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "#E1E0CC";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(225, 224, 204, 0.8)";
                    }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Hero content — bottom aligned */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-4 md:p-8 lg:p-10">
          <div className="grid grid-cols-12 items-end gap-4">
            {/* Left: Giant heading */}
            <div className="col-span-12 lg:col-span-8">
              <h1
                className="font-medium leading-[0.85] tracking-[-0.07em] text-[26vw] sm:text-[24vw] md:text-[22vw] lg:text-[20vw] xl:text-[19vw] 2xl:text-[20vw]"
                style={{ color: "#E1E0CC" }}
              >
                <WordsPullUp
                  text="Prisma"
                  showAsterisk={true}
                  staggerDelay={0.08}
                />
              </h1>
            </div>

            {/* Right: Description + CTA */}
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4 pb-2 lg:pb-4">
              {/* Description */}
              <motion.p
                className="text-xs sm:text-sm md:text-base"
                style={{ color: "rgba(222, 219, 200, 0.7)", lineHeight: 1.2 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: CUSTOM_EASE,
                }}
              >
                Prisma is a worldwide network of visual artists, filmmakers and
                storytellers bound not by place, status or labels but by passion
                and hunger to unlock potential through our unique perspectives.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: CUSTOM_EASE,
                }}
              >
                <button
                  className="group inline-flex items-center gap-2 hover:gap-3 transition-all duration-300 bg-[#DEDBC8] rounded-full pl-5 pr-1 py-1 font-medium text-sm sm:text-base text-black"
                >
                  <span>Join the lab</span>
                  <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <ArrowRight
                      className="w-4 h-4 sm:w-5 sm:h-5"
                      style={{ color: "#DEDBC8" }}
                    />
                  </span>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
