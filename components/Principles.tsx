"use client";

import { useEffect, useRef, useState } from "react";
import { principles } from "@/data/principles";
import { copy, principlesEn } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { OrbitEmblem } from "./Ornaments";

export function Principles() {
  const { locale, isEnglish } = useLanguage();
  const text = copy[locale].principle;
  const entries = isEnglish ? principlesEn : principles;
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.2,
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reducedMotion || !visible) return;
    const interval = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % entries.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [entries.length, reducedMotion, visible]);

  const principle = entries[active];

  return (
    <section
      className="rotating-principle paper-section"
      id="principios"
      aria-labelledby="principle-title"
      ref={sectionRef}
    >
      <div className="principle-stage">
        <p className="principle-ordinal">
          0{active + 1} <span>/</span> 0{entries.length}
        </p>
        <OrbitEmblem
          className="principle-orbit"
          style={{ transform: `rotate(${active * 120}deg)` } as React.CSSProperties}
        />
        <div className="principle-copy" key={active}>
          <h2 id="principle-title">{principle.title}</h2>
          <p>{principle.body}</p>
        </div>
        <div className="principle-progress" aria-hidden="true">
          <i key={active} />
        </div>
        <blockquote>{text.quote}</blockquote>
      </div>
    </section>
  );
}
