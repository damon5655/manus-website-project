/*
 * AnimatedLetter — Each character's opacity transitions from 0.2 to 1
 * based on scroll position, creating a progressive text reveal effect.
 *
 * Design: Analog Warmth / Darkroom Aesthetic
 * Uses useScroll with target offset ['start 0.8', 'end 0.2']
 * Character staggering: charProgress = index / totalChars
 * Range: [charProgress - 0.1, charProgress + 0.05]
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedTextProps {
  text: string;
  className?: string;
}

function AnimatedLetter({
  char,
  index,
  total,
  containerRef,
}: {
  char: string;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLElement | null>;
}) {
  const charProgress = index / total;

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  );

  if (char === " ") {
    return <span>&nbsp;</span>;
  }

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const chars = text.split("");
  const total = chars.length;

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          total={total}
          containerRef={containerRef}
        />
      ))}
    </p>
  );
}
