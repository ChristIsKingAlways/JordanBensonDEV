/**
 * Block: site-header
 * Fixed nav — Work / About / Contact + mobile “Contact”; bar style matches scroll state (see public site).
 */
import { useState, useEffect } from "react";
import { navLinks, siteMeta } from "../../data/portfolioContent.js";
import "./Header.css";

/** Split "Name | Role" from siteMeta.title for nav styling */
function parseNavTitle(title) {
  const parts = title.split(/\s*\|\s*/);
  return { name: parts[0]?.trim() || "", tag: parts[1]?.trim() || "" };
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
    <header className={barMods}>
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

        <a className="site-header__mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default Header;
