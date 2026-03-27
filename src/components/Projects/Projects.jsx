/**
 * Block: projects
 * Compact screenshot grid — layout/typography aligned with jordanbensondev.com “Selected Work”.
 * Preview thumbs fade in after load so slow Microlink responses don’t flash empty frames as long.
 */
import { useState } from "react";
import { projects, microlinkScreenshotUrl } from "../../data/portfolioContent.js";
import "./Projects.css";

function ProjectCard({ project, ratioClass }) {
  const [imgReady, setImgReady] = useState(false);

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`projects__card ${ratioClass}`}
    >
      <div className="projects__thumb">
        <img
          className={`projects__image ${imgReady ? "projects__image--ready" : ""}`}
          src={microlinkScreenshotUrl(project.url)}
          alt={project.imageAlt}
          loading="lazy"
          decoding="async"
          onLoad={() => setImgReady(true)}
          onError={() => setImgReady(true)}
        />
      </div>
      <div className="projects__meta">
        <div className="projects__text">
          <h3 className="projects__card-title">{project.title}</h3>
          <p className="projects__category">{project.category}</p>
        </div>
        <span className="projects__arrow" aria-hidden="true">
          →
        </span>
      </div>
    </a>
  );
}

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-heading" data-code-snippet="projects">
      <div className="projects__inner">
        <header className="projects__header">
          <p className="projects__eyebrow">Selected Work</p>
          <h2 id="projects-heading" className="projects__title">
            Recent projects
          </h2>
        </header>
        <ul className="projects__grid">
          {projects.map((project, i) => (
            <li key={project.title} className="projects__item">
              <ProjectCard project={project} ratioClass={`projects__card--ratio-${(i % 3) + 1}`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
