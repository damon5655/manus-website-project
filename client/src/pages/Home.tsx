/*
 * Home — Prisma Creative Studio landing page
 * Design: Analog Warmth / Darkroom Aesthetic
 *
 * Sections:
 * 1. HeroSection   — full-viewport cinematic hero with video background
 * 2. AboutSection  — dark card with multi-style heading + scroll text reveal
 * 3. FeaturesSection — 4-column card grid with staggered animations
 */

import AboutSection from "@/components/AboutSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
    </main>
  );
}
