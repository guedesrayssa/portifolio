import { principles } from "@/data/principles";
import { skillGroups } from "@/data/skills";
import { AmbientCanvas } from "./AmbientCanvas";
import { PillarBase, PillarCap } from "./Ornaments";
import { Reveal } from "./Reveal";

export function Skills() {
  return (
    <section className="foundations dark-section" id="habilidades" aria-labelledby="foundations-title">
      <AmbientCanvas className="ambient-canvas" />
      <div className="wide-container foundations-inner">
        <Reveal className="editorial-heading editorial-heading-light">
          <p className="eyebrow">Os fundamentos</p>
          <h2 id="foundations-title">Arquitetura de competências</h2>
          <p>
            Tecnologias organizadas como uma construção: interface, estrutura e ferramentas de ofício.
          </p>
          <span className="heading-rule" aria-hidden="true" />
        </Reveal>

        <div className="pillar-grid">
          {skillGroups.map((group, groupIndex) => (
            <Reveal className="pillar-reveal" delay={groupIndex * 0.12} key={group.title}>
              <article className="pillar-card">
                <PillarCap className="pillar-cap" />
                <div className="pillar-shaft">
                  <p className="pillar-index">0{groupIndex + 1}</p>
                  <p className="pillar-subtitle">{group.subtitle}</p>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item, itemIndex) => (
                      <li key={item} style={{ "--skill-order": itemIndex } as React.CSSProperties}>
                        <span className="skill-dot" aria-hidden="true" />
                        <span>{item}</span>
                        <i aria-hidden="true" />
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
            Manifesto de engenharia
          </h3>
          {principles.map((principle, index) => (
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
