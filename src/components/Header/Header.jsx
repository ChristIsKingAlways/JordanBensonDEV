/**
 * Block: site-header
 * Fixed nav — Work / About / Contact + mobile “Contact”; bar style matches scroll state (see public site).
 */
import { useState, useEffect } from "react";
import { navLinks, siteMeta } from "../../data/portfolioContent.js";
import { useTheme } from "../../context/ThemeContext.jsx";
import "./Header.css";

function IconSun() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}

function IconMoon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

/** Split "Name | Role" from siteMeta.title for nav styling */
function parseNavTitle(title) {
  const parts = title.split(/\s*\|\s*/);
  return { name: parts[0]?.trim() || "", tag: parts[1]?.trim() || "" };
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { toggleTheme, isLight } = useTheme();
  const { name: brandName, tag: brandTag } = parseNavTitle(siteMeta.title);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const barMods = [
    "site-header",
    scrolled ? "site-header--scrolled" : "site-header--expanded",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={barMods} data-code-snippet="header">
      <nav className="site-header__inner" aria-label="Primary">
        <a className="site-header__brand" href="#home" onClick={() => setMenuOpen(false)}>
          <span className="site-header__brand-name">{brandName}</span>
          {brandTag ? (
            <>
              <span className="site-header__brand-sep" aria-hidden="true">
                {" "}
                |{" "}
              </span>
              <span className="site-header__brand-tag">{brandTag}</span>
            </>
          ) : null}
        </a>

        <div
          id="site-header-nav"
          className={`site-header__nav-wrap ${menuOpen ? "site-header__nav-wrap--open" : ""}`}
        >
          <ul className="site-header__list">
            {navLinks.map(({ id, label }) => (
              <li key={id} className="site-header__item">
                <a
                  className="site-header__link"
                  href={`#${id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-header__toolbar">
          <button
            type="button"
            className="site-header__theme"
            onClick={toggleTheme}
            aria-pressed={isLight}
            aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
          >
            <span className="visually-hidden">
              {isLight ? "Switch to dark mode" : "Switch to light mode"}
            </span>
            {isLight ? <IconMoon /> : <IconSun />}
          </button>

          <button
            type="button"
            className="site-header__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="site-header-nav"
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="visually-hidden">Menu</span>
            <span className="site-header__menu-icon" aria-hidden />
          </button>

          <a className="site-header__mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
