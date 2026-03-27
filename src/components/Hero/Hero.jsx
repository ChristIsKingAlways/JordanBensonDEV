/**
 * Block: hero
 * Full-viewport intro + glass copy card — headline split across two lines like jordanbensondev.com.
 */
import { hero } from "../../data/portfolioContent.js";
import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-heading" data-code-snippet="hero">
      <div className="hero__inner">
        <div className="hero__copy hero__copy--animated">
          <h1 id="hero-heading" className="hero__headline">
            <span className="hero__line">{hero.line1}</span>
            <span className="hero__line hero__line--muted">{hero.line2}</span>
          </h1>
          <p className="hero__lede">{hero.lede}</p>
          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#projects">
              View Work
            </a>
            <a className="hero__btn hero__btn--secondary" href="#contact">
              Get in touch →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
