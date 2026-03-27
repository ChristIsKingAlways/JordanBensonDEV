/**
 * Block: site-footer
 * Closing line + year; keeps legal/copyright minimal for a personal site.
 */
import { siteMeta } from "../../data/portfolioContent.js";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p className="site-footer__text">
          © {year} {siteMeta.name}. Built with React &amp; Vite.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
