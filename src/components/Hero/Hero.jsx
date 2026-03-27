/**
 * Block: hero
 * First screen: name, role, short pitch, CTA to projects/contact.
 */
import { siteMeta } from "../../data/portfolioContent.js";
import "./Hero.css";

function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="hero__inner">
        <p className="hero__eyebrow">Portfolio</p>
        <h1 id="hero-title" className="hero__title">
          {siteMeta.name}
        </h1>
        <p className="hero__role">{siteMeta.role}</p>
        <p className="hero__tagline">{siteMeta.tagline}</p>
        <div className="hero__actions">
          <a className="hero__btn hero__btn--primary" href="#projects">
            View projects
          </a>
          <a className="hero__btn hero__btn--ghost" href="#contact">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
