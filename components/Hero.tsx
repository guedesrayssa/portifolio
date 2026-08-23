"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { copy } from "@/data/translations";
import { AmbientCanvas } from "./AmbientCanvas";
import { useLanguage } from "./LanguageProvider";
import { SocialLinks } from "./SocialLinks";

const title = ["RAYSSA GUEDES", "FRANÇA"] as const;

export function Hero() {
  const { locale } = useLanguage();
  const text = copy[locale];

  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <AmbientCanvas className="ambient-canvas" />

      <div className="hero-shell">
        <div className="hero-lede">
          <h1 id="hero-title" className="hero-display" aria-label={site.name}>
            {title.map((line, lineIndex) => (
              <span className={`hero-display-line line-${lineIndex + 1}`} key={line} aria-hidden="true">
                {line.split("").map((letter, index) => (
                  <span
                    className="hero-letter"
                    key={`${letter}-${index}`}
                    style={{ animationDelay: `${420 + lineIndex * 220 + index * 42}ms` }}
                  >
                    {letter === " " ? "\u00a0" : letter}
                  </span>
                ))}
              </span>
            ))}
          </h1>

          <div className="hero-meta">
            <p className="hero-role">{site.role}</p>
            <span className="hero-rule" aria-hidden="true" />
            <SocialLinks className="hero-socials" />
            <a className="hero-cta" href="#projetos">
              {text.hero.projects}
            </a>
          </div>
        </div>

        <div className="hero-figure" aria-hidden="true">
          <Image
            className="hero-art"
            src="/arte-classica.png"
            alt=""
            width={1024}
            height={1536}
            sizes="(max-width: 1050px) 82vw, 46vw"
            priority
          />
        </div>
      </div>

      <a className="descend" href="#sobre">
        <span>{text.hero.explore}</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
