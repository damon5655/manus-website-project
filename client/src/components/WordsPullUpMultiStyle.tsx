/**
 * WordsPullUpMultiStyle — Prisma Creative Studio
 * Design: Brutalist Cinema
 * Takes an array of {text, className} segments.
 * Splits all into individual words, preserving per-word className.
 * Same pull-up animation as WordsPullUp.
 * Words wrapped in inline-flex flex-wrap justify-center.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export interface TextSegment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  containerClassName?: string;
  delay?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = "",
  delay = 0,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all segments into individual word entries with their className
  const allWords: { word: string; className: string }[] = [];
  for (const seg of segments) {
    const words = seg.text.trim().split(/\s+/);
    for (const word of words) {
      if (word) {
        allWords.push({ word, className: seg.className ?? "" });
      }
    }
  }

  return (
    <div
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {allWords.map((item, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block"
          style={{ marginRight: "0.25em" }}
        >
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.08,
              ease: EASE,
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
}
