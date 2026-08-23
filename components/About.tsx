"use client";

import Image from "next/image";
import { copy } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { LaurelFlourish } from "./Ornaments";
import { SectionIndex } from "./SectionIndex";
import { SocialLinks } from "./SocialLinks";

export function About() {
  const { locale } = useLanguage();
  const text = copy[locale].about;

  return (
    <section className="about paper-section" id="sobre" aria-labelledby="about-title">
      <div className="about-shell">
        <Reveal className="about-portrait-column" direction="right">
          <figure className="about-portrait-figure">
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
            {/* Etiqueta de museu: o título original é corrigido à mão, como numa
                ficha de acervo em que o retratado foi identificado depois. */}
            <figcaption className="about-portrait-caption">
              {text.portraitCaptionPrefix}{" "}
              <del>{text.portraitCaptionStruck}</del>{" "}
              <ins>{text.portraitCaptionName}</ins>
            </figcaption>
          </figure>
        </Reveal>

        <Reveal className="about-copy" delay={0.12}>
          <SectionIndex numeral="I" />
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
          <LaurelFlourish className="laurel-flourish laurel-flourish-start" />
        </Reveal>
      </div>
    </section>
  );
}
