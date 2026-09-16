import { useEffect } from "react";
import "./PreviewSite.css";

const profiles = {
  construction: {
    hero: "Built locally. Presented professionally.",
    services: [["New Construction","Residential and commercial building projects."],["Remodeling","Renovations, additions, and property improvements."],["Project Planning","Clear scope, estimates, and project coordination."],["Specialty Work","Custom construction tailored to the job."]],
    why: ["Local Colorado contractor","Residential and commercial capability","Direct customer communication","Project-focused service"]
  },
  plumbing: {
    hero: "Plumbing help without the runaround.",
    services: [["Plumbing Repair","Everyday plumbing diagnostics and repairs."],["Water Heaters","Water-heater service, repair, and replacement."],["Heating","Heating-system and hydronic support where offered."],["Installations","Fixtures, piping, remodels, and new construction."]],
    why: ["Local plumbing service","Repair and installation capability","Customer-focused scheduling","Serving nearby Colorado communities"]
  },
  hvac: {
    hero: "Comfort service made easy to understand.",
    services: [["Heating","Furnace and heating-system service."],["Cooling","Air-conditioning repair and replacement."],["Maintenance","Seasonal service and system upkeep."],["Installation","Equipment replacement and new-system installation."]],
    why: ["Local HVAC service","Heating and cooling capability","Repair and installation support","Serving nearby Colorado communities"]
  },
  roofing: {
    hero: "A stronger roof starts with a clearer first step.",
    services: [["Roof Repair","Leak, storm, and damage repair."],["Roof Replacement","Full reroofing and replacement projects."],["Inspections","Roof condition checks and project planning."],["Exterior Work","Related exterior services where offered."]],
    why: ["Local roofing contractor","Repair and replacement capability","Colorado-weather experience","Clear estimate path"]
  },
  landscaping: {
    hero: "Make the outside of the property work harder.",
    services: [["Landscape Design","Outdoor improvements designed around the property."],["Maintenance","Routine lawn and landscape upkeep."],["Hardscape","Concrete, edging, retaining, and related work."],["Cleanup","Trimming, cleanup, and property refreshes."]],
    why: ["Local outdoor-service team","Residential and commercial work","Multiple services in one call","Serving nearby communities"]
  },
  concrete: {
    hero: "Concrete work that looks as solid online as it does in person.",
    services: [["Driveways","New pours, replacement, and repair."],["Flatwork","Walks, patios, pads, and slabs."],["Decorative","Stamped and decorative concrete options."],["Foundations","Foundation and structural concrete where offered."]],
    why: ["Local concrete contractor","Residential and commercial projects","Multiple finish options","Project estimate support"]
  },
  drywall: {
    hero: "Clean walls. Clean presentation. Clear next step.",
    services: [["Drywall Installation","New drywall and buildout work."],["Repairs","Patch, texture, and damage repair."],["Finishing","Taping, finishing, and texture work."],["Remodeling","Drywall support for renovations and additions."]],
    why: ["Local drywall contractor","Repair and installation capability","Residential project support","Serving nearby communities"]
  },
  excavation: {
    hero: "Heavy work deserves a simple path to a quote.",
    services: [["Excavation","Site work, trenching, and digging."],["Grading","Site preparation and finish grading."],["Utility Work","Trenching and utility-related excavation."],["Site Prep","Project preparation for construction and concrete."]],
    why: ["Local excavation contractor","Residential and commercial work","Site-prep capability","Direct project communication"]
  },
};

const prospects = {
  "wide-remy-construction": ["Remy Construction","REMY","construction","719-530-1007","browntotheworld@gmail.com","Moffat, CO","Construction, painting, stucco, plaster, and stonework across Southern Colorado."],
  "wide-pauls-plumbing": ["Paul's Plumbing & Heating LLC","PAUL'S","plumbing","719-480-2423","pph@paulsplumbingandheatingllc.com","Alamosa, CO","Family-owned plumbing and heating service for the San Luis Valley."],
  "wide-husmann-plumbing": ["Husmann Plumbing","HUSMANN","plumbing","719-589-4125","info@husmannplumbing.co","Alamosa, CO","Plumbing, heating, cooling, and parts support for the San Luis Valley."],
  "wide-tjs-mechanical": ["TJ's Mechanical Inc.","TJ'S","hvac","719-941-4967","tjsmechanicalinc@gmail.com","Trinidad, CO","HVAC, refrigeration, gas piping, and commercial kitchen-equipment service."],
  "wide-united-roofing": ["United Roofing","UNITED","roofing","719-539-2178","lwood@unitedroofer.com","Salida, CO","Residential and commercial roofing service in Chaffee County and surrounding areas."],
  "wide-kw-construction": ["K W Construction & Restoration","K W","construction","719-539-3022","kwwoodworksinc@hotmail.com","Salida, CO","Construction, restoration, and woodworking service in the Upper Arkansas Valley."],
  "wide-yeti-roofing": ["Yeti Roofing, Inc.","YETI","roofing","719-207-0576","zach@yetiroofers.com","Salida, CO","Full-service roofing for Salida and surrounding mountain communities."],
  "wide-advanced-construction": ["Advanced Construction Ltd","ADVANCED","construction","719-221-5847","chad@advancedconstructionltd.com","Salida, CO","Local construction and project work serving Chaffee County."],
  "wide-oak-construction": ["OAK Construction, LLC","OAK","construction","719-539-6716","oakconstruction@ridgeviewtel.us","Salida, CO","Custom-home and energy-conscious construction in Central Colorado."],
  "wide-butala-construction": ["Butala Construction","BUTALA","construction","719-539-3435","terri@butala.net","Salida, CO","Long-established local construction service in the Salida area."],
  "wide-home-design": ["Home & Design, LLC","HOME + DESIGN","construction","719-539-4002","info@hadteam.com","Salida, CO","Cabinetry, surfaces, doors, flooring, tile, and building-material support."],
  "wide-rhodes-doyle": ["Rhodes & Doyle Maintenance & Supply Inc.","RHODES & DOYLE","plumbing","719-539-3871","riceandkimchee76@hotmail.com","Salida, CO","Plumbing and maintenance service for the Salida area."],
  "wide-diesslin": ["Diesslin Structures Inc.","DIESSLIN","construction","719-539-0855","info@diesslinstructures.com","Salida, CO","Local building and construction projects across Chaffee County."],
  "wide-baca-construction": ["Baca Construction","BACA","construction","719-422-8037","baca.construction@hotmail.com","Trinidad, CO","Local construction service for Trinidad and Las Animas County."],
  "wide-greer-roofing": ["A Greer Roofing","GREER","roofing","719-588-3998","celinagreer1983@gmail.com","Alamosa, CO","Roof repair, reroofing, new roofs, and storm-damage work in the San Luis Valley."],
  "wide-torres-plumbing": ["Torres Plumbing & Heating, LLC","TORRES","plumbing","719-937-4464","joe.torres.29@hotmail.com","Antonito / Alamosa, CO","Plumbing, heating, cooling, remodel, and new-construction service."],
  "wide-slv-builders": ["SLV Builders","SLV BUILDERS","construction","719-589-9155","slvbuilders@hotmail.com","Alamosa, CO","Construction and building service across the San Luis Valley."],
  "wide-paragon-contracting": ["Paragon Contracting CO LLC","PARAGON","roofing","719-422-7304","jaimie.hullihen@paragonbuiltco.com","Colorado Springs, CO","Residential and commercial roofing installation and replacement."],
  "wide-valentine-plumbing": ["Valentine Plumbing & Heating","VALENTINE","plumbing","719-589-5278","valphllc@gojade.org","Alamosa, CO","Plumbing, heating, cooling, remodel, and new-construction service."],
  "wide-fernandos-services": ["Fernando's Services LLC","FERNANDO'S","construction","719-665-0836","admin@remodeler-colorado.com","Colorado Springs, CO","Remodeling, painting, landscaping, flooring, concrete, roofing, and handyman work."],
  "wide-van-gieson": ["Van Gieson Construction","VAN GIESON","construction","719-589-6024","vangconst@yahoo.com","Alamosa, CO","Residential, commercial, steel-building, excavation, concrete, and restoration work."],
  "wide-alcon-construction": ["Alcon Construction Inc.","ALCON","construction","719-589-4084","alcon@alconconstruction.com","Alamosa, CO","General construction, concrete, steel erection, and commercial project work."],
  "wide-romero-construction": ["Romero Construction","ROMERO","construction","719-298-8318","romerosconstruction@live.com","Alamosa, CO","Local construction service for Alamosa and surrounding communities."],
  "wide-dwights-home-service": ["Dwight's Home Service","DWIGHT'S","hvac","719-589-9717","catsxdwight@aol.com","Alamosa, CO","Manufactured-home setup, service, and heating support in South Central Colorado."],
  "wide-rd-construction": ["RD Construction, LLC","RD","roofing","719-233-7344","Rdconstructionllc16@yahoo.com","Colorado Springs, CO","Roofing, stucco, painting, and restoration work for Front Range properties."],
  "wide-munson-construction": ["Munson Construction LLC","MUNSON","construction","719-922-6187","office@munsonconstructionllc.com","Colorado Springs, CO","Remodeling, kitchens, bathrooms, basements, roofing, and handyman projects."],
  "wide-cut-above": ["Cut Above Construction and Design LLC","CUT ABOVE","construction","719-647-2034","cutaboveservices@msn.com","Pueblo West, CO","Residential remodeling, design-build, basement finishing, and home-improvement work."],
  "wide-cullen-concrete": ["Cullen Concrete, LLC","CULLEN","concrete","719-299-5494","jsantarelli@wildblue.net","Pueblo, CO","Residential and commercial concrete, foundations, flatwork, and decorative finishes."],
  "wide-quality-construction": ["Quality Construction Services","QUALITY","construction","719-821-1475","genovaconstruction@comcast.net","Pueblo, CO","Local construction and property-improvement projects in Pueblo County."],
  "wide-new-image-drywall": ["New Image Drywall","NEW IMAGE","drywall","719-583-0155","newimagedrywall@gmail.com","Pueblo, CO","Drywall installation, finishing, repair, and remodel support."],
  "wide-spaccamonti-excavating": ["Spaccamonti Excavating","SPACCAMONTI","excavation","719-225-2025","spaccamontiexcavating@gmail.com","Pueblo, CO","Excavation and site-work services for Pueblo-area projects."],
  "wide-acorn-construction": ["Acorn Construction Company","ACORN","construction","719-544-7527","acorn@acornconstructioncompany.com","Pueblo, CO","New construction and general contracting in the Pueblo area."],
  "wide-sais-construction": ["Sais Construction","SAIS","construction","719-568-0918","saisconstruction@live.com","Pueblo, CO","Decks, tile, basement remodeling, and residential construction work."],
  "wide-gonzalez-roofing": ["Gonzalez Roofing & Gutters","GONZALEZ","roofing","719-251-3200","glezrfg@gmail.com","Pueblo, CO","Roofing and gutter service for Pueblo-area homes and properties."],
  "wide-patterson-plumbing": ["Patterson Plumbing & Heating, Inc.","PATTERSON","plumbing","719-544-4922","rick@pph1.com","Pueblo, CO","Plumbing, heating, repair, and remodel service for Pueblo-area customers."],
};

function Icon({ children }) { return <span className="preview__icon" aria-hidden="true">{children}</span>; }

export default function WideNetPreviewSite({ id }) {
  const raw = prospects[id];
  if (!raw) return null;
  const [name, shortName, category, phone, email, location, subhero] = raw;
  const profile = profiles[category];
  const phoneHref = `tel:+1${phone.replace(/\D/g, "")}`;

  useEffect(() => {
    const oldTitle = document.title;
    document.title = `${name} — Website Concept Preview`;
    let robots = document.querySelector('meta[name="robots"]');
    const previous = robots?.getAttribute("content");
    if (!robots) { robots = document.createElement("meta"); robots.setAttribute("name", "robots"); document.head.appendChild(robots); }
    robots.setAttribute("content", "noindex,nofollow");
    return () => { document.title = oldTitle; if (previous) robots.setAttribute("content", previous); };
  }, [name]);

  return <div className="preview" style={{"--preview-primary":"#16324f","--preview-secondary":"#2f6690","--preview-accent":"#f6ae2d"}}>
    <div className="preview__conceptbar"><strong>Concept website preview</strong><span>Prepared as a redesign demonstration · not the current official website</span></div>
    <header className="preview__header">
      <a className="preview__brand" href="#top"><span className="preview__brandmark">{shortName}</span><span className="preview__brandtext"><strong>{name}</strong><small>{location}</small></span></a>
      <nav className="preview__nav"><a href="#services">Services</a><a href="#why">Why us</a><a href="#contact">Contact</a></nav>
      <a className="preview__call preview__call--header" href={phoneHref}>Call {phone}</a>
    </header>
    <main id="top">
      <section className="preview__hero"><div className="preview__heroGlow preview__heroGlow--one"/><div className="preview__heroGlow preview__heroGlow--two"/><div className="preview__heroGrid"/>
        <div className="preview__heroContent"><p className="preview__eyebrow">Local service · {location}</p><h1>{profile.hero}</h1><p className="preview__lead">{subhero}</p><div className="preview__actions"><a className="preview__button preview__button--primary" href={phoneHref}>Call for service</a><a className="preview__button preview__button--ghost" href="#services">View services</a></div><div className="preview__quick"><span><Icon>✓</Icon> Local service</span><span><Icon>✓</Icon> Clear communication</span><span><Icon>✓</Icon> Mobile-first</span></div></div>
        <aside className="preview__heroCard"><span className="preview__status"><i/> Serving Colorado customers</span><h2>Ready to start?</h2><p>Put the phone number, core services, and next step where customers can find them immediately.</p><a className="preview__bigPhone" href={phoneHref}>{phone}</a><div className="preview__contactRows"><div><strong>Location</strong><span>{location}</span></div><div><strong>Email</strong><span>{email}</span></div></div></aside>
      </section>
      <section className="preview__proof"><div><strong>Local</strong><span>Colorado business</span></div><div><strong>Fast</strong><span>Click-to-call path</span></div><div><strong>Clear</strong><span>Service-first layout</span></div></section>
      <section className="preview__section" id="services"><div className="preview__sectionIntro"><p className="preview__eyebrow">Services</p><h2>Make it obvious what you do and how to hire you.</h2><p>This concept turns a visitor's first few seconds into a clear path toward calling or requesting a quote.</p></div><div className="preview__serviceGrid">{profile.services.map(([title,text],i)=><article className="preview__service" key={title}><span className="preview__serviceNumber">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href={phoneHref}>Get help →</a></article>)}</div></section>
      <section className="preview__split" id="why"><div className="preview__splitVisual"><div className="preview__badge">LOCAL<br/>SERVICE</div><div className="preview__wrench">✦</div><p>A strong local business should look just as established online as it does in the real world.</p></div><div className="preview__splitCopy"><p className="preview__eyebrow">Why choose {shortName}</p><h2>A cleaner website can make the first impression match the quality of the work.</h2><p>This is only a starting concept. Every color, word, photo, service, page, section, and feature can be customized around the business.</p><ul>{profile.why.map(item=><li key={item}><span>✓</span>{item}</li>)}</ul><a className="preview__button preview__button--dark" href={phoneHref}>Call {phone}</a></div></section>
      <section className="preview__cta" id="contact"><div><p className="preview__eyebrow">Ready when you are</p><h2>Turn website visits into actual conversations.</h2></div><a className="preview__button preview__button--light" href={phoneHref}>Call {phone}</a></section>
    </main>
    <footer className="preview__footer"><div><strong>{name}</strong><span>Website redesign concept for {location}</span></div><div><a href={phoneHref}>{phone}</a><span>{email}</span></div></footer>
  </div>;
}
