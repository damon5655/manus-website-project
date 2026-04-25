/**
 * AnimatedText — Prisma Creative Studio
 * Design: Brutalist Cinema
 * Wraps AnimatedLetter for scroll-linked character opacity reveal.
 * Each character fades from opacity 0.2 to 1 as user scrolls.
 */

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface AnimatedLetterProps {
  char: string;
  index: number;
  total: number;
  containerRef: React.RefObject<HTMLElement | null>;
}

function AnimatedLetter({ char, index, total, containerRef }: AnimatedLetterProps) {
  const charProgress = index / total;
  const start = Math.max(0, charProgress - 0.1);
  const end = Math.min(1, charProgress + 0.05);

  const { scrollYProgress } = useScroll({
    target: containerRef as React.RefObject<HTMLElement>,
    offset: ["start 0.8", "end 0.2"],
  });

  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  if (char === " ") {
    return <span style={{ display: "inline-block", width: "0.3em" }}>&nbsp;</span>;
  }

  return (
    <motion.span style={{ opacity, display: "inline-block" }}>
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
    <p
      ref={containerRef}
      className={className}
      style={{ lineHeight: 1.6 }}
    >
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
