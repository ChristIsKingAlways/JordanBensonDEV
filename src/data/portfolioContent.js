/**
 * Central copy for the portfolio.
 * Edit strings here instead of hunting through JSX — keeps content in one place.
 * Replace project links and social URLs with your real profiles when ready.
 */

export const siteMeta = {
  /** Shown in hero and footer */
  name: "Jordan Benson",
  role: "Frontend Developer",
  /** One-line pitch for recruiters and visitors */
  tagline:
    "I build clear, responsive interfaces with HTML, CSS, JavaScript, and React.",
  /** Used in contact section */
  email: "hello@jordanbenson.dev",
  /** Placeholder — swap for LinkedIn, GitHub, etc. */
  social: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" },
  ],
};

export const navLinks = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const aboutParagraphs = [
  "I'm a frontend developer focused on semantic HTML, maintainable CSS, and thoughtful JavaScript. I care about performance, accessibility, and code that teammates can read months later.",
  "This site is a living portfolio: built with React, styled with simple BEM naming, and structured so each section is easy to extend or refactor.",
];

export const skills = {
  /** Grouped for the skills grid — add/remove rows as you grow */
  groups: [
    {
      title: "Core web",
      items: ["HTML5", "CSS3", "JavaScript (ES6+)", "Responsive layout"],
    },
    {
      title: "Frameworks & tooling",
      items: ["React", "Vite", "Git", "REST APIs"],
    },
    {
      title: "Practices",
      items: ["BEM-style CSS", "Component thinking", "Performance basics", "a11y awareness"],
    },
  ],
};

export const projects = [
  {
    title: "Portfolio (this site)",
    description:
      "Personal e-portfolio with React, Vite, and documented BEM classes. Serves as a template for future case studies.",
    stack: ["React", "Vite", "CSS"],
    link: "#",
    linkLabel: "View source (add repo URL)",
  },
  {
    title: "Project placeholder",
    description:
      "Replace this card with a real project: problem, your role, stack, and outcome. Link to demo or repo.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "#",
    linkLabel: "Coming soon",
  },
  {
    title: "Another placeholder",
    description:
      "Tip: use 2–4 cards max for launch; quality beats quantity. Each card should tell a short story.",
    stack: ["React"],
    link: "#",
    linkLabel: "Details",
  },
];
