"use client";

import { experiences } from "@/data/experiences";
import { copy, experiencesEn } from "@/data/translations";
import { BotanicalBranch } from "./Ornaments";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";
import { useLanguage } from "./LanguageProvider";

export function Trajectory() {
  const { locale, isEnglish } = useLanguage();
  const text = copy[locale].trajectory;
  const entries = isEnglish ? experiencesEn : experiences;

  return (
    <section className="chronicles paper-section" id="trajetoria" aria-labelledby="chronicles-title">
      <div className="chronicles-container">
        <Reveal className="editorial-heading editorial-heading-dark">
          <BotanicalBranch className="branch-ornament" />
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id="chronicles-title">{text.title}</h2>
        </Reveal>

        <div className="chronicle-line">
          <div className="timeline-pilaster" aria-hidden="true">
            <span className="timeline-cap" />
            <span className="timeline-shaft" />
            <span className="timeline-base" />
          </div>
          <ol className="chronicle-list">
            {entries.map((experience, index) => (
              <li key={`${experience.title}-${experience.period}`}>
                <Reveal delay={Math.min(index * 0.06, 0.24)} direction="right">
                  <article className="chronicle-entry">
                    <header>
                      <h3>{experience.title}</h3>
                      <time>{experience.period}</time>
                    </header>
                    {experience.company ? (
                      <p className="chronicle-company">{experience.company}</p>
                    ) : null}
                    <ul className="chronicle-bullets">
                      {experience.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                    {experience.tags?.length ? <TagList tags={experience.tags} /> : null}
                    <span className="chronicle-diamond" aria-hidden="true" />
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
