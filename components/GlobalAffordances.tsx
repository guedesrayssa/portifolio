"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/data/site";

export function GlobalAffordances() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > window.innerHeight * 0.7);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    const cursor = cursorRef.current;
    if (!cursor) return;
    let frame = 0;
    let x = -40;
    let y = -40;

    const paint = () => {
      cursor.style.transform = `translate3d(${x + 12}px, ${y + 12}px, 0) rotate(-34deg)`;
      frame = 0;
    };
    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      cursor.classList.add("is-visible");
      const target = event.target instanceof Element ? event.target : null;
      cursor.classList.toggle("is-active", Boolean(target?.closest("a, button, input, textarea")));
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    const leave = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", move, { passive: true });
    document.documentElement.addEventListener("mouseleave", leave);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <>
      <header className="global-chrome">
        <a className="chrome-mark" href="#inicio" aria-label="Ir para o início">RGF</a>
        <a className="contact-shortcut" href={`mailto:${site.email}`} aria-label={`Escrever para ${site.name}`}>
          <span aria-hidden="true">✉</span>
        </a>
      </header>
      <button
        className={`scroll-top${showTop ? " is-visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Voltar ao topo"
        tabIndex={showTop ? 0 : -1}
      >
        ↑
      </button>
      <span className="leaf-cursor" ref={cursorRef} aria-hidden="true"><i /></span>
    </>
  );
}
