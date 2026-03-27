/**
 * Block: contact
 * Email mailto + social list from portfolioContent.js.
 */
import { siteMeta } from "../../data/portfolioContent.js";
import "./Contact.css";

function Contact() {
  const mailHref = `mailto:${siteMeta.email}`;

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner">
        <h2 id="contact-title" className="contact__title">
          Contact
        </h2>
        <p className="contact__text">
          Want to collaborate or chat about a role? Send an email — I will get back to you as soon as I can.
        </p>
        <a className="contact__email" href={mailHref}>
          {siteMeta.email}
        </a>
        <ul className="contact__socials">
          {siteMeta.social.map(({ label, url }) => (
            <li key={label} className="contact__social-item">
              <a className="contact__social-link" href={url} target="_blank" rel="noopener noreferrer">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
