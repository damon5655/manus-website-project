/*
 * WordsPullUpMultiStyle — Takes an array of {text, className} segments,
 * splits all into individual words preserving per-word className.
 * Same pull-up animation as WordsPullUp.
 *
 * Design: Analog Warmth / Darkroom Aesthetic
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Segment {
  text: string;
  className?: string;
}

interface WordsPullUpMultiStyleProps {
  segments: Segment[];
  containerClassName?: string;
  staggerDelay?: number;
}

export default function WordsPullUpMultiStyle({
  segments,
  containerClassName = "",
  staggerDelay = 0.08,
}: WordsPullUpMultiStyleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  // Flatten all words with their associated className
  const allWords: { word: string; className: string }[] = [];
  for (const seg of segments) {
    const words = seg.text.trim().split(/\s+/);
    for (const word of words) {
      allWords.push({ word, className: seg.className ?? "" });
    }
  }

  return (
    <span
      ref={ref}
      className={`inline-flex flex-wrap justify-center ${containerClassName}`}
    >
      {allWords.map((item, i) => (
        <span
          key={i}
          className="overflow-hidden inline-block mr-[0.25em] mb-[0.05em]"
        >
          <motion.span
            className={`inline-block ${item.className}`}
            initial={{ y: 20, opacity: 0 }}
            animate={
              isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }
            }
            transition={{
              duration: 0.8,
              delay: i * staggerDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
