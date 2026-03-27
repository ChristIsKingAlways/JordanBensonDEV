/**
 * Block: about
 * Two-column layout inside a glass panel (same treatment as hero__copy).
 */
import { aboutIntro, aboutParagraphs, skillTags } from "../../data/portfolioContent.js";
import "./About.css";

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-lead">
      <div className="about__inner">
        <div className="about__panel">
          <div className="about__columns">
            <div className="about__intro">
              <p className="about__eyebrow">{aboutIntro.eyebrow}</p>
              <h2 id="about-lead" className="about__lead">
                {aboutIntro.lead}
              </h2>
            </div>
            <div className="about__body">
              {aboutParagraphs.map((text, i) => (
                <p key={i} className="about__text">
                  {text}
                </p>
              ))}
              <ul className="about__skills">
                {skillTags.map((tag) => (
                  <li key={tag.label} className="about__skill-tag">
                    <span className="about__skill-tag-icons" aria-hidden="true">
                      {(tag.icons ?? [tag.icon]).map((file) => (
                        <img
                          key={file}
                          className="about__skill-icon"
                          src={`/skills/${file}`}
                          alt=""
                          width={22}
                          height={22}
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </span>
                    <span className="about__skill-tag-label">{tag.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
