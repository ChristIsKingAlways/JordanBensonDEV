import { useEffect } from "react";
import "./PreviewSite.css";

export default function CentralColoradoConcretePreviewSite() {
  const phone = "719-431-9918";
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Central Colorado Concrete — Website Concept Preview";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "noindex,nofollow");
    return () => { document.title = oldTitle; };
  }, []);

  return <div className="preview" style={{"--preview-primary":"#1f2937","--preview-secondary":"#374151","--preview-accent":"#f59e0b"}}>
    <div className="preview__conceptbar"><strong>Concept website preview</strong><span>Prepared as a redesign demonstration · not the current official website</span></div>
    <header className="preview__header">
      <a className="preview__brand" href="#top"><span className="preview__brandmark">CCC</span><span className="preview__brandtext"><strong>Central Colorado Concrete</strong><small>Cañon City, CO</small></span></a>
      <nav className="preview__nav"><a href="#services">Services</a><a href="#why">Why us</a><a href="#contact">Contact</a></nav>
      <a className="preview__call preview__call--header" href="tel:+17194319918">Call {phone}</a>
    </header>
    <main id="top">
      <section className="preview__hero"><div className="preview__heroGlow preview__heroGlow--one"/><div className="preview__heroGlow preview__heroGlow--two"/><div className="preview__heroGrid"/>
        <div className="preview__heroContent"><p className="preview__eyebrow">Concrete contractor · Cañon City, Colorado</p><h1>Build on a good foundation.</h1><p className="preview__lead">Stamped concrete, sidewalks, driveways, foundations, and patios for customers across Central and Southern Colorado.</p><div className="preview__actions"><a className="preview__button preview__button--primary" href="tel:+17194319918">Request an estimate</a><a className="preview__button preview__button--ghost" href="#services">View services</a></div></div>
        <aside className="preview__heroCard"><span className="preview__status"><i/> Serving Colorado since 2015</span><h2>Planning a concrete project?</h2><p>Put the core services, service area, and estimate path front and center for homeowners and businesses.</p><a className="preview__bigPhone" href="tel:+17194319918">{phone}</a><div className="preview__contactRows"><div><strong>Location</strong><span>Cañon City, CO</span></div><div><strong>Email</strong><span>cccbids@yahoo.com</span></div></div></aside>
      </section>
      <section className="preview__proof"><div><strong>Local</strong><span>Central Colorado service</span></div><div><strong>Clear</strong><span>Estimate-first contact path</span></div><div><strong>Mobile</strong><span>Click-to-call ready</span></div></section>
      <section className="preview__section" id="services"><div className="preview__sectionIntro"><p className="preview__eyebrow">Services</p><h2>Concrete work made easy to explore.</h2></div><div className="preview__serviceGrid"><article><h3>Stamped Concrete</h3><p>Decorative concrete finishes designed around the property.</p></article><article><h3>Sidewalks & Driveways</h3><p>Durable flatwork for homes, businesses, and access areas.</p></article><article><h3>Foundations</h3><p>Concrete foundations built for long-term performance.</p></article><article><h3>Concrete Patios</h3><p>Outdoor concrete spaces made for everyday use.</p></article></div></section>
      <section className="preview__section" id="why"><div className="preview__sectionIntro"><p className="preview__eyebrow">Why Central Colorado Concrete</p><h2>Local workmanship with a straightforward next step.</h2></div><div className="preview__whyGrid"><div>Serving customers since 2015</div><div>Residential & business projects</div><div>Central & Southern Colorado coverage</div><div>Direct phone and email contact</div></div></section>
      <section className="preview__cta" id="contact"><p className="preview__eyebrow">Start a project</p><h2>Tell Central Colorado Concrete what you need built.</h2><p>Call or email to discuss the project and request an estimate.</p><div className="preview__actions"><a className="preview__button preview__button--primary" href="tel:+17194319918">Call {phone}</a><a className="preview__button preview__button--ghost" href="mailto:cccbids@yahoo.com">Email Central Colorado Concrete</a></div></section>
    </main>
  </div>;
}
