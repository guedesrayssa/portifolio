"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";
import { LibraryMark } from "./Ornaments";

export function Library() {
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
            <p className="eyebrow">Arquivo de trabalho</p>
            <h2 id="library-title">Biblioteca</h2>
          </div>
          <div className="rail-controls" aria-label="Controles da biblioteca">
            <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label="Voltar um item">
              ←
            </button>
            <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label="Avançar um item">
              →
            </button>
          </div>
        </header>

        <div className="library-rail" ref={railRef} aria-label="Arquivo horizontal de projetos">
          {projects.map((project, index) => (
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
              <ul aria-label="Tecnologias principais">
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
