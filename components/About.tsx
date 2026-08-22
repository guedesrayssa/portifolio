"use client";

import Image from "next/image";
import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { SocialLinks } from "./SocialLinks";

export function About() {
  const { locale } = useLanguage();
  const text = copy[locale].about;

  return (
    <section className="about paper-section" id="sobre" aria-labelledby="about-title">
      <div className="about-shell">
        <Reveal className="about-portrait-column" direction="right">
          <figure className="about-portrait-figure">
            <div className="about-portrait-architecture">
              <span className="about-capital" aria-hidden="true" />
              <div className="about-portrait-frame">
                <Image
                  className="about-portrait"
                  src="/ray.jpg"
                  alt={text.portraitAlt}
                  fill
                  sizes="(max-width: 899px) 82vw, 430px"
                />
                <span className="about-portrait-line" aria-hidden="true" />
              </div>
              <span className="about-plinth" aria-hidden="true" />
            </div>
            <figcaption className="about-caption">Rayssa Guedes França <span>·</span> {text.folio}</figcaption>
          </figure>
        </Reveal>

        <Reveal className="about-copy" delay={0.12}>
          <div className="about-heading-line">
            <p className="eyebrow">{text.eyebrow}</p>
            <span aria-hidden="true">I</span>
          </div>
          <h2 id="about-title">{text.title}</h2>
          <div className="about-rule" aria-hidden="true"><i /></div>
          <p>{text.bodyPrimary}</p>
          <p>{text.bodySecondary}</p>
          <dl className="about-facts">
            <div>
              <dt>{text.educationLabel}</dt>
              <dd>{text.education}</dd>
            </div>
            <div>
              <dt>{text.focusLabel}</dt>
              <dd>{text.focus}</dd>
            </div>
            <div>
              <dt>{text.locationLabel}</dt>
              <dd>{text.location}</dd>
            </div>
          </dl>
          <SocialLinks className="about-socials" />
        </Reveal>
      </div>
    </section>
  );
}
