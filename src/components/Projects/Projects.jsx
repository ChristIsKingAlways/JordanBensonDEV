/**
 * Block: projects — full-width image cards with hover overlay (David Bragg e-portfolio pattern).
 */
import { useState } from "react";
import { projects, microlinkScreenshotUrl } from "../../data/portfolioContent.js";
import "./Projects.css";

function ProjectCard({ project }) {
  const [imgReady, setImgReady] = useState(false);
  const stackLine = project.stack.join(", ");

  return (
    <li className="projects__item">
      <article className="projects__project">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__wrapper"
        >
          <img
            className={`projects__img ${imgReady ? "projects__img--ready" : ""}`}
            src={microlinkScreenshotUrl(project.url)}
            alt={project.imageAlt}
            loading="lazy"
            decoding="async"
            onLoad={() => setImgReady(true)}
            onError={() => setImgReady(true)}
          />
          <div className="projects__overlay" aria-hidden="true" />
          <div className="projects__description">
            <h3 className="projects__desc-title">{project.title}</h3>
            <p className="projects__desc-sub">{stackLine}</p>
            <p className="projects__desc-para">{project.description}</p>
            <span className="projects__desc-link">Visit site</span>
          </div>
        </a>
      </article>
    </li>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading" data-code-snippet="projects">
      <div className="projects__inner">
        <header className="projects__header">
          <h2 id="projects-heading" className="projects__section-title">
            Here are some of my projects
          </h2>
        </header>
        <ul className="projects__list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
