/**
 * Block: about
 * Short bio — pulls paragraphs from portfolioContent.js.
 */
import { aboutParagraphs } from "../../data/portfolioContent.js";
import "./About.css";

function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner">
        <h2 id="about-title" className="about__title">
          About
        </h2>
        <div className="about__body">
          {aboutParagraphs.map((text, i) => (
            <p key={i} className="about__text">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
