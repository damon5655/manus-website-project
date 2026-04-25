/*
 * WordsPullUp — Splits text by spaces, each word slides up (y:20→0)
 * with staggered delay. Supports showAsterisk prop that adds a
 * superscript * after the last character "a" of the final word.
 *
 * Design: Analog Warmth / Darkroom Aesthetic
 * Animation: organic deceleration, ease [0.16, 1, 0.3, 1]
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  staggerDelay?: number;
}

export default function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  staggerDelay = 0.08,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;
        return (
          <span key={i} className="overflow-hidden inline-block mr-[0.25em]">
            <motion.span
              className="inline-block"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: i * staggerDelay,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {isLast && showAsterisk ? (
                <span className="relative inline-block">
                  {word}
                  <span
                    className="absolute font-medium"
                    style={{
                      top: "0.65em",
                      right: "-0.3em",
                      fontSize: "0.31em",
                      lineHeight: 1,
                    }}
                  >
                    *
                  </span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
