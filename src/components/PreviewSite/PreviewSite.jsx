import { useEffect } from "react";
import "./PreviewSite.css";

const previews = {
  "cd-plumbing": {
    eyebrow: "Fremont County's local plumbing team",
    name: "C & D Plumbing",
    shortName: "C&D",
    hero: "Plumbing done right the first time.",
    subhero:
      "Straightforward plumbing repair and installation for homes across Cañon City, Florence, Penrose, Wetmore, Cotopaxi, and Salida.",
    phone: "719-285-8536",
    phoneHref: "tel:+17192858536",
    location: "Cañon City, Colorado",
    hours: "Monday–Friday · 8 AM–5 PM",
    primary: "#0b4f6c",
    secondary: "#01baef",
    accent: "#f5b700",
    services: [
      ["Water Heaters", "Repair, replacement, and tankless water-heater solutions."],
      ["Drain & Sewer", "Drain clearing, sewer troubleshooting, and camera inspections."],
      ["Water & Gas Lines", "Professional line repair, installation, and leak detection."],
      ["Everyday Plumbing", "Faucets, toilets, disposals, fixtures, and more."],
    ],
    proof: [
      ["26+", "Years of plumbing experience"],
      ["Local", "Family-owned & operated"],
      ["A+", "BBB accredited business"],
    ],
    why: [
      "Locally owned and operated",
      "Military and senior discounts",
      "Residential plumbing expertise",
      "Serving Fremont County and nearby communities",
    ],
    footer: "Serving Cañon City and surrounding Southern Colorado communities",
  },
  elmers: {
    eyebrow: "Heating, cooling & sheet metal in Pueblo",
    name: "Elmer's Sheet Metal Inc.",
    shortName: "ELMER'S",
    hero: "Comfort you can count on. Craftsmanship built to last.",
    subhero:
      "Local HVAC service, repair, replacement, and custom sheet-metal expertise for Pueblo homes and businesses.",
    phone: "719-566-8750",
    phoneHref: "tel:+17195668750",
    email: "admin_elmers@comcast.net",
    location: "2629 S Prairie Ave · Pueblo, CO",
    hours: "Mon–Thu 7 AM–4 PM · Fri 7 AM–3:30 PM",
    primary: "#17324d",
    secondary: "#2e86ab",
    accent: "#f18f01",
    services: [
      ["Heating", "Furnace service, repair, replacement, and dependable winter comfort."],
      ["Air Conditioning", "AC diagnostics, repair, maintenance, and replacement."],
      ["Sheet Metal", "In-house sheet-metal capability for HVAC and ventilation needs."],
      ["Same-Day Help", "Fast scheduling is often available for urgent comfort problems."],
    ],
    proof: [
      ["50+", "Years serving the trade"],
      ["Local", "Pueblo-based team"],
      ["HVAC", "Heating & cooling specialists"],
    ],
    why: [
      "Longstanding Pueblo business",
      "Residential and commercial capability",
      "Upfront estimates before work begins",
      "Same-day appointments often available",
    ],
    footer: "Proudly serving Pueblo and surrounding Southern Colorado communities",
  },
  "rr-heating": {
    eyebrow: "Family-owned HVAC service in Pueblo since 1981",
    name: "R & R Heating & Air Conditioning",
    shortName: "R&R",
    hero: "Comfort shouldn't be complicated.",
    subhero:
      "Heating, air conditioning, repair, replacement, and new-construction HVAC from a Pueblo team serving the community for more than four decades.",
    phone: "719-542-4416",
    phoneHref: "tel:+17195424416",
    email: "shelby.rrheating@gmail.com",
    location: "314 Lamkin St · Pueblo, CO",
    hours: "Monday–Friday · 8 AM–4 PM",
    primary: "#123b58",
    secondary: "#247ba0",
    accent: "#f4a261",
    services: [
      ["HVAC Repair", "Fast troubleshooting and repair for heating, cooling, and ductwork issues."],
      ["System Replacement", "Heating and cooling replacement with free estimates for qualifying projects."],
      ["New Construction", "HVAC design, ductwork, and installation for new homes and projects."],
      ["Commercial", "Heating and cooling solutions for offices, restaurants, churches, and more."],
    ],
    proof: [
      ["40+", "Years serving Pueblo"],
      ["Family", "Locally owned business"],
      ["HVAC", "Repair through installation"],
    ],
    why: [
      "Serving Pueblo since 1981",
      "Licensed and insured",
      "Residential and commercial systems",
      "Full sheet-metal capability",
    ],
    footer: "Family-owned heating and cooling service for Pueblo, Colorado",
  },
  "jrb-electric": {
    eyebrow: "Local electrical service for Florence and nearby communities",
    name: "JRB Electric, LLC",
    shortName: "JRB",
    hero: "Reliable power. Clean work. No guesswork.",
    subhero:
      "Residential and commercial electrical work, from everyday troubleshooting to panels, EV chargers, generators, wiring, and upgrades.",
    phone: "719-320-0913",
    phoneHref: "tel:+17193200913",
    email: "jrbelectricllc1@gmail.com",
    location: "250 Moore Drive Unit B · Florence, CO",
    hours: "Call for scheduling",
    primary: "#161b22",
    secondary: "#2f81f7",
    accent: "#f0b429",
    services: [
      ["Panels & Breakers", "Panel upgrades, breaker repair, load improvements, and diagnostics."],
      ["Wiring & Lighting", "New wiring, fixtures, outlets, switches, and lighting upgrades."],
      ["EV & Specialty Circuits", "EV chargers, hot tubs, RV circuits, and other dedicated power needs."],
      ["Generators & Troubleshooting", "Generator work and electrical diagnostics for homes and businesses."],
    ],
    proof: [
      ["11+", "Years of experience"],
      ["Local", "Florence-based team"],
      ["R + C", "Residential & commercial"],
    ],
    why: [
      "Locally owned and operated",
      "Residential and commercial service",
      "Free consultation",
      "Modern electrical upgrades and troubleshooting",
    ],
    footer: "Electrical service for Florence, Cañon City, and surrounding Southern Colorado communities",
  },
  "solution-pro": {
    eyebrow: "Heating, cooling & refrigeration in Pueblo West",
    name: "Solution Pro Heating & Air LLC",
    shortName: "SOLUTION PRO",
    hero: "Fast comfort solutions when your system can't wait.",
    subhero:
      "Heating, air conditioning, refrigeration, repair, replacement, and emergency service backed by more than 20 years of experience.",
    phone: "719-251-5729",
    phoneHref: "tel:+17192515729",
    location: "1063 W Broken Bow Dr · Pueblo West, CO",
    hours: "Monday–Friday · 7:30 AM–4:30 PM",
    primary: "#102a43",
    secondary: "#0ea5a8",
    accent: "#ffb703",
    services: [
      ["Heating", "Furnace tune-ups, repair, replacement, and new heating installations."],
      ["Air Conditioning", "AC tune-ups, diagnostics, repairs, and replacement systems."],
      ["Refrigeration", "Commercial refrigeration installation and repair for local businesses."],
      ["Emergency Service", "Urgent heating, cooling, and refrigeration help when available."],
    ],
    proof: [
      ["20+", "Years of experience"],
      ["24/7", "Emergency service available"],
      ["1 Yr", "Labor warranty on new installs"],
    ],
    why: [
      "More than 20 years of experience",
      "Emergency services available",
      "Free estimates on replacements",
      "Same-day appointments available when scheduling allows",
    ],
    footer: "Heating, cooling, and refrigeration service for Pueblo West and surrounding communities",
  },
};

function Icon({ children }) {
  return <span className="preview__icon" aria-hidden="true">{children}</span>;
}

export default function PreviewSite({ id }) {
  const site = previews[id];

  useEffect(() => {
    if (!site) return;
    const oldTitle = document.title;
    document.title = `${site.name} — Website Concept Preview`;

    let robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content");
    if (!robots) {
      robots = document.createElement("meta");
      robots.setAttribute("name", "robots");
      document.head.appendChild(robots);
    }
    robots.setAttribute("content", "noindex,nofollow");

    return () => {
      document.title = oldTitle;
      if (previous) robots.setAttribute("content", previous);
    };
  }, [site]);

  if (!site) return null;

  return (
    <div
      className="preview"
      style={{
        "--preview-primary": site.primary,
        "--preview-secondary": site.secondary,
        "--preview-accent": site.accent,
      }}
    >
      <div className="preview__conceptbar">
        <strong>Concept website preview</strong>
        <span>Prepared as a redesign demonstration · not the current official website</span>
      </div>

      <header className="preview__header">
        <a className="preview__brand" href="#top" aria-label={`${site.name} home`}>
          <span className="preview__brandmark">{site.shortName}</span>
          <span className="preview__brandtext">
            <strong>{site.name}</strong>
            <small>{site.location}</small>
          </span>
        </a>
        <nav className="preview__nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#why">Why us</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="preview__call preview__call--header" href={site.phoneHref}>
          Call {site.phone}
        </a>
      </header>

      <main id="top">
        <section className="preview__hero">
          <div className="preview__heroGlow preview__heroGlow--one" />
          <div className="preview__heroGlow preview__heroGlow--two" />
          <div className="preview__heroGrid" />
          <div className="preview__heroContent">
            <p className="preview__eyebrow">{site.eyebrow}</p>
            <h1>{site.hero}</h1>
            <p className="preview__lead">{site.subhero}</p>
            <div className="preview__actions">
              <a className="preview__button preview__button--primary" href={site.phoneHref}>
                Call for service
              </a>
              <a className="preview__button preview__button--ghost" href="#services">
                View services
              </a>
            </div>
            <div className="preview__quick">
              <span><Icon>✓</Icon> Local service</span>
              <span><Icon>✓</Icon> Clear communication</span>
              <span><Icon>✓</Icon> Experienced team</span>
            </div>
          </div>

          <aside className="preview__heroCard" aria-label="Contact information">
            <span className="preview__status"><i /> Now serving Southern Colorado</span>
            <h2>Need service?</h2>
            <p>Talk directly with a local team and get your project moving.</p>
            <a className="preview__bigPhone" href={site.phoneHref}>{site.phone}</a>
            <div className="preview__contactRows">
              <div><strong>Hours</strong><span>{site.hours}</span></div>
              <div><strong>Location</strong><span>{site.location}</span></div>
              {site.email && <div><strong>Email</strong><span>{site.email}</span></div>}
            </div>
          </aside>
        </section>

        <section className="preview__proof" aria-label="Business highlights">
          {site.proof.map(([number, label]) => (
            <div key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
            </div>
          ))}
        </section>

        <section className="preview__section" id="services">
          <div className="preview__sectionIntro">
            <p className="preview__eyebrow">Services</p>
            <h2>One call. Practical solutions.</h2>
            <p>Clear service categories help visitors quickly understand what you do and take the next step.</p>
          </div>
          <div className="preview__serviceGrid">
            {site.services.map(([title, text], index) => (
              <article className="preview__service" key={title}>
                <span className="preview__serviceNumber">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a href={site.phoneHref}>Get help →</a>
              </article>
            ))}
          </div>
        </section>

        <section className="preview__split" id="why">
          <div className="preview__splitVisual">
            <div className="preview__badge">LOCAL<br />SERVICE</div>
            <div className="preview__wrench" aria-hidden="true">✦</div>
            <p>Built around the thing customers care about most: getting the problem handled by someone they can trust.</p>
          </div>
          <div className="preview__splitCopy">
            <p className="preview__eyebrow">Why choose {site.shortName}</p>
            <h2>A local company should feel local online, too.</h2>
            <p>
              This concept puts trust, service area, phone access, and core services above the fold instead of making customers hunt for them.
            </p>
            <ul>
              {site.why.map((item) => <li key={item}><span>✓</span>{item}</li>)}
            </ul>
            <a className="preview__button preview__button--dark" href={site.phoneHref}>Call {site.phone}</a>
          </div>
        </section>

        <section className="preview__cta" id="contact">
          <div>
            <p className="preview__eyebrow">Ready when you are</p>
            <h2>Get the help you need without the runaround.</h2>
          </div>
          <a className="preview__button preview__button--light" href={site.phoneHref}>Call {site.phone}</a>
        </section>
      </main>

      <footer className="preview__footer">
        <div>
          <strong>{site.name}</strong>
          <span>{site.footer}</span>
        </div>
        <div>
          <a href={site.phoneHref}>{site.phone}</a>
          {site.email && <span>{site.email}</span>}
        </div>
      </footer>
    </div>
  );
}
