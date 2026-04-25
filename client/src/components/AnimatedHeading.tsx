/* ============================================================
   AnimatedHeading — Character-by-character entrance animation
   Design System: Dark Precision / Liquid Glass
   - Splits text by \n into lines, each line into characters
   - Each char: opacity 0 → 1, translateX(-18px) → 0
   - Stagger delay: (lineIndex * lineLength * charDelay) + (charIndex * charDelay)
   - charDelay = 30ms, initial delay = 200ms, transition = 500ms
   ============================================================ */
import { useEffect, useState } from "react";

interface AnimatedHeadingProps {
  text: string;
  className?: string;
  initialDelay?: number;
}

export default function AnimatedHeading({
  text,
  className = "",
  initialDelay = 200,
}: AnimatedHeadingProps) {
  const [animated, setAnimated] = useState(false);
  const charDelay = 30;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  const lines = text.split("\n");

  return (
    <span className={className} aria-label={text.replace(/\n/g, " ")}>
      {lines.map((line, lineIndex) => {
        const prevLineChars = lines
          .slice(0, lineIndex)
          .reduce((acc, l) => acc + l.length, 0);
        return (
          <span key={lineIndex} style={{ display: "block" }}>
            {line.split("").map((char, charIndex) => {
              const globalIndex = prevLineChars + charIndex;
              const delay = globalIndex * charDelay;
              return (
                <span
                  key={charIndex}
                  style={{
                    display: "inline-block",
                    opacity: animated ? 1 : 0,
                    transform: animated ? "translateX(0)" : "translateX(-18px)",
                    transition: `opacity 500ms ease ${delay}ms, transform 500ms ease ${delay}ms`,
                    whiteSpace: char === " " ? "pre" : undefined,
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
}
