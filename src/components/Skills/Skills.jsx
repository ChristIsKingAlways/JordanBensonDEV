/**
 * Block: skills
 * Renders skill groups as cards; data lives in portfolioContent.js.
 */
import { skills } from "../../data/portfolioContent.js";
import "./Skills.css";

function Skills() {
  return (
    <section id="skills" className="skills" aria-labelledby="skills-title">
      <div className="skills__inner">
        <h2 id="skills-title" className="skills__title">
          Skills
        </h2>
        <p className="skills__intro">
          Tools and habits I use day to day. Adjust groups in{" "}
          <code className="skills__code">src/data/portfolioContent.js</code>.
        </p>
        <ul className="skills__grid">
          {skills.groups.map((group) => (
            <li key={group.title} className="skills__card">
              <h3 className="skills__card-title">{group.title}</h3>
              <ul className="skills__list">
                {group.items.map((item) => (
                  <li key={item} className="skills__item">
                    {item}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
