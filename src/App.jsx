/**
 * Root layout — section order matches jordanbensondev.com: Home, Work, About, Contact, Footer.
 * Personalized sales previews are routed under /preview/:id.
 */
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx";
import ParticleField from "./components/ParticleField/ParticleField.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import EasterEggTooltip from "./components/EasterEggTooltip/EasterEggTooltip.jsx";
import PreviewSite from "./components/PreviewSite/PreviewSite.jsx";
import ExpandedPreviewSite from "./components/PreviewSite/ExpandedPreviewSite.jsx";
import WideNetPreviewSite from "./components/PreviewSite/WideNetPreviewSite.jsx";
import ReplacementPreviewSite from "./components/PreviewSite/ReplacementPreviewSite.jsx";
import ExtraReplacementPreviewSite from "./components/PreviewSite/ExtraReplacementPreviewSite.jsx";
import DuralConcretePreviewSite from "./components/PreviewSite/DuralConcretePreviewSite.jsx";
import CentralColoradoConcretePreviewSite from "./components/PreviewSite/CentralColoradoConcretePreviewSite.jsx";
import "./App.css";

const expandedPreviewIds = new Set([
  "total-service-hvac", "wright-jones", "vision-mechanical", "midtown-electric",
  "aragons-lawn", "tripple-j-roofing", "mam-concrete", "truss-mill",
  "egon-electric", "johnnys-plumbing", "juniper-ridge", "powerhouse-excavation",
  "providence-plumbing", "comfort-heating-plumbing", "reyes-sealcoating", "foampros",
]);

function App() {
  const previewMatch = window.location.pathname.match(/^\/preview\/([^/]+)\/?$/);

  if (previewMatch) {
    const id = previewMatch[1];
    if (id === "wide-valentine-plumbing" || id === "wide-kw-construction") return null;
    if (id === "replacement-dural-concrete") return <DuralConcretePreviewSite />;
    if (id === "replacement-central-colorado-concrete") return <CentralColoradoConcretePreviewSite />;
    if (id === "replacement-mountain-view") return <ExtraReplacementPreviewSite />;
    if (id.startsWith("replacement-")) return <ReplacementPreviewSite id={id} />;
    if (id.startsWith("wide-")) return <WideNetPreviewSite id={id} />;
    if (expandedPreviewIds.has(id)) return <ExpandedPreviewSite id={id} />;
    return <PreviewSite id={id} />;
  }

  return (
    <div className="app">
      <ParticleField />
      <ScrollProgress />
      <a className="app__skip" href="#main-content">Skip to main content</a>
      <Header />
      <main id="main-content" className="app__main" tabIndex={-1}>
        <Hero /><Projects /><About /><Contact />
      </main>
      <Footer />
      <EasterEggTooltip />
    </div>
  );
}

export default App;
