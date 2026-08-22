"use client";

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
import { PillarBase, PillarCap } from "./Ornaments";
import { Reveal } from "./Reveal";

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

  return (
    <section className="foundations dark-section" id="habilidades" aria-labelledby="foundations-title">
      <AmbientCanvas className="ambient-canvas" />
      <div className="wide-container foundations-inner">
        <Reveal className="editorial-heading editorial-heading-light">
          <p className="eyebrow">{text.eyebrow}</p>
          <h2 id="foundations-title">{text.title}</h2>
          <p>{text.intro}</p>
          <span className="heading-rule" aria-hidden="true" />
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
