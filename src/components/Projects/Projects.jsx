/**
 * Block: projects
 * List layout (title → tech line → description) inspired by classic e-portfolio patterns;
 * optional Microlink thumb per row for a quick visual anchor.
 */
import { useState } from "react";
import { projects, microlinkScreenshotUrl } from "../../data/portfolioContent.js";
import "./Projects.css";

function ProjectRow({ project }) {
  const [imgReady, setImgReady] = useState(false);
  const stackLine = project.stack.join(", ");

  return (
    <li className="projects__item">
      <article className="projects__article">
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="projects__thumb-wrap"
          aria-hidden="true"
          tabIndex={-1}
        >
          <div className="projects__thumb">
            <img
              className={`projects__image ${imgReady ? "projects__image--ready" : ""}`}
              src={microlinkScreenshotUrl(project.url)}
              alt=""
              loading="lazy"
              decoding="async"
              onLoad={() => setImgReady(true)}
              onError={() => setImgReady(true)}
            />
          </div>
        </a>
        <div className="projects__body">
          <h3 className="projects__name">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="projects__title-link"
            >
              {project.title}
            </a>
          </h3>
          <p className="projects__stack">{stackLine}</p>
          <p className="projects__description">{project.description}</p>
        </div>
      </article>
    </li>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading" data-code-snippet="projects">
      <div className="projects__inner">
        <header className="projects__header">
          <h2 id="projects-heading" className="projects__title">
            Here are some of my projects
          </h2>
        </header>
        <ul className="projects__list">
          {projects.map((project) => (
            <ProjectRow key={project.title} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
