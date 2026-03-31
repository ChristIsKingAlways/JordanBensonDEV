/**
 * Block: contact
 * Section copy + CTA opens a glass modal; form POSTs to Google Forms; success view with green celebration.
 */
import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { siteMeta, contactCopy, googleForm } from "../../data/portfolioContent.js";
import "./Contact.css";

const GOOGLE_FORM_TARGET = "google-form-response";

function Contact() {
  const formRef = useRef(null);
  const openButtonRef = useRef(null);
  const firstFieldRef = useRef(null);
  const successPrimaryRef = useRef(null);

  const mailHref = `mailto:${siteMeta.email}`;
  const [modalOpen, setModalOpen] = useState(false);
  const [successView, setSuccessView] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const resetFields = useCallback(() => {
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
    setStatus(null);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setSuccessView(false);
    resetFields();
    requestAnimationFrame(() => openButtonRef.current?.focus());
  }, [resetFields]);

  const openModal = () => {
    resetFields();
    setSuccessView(false);
    setModalOpen(true);
  };

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
    resetFields();
    setSuccessView(true);
  };

  useEffect(() => {
    if (!modalOpen) return undefined;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return undefined;
    const onKeyDown = (ev) => {
      if (ev.key === "Escape") {
        ev.preventDefault();
        closeModal();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [modalOpen, closeModal]);

  useEffect(() => {
    if (!modalOpen) return undefined;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (successView) successPrimaryRef.current?.focus();
        else firstFieldRef.current?.focus();
      }),
    );
    return () => cancelAnimationFrame(id);
  }, [modalOpen, successView]);

  const modal = modalOpen ? (
    <div className="contact-modal" role="presentation">
      <div className="contact-modal__backdrop" onClick={closeModal} aria-hidden="true" />
      <div
        className="contact-modal__dialog glass-form"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        aria-describedby={successView ? "contact-modal-success-desc" : "contact-modal-desc"}
      >
        <button type="button" className="contact-modal__close" onClick={closeModal} aria-label="Close">
          <span className="contact-modal__close-icon" aria-hidden="true" />
        </button>

        {!successView ? (
          <>
            <h2 id="contact-modal-title" className="contact-modal__title">
              {contactCopy.modalTitle}
            </h2>
            <p id="contact-modal-desc" className="contact-modal__lede">
              {contactCopy.modalSub}
            </p>
            <form
              ref={formRef}
              className="contact-modal__form"
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
                <label className="contact__label" htmlFor="contact-modal-name">
                  Name
                </label>
                <input
                  ref={firstFieldRef}
                  id="contact-modal-name"
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
                <label className="contact__label" htmlFor="contact-modal-email">
                  Email
                </label>
                <input
                  id="contact-modal-email"
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
                <label className="contact__label" htmlFor="contact-modal-message">
                  Message
                </label>
                <textarea
                  id="contact-modal-message"
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
              {status?.type === "err" ? (
                <p className="contact__status contact__status--err" role="alert">
                  {status.text}
                </p>
              ) : null}
              <button type="submit" className="contact__submit">
                Send message
              </button>
            </form>
          </>
        ) : (
          <div className="contact-modal__success">
            <div className="contact-modal__success-glow" aria-hidden="true" />
            <div className="contact-modal__success-icon-wrap" aria-hidden="true">
              <svg className="contact-modal__success-check" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <circle className="contact-modal__success-ring" cx="24" cy="24" r="22" />
                <path
                  className="contact-modal__success-mark"
                  d="M14 24.5l7.2 7.5L34 17"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                />
              </svg>
            </div>
            <h2 id="contact-modal-title" className="contact-modal__success-title">
              {contactCopy.successTitle}
            </h2>
            <p id="contact-modal-success-desc" className="contact-modal__success-text">
              {contactCopy.successSub}
            </p>
            <p className="contact-modal__success-hint">{contactCopy.successHint}</p>
            <div className="contact-modal__success-actions">
              <button
                ref={successPrimaryRef}
                type="button"
                className="contact-modal__btn contact-modal__btn--primary-green"
                onClick={() => {
                  setSuccessView(false);
                  requestAnimationFrame(() => firstFieldRef.current?.focus());
                }}
              >
                {contactCopy.sendAnotherCta}
              </button>
              <button type="button" className="contact-modal__btn contact-modal__btn--ghost" onClick={closeModal}>
                {contactCopy.closeModalCta}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  ) : null;

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
          <div className="contact__cta-row">
            <button ref={openButtonRef} type="button" className="contact__open-modal" onClick={openModal}>
              {contactCopy.openModalCta}
            </button>
          </div>
        </div>
      </div>
      {typeof document !== "undefined" ? createPortal(modal, document.body) : null}
    </section>
  );
}

export default Contact;
