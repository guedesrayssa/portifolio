"use client";

import Image from "next/image";
import { SiGithub } from "react-icons/si";
import { projects } from "@/data/projects";
import { site } from "@/data/site";
import { copy, projectsEn } from "@/data/translations";
import { useLanguage } from "./LanguageProvider";
import { LibraryShelf } from "./Ornaments";
import { Reveal } from "./Reveal";
import { TagList } from "./TagList";

type ProjectCoverProps = {
  cover: string;
  alt: string;
  index: number;
};

function ProjectCover({ cover, alt, index }: ProjectCoverProps) {
  return (
    <div className="project-art">
      <Image
        className="project-cover"
        src={cover}
        alt={alt}
        fill
        sizes="(max-width: 899px) 92vw, 640px"
        priority={index === 0}
      />
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
        <Reveal className="projects-heading">
          <div className="projects-heading-lockup">
            <LibraryShelf className="projects-shelf" />
            <div>
              <p className="eyebrow">{text.eyebrow}</p>
              <h2 id="projects-title">{text.title}</h2>
            </div>
          </div>
        </Reveal>

        <div className="project-list">
          {entries.map((project, index) => {
            const isProfileFallback = project.githubUrl === "https://github.com/guedesrayssa";

            return (
              <Reveal className="project-feature" delay={Math.min(index * 0.06, 0.18)} key={project.title}>
                <article>
                  <ProjectCover
                    cover={project.cover}
                    alt={`${text.coverAlt}: ${project.title}`}
                    index={index}
                  />
                  <div className="project-copy">
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
          <a className="corner-button" href={site.github} target="_blank" rel="noopener noreferrer">
            <i className="corner corner-tl" aria-hidden="true" />
            <i className="corner corner-tr" aria-hidden="true" />
            <i className="corner corner-bl" aria-hidden="true" />
            <i className="corner corner-br" aria-hidden="true" />
            <SiGithub aria-hidden="true" />
            <span>{text.cta}</span>
            <i className="corner-button-arrow" aria-hidden="true">→</i>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
