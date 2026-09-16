import { useEffect } from "react";
import "./PreviewSite.css";

const prospects = {
  "replacement-chaffee-building": {
    name: "Chaffee Building Company",
    shortName: "CHAFFEE",
    phone: "719-491-0145",
    email: "contact@chaffeebuilding.com",
    location: "Salida, CO",
    hero: "Custom building deserves a custom first impression.",
    subhero: "Custom home framing, foundations, slabs, decks, structural welding, and concrete-focused construction across Chaffee County.",
    services: [["Custom Framing","Custom-home framing and structural build work."],["Foundations & Slabs","ICF foundations, slabs, and concrete structural work."],["Decks","Outdoor living spaces built for Colorado properties."],["Structural Welding","Certified field fabrication and structural welding."]]
  },
  "replacement-all-seasons": {
    name: "All Seasons Excavating LLC",
    shortName: "ALL SEASONS",
    phone: "719-240-3893",
    email: "excavation75@msn.com",
    location: "Rye, CO",
    hero: "Heavy work. Clear communication. One easy next step.",
    subhero: "Earthwork, septic systems, site preparation, road maintenance, snow removal, and excavation services across Southern Colorado.",
    services: [["Earthwork","Excavation, grading, and earth-moving projects."],["Septic Systems","Septic installation and related site work."],["Site Preparation","Construction and property site preparation."],["Road Work","Road maintenance, repair, culverts, and snow removal."]]
  },
  "replacement-snyder": {
    name: "D. Snyder Construction",
    shortName: "SNYDER",
    phone: "719-240-4589",
    email: "doug@dsnydercontruction.com",
    location: "Salida, CO",
    hero: "Thirty years of craftsmanship should look established online.",
    subhero: "Custom-home construction backed by decades of Colorado building experience and a local-first approach.",
    services: [["Custom Homes","Custom residential construction from concept through completion."],["Planning","Early project consultation and build planning."],["Local Building","Projects coordinated with local trades and suppliers."],["Craftsmanship","Detail-focused construction designed to last."]]
  },
  "replacement-ascension-roofing": {
    name: "Ascension Roofing + Construction",
    shortName: "ASCENSION",
    phone: "719-937-1214",
    email: "joshua@ascensionroofingcolorado.com",
    location: "San Luis Valley, CO",
    hero: "Make the first step toward a better roof effortless.",
    subhero: "Residential roofing and new-build roofing support across the San Luis Valley, Buena Vista, Salida, and surrounding communities.",
    services: [["Roof Estimates","Clear project intake and roofing estimates."],["Roof Repair","Repair planning for damaged or aging roofs."],["Replacement","Residential roof replacement projects."],["New Builds","Roofing support for new residential construction."]]
  },
  "replacement-alpenglow": {
    name: "Alpenglow Builders",
    shortName: "ALPENGLOW",
    phone: "719-256-0160",
    email: "Derek@BuildAlpenglow.com",
    location: "Buena Vista / Salida, CO",
    hero: "Thoughtful homes deserve a thoughtful digital front door.",
    subhero: "Home building and remodeling across Buena Vista, Salida, Nathrop, and Chaffee County.",
    services: [["Custom Homes","Residential building shaped around the owner and site."],["Remodeling","Renovations and additions for existing homes."],["Project Planning","Planning and coordination from concept forward."],["Chaffee County","Local building knowledge across the Upper Arkansas Valley."]]
  },
};

function Icon({ children }) { return <span className="preview__icon" aria-hidden="true">{children}</span>; }

export default function ReplacementPreviewSite({ id }) {
  const site = prospects[id];
  if (!site) return null;
  const phoneHref = `tel:+1${site.phone.replace(/\D/g, "")}`;
  useEffect(() => {
    const oldTitle = document.title;
    document.title = `${site.name} — Website Concept Preview`;
    let robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content");
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "noindex,nofollow");
    return () => { document.title = oldTitle; if (previous) robots.setAttribute("content", previous); };
  }, [site.name]);

  return <div className="preview" style={{"--preview-primary":"#17324d","--preview-secondary":"#2e86ab","--preview-accent":"#f18f01"}}>
    <div className="preview__conceptbar"><strong>Concept website preview</strong><span>Prepared as a redesign demonstration · not the current official website</span></div>
    <header className="preview__header"><a className="preview__brand" href="#top"><span className="preview__brandmark">{site.shortName}</span><span className="preview__brandtext"><strong>{site.name}</strong><small>{site.location}</small></span></a><nav className="preview__nav"><a href="#services">Services</a><a href="#why">Why us</a><a href="#contact">Contact</a></nav><a className="preview__call preview__call--header" href={phoneHref}>Call {site.phone}</a></header>
    <main id="top">
      <section className="preview__hero"><div className="preview__heroGlow preview__heroGlow--one"/><div className="preview__heroGlow preview__heroGlow--two"/><div className="preview__heroGrid"/><div className="preview__heroContent"><p className="preview__eyebrow">Local service · {site.location}</p><h1>{site.hero}</h1><p className="preview__lead">{site.subhero}</p><div className="preview__actions"><a className="preview__button preview__button--primary" href={phoneHref}>Call for service</a><a className="preview__button preview__button--ghost" href="#services">View services</a></div><div className="preview__quick"><span><Icon>✓</Icon> Local service</span><span><Icon>✓</Icon> Clear contact path</span><span><Icon>✓</Icon> Mobile-first</span></div></div><aside className="preview__heroCard"><span className="preview__status"><i/> Serving Colorado customers</span><h2>Ready to start?</h2><p>A clean first impression with the core services and contact path front and center.</p><a className="preview__bigPhone" href={phoneHref}>{site.phone}</a><div className="preview__contactRows"><div><strong>Location</strong><span>{site.location}</span></div><div><strong>Email</strong><span>{site.email}</span></div></div></aside></section>
      <section className="preview__proof"><div><strong>Local</strong><span>Colorado business</span></div><div><strong>Fast</strong><span>Click-to-call path</span></div><div><strong>Clear</strong><span>Service-first layout</span></div></section>
      <section className="preview__section" id="services"><div className="preview__sectionIntro"><p className="preview__eyebrow">Services</p><h2>Show customers what matters immediately.</h2><p>A streamlined mobile-first layout turns the first visit into a clear path toward a call or estimate request.</p></div><div className="preview__serviceGrid">{site.services.map(([title,text],i)=><article className="preview__service" key={title}><span className="preview__serviceNumber">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href={phoneHref}>Get started →</a></article>)}</div></section>
      <section className="preview__split" id="why"><div className="preview__splitVisual"><div className="preview__badge">LOCAL<br/>SERVICE</div><div className="preview__wrench">✦</div><p>A strong local company should look just as established online as it does in the field.</p></div><div className="preview__splitCopy"><p className="preview__eyebrow">Built around {site.shortName}</p><h2>This concept is a starting point, not a locked template.</h2><p>Every color, word, photo, service, page, section, and feature can be customized around the business.</p><ul><li><span>✓</span>Mobile-first design</li><li><span>✓</span>Fast click-to-call access</li><li><span>✓</span>Service-focused navigation</li><li><span>✓</span>Fully customizable content and branding</li></ul><a className="preview__button preview__button--dark" href={phoneHref}>Call {site.phone}</a></div></section>
      <section className="preview__cta" id="contact"><div><p className="preview__eyebrow">Ready when you are</p><h2>Turn website visits into actual conversations.</h2></div><a className="preview__button preview__button--light" href={phoneHref}>Call {site.phone}</a></section>
    </main>
    <footer className="preview__footer"><div><strong>{site.name}</strong><span>Website redesign concept for {site.location}</span></div><div><a href={phoneHref}>{site.phone}</a><span>{site.email}</span></div></footer>
  </div>;
}
