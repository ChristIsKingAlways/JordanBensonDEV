import { useEffect } from "react";
import "./PreviewSite.css";

export default function DuralConcretePreviewSite() {
  const phone = "719-415-3424";
  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Dural Concrete — Website Concept Preview";
    let robots = document.querySelector('meta[name="robots"]');
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "noindex,nofollow");
    return () => { document.title = oldTitle; };
  }, []);

  return <div className="preview" style={{"--preview-primary":"#1f2937","--preview-secondary":"#374151","--preview-accent":"#f59e0b"}}>
    <div className="preview__conceptbar"><strong>Concept website preview</strong><span>Prepared as a redesign demonstration · not the current official website</span></div>
    <header className="preview__header">
      <a className="preview__brand" href="#top"><span className="preview__brandmark">DURAL</span><span className="preview__brandtext"><strong>Dural Concrete</strong><small>Pueblo, CO</small></span></a>
      <nav className="preview__nav"><a href="#services">Services</a><a href="#why">Why us</a><a href="#contact">Contact</a></nav>
      <a className="preview__call preview__call--header" href="tel:+17194153424">Call {phone}</a>
    </header>
    <main id="top">
      <section className="preview__hero"><div className="preview__heroGlow preview__heroGlow--one"/><div className="preview__heroGlow preview__heroGlow--two"/><div className="preview__heroGrid"/>
        <div className="preview__heroContent"><p className="preview__eyebrow">Concrete contractor · Pueblo, Colorado</p><h1>Solid concrete work deserves a solid first impression.</h1><p className="preview__lead">Driveways, patios, foundations, and concrete projects for Pueblo and surrounding communities.</p><div className="preview__actions"><a className="preview__button preview__button--primary" href="tel:+17194153424">Get a free consultation</a><a className="preview__button preview__button--ghost" href="#services">View services</a></div></div>
        <aside className="preview__heroCard"><span className="preview__status"><i/> Serving Pueblo-area customers</span><h2>Ready to pour?</h2><p>Make it simple for customers to understand the work, see the service area, and request their next concrete project.</p><a className="preview__bigPhone" href="tel:+17194153424">{phone}</a><div className="preview__contactRows"><div><strong>Location</strong><span>Pueblo, CO</span></div><div><strong>Email</strong><span>info@duralconcrete.com</span></div></div></aside>
      </section>
      <section className="preview__proof"><div><strong>Local</strong><span>Pueblo concrete service</span></div><div><strong>Clear</strong><span>Free-consultation path</span></div><div><strong>Mobile</strong><span>Click-to-call ready</span></div></section>
      <section className="preview__section" id="services"><div className="preview__sectionIntro"><p className="preview__eyebrow">Services</p><h2>Concrete built around the property.</h2></div><div className="preview__serviceGrid"><article><h3>Driveways</h3><p>New concrete driveways, replacement, and project planning.</p></article><article><h3>Patios</h3><p>Durable outdoor concrete surfaces for Pueblo-area homes.</p></article><article><h3>Foundations</h3><p>Solid foundation work for new and existing projects.</p></article><article><h3>Concrete Projects</h3><p>Local expertise for residential concrete needs.</p></article></div></section>
      <section className="preview__section" id="why"><div className="preview__sectionIntro"><p className="preview__eyebrow">Why Dural</p><h2>A straightforward path from idea to estimate.</h2></div><div className="preview__whyGrid"><div>Local Pueblo contractor</div><div>Driveways, patios & foundations</div><div>Free consultation</div><div>Direct phone and email contact</div></div></section>
      <section className="preview__cta" id="contact"><p className="preview__eyebrow">Start a project</p><h2>Tell Dural Concrete what you need built.</h2><p>Call or email to discuss your project and request a consultation.</p><div className="preview__actions"><a className="preview__button preview__button--primary" href="tel:+17194153424">Call {phone}</a><a className="preview__button preview__button--ghost" href="mailto:info@duralconcrete.com">Email Dural Concrete</a></div></section>
    </main>
  </div>;
}
