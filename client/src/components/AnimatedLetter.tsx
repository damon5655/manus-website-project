/**
 * AnimatedLetter — Prisma Creative Studio
 * Design: Brutalist Cinema
 * Each character's opacity transitions from 0.2 to 1 based on scroll position.
 * Uses useScroll with target offset ['start 0.8', 'end 0.2'].
 * Character staggering: charProgress = index / totalChars
 * Range: [charProgress - 0.1, charProgress + 0.05]
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedLetterProps {
  char: string;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLElement | null>;
}

export function AnimatedLetter({
  char,
  index,
  total,
  containerRef,
}: AnimatedLetterProps) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  if (char === " ") {
    return <span>&nbsp;</span>;
  }

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {char}
    </motion.span>
  );
}

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export default function AnimatedText({ text, className = "" }: AnimatedTextProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const chars = text.split("");

  return (
    <p ref={containerRef} className={className}>
      {chars.map((char, i) => (
        <AnimatedLetter
          key={i}
          char={char}
          index={i}
          total={chars.length}
          containerRef={containerRef}
        />
      ))}
    </p>
  );
}
