"use client";

import { useEffect, useRef, useState } from "react";
import { EggAndDartDivider, MeanderDivider } from "./Ornaments";

type SectionDividerProps = {
  tone?: "dark" | "light";
  motif?: "meander" | "egg";
};

export function SectionDivider({ tone = "dark", motif = "meander" }: SectionDividerProps) {
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
      className={`section-divider section-divider-${tone} section-divider-${motif}${drawn ? " is-drawn" : ""}`}
      ref={ref}
      role="separator"
      aria-hidden="true"
    >
      {motif === "egg" ? <EggAndDartDivider className="meander" /> : <MeanderDivider className="meander" />}
    </div>
  );
}
