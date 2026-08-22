"use client";

import Image from "next/image";
import { site } from "@/data/site";
import { copy } from "@/data/translations";
import { AmbientCanvas } from "./AmbientCanvas";
import { useLanguage } from "./LanguageProvider";
import { HeroWireframe } from "./Ornaments";
import { SocialLinks } from "./SocialLinks";

const title = ["SOFTWARE", "ENGINEER"] as const;

export function Hero() {
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

        <div className="hero-bust-wrap" aria-hidden="true">
          <Image
            className="hero-bust"
            src="/classical-bust-geometric.png"
            alt=""
            fill
            priority
            sizes="(max-width: 767px) 310px, 450px"
          />
        </div>

        <h1 id="hero-title" className="hero-display" aria-label="Software Engineer">
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
        <SocialLinks className="hero-socials" />
      </div>

      <a className="descend" href="#sobre">
        <span>{text.hero.explore}</span>
        <i aria-hidden="true" />
      </a>
    </section>
  );
}
