/**
 * Curated “under the hood” snippets for the hover easter egg (data-code-snippet id → text).
 * Not live source extraction, representative JSX for each region.
 */

export const CODE_SNIPPET_MAP = {
  header: `<header className={barMods}>
  <nav className="site-header__inner" aria-label="Primary">
    <a className="site-header__brand" href="#home">
      {brandName} | {brandTag}
    </a>
    <ul>…navLinks → #projects, #about, #contact</ul>
  </nav>
</header>`,

  hero: `<section id="home" className="hero">
  <div className="hero__copy hero__copy--animated">
    <h1 className="hero__headline">
      <span className="hero__line">{hero.line1}</span>
      <span className="hero__line hero__line--muted">{hero.line2}</span>
    </h1>
    <p className="hero__lede">{hero.lede}</p>
    <div className="hero__actions">…</div>
  </div>
</section>`,

  projects: `<section id="projects" className="projects">
  <h2>Here are some of my projects</h2>
  <ul className="projects__list">
    {projects.map((project) => (
      <li key={project.title}>
        <article className="projects__article">
          <a href={project.url}>…thumb (microlinkScreenshotUrl)</a>
          <div>
            <h3><a href={project.url}>{project.title}</a></h3>
            <p className="projects__stack">{project.stack.join(", ")}</p>
            <p>{project.description}</p>
          </div>
        </article>
      </li>
    ))}
  </ul>
</section>`,

  about: `<section id="about" className="about">
  <div className="about__panel">
    <div className="about__columns">
      <div className="about__intro">…</div>
      <div className="about__body">
        {aboutParagraphs.map(…)}
        <ul className="about__skills">
          {skillTags.map(({ label, icon }) => (
            <li className="about__skill-tag">
              <img src={\`/skills/\${icon}\`} alt="" /> {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>`,

  contact: `<section id="contact" className="contact">
  <form
    ref={formRef}
    action={googleForm.action}
    method="POST"
    target={GOOGLE_FORM_TARGET}
    onSubmit={onSubmit}
  >
    <input type="hidden" name="fbzx" value={googleForm.hidden.fbzx} />
    <input name={googleForm.entryName} … />
    <input name={googleForm.entryEmail} … />
    <textarea name={googleForm.entryMessage} … />
  </form>
</section>`,

  footer: `<footer className="site-footer">
  <div className="site-footer__inner">
    <p className="site-footer__copy">© {year} {siteMeta.name}</p>
    <nav aria-label="Social">
      {siteMeta.social.map(({ label, url }) => (
        <a className="site-footer__link" href={url}>…</a>
      ))}
    </nav>
  </div>
</footer>`,
};
