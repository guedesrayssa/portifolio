"use client";

import { useEffect, useRef, useState } from "react";
import { LuLanguages, LuMenu, LuX } from "react-icons/lu";
import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";

const destinations = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "habilidades", key: "skills" },
  { id: "trajetoria", key: "experience" },
  { id: "projetos", key: "projects" },
] as const;

export function GlobalAffordances() {
  const cursorRef = useRef<HTMLSpanElement>(null);
  const [showTop, setShowTop] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const { locale, isEnglish, toggleLocale } = useLanguage();
  const text = copy[locale];

  useEffect(() => {
    const update = () => setShowTop(window.scrollY > window.innerHeight * 0.7);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  useEffect(() => {
    const sections = destinations
      .map((destination) => document.getElementById(destination.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const current = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)[0];
        if (current?.target.id) setActiveSection(current.target.id);
      },
      { rootMargin: "-24% 0px -58%", threshold: [0.08, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
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

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="global-chrome">
        <a className="chrome-mark" href="#inicio" aria-label={text.a11y.goHome} onClick={closeMenu}>
          <span>R</span>GF
        </a>

        <nav className="mini-nav" aria-label={text.a11y.primaryNav}>
          {destinations.map((destination) => (
            <a
              className={activeSection === destination.id ? "is-active" : undefined}
              href={`#${destination.id}`}
              key={destination.id}
              aria-current={activeSection === destination.id ? "location" : undefined}
              onClick={() => setActiveSection(destination.id)}
            >
              {text.nav[destination.key]}
            </a>
          ))}
        </nav>

        <div className="chrome-actions">
          <button
            className="language-toggle"
            type="button"
            onClick={toggleLocale}
            aria-label={isEnglish ? "Mudar para português" : "Switch to English"}
          >
            <LuLanguages aria-hidden="true" />
            <span>{isEnglish ? "PT" : "EN"}</span>
          </button>
          <a className="contact-pill" href="#contato">
            {text.nav.contact}
          </a>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            aria-label={menuOpen ? text.a11y.closeMenu : text.a11y.openMenu}
          >
            {menuOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
          </button>
        </div>

        <nav
          className={`mobile-nav${menuOpen ? " is-open" : ""}`}
          id="mobile-navigation"
          aria-label={text.a11y.primaryNav}
          aria-hidden={!menuOpen}
        >
          {destinations.map((destination) => (
            <a
              className={activeSection === destination.id ? "is-active" : undefined}
              href={`#${destination.id}`}
              key={destination.id}
              onClick={() => {
                setActiveSection(destination.id);
                closeMenu();
              }}
              aria-current={activeSection === destination.id ? "location" : undefined}
              tabIndex={menuOpen ? 0 : -1}
            >
              {text.nav[destination.key]}
            </a>
          ))}
          <a href="#contato" onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            {text.nav.contact}
          </a>
        </nav>
      </header>

      <button
        className={`scroll-top${showTop ? " is-visible" : ""}`}
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label={text.a11y.backToTop}
        tabIndex={showTop ? 0 : -1}
      >
        ↑
      </button>
      <span className="leaf-cursor" ref={cursorRef} aria-hidden="true"><i /></span>
    </>
  );
}
