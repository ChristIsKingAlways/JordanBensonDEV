import { useEffect } from "react";
import "./PreviewSite.css";

const p = (name, shortName, hero, subhero, phone, email, location, hours, services, proof, why, colors = ["#16324f", "#2f6690", "#f6ae2d"]) => ({
  name, shortName, hero, subhero, phone, email, location, hours, services, proof, why,
  phoneHref: `tel:+1${phone.replace(/\D/g, "")}`,
  primary: colors[0], secondary: colors[1], accent: colors[2],
  eyebrow: `Local service · ${location}`,
  footer: `Serving customers across ${location} and surrounding communities`,
});

const previews = {
  "total-service-hvac": p(
    "Total Service Heating, Air Conditioning & Refrigeration Inc.", "TOTAL SERVICE",
    "Comfort, cooling, and refrigeration — handled locally.",
    "Heating, air conditioning, and commercial refrigeration service from a family-owned Pueblo West team serving the area since 2003.",
    "719-547-1885", "totalservicehvac@aol.com", "681 S Tejon Ave · Pueblo West, CO", "Mon–Fri · 8 AM–5 PM",
    [["Heating", "Furnace and boiler repair, maintenance, replacement, and installation."], ["Cooling", "Air-conditioning troubleshooting, repair, replacement, and seasonal service."], ["Refrigeration", "Commercial refrigeration repair and service for local businesses."], ["Replacement", "Practical equipment options for homes and commercial properties."]],
    [["20+", "Years in business"], ["Family", "Owned & operated"], ["Local", "Pueblo West team"]],
    ["Serving the community since 2003", "Residential and commercial HVAC", "Commercial refrigeration capability", "Licensed and insured service team"]
  ),
  "wright-jones": p(
    "Wright-Jones Plumbing & Heating", "WRIGHT-JONES",
    "Seven decades of local experience. One straightforward call.",
    "Plumbing, heating, water-heater, gas-line, and emergency service backed by a Pueblo family business serving the region since 1949.",
    "719-543-0055", "tina@wrightjones.com", "2624 Ivywood Ln · Pueblo, CO", "24-hour emergency service available",
    [["Plumbing", "Repairs, fixtures, piping, water lines, and everyday plumbing service."], ["Water Heaters", "Water-heater repair, replacement, and installation."], ["Heating", "Heating-system service and boiler work for homes and businesses."], ["Gas Lines", "Gas-line repair and installation by experienced professionals."]],
    [["70+", "Years serving Pueblo"], ["24/7", "Emergency help"], ["Family", "Owned business"]],
    ["Serving Pueblo County since 1949", "Residential and commercial work", "Plumbing and heating under one roof", "Emergency service available"]
  ),
  "vision-mechanical": p(
    "Vision Mechanical", "VISION",
    "One team. One goal. One clear path to service.",
    "HVAC, plumbing, piping, hydronic, steam, VRF, and geothermal solutions presented in a cleaner customer-first experience.",
    "719-547-0218", "bsingleton@visionmech.net", "5 William White Blvd · Pueblo, CO", "Call for scheduling",
    [["HVAC", "Heating and cooling systems for commercial and residential needs."], ["Plumbing & Piping", "Plumbing, piping, and mechanical-system solutions."], ["Hydronics & Steam", "Specialized hydronic and steam-system capability."], ["VRF & Geothermal", "Modern comfort-system options for complex projects."]],
    [["Local", "Pueblo operation"], ["Full", "Mechanical scope"], ["One", "Team, one goal"]],
    ["Broad mechanical-service capability", "HVAC and plumbing expertise", "Specialized system experience", "Local Pueblo service"]
  ),
  "midtown-electric": p(
    "Midtown Electrical Services LLC", "MIDTOWN",
    "Electrical work that sparks confidence.",
    "Residential, commercial, and industrial electrical service from a Pueblo owner-operator focused on code-conscious, durable work.",
    "719-766-0600", "Ryan@MidtownElectrics.com", "Pueblo, CO 81005", "Mon–Sat · 6 AM–6 PM",
    [["Residential", "Rewires, repairs, lighting, upgrades, and everyday electrical projects."], ["Commercial", "Small commercial installations, remodels, lighting, and troubleshooting."], ["Industrial", "Lighting, power additions, controls, and industrial electrical work."], ["Fire & Specialty", "Specialty electrical systems and project-specific solutions."]],
    [["Local", "Pueblo owner-operator"], ["R+C+I", "Residential to industrial"], ["1 Yr", "Work warranty"]],
    ["Locally operated", "Residential, commercial, and industrial work", "Licensed and insured", "One-year workmanship warranty"]
  ),
  "aragons-lawn": p(
    "Aragon's Lawn Specialist", "ARAGON'S",
    "Turn the yard you have into the outdoor space you want.",
    "Landscaping, lawn maintenance, irrigation, trimming, weed removal, and concrete services for Pueblo-area homes and businesses.",
    "719-283-8615", "admin@landscaperpueblo.com", "Pueblo, CO 81005", "Mon–Fri · 9 AM–5 PM",
    [["Landscaping", "Outdoor improvements designed around the property and the way you use it."], ["Lawn Maintenance", "Routine maintenance that keeps outdoor spaces clean and manageable."], ["Irrigation", "Irrigation service and improvements for healthier landscaping."], ["Concrete & Cleanup", "Concrete work, trimming, weed removal, and property cleanup."]],
    [["11+", "Years of experience"], ["30 mi", "Service radius"], ["Local", "Pueblo team"]],
    ["Residential and commercial service", "Multiple outdoor services in one call", "Insured service", "Serving Pueblo and nearby communities"]
  ),
  "tripple-j-roofing": p(
    "Tripple J Roofing", "TRIPPLE J",
    "A better roof starts with a clear plan.",
    "Roofing, re-roofing, new construction, siding, gutters, and maintenance for Pueblo and surrounding Southern Colorado communities.",
    "719-270-2140", "admin@roofingcontractor-co.com", "Pueblo, CO", "Mon–Sat · 7 AM–7 PM",
    [["Roofing", "Roof repairs, replacement, re-roofing, and new roofing projects."], ["New Construction", "Roofing solutions for new residential and commercial construction."], ["Siding", "Exterior siding work to protect and refresh the property."], ["Gutters", "Gutter installation, maintenance, and cleaning support."]],
    [["Local", "Pueblo contractor"], ["Roof", "Repair to replacement"], ["Exterior", "Roofing, siding & gutters"]],
    ["Licensed roofing contractor", "Residential roofing capability", "Exterior-service options", "Serving Pueblo and surrounding areas"]
  ),
  "mam-concrete": p(
    "M.A.M. Concrete", "M.A.M.",
    "Concrete built for everyday use — and built to last.",
    "Residential concrete solutions for Pueblo, including driveways, basements, pavers, stamped finishes, and broom-finish work.",
    "719-674-4246", "admin@co-concretesvc.com", "Pueblo, CO 81001", "Call for a free estimate",
    [["Driveways", "Durable driveway pours and replacement projects."], ["Stamped Concrete", "Decorative stamped surfaces for patios, walks, and outdoor spaces."], ["Broom Finish", "Clean, functional concrete finishes for everyday surfaces."], ["Pavers & Basements", "Paver work, basement concrete, and other residential projects."]],
    [["Local", "Pueblo concrete team"], ["Free", "Estimates"], ["10%", "Veteran discount"]],
    ["Residential concrete specialist", "Multiple finish options", "Free estimates", "Veteran discount available"]
  ),
  "truss-mill": p(
    "The Truss Mill", "TRUSS MILL",
    "Colorado-built roof trusses, engineered around your project.",
    "Wood roof-truss manufacturing, layouts, engineering support, and project coordination for builders and property owners across Southern Colorado.",
    "719-315-4669", "thetrussmill@gmail.com", "151 Four Mile Ln · Cañon City, CO", "Mon–Fri · 8 AM–5 PM",
    [["Roof Trusses", "Wood roof trusses configured for residential, agricultural, and commercial projects."], ["Engineering", "Truss engineering and project-specific design support."], ["Layouts", "Clear truss layouts that help projects move from plan to build."], ["Pole Barns", "Truss solutions for pole barns, barndominiums, and agricultural structures."]],
    [["Local", "Cañon City manufacturing"], ["Custom", "Project layouts"], ["CO", "Regional service"]],
    ["Local manufacturing", "Engineering and layout support", "Pole-barn and barndominium experience", "Serving Cañon City through Salida and Pueblo"]
  ),
  "egon-electric": p(
    "Egon Electric, LLC", "EGON",
    "Safe. Local. Straightforward electrical service.",
    "Commercial and residential electrical installation, upgrades, troubleshooting, and safety work from a Colorado master electrician.",
    "719-964-4000", "EgonElectricCO@gmail.com", "Cañon City, CO & surrounding", "Mon–Fri · 8 AM–5 PM",
    [["Installations", "Electrical installation for homes, businesses, remodels, and new projects."], ["Upgrades", "Panel, circuit, lighting, and system upgrades."], ["Repairs", "Troubleshooting and repair for electrical problems and failures."], ["Safety", "Electrical inspections and safety-focused diagnostics."]],
    [["Master", "Electrician"], ["Local", "Southern Colorado"], ["Free", "Bid estimates"]],
    ["Licensed and insured", "Master-electrician experience", "Residential and commercial work", "Free bid estimates"]
  ),
  "johnnys-plumbing": p(
    "Johnny's Plumbing & Hydronics Co", "JOHNNY'S",
    "Plumbing and hydronic expertise built over generations.",
    "Plumbing, drain cleaning, water heaters, HVAC, and hydronic-heating work from a Cañon City family business serving the area since 1978.",
    "719-269-1252", "tony@johnnysplumbing.com", "730 S 8th St · Cañon City, CO", "Mon–Fri · 8 AM–5 PM",
    [["Plumbing", "Everyday plumbing repair, installation, and fixture work."], ["Hydronics", "Radiant and hydronic-heating systems backed by decades of experience."], ["Drain Cleaning", "Drain and sewer cleaning for residential and commercial customers."], ["Water Heaters & HVAC", "Water-heater and comfort-system solutions under one roof."]],
    [["1978", "Family business founded"], ["47+", "Years serving the region"], ["Hydronic", "Specialists"]],
    ["Family-owned since 1978", "Hydronic-heating expertise", "Plumbing and HVAC capability", "Cañon City showroom and service team"]
  ),
  "juniper-ridge": p(
    "Juniper Ridge Plumbing Co.", "JUNIPER RIDGE",
    "Plumbing experience built for mountain communities.",
    "Residential, commercial, fixture, piping, and efficiency-focused plumbing service for Westcliffe, Cañon City, and surrounding communities.",
    "719-429-7252", "juniperridgeplumbing@gmail.com", "340 CR 241 Unit 3 · Westcliffe, CO", "Call for scheduling",
    [["Residential", "Repairs, fixtures, piping, and practical plumbing solutions for the home."], ["Commercial", "Commercial plumbing support designed to minimize disruption."], ["Fixtures", "Professional plumbing-fixture installation and replacement."], ["Efficiency", "Water- and energy-conscious plumbing options for long-term savings."]],
    [["30+", "Years of trade experience"], ["Master", "Plumber-led"], ["Local", "Mountain service"]],
    ["Master-plumber leadership", "Residential and commercial service", "Large-project experience", "Serving mountain and Fremont County communities"]
  ),
  "powerhouse-excavation": p(
    "PowerHouse Excavation & Construction", "POWERHOUSE",
    "From dirt work to the finished structure — one accountable team.",
    "Excavation, metal buildings, mini storage, roofing, septic systems, remodels, and construction for projects across Southern Colorado.",
    "719-251-5677", "Jordan@phexcavationco.com", "Rye, CO 81069", "Mon–Fri · 9 AM–5 PM",
    [["Excavation", "Site work, dirt work, trenching, grading, and project preparation."], ["Metal Buildings", "Metal-building and storage construction for commercial and private projects."], ["Septic", "Septic-system work and related site preparation."], ["Construction", "Roofing, siding, remodels, new builds, and project management."]],
    [["Family", "Owned & operated"], ["Multi", "Trade capability"], ["SoCO", "Regional projects"]],
    ["Family-owned contractor", "Multiple trades managed under one team", "Residential and commercial experience", "Serving Southern Colorado"]
  ),
  "providence-plumbing": p(
    "Providence Plumbing", "PROVIDENCE",
    "Plumbing and heating service built around Chaffee County homes.",
    "Residential and commercial plumbing, HVAC installation, heating systems, new construction, and emergency plumbing service in Buena Vista and Chaffee County.",
    "719-239-1667", "service@providencebv.com", "Buena Vista, CO", "Call for scheduling",
    [["Plumbing", "Repairs, kitchens, bathrooms, pipe work, and everyday plumbing service."], ["Emergency Service", "Help for urgent plumbing problems when they cannot wait."], ["Heating", "Heating-system service and installation for mountain properties."], ["New Construction", "Plumbing and HVAC support for new construction projects."]],
    [["Local", "Buena Vista team"], ["R+C", "Residential & commercial"], ["Heat", "Plumbing + heating"]],
    ["Locally operated", "Residential and commercial plumbing", "Heating and HVAC installation", "New-construction capability"]
  ),
  "comfort-heating-plumbing": p(
    "Comfort Heating & Plumbing", "COMFORT",
    "Where quality and service still matter.",
    "Plumbing, heating, drain, sewer, and gas-piping service for Buena Vista, Salida, Leadville, Fairplay, and the Upper Arkansas Valley.",
    "719-207-1616", "comfortheater@gmail.com", "Buena Vista, CO 81211", "Call for availability",
    [["Plumbing", "Repairs, fixtures, piping, frozen lines, and residential plumbing service."], ["Heating", "Heating-system troubleshooting, repair, and installation."], ["Drains & Sewers", "Drain cleaning, cameras, and sewer-line service."], ["Gas & Hot Water", "Gas piping, water-heating, and solar hot-water support."]],
    [["23+", "Years serving Chaffee County"], ["Master", "Plumber-operated"], ["Local", "Family-owned"]],
    ["Family-owned and operated", "Master-plumber expertise", "Plumbing and heating service", "Serving the Arkansas River Valley"]
  ),
  "reyes-sealcoating": p(
    "Reyes Sealcoating & Crack Filling", "REYES",
    "Protect the pavement you already paid for.",
    "Sealcoating, crack filling, striping, pothole repair, and parking-lot maintenance for driveways and commercial pavement across Colorado.",
    "719-221-0558", "sergio.29rr@gmail.com", "Salida / Buena Vista, CO", "Call for a free quote",
    [["Sealcoating", "Protect asphalt surfaces and refresh curb appeal."], ["Crack Filling", "Seal cracks before water and weather create larger failures."], ["Striping", "Clean parking and traffic markings for commercial properties."], ["Repairs", "Pothole repair and practical parking-lot maintenance."]],
    [["Free", "Quotes"], ["CO", "Statewide service"], ["Asphalt", "Maintenance focus"]],
    ["Driveway and commercial work", "Free quotes", "Parking-lot maintenance", "Serving Salida, Buena Vista, and beyond"]
  ),
  "foampros": p(
    "Foampros LLC", "FOAMPROS",
    "Insulation, roofing, and concrete solutions built for Colorado.",
    "Spray-foam insulation, foam roofing, concrete lifting, and protective coatings for residential, commercial, and industrial properties.",
    "719-250-7002", "fricknfoam@gmail.com", "Southern Colorado", "Call for scheduling",
    [["Spray Foam", "Insulation for new and existing residential and commercial structures."], ["Foam Roofing", "Commercial and residential foam-roofing systems."], ["Concrete Lifting", "Concrete lifting and stabilization for uneven surfaces."], ["Protective Coatings", "Polyurea and specialty protective coatings for demanding applications."]],
    [["SPFA", "Trained team"], ["Multi", "Service capability"], ["CO", "Wide service area"]],
    ["Residential and commercial work", "SPFA-trained professionals", "Roofing and insulation capability", "Concrete and coating services"]
  ),
};

function Icon({ children }) { return <span className="preview__icon" aria-hidden="true">{children}</span>; }

export default function ExpandedPreviewSite({ id }) {
  const site = previews[id];
  useEffect(() => {
    if (!site) return;
    const oldTitle = document.title;
    document.title = `${site.name} — Website Concept Preview`;
    let robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content");
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "noindex,nofollow");
    return () => { document.title = oldTitle; if (previous) robots.setAttribute("content", previous); };
  }, [site]);
  if (!site) return null;

  return <div className="preview" style={{"--preview-primary":site.primary,"--preview-secondary":site.secondary,"--preview-accent":site.accent}}>
    <div className="preview__conceptbar"><strong>Concept website preview</strong><span>Prepared as a redesign demonstration · not the current official website</span></div>
    <header className="preview__header">
      <a className="preview__brand" href="#top"><span className="preview__brandmark">{site.shortName}</span><span className="preview__brandtext"><strong>{site.name}</strong><small>{site.location}</small></span></a>
      <nav className="preview__nav"><a href="#services">Services</a><a href="#why">Why us</a><a href="#contact">Contact</a></nav>
      <a className="preview__call preview__call--header" href={site.phoneHref}>Call {site.phone}</a>
    </header>
    <main id="top">
      <section className="preview__hero"><div className="preview__heroGlow preview__heroGlow--one"/><div className="preview__heroGlow preview__heroGlow--two"/><div className="preview__heroGrid"/>
        <div className="preview__heroContent"><p className="preview__eyebrow">{site.eyebrow}</p><h1>{site.hero}</h1><p className="preview__lead">{site.subhero}</p><div className="preview__actions"><a className="preview__button preview__button--primary" href={site.phoneHref}>Call for service</a><a className="preview__button preview__button--ghost" href="#services">View services</a></div><div className="preview__quick"><span><Icon>✓</Icon> Local service</span><span><Icon>✓</Icon> Clear communication</span><span><Icon>✓</Icon> Experienced team</span></div></div>
        <aside className="preview__heroCard"><span className="preview__status"><i/> Now serving customers</span><h2>Need service?</h2><p>Talk directly with the team and get your project moving.</p><a className="preview__bigPhone" href={site.phoneHref}>{site.phone}</a><div className="preview__contactRows"><div><strong>Hours</strong><span>{site.hours}</span></div><div><strong>Location</strong><span>{site.location}</span></div>{site.email&&<div><strong>Email</strong><span>{site.email}</span></div>}</div></aside>
      </section>
      <section className="preview__proof">{site.proof.map(([n,l])=><div key={l}><strong>{n}</strong><span>{l}</span></div>)}</section>
      <section className="preview__section" id="services"><div className="preview__sectionIntro"><p className="preview__eyebrow">Services</p><h2>Make it easy for customers to choose the next step.</h2><p>A cleaner structure puts the core services and contact path in front of customers immediately.</p></div><div className="preview__serviceGrid">{site.services.map(([title,text],i)=><article className="preview__service" key={title}><span className="preview__serviceNumber">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href={site.phoneHref}>Get help →</a></article>)}</div></section>
      <section className="preview__split" id="why"><div className="preview__splitVisual"><div className="preview__badge">LOCAL<br/>SERVICE</div><div className="preview__wrench">✦</div><p>This concept is built around trust, fast contact, and a clear explanation of what the company actually does.</p></div><div className="preview__splitCopy"><p className="preview__eyebrow">Why choose {site.shortName}</p><h2>A strong local business should look strong online, too.</h2><p>This is a starting concept. Every color, word, photo, section, service, and feature can be customized around the business.</p><ul>{site.why.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul><a className="preview__button preview__button--dark" href={site.phoneHref}>Call {site.phone}</a></div></section>
      <section className="preview__cta" id="contact"><div><p className="preview__eyebrow">Ready when you are</p><h2>Turn website visits into actual conversations.</h2></div><a className="preview__button preview__button--light" href={site.phoneHref}>Call {site.phone}</a></section>
    </main>
    <footer className="preview__footer"><div><strong>{site.name}</strong><span>{site.footer}</span></div><div><a href={site.phoneHref}>{site.phone}</a>{site.email&&<span>{site.email}</span>}</div></footer>
  </div>;
}
