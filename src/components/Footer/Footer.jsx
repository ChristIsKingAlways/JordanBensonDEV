/**
 * Block: site-footer
 * Pill-shaped glass bar with © + social links — layout matches jordanbensondev.com footer.
 */
import { siteMeta } from "../../data/portfolioContent.js";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__copy">
          © {year} {siteMeta.name}
        </p>
        <nav className="site-footer__nav" aria-label="Social">
          {siteMeta.social.map(({ label, url }) => (
            <a key={label} className="site-footer__link" href={url} target="_blank" rel="noopener noreferrer">
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
