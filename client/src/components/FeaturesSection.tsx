/*
 * FeaturesSection — 4-column card grid with staggered entrance animations
 * Design: Analog Warmth / Darkroom Aesthetic
 *
 * Structure:
 * - min-h-screen bg-black with .bg-noise overlay at opacity-[0.15]
 * - Header: WordsPullUpMultiStyle (2 lines)
 * - 4-column card grid: video card + 3 feature cards
 * - Each card: scale 0.95 + fade in, staggered 0.15s, ease [0.22, 1, 0.36, 1]
 */

import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const FEATURES_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const CARD_ICON_1 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85";
const CARD_ICON_2 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85";
const CARD_ICON_3 =
  "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85";

const HEADER_SEGMENTS = [
  {
    text: "Studio-grade workflows for visionary creators.",
    className: "text-[#E1E0CC] font-normal",
  },
  {
    text: " Built for pure vision. Powered by art.",
    className: "text-gray-500 font-normal",
  },
];

interface FeatureCardProps {
  number: string;
  title: string;
  icon: string;
  items: string[];
  index: number;
  isInView: boolean;
}

function FeatureCard({
  number,
  title,
  icon,
  items,
  index,
  isInView,
}: FeatureCardProps) {
  return (
    <motion.div
      className="bg-[#212121] rounded-2xl p-5 md:p-6 flex flex-col h-full min-h-[320px] lg:h-[480px]"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={
        isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
      }
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {/* Icon */}
      <div className="mb-4">
        <img
          src={icon}
          alt={title}
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
        />
      </div>

      {/* Number + Title */}
      <div className="mb-4">
        <span className="text-[10px] text-gray-500 font-medium tracking-widest">
          {number}
        </span>
        <h3 className="text-[#E1E0CC] font-medium text-base sm:text-lg mt-1">
          {title}
        </h3>
      </div>

      {/* Checklist */}
      <ul className="flex flex-col gap-2 flex-1">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <Check
              className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
              style={{ color: "#DEDBC8" }}
            />
            <span className="text-gray-400 text-xs sm:text-sm leading-snug">
              {item}
            </span>
          </li>
        ))}
      </ul>

      {/* Learn more link */}
      <div className="mt-4 pt-4 border-t border-white/10">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-[#DEDBC8] text-xs sm:text-sm hover:gap-2.5 transition-all duration-200"
        >
          <span>Learn more</span>
          <ArrowRight
            className="w-3.5 h-3.5"
            style={{ transform: "rotate(-45deg)" }}
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="min-h-screen bg-black py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Noise background */}
      <div
        className="bg-noise absolute inset-0 pointer-events-none opacity-[0.15]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal leading-snug max-w-3xl mx-auto">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="text-center"
            />
          </h2>
        </div>

        {/* Card grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1"
        >
          {/* Card 1 — Video card */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[320px] lg:h-[480px]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={
              isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }
            }
            transition={{
              duration: 0.6,
              delay: 0,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <video
              src={FEATURES_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Gradient overlay for text legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5">
              <p className="text-sm sm:text-base font-medium" style={{ color: "#E1E0CC" }}>
                Your creative canvas.
              </p>
            </div>
          </motion.div>

          {/* Card 2 — Project Storyboard */}
          <FeatureCard
            number="01"
            title="Project Storyboard."
            icon={CARD_ICON_1}
            items={[
              "Organize scenes, shots, and sequences visually",
              "Drag-and-drop timeline for effortless planning",
              "Collaborate with your team in real time",
              "Export storyboards as PDF or image sets",
            ]}
            index={1}
            isInView={isInView}
          />

          {/* Card 3 — Smart Critiques */}
          <FeatureCard
            number="02"
            title="Smart Critiques."
            icon={CARD_ICON_2}
            items={[
              "AI-powered analysis of your creative work",
              "Detailed creative notes from industry mentors",
              "Seamless integrations with your favorite tools",
            ]}
            index={2}
            isInView={isInView}
          />

          {/* Card 4 — Immersion Capsule */}
          <FeatureCard
            number="03"
            title="Immersion Capsule."
            icon={CARD_ICON_3}
            items={[
              "Silence notifications for deep focus sessions",
              "Curated ambient soundscapes for creative flow",
              "Sync your creative schedule automatically",
            ]}
            index={3}
            isInView={isInView}
          />
        </div>
      </div>
    </section>
  );
}
