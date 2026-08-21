import { experiences } from "@/data/experiences";
import { BotanicalBranch, TimelinePilaster } from "./Ornaments";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";

export function Trajectory() {
  return (
    <section className="chronicles paper-section" id="trajetoria" aria-labelledby="chronicles-title">
      <div className="chronicles-container">
        <Reveal className="editorial-heading editorial-heading-dark">
          <BotanicalBranch className="branch-ornament" />
          <p className="eyebrow">Crônicas de uma trajetória</p>
          <h2 id="chronicles-title">Experiência</h2>
          <p>
            Uma linha contínua entre engenharia, dados, liderança e impacto mensurável.
          </p>
        </Reveal>

        <div className="chronicle-line">
          <TimelinePilaster className="timeline-pilaster" />
          <ol className="chronicle-list">
            {experiences.map((experience, index) => (
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
