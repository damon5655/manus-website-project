/* ============================================================
   FadeIn — Configurable fade-in wrapper
   Design System: Dark Precision / Liquid Glass
   - Starts at opacity 0, transitions to opacity 1 after delay
   - delay and duration both configurable in ms
   ============================================================ */
import { useEffect, useState } from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className = "",
}: FadeInProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
