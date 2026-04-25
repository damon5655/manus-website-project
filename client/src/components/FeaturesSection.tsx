/**
 * FeaturesSection — Prisma Creative Studio
 * Design: Brutalist Cinema
 * - min-h-screen bg-black with subtle bg-noise overlay
 * - WordsPullUpMultiStyle header
 * - 4-column card grid with staggered entrance animations
 * - Card 1: video background
 * - Cards 2-4: bg-[#212121] with icon, checklist, "Learn more" link
 */

import { motion, useInView } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { useRef } from "react";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const CARD_EASE = [0.22, 1, 0.36, 1] as const;

const FEATURES_VIDEO =
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
];

const HEADER_SEGMENTS_2 = [
  {
    text: "Built for pure vision. Powered by art.",
    className: "text-gray-500 font-normal",
  },
];

interface ChecklistItem {
  text: string;
}

interface FeatureCardData {
  type: "video" | "info";
  number?: string;
  title?: string;
  icon?: string;
  items?: ChecklistItem[];
}

const CARDS: FeatureCardData[] = [
  { type: "video" },
  {
    type: "info",
    number: "01",
    title: "Project Storyboard.",
    icon: CARD_ICON_1,
    items: [
      { text: "Drag-and-drop scene sequencing" },
      { text: "Multi-track timeline editing" },
      { text: "Real-time collaboration tools" },
      { text: "Export to any format" },
    ],
  },
  {
    type: "info",
    number: "02",
    title: "Smart Critiques.",
    icon: CARD_ICON_2,
    items: [
      { text: "AI-powered creative analysis" },
      { text: "Detailed creative notes & feedback" },
      { text: "Seamless tool integrations" },
    ],
  },
  {
    type: "info",
    number: "03",
    title: "Immersion Capsule.",
    icon: CARD_ICON_3,
    items: [
      { text: "Intelligent notification silencing" },
      { text: "Curated ambient soundscapes" },
      { text: "Schedule syncing & focus blocks" },
    ],
  },
];

function VideoCard({ index }: { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="relative rounded-2xl overflow-hidden lg:h-[480px] min-h-[300px] flex items-end"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: CARD_EASE }}
    >
      <video
        src={FEATURES_VIDEO}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      <p
        className="relative z-10 p-5 text-base md:text-lg font-medium"
        style={{ color: "#E1E0CC" }}
      >
        Your creative canvas.
      </p>
    </motion.div>
  );
}

function InfoCard({
  card,
  index,
}: {
  card: FeatureCardData;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      className="bg-[#212121] rounded-2xl p-5 md:p-6 lg:h-[480px] flex flex-col justify-between"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: CARD_EASE }}
    >
      {/* Top: icon + number + title */}
      <div>
        {card.icon && (
          <img
            src={card.icon}
            alt={card.title}
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover mb-4"
          />
        )}
        <div className="flex items-start justify-between mb-4">
          <h3
            className="text-base md:text-lg font-medium"
            style={{ color: "#E1E0CC" }}
          >
            {card.title}
          </h3>
          <span className="text-xs text-gray-500 font-mono ml-2 mt-0.5">
            {card.number}
          </span>
        </div>

        {/* Checklist */}
        <ul className="space-y-2">
          {card.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check
                className="w-3.5 h-3.5 mt-0.5 flex-shrink-0"
                style={{ color: "#DEDBC8" }}
              />
              <span className="text-xs text-gray-400 leading-relaxed">
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom: Learn more */}
      <div className="mt-4">
        <a
          href="#"
          className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-[#DEDBC8] transition-colors duration-200 group"
        >
          <span>Learn more</span>
          <ArrowRight
            className="w-3 h-3 group-hover:translate-x-0.5 transition-transform duration-200"
            style={{ transform: "rotate(-45deg)" }}
          />
        </a>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  return (
    <section className="min-h-screen bg-black py-16 md:py-24 px-4 md:px-6 relative overflow-hidden">
      {/* Subtle noise background */}
      <div
        className="bg-noise absolute inset-0 pointer-events-none"
        style={{ opacity: 0.15 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-10 md:mb-14 text-center">
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-2">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS}
              containerClassName="justify-center"
            />
          </div>
          <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal">
            <WordsPullUpMultiStyle
              segments={HEADER_SEGMENTS_2}
              containerClassName="justify-center"
              delay={0.3}
            />
          </div>
        </div>

        {/* 4-column card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1">
          {CARDS.map((card, i) =>
            card.type === "video" ? (
              <VideoCard key={i} index={i} />
            ) : (
              <InfoCard key={i} card={card} index={i} />
            )
          )}
        </div>
      </div>
    </section>
  );
}
