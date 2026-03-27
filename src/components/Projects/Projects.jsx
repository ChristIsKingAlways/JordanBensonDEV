/**
 * Block: projects
 * Project cards — swap placeholders in portfolioContent.js for real case studies.
 */
import { projects } from "../../data/portfolioContent.js";
import "./Projects.css";

function Projects() {
  return (
    <section id="projects" className="projects" aria-labelledby="projects-title">
      <div className="projects__inner">
        <h2 id="projects-title" className="projects__title">
          Projects
        </h2>
        <p className="projects__intro">
          Highlights of what I have shipped or am building. Each card links out when you add a real URL.
        </p>
        <ul className="projects__grid">
          {projects.map((project) => (
            <li key={project.title} className="projects__card">
              <h3 className="projects__card-title">{project.title}</h3>
              <p className="projects__card-desc">{project.description}</p>
              <ul className="projects__tags" aria-label="Tech stack">
                {project.stack.map((tag) => (
                  <li key={tag} className="projects__tag">
                    {tag}
                  </li>
                ))}
              </ul>
              <a className="projects__link" href={project.link}>
                {project.linkLabel}
                <span className="projects__link-arrow" aria-hidden>
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
