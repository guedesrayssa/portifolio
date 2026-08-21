"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { copy, projectsEn } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { LibraryMark } from "./Ornaments";

export function Library() {
  const { locale, isEnglish } = useLanguage();
  const text = copy[locale].library;
  const entries = isEnglish ? projectsEn : projects;
  const railRef = useRef<HTMLDivElement>(null);
  const [canGoBack, setCanGoBack] = useState(false);
  const [canGoForward, setCanGoForward] = useState(true);

  const updateControls = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    setCanGoBack(rail.scrollLeft > 4);
    setCanGoForward(rail.scrollLeft + rail.clientWidth < rail.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;

    const resizeObserver = new ResizeObserver(updateControls);
    resizeObserver.observe(rail);
    rail.addEventListener("scroll", updateControls, { passive: true });
    updateControls();

    return () => {
      resizeObserver.disconnect();
      rail.removeEventListener("scroll", updateControls);
    };
  }, [updateControls]);

  const move = (direction: -1 | 1) => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    railRef.current?.scrollBy({
      left: direction * 328,
      behavior: reduced ? "auto" : "smooth",
    });
  };

  return (
    <section className="library dark-section" id="biblioteca" aria-labelledby="library-title">
      <div className="wide-container library-shell">
        <header className="library-heading">
          <div>
            <p className="eyebrow">{text.eyebrow}</p>
            <h2 id="library-title">{text.title}</h2>
          </div>
          <div className="rail-controls" aria-label={text.controls}>
            <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label={text.previous}>
              ←
            </button>
            <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label={text.next}>
              →
            </button>
          </div>
        </header>

        <div className="library-rail" ref={railRef} aria-label={text.rail}>
          {entries.map((project, index) => (
            <article className="library-card" key={project.title}>
              <div className="library-card-topline">
                <span>VOL. 0{index + 1}</span>
                <span>{project.period.split(" ").at(-1)}</span>
              </div>
              <LibraryMark className="library-mark" />
              <div className="library-card-copy">
                <p>{project.client}</p>
                <h3>{project.title}</h3>
              </div>
              <ul aria-label={text.technologies}>
                {project.tags.slice(0, 3).map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <span className="library-spine" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
