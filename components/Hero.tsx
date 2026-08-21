"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { copy } from "@/data/translations";
import { AmbientCanvas } from "./AmbientCanvas";
import { useLanguage } from "./LanguageProvider";
import { HeroWireframe } from "./Ornaments";

const title = ["SOFTWARE", "DEVELOPER"] as const;

export function Hero({ hasPortrait }: { hasPortrait: boolean }) {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <AmbientCanvas className="ambient-canvas" />
      <div className="hero-halo" aria-hidden="true" />

      <p className="hero-folio" aria-hidden="true">
        Portfolio <span>·</span> MMXXVI
      </p>

      <div className="hero-stack">
        <HeroWireframe className="hero-wireframe" />

        <div className="hero-bust-wrap" aria-hidden={!hasPortrait}>
          <Image
            className="hero-bust"
            src={hasPortrait ? "/rayssa.jpg" : "/classical-bust-geometric.png"}
            alt={hasPortrait ? (locale === "en" ? "Portrait of Rayssa Guedes França" : "Retrato de Rayssa Guedes França") : ""}
            fill
            priority
            sizes="(max-width: 767px) 310px, 450px"
          />
        </div>

        <h1 id="hero-title" className="hero-display" aria-label="Software Developer">
          {title.map((line, lineIndex) => (
            <span className={`hero-display-line line-${lineIndex + 1}`} key={line} aria-hidden="true">
              {line.split("").map((letter, index) => (
                <span
                  className="hero-letter"
                  key={`${letter}-${index}`}
                  style={{ animationDelay: `${420 + lineIndex * 220 + index * 42}ms` }}
                >
                  {letter}
                </span>
              ))}
            </span>
          ))}
        </h1>
      </div>

      <div className="hero-meta">
        <p className="hero-name">{site.name}</p>
        <p className="hero-role">{site.role}</p>
        <span className="hero-rule" aria-hidden="true" />
        <nav className="hero-socials" aria-label={text.a11y.socialProfiles}>
          <a href={site.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>

      <a className="descend" href="#trajetoria">
        <span>{text.hero.explore}</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
