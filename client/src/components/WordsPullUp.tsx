/**
 * WordsPullUp — Prisma Creative Studio
 * Design: Brutalist Cinema
 * Each word slides up from y:20 with staggered delay (0.08s).
 * Triggered by useInView (once: true).
 * Supports showAsterisk prop: adds superscript * after last "a" of final word.
 */

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delay?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function WordsPullUp({
  text,
  className = "",
  showAsterisk = false,
  delay = 0,
}: WordsPullUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const words = text.split(" ");

  return (
    <span ref={ref} className={`inline-flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const isLast = i === words.length - 1;

        return (
          <span
            key={i}
            className="overflow-hidden inline-block"
            style={{ marginRight: i < words.length - 1 ? "0.25em" : 0 }}
          >
            <motion.span
              className="inline-block relative"
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.8,
                delay: delay + i * 0.08,
                ease: EASE,
              }}
            >
              {word}
              {showAsterisk && isLast && (
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
              )}
            </motion.span>
          </span>
        );
      })}
    </span>
  );
}
