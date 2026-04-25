/*
 * AboutSection — Dark card with multi-style heading and scroll-linked text
 * Design: Analog Warmth / Darkroom Aesthetic
 *
 * Structure:
 * - bg-black outer, centered content
 * - Inner card: bg-[#101010], max-w-6xl
 * - Small "Visual arts" label
 * - WordsPullUpMultiStyle heading (3 segments: normal, serif italic, normal)
 * - AnimatedText body with scroll-linked character opacity
 */

import AnimatedText from "./AnimatedText";
import WordsPullUpMultiStyle from "./WordsPullUpMultiStyle";

const ABOUT_SEGMENTS = [
  { text: "I am Marcus Chen,", className: "font-normal text-[#E1E0CC]" },
  {
    text: "a self-taught director.",
    className: "font-serif text-[#E1E0CC]",
  },
  {
    text: "I have skills in color grading, visual effects, and narrative design.",
    className: "font-normal text-[#E1E0CC]",
  },
];

const BODY_TEXT =
  "Over the last seven years, I have worked with Parallax, a Berlin-based production house that crafts cinema, series, and Noir Studio in Paris. Together, we have created work that has earned international acclaim at several major festivals.";

export default function AboutSection() {
  return (
    <section className="bg-black py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Inner card */}
        <div className="bg-[#101010] rounded-2xl md:rounded-3xl px-6 py-10 md:px-12 md:py-16 lg:px-16 lg:py-20 text-center">
          {/* Label */}
          <p
            className="text-[10px] sm:text-xs mb-6 md:mb-8 tracking-widest uppercase"
            style={{ color: "#DEDBC8" }}
          >
            Visual arts
          </p>

          {/* Main heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl max-w-3xl mx-auto leading-[0.95] sm:leading-[0.9] mb-8 md:mb-12">
            <WordsPullUpMultiStyle
              segments={ABOUT_SEGMENTS}
              containerClassName="text-center"
            />
          </h2>

          {/* Body paragraph with scroll-linked character opacity */}
          <div className="max-w-2xl mx-auto">
            <AnimatedText
              text={BODY_TEXT}
              className="text-[#DEDBC8] text-xs sm:text-sm md:text-base leading-relaxed"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
