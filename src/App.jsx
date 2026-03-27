/**
 * Root layout — section order matches jordanbensondev.com: Home, Work, About, Contact, Footer.
 */
import ScrollProgress from "./components/ScrollProgress/ScrollProgress.jsx";
import ParticleField from "./components/ParticleField/ParticleField.jsx";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="app">
      <ParticleField />
      <ScrollProgress />
      <a className="app__skip" href="#main-content">
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="app__main" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
