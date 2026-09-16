import { useEffect } from "react";
import "./PreviewSite.css";

export default function ExtraReplacementPreviewSite() {
  const name = "Mountain View Builders";
  const phone = "719-696-5266";
  const phoneHref = "tel:+17196965266";
  const email = "josh@mv-builders.com";
  useEffect(() => {
    const oldTitle = document.title;
    document.title = `${name} — Website Concept Preview`;
    let robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content");
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "noindex,nofollow");
    return () => { document.title = oldTitle; if (previous) robots.setAttribute("content", previous); };
  }, []);
  return <div className="preview" style={{"--preview-primary":"#17324d","--preview-secondary":"#2e86ab","--preview-accent":"#f18f01"}}>
    <div className="preview__conceptbar"><strong>Concept website preview</strong><span>Prepared as a redesign demonstration · not the current official website</span></div>
    <header className="preview__header"><a className="preview__brand" href="#top"><span className="preview__brandmark">MVB</span><span className="preview__brandtext"><strong>{name}</strong><small>Cañon City, Colorado</small></span></a><nav className="preview__nav"><a href="#services">Services</a><a href="#why">Why us</a><a href="#contact">Contact</a></nav><a className="preview__call preview__call--header" href={phoneHref}>Call {phone}</a></header>
    <main id="top">
      <section className="preview__hero"><div className="preview__heroGlow preview__heroGlow--one"/><div className="preview__heroGlow preview__heroGlow--two"/><div className="preview__heroGrid"/><div className="preview__heroContent"><p className="preview__eyebrow">Custom homes & post-frame buildings · Fremont County</p><h1>Build the dream. Make the first impression match it.</h1><p className="preview__lead">Luxury custom homes, barndominiums, cabins, workshops, garages, and post-frame buildings presented in a clean mobile-first experience.</p><div className="preview__actions"><a className="preview__button preview__button--primary" href={phoneHref}>Schedule a consultation</a><a className="preview__button preview__button--ghost" href="#services">View services</a></div></div><aside className="preview__heroCard"><span className="preview__status"><i/> Serving Fremont County</span><h2>Planning a build?</h2><p>Put project types, consultation access, and contact information where prospective clients can find them immediately.</p><a className="preview__bigPhone" href={phoneHref}>{phone}</a><div className="preview__contactRows"><div><strong>Location</strong><span>105 N 10th Street · Cañon City, CO</span></div><div><strong>Email</strong><span>{email}</span></div></div></aside></section>
      <section className="preview__proof"><div><strong>Custom</strong><span>Homes</span></div><div><strong>Post</strong><span>Frame buildings</span></div><div><strong>Local</strong><span>Fremont County</span></div></section>
      <section className="preview__section" id="services"><div className="preview__sectionIntro"><p className="preview__eyebrow">Services</p><h2>Show clients what you can build before they ever call.</h2></div><div className="preview__serviceGrid">{[["Custom Homes","Tailor-made residential builds designed around the homeowner."],["Barndominiums & Cabins","Flexible post-frame living spaces for Colorado properties."],["Workshops & Garages","Detached shops, garages, RV storage, and utility buildings."],["Commercial & Equestrian","Custom post-frame solutions for business and agricultural needs."]].map(([title,text],i)=><article className="preview__service" key={title}><span className="preview__serviceNumber">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href={phoneHref}>Start a conversation →</a></article>)}</div></section>
      <section className="preview__split" id="why"><div className="preview__splitVisual"><div className="preview__badge">LOCAL<br/>BUILDER</div><div className="preview__wrench">✦</div><p>A custom builder's website should feel as deliberate as the structures it showcases.</p></div><div className="preview__splitCopy"><p className="preview__eyebrow">Built around Mountain View Builders</p><h2>This is a starting concept, not a locked template.</h2><p>Every color, word, project photo, page, section, and feature can be customized around the company and its portfolio.</p><ul><li><span>✓</span>Mobile-first project presentation</li><li><span>✓</span>Fast consultation path</li><li><span>✓</span>Portfolio-ready structure</li><li><span>✓</span>Fully customizable branding</li></ul></div></section>
      <section className="preview__cta" id="contact"><div><p className="preview__eyebrow">Ready when you are</p><h2>Turn project interest into consultation requests.</h2></div><a className="preview__button preview__button--light" href={phoneHref}>Call {phone}</a></section>
    </main>
    <footer className="preview__footer"><div><strong>{name}</strong><span>Website redesign concept for Cañon City, Colorado</span></div><div><a href={phoneHref}>{phone}</a><span>{email}</span></div></footer>
  </div>;
}
