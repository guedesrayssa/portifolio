"use client";

import { useEffect, useRef, type PointerEvent as ReactPointerEvent } from "react";
import type { IconType } from "react-icons";
import { LuBraces, LuDatabase } from "react-icons/lu";
import {
  SiAmazonwebservices,
  SiDatabricks,
  SiDocker,
  SiFastapi,
  SiGithub,
  SiJavascript,
  SiN8N,
  SiNextdotjs,
  SiNodedotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTypescript,
} from "react-icons/si";
import { principles } from "@/data/principles";
import { skillGroups } from "@/data/skills";
import { copy, principlesEn, skillGroupsEn } from "@/data/translations";
import { AmbientCanvas } from "./AmbientCanvas";
import { useLanguage } from "./LanguageProvider";
import { FoundationEmblem, LaurelFlourish, PillarBase, PillarCap } from "./Ornaments";
import { Reveal } from "./Reveal";
import { SectionIndex } from "./SectionIndex";

const skillIcons: Record<string, IconType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  Python: SiPython,
  Java: SiOpenjdk,
  "Node.js": SiNodedotjs,
  "Spring Boot": SiSpringboot,
  FastAPI: SiFastapi,
  "APIs REST": LuBraces,
  "REST APIs": LuBraces,
  SQL: LuDatabase,
  PostgreSQL: SiPostgresql,
  AWS: SiAmazonwebservices,
  Docker: SiDocker,
  "Git/GitHub": SiGithub,
  n8n: SiN8N,
  Databricks: SiDatabricks,
};

export function Skills() {
  const { locale, isEnglish } = useLanguage();
  const text = copy[locale].skills;
  const groups = isEnglish ? skillGroupsEn : skillGroups;
  const manifesto = isEnglish ? principlesEn : principles;

  // Holofote de galeria: a luz segue o cursor sobre as colunas. A posição é escrita
  // em custom properties dentro de um rAF, para não recalcular estilo a cada evento.
  const frame = useRef(0);

  useEffect(() => () => cancelAnimationFrame(frame.current), []);

  const trackSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    if (event.pointerType !== "mouse") return;
    if (frame.current) return;

    const section = event.currentTarget;
    const { clientX, clientY } = event;

    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const bounds = section.getBoundingClientRect();
      section.style.setProperty("--spot-x", `${clientX - bounds.left}px`);
      section.style.setProperty("--spot-y", `${clientY - bounds.top}px`);
      section.style.setProperty("--spot-opacity", "1");
    });
  };

  const dimSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    event.currentTarget.style.setProperty("--spot-opacity", "0");
  };

  return (
    <section
      className="foundations dark-section"
      id="habilidades"
      aria-labelledby="foundations-title"
      onPointerMove={trackSpotlight}
      onPointerLeave={dimSpotlight}
    >
      <AmbientCanvas className="ambient-canvas" />
      <div className="foundations-spot" aria-hidden="true" />
      <div className="wide-container foundations-inner">
        <Reveal className="editorial-heading editorial-heading-light foundations-heading">
          <SectionIndex numeral="III" tone="dark" />
          <FoundationEmblem className="foundations-emblem" />
          <h2 id="foundations-title">{text.title}</h2>
          <p className="foundations-quote">{text.quote}</p>
          <span className="heading-rule" aria-hidden="true" />
          <LaurelFlourish className="laurel-flourish laurel-flourish-light" />
        </Reveal>

        <div className="pillar-grid">
          {groups.map((group, groupIndex) => (
            <Reveal className="pillar-reveal" delay={groupIndex * 0.12} key={group.title}>
              <article className="pillar-card">
                <PillarCap className="pillar-cap" />
                <div className="pillar-shaft">
                  <p className="pillar-subtitle">{group.subtitle}</p>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>
                        {(() => {
                          const SkillIcon = skillIcons[item] ?? LuBraces;
                          return <SkillIcon className="skill-icon" aria-hidden="true" />;
                        })()}
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <PillarBase className="pillar-base" />
              </article>
            </Reveal>
          ))}
        </div>

        <div className="manifesto" aria-labelledby="manifesto-title">
          <h3 className="sr-only" id="manifesto-title">
            {text.manifesto}
          </h3>
          {manifesto.map((principle, index) => (
            <Reveal delay={index * 0.1} key={principle.title}>
              <article className="manifesto-item">
                <span>0{index + 1}</span>
                <h4>{principle.title}</h4>
                <p>{principle.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
