import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";

function ProjectVisual({ index, title }: { index: number; title: string }) {
  return (
    <div className="project-art" data-variant={index + 1} aria-hidden="true">
      <div className="project-art-grid" />
      <span className="project-art-index">ARCHIVE / 0{index + 1}</span>
      <span className="project-art-title">{title}</span>
      <div className="project-art-glyph">
        <i />
        <i />
        <i />
        <i />
        <i />
      </div>
      <div className="project-art-orbit"><i /></div>
      <span className="project-art-coordinates">23°33′S · 46°38′W</span>
    </div>
  );
}

export function Projects() {
  return (
    <section className="projects paper-section" id="projetos" aria-labelledby="projects-title">
      <div className="wide-container">
        <Reveal className="projects-heading">
          <div>
            <p className="eyebrow">Trabalhos escolhidos</p>
            <h2 id="projects-title">Obras selecionadas</h2>
          </div>
          <p>
            Sistemas construídos a partir de desafios reais, com tecnologia aplicada a decisões, operações e escala.
          </p>
        </Reveal>

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal className="project-tile" delay={(index % 2) * 0.12} key={project.title}>
              <article>
                <ProjectVisual index={index} title={project.title} />
                <div className="project-kicker">
                  <span>{project.client}</span>
                  <time>{project.period}</time>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TagList tags={project.tags} />
                {project.githubUrl ? (
                  <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer">
                    Ver projeto <span aria-hidden="true">↗</span>
                  </a>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="projects-cta">
          <a className="corner-button" href="#contato">
            <i className="corner corner-tl" aria-hidden="true" />
            <i className="corner corner-tr" aria-hidden="true" />
            <i className="corner corner-bl" aria-hidden="true" />
            <i className="corner corner-br" aria-hidden="true" />
            Construir algo relevante
          </a>
        </Reveal>
      </div>
    </section>
  );
}
