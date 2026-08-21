"use client";

import { useEffect, useRef, useState } from "react";
import { principles } from "@/data/principles";
import { OrbitEmblem } from "./Ornaments";

export function Principles() {
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
      if (!document.hidden) setActive((current) => (current + 1) % principles.length);
    }, 4000);
    return () => window.clearInterval(interval);
  }, [engaged, paused, reducedMotion, visible]);

  const choose = (next: number) => {
    const normalized = (next + principles.length) % principles.length;
    setActive(normalized);
    setAnnouncement(`Princípio ${normalized + 1}: ${principles[normalized].title}`);
  };

  const principle = principles[active];

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
          0{active + 1} <span>/</span> 0{principles.length}
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
          <button type="button" onClick={() => choose(active - 1)} aria-label="Princípio anterior">
            ←
          </button>
          <button
            type="button"
            onClick={() => setPaused((current) => !current)}
            aria-pressed={paused}
            disabled={reducedMotion}
          >
            {paused ? "Continuar" : "Pausar"}
          </button>
          <button type="button" onClick={() => choose(active + 1)} aria-label="Próximo princípio">
            →
          </button>
        </div>
        <blockquote>“Toda boa estrutura começa por uma pergunta bem feita.”</blockquote>
        <p className="sr-only" aria-live="polite" aria-atomic="true">
          {announcement}
        </p>
      </div>
    </section>
  );
}
