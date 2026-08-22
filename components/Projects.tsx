"use client";

import { LuLibraryBig } from "react-icons/lu";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { copy, projectsEn } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";

function ProjectVisual({ index, title, archive }: { index: number; title: string; archive: string }) {
  return (
    <div className="project-art" data-variant={index + 1} aria-hidden="true">
      <div className="project-art-grid" />
      <span className="project-art-index">{archive} / 0{index + 1}</span>
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
  const { locale, isEnglish } = useLanguage();
  const text = copy[locale].projects;
  const entries = isEnglish ? projectsEn : projects;

  return (
    <section className="projects paper-section" id="projetos" aria-labelledby="projects-title">
      <div className="wide-container">
        <Reveal className="projects-library-sign">
          <LuLibraryBig aria-hidden="true" />
          <h2 id="projects-title">The Library</h2>
        </Reveal>

        <Reveal className="projects-heading">
          <p className="eyebrow">{text.eyebrow} · {text.title}</p>
          <p>{text.intro}</p>
        </Reveal>

        <div className="project-list">
          {entries.map((project, index) => {
            const isProfileFallback = project.githubUrl === "https://github.com/guedesrayssa";

            return (
              <Reveal className="project-feature" delay={Math.min(index * 0.06, 0.18)} key={project.title}>
                <article>
                  <ProjectVisual index={index} title={project.title} archive={text.archive} />
                  <div className="project-copy">
                    <p className="project-number">PROJECT 0{index + 1}</p>
                    <div className="project-kicker">
                      <span>{project.client}</span>
                      <time>{project.period}</time>
                    </div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <TagList tags={project.tags} />
                    {project.githubUrl ? (
                      <a
                        className="project-link"
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${text.githubLabel}: ${project.title}`}
                      >
                        <SiGithub aria-hidden="true" />
                        <span>{isProfileFallback ? text.profile : text.code}</span>
                        <i aria-hidden="true">↗</i>
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="projects-cta">
          <a className="corner-button" href="#contato">
            <i className="corner corner-tl" aria-hidden="true" />
            <i className="corner corner-tr" aria-hidden="true" />
            <i className="corner corner-bl" aria-hidden="true" />
            <i className="corner corner-br" aria-hidden="true" />
            {text.cta}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
