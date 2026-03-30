/**
 * Block: contact
 * Form + mail link, client-side validation, then POST to Google Forms via hidden iframe (no full-page redirect).
 */
import { useRef, useState } from "react";
import { siteMeta, contactCopy, googleForm } from "../../data/portfolioContent.js";
import "./Contact.css";

const GOOGLE_FORM_TARGET = "google-form-response";

function Contact() {
  const formRef = useRef(null);
  const mailHref = `mailto:${siteMeta.email}`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validate = () => {
    const e = {};
    if (!name.trim()) e.name = "Please enter your name.";
    if (!email.trim()) e.email = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) e.email = "Enter a valid email.";
    if (!message.trim()) e.message = "Please enter a message.";
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) {
      setStatus({ type: "err", text: "Please fix the fields below." });
      return;
    }
    setStatus(null);
    formRef.current?.submit();
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setStatus({
      type: "ok",
      text: "Thanks, your message was sent. We'll get back to you shortly.",
    });
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-title" data-code-snippet="contact">
      <iframe
        className="contact__form-target"
        title="Form response"
        name={GOOGLE_FORM_TARGET}
        aria-hidden="true"
      />
      <div className="contact__inner">
        <div className="contact__copy">
          <p className="contact__eyebrow">{contactCopy.eyebrow}</p>
          <h2 id="contact-title" className="contact__title">
            {contactCopy.title}
          </h2>
          <p className="contact__sub">{contactCopy.sub}</p>
          <a className="contact__mail" href={mailHref}>
            {siteMeta.email}
          </a>
        </div>

        <form
          ref={formRef}
          className="contact__form glass-form"
          action={googleForm.action}
          method="POST"
          target={GOOGLE_FORM_TARGET}
          onSubmit={onSubmit}
          noValidate
        >
          <input type="hidden" name="fvv" value={googleForm.hidden.fvv} />
          <input type="hidden" name="partialResponse" value={googleForm.hidden.partialResponse} />
          <input type="hidden" name="pageHistory" value={googleForm.hidden.pageHistory} />
          <input type="hidden" name="fbzx" value={googleForm.hidden.fbzx} />
          <input type="hidden" name="submissionTimestamp" value={googleForm.hidden.submissionTimestamp} />
          <div className="contact__field">
            <label className="contact__label" htmlFor="contact-name">
              Name
            </label>
            <input
              id="contact-name"
              className="contact__input"
              type="text"
              name={googleForm.entryName}
              autoComplete="name"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              aria-invalid={!!errors.name}
            />
            {errors.name ? (
              <p className="contact__error" role="alert">
                {errors.name}
              </p>
            ) : null}
          </div>
          <div className="contact__field">
            <label className="contact__label" htmlFor="contact-email">
              Email
            </label>
            <input
              id="contact-email"
              className="contact__input"
              type="email"
              name={googleForm.entryEmail}
              autoComplete="email"
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              aria-invalid={!!errors.email}
            />
            {errors.email ? (
              <p className="contact__error" role="alert">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="contact__field">
            <label className="contact__label" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              className="contact__textarea"
              name={googleForm.entryMessage}
              rows={5}
              value={message}
              onChange={(ev) => setMessage(ev.target.value)}
              aria-invalid={!!errors.message}
            />
            {errors.message ? (
              <p className="contact__error" role="alert">
                {errors.message}
              </p>
            ) : null}
          </div>
          <p className="contact__hint">{contactCopy.formHint}</p>
          {status ? (
            <p
              className={
                status.type === "ok" ? "contact__status contact__status--ok" : "contact__status contact__status--err"
              }
              role="status"
            >
              {status.text}
            </p>
          ) : null}
          <button type="submit" className="contact__submit">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
