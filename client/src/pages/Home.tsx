/**
 * Home — Prisma Creative Studio
 * Design: Brutalist Cinema
 * Assembles Hero, About, and Features sections.
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
