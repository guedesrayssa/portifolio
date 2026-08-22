"use client";

import { useEffect, useRef, useState } from "react";
import { MeanderDivider } from "./Ornaments";

type SectionDividerProps = {
  tone?: "dark" | "light";
};

export function SectionDivider({ tone = "dark" }: SectionDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Reduced motion is handled in CSS: the meander renders fully drawn.
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setDrawn(true);
        observer.disconnect();
      },
      { threshold: 0.4 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`section-divider section-divider-${tone}${drawn ? " is-drawn" : ""}`}
      ref={ref}
      role="separator"
      aria-hidden="true"
    >
      <MeanderDivider className="meander" />
    </div>
  );
}
