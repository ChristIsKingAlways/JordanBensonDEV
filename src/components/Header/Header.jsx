/**
 * Block: site-header
 * Sticky top bar with logo text and desktop nav; mobile uses a toggle (state + aria).
 */
import { useState } from "react";
import { navLinks, siteMeta } from "../../data/portfolioContent.js";
import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__brand" href="#top" onClick={() => setMenuOpen(false)}>
          <span className="site-header__brand-mark">{siteMeta.name}</span>
          <span className="site-header__brand-role">{siteMeta.role}</span>
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

        <nav
          id="site-header-nav"
          className={`site-header__nav ${menuOpen ? "site-header__nav--open" : ""}`}
          aria-label="Primary"
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
        </nav>
      </div>
    </header>
  );
}

export default Header;
