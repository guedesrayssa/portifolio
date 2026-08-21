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
  const [paused, setPaused] = useState(false);
  const [engaged, setEngaged] = useState(false);
  const [visible, setVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(true);
  const [announcement, setAnnouncement] = useState("");

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
    if (reducedMotion || paused || engaged || !visible) return;
    const interval = window.setInterval(() => {
      if (!document.hidden) setActive((current) => (current + 1) % entries.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [engaged, entries.length, paused, reducedMotion, visible]);

  const choose = (next: number) => {
    const normalized = (next + entries.length) % entries.length;
    setActive(normalized);
    setAnnouncement(
      isEnglish
        ? `Principle ${normalized + 1}: ${entries[normalized].title}`
        : `Princípio ${normalized + 1}: ${entries[normalized].title}`,
    );
  };

  const principle = entries[active];

  return (
    <section
      className="rotating-principle paper-section"
      id="principios"
      aria-labelledby="principle-title"
      ref={sectionRef}
      onPointerEnter={() => setEngaged(true)}
      onPointerLeave={() => setEngaged(false)}
      onFocus={() => setEngaged(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setEngaged(false);
      }}
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
        <div className={`principle-progress${paused || engaged ? " is-paused" : ""}`} aria-hidden="true">
          <i key={active} />
        </div>
        <div className="principle-controls">
          <button type="button" onClick={() => choose(active - 1)} aria-label={text.previous}>
            ←
          </button>
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-pressed={paused}
            disabled={reducedMotion}
          >
            {paused ? text.resume : text.pause}
          </button>
          <button type="button" onClick={() => choose(active + 1)} aria-label={text.next}>
            →
          </button>
        </div>
        <blockquote>{text.quote}</blockquote>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </div>
    </section>
  );
}
