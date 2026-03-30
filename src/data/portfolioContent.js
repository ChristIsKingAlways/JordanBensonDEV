/**
 * Central copy + project list, aligned with jordanbensondev.com content.
 * Project screenshots use Microlink’s public screenshot embed (same approach as many live portfolio sites).
 */

export const siteMeta = {
  name: "Jordan Benson",
  /** Browser tab / OG; also parsed for header brand (“Name | Role”) */
  title: "Jordan Benson | Developer",
  description:
    "Developer and entrepreneur building thoughtful web experiences with HTML, CSS, JavaScript, and React.",
  email: "Jordan@duodynamicsit.com",
  social: [{ label: "GitHub", url: "https://github.com/ChristIsKingAlways" }],
};

/** Primary nav, labels mirror the public site (“Work” → #projects). */
export const navLinks = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  line1: "Crafting digital",
  line2: "experiences that matter",
  lede: "I build at the core of the modern web with HTML, CSS, JavaScript, and React, focused on clear, performant interfaces built to last.",
};

export const aboutIntro = {
  eyebrow: "About",
  lead: "Builder. Problem solver. Web-first.",
};

export const aboutParagraphs = [
  "I'm a builder at heart with a background in IT support and a strong focus on web development. After 17 years of solving real-world technical problems, I've shifted toward creating digital tools, websites, and systems that actually move things forward.",
  "I don't come from a traditional developer path, I come from hands-on experience. I've spent years troubleshooting, understanding how systems break, and more importantly, how to fix them. That perspective carries into everything I build today, keeping my work practical, user-focused, and built to work in the real world.",
  "My work sits on a foundation I'm confident in, with HTML for structure, CSS for layout and design, JavaScript for interactivity, and React for maintainable, component-driven interfaces. That stack powers the projects you see here, the interfaces and experiences people rely on every day.",
  "I'm especially interested in building things that help people, whether that's through better user experiences, smarter systems, or tools that solve real problems.",
  "I'm not just writing code. I'm building, testing, and improving every day.",
];

/**
 * Skill chips under About, label + logo in /public/skills/ (Simple Icons, CC0).
 * Use `icon` for one file, or `icons: ["a.svg","b.svg"]` for a combined chip.
 */
export const skillTags = [
  { label: "HTML", icon: "html5.svg" },
  { label: "CSS", icon: "css3.svg" },
  { label: "JavaScript", icon: "javascript.svg" },
  { label: "React", icon: "react.svg" },
];

/**
 * Build Microlink screenshot URL (no API key; embed mode returns image URL).
 * waitForTimeout: ms to wait before screenshot (capped at 1.5s for fast previews).
 * @param {string} pageUrl live project URL
 */
export function microlinkScreenshotUrl(pageUrl) {
  const q = new URLSearchParams({
    url: pageUrl,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
    waitForTimeout: "1500",
  });
  return `https://api.microlink.io/?${q.toString()}`;
}

export const projects = [
  {
    title: "Iron Disciple",
    category: "Social Media Platform",
    url: "https://irondisciple.org/",
    imageAlt: "Preview of Iron Disciple",
  },
  {
    title: "Close It",
    category: "CRM",
    url: "https://closeit.online/",
    imageAlt: "Preview of Close It",
  },
  {
    title: "Churchee",
    category: "Church Community Platform",
    url: "https://www.churchee.io/",
    imageAlt: "Preview of Churchee",
  },
  {
    title: "Axis Motors",
    category: "Premium Auto Inventory",
    url: "https://axis-motors.vercel.app/",
    imageAlt: "Preview of Axis Motors",
  },
  {
    title: "Daily Quib",
    category: "News & Culture",
    url: "https://daily-quib.vercel.app/",
    imageAlt: "Preview of Daily Quib",
  },
];

/**
 * Google Form “Contact Us”, field names + anti-spam tokens from the form HTML.
 * If submissions suddenly fail after a form edit, re-open the form → View page source → copy fbzx / partialResponse from the embedded form.
 * @see https://docs.google.com/forms/d/e/1FAIpQLScJe-tYLChxjKDvB7QlilN6KwlShXJwdiJ2O7tmc4AEb4NjQg/viewform
 */
export const googleForm = {
  action:
    "https://docs.google.com/forms/d/e/1FAIpQLScJe-tYLChxjKDvB7QlilN6KwlShXJwdiJ2O7tmc4AEb4NjQg/formResponse",
  entryName: "entry.1376256521",
  entryEmail: "entry.879871093",
  entryMessage: "entry.448481980",
  hidden: {
    fvv: "1",
    pageHistory: "0",
    submissionTimestamp: "-1",
    fbzx: "6451329955556586994",
    partialResponse: '[null,null,"6451329955556586994"]',
  },
};

export const contactCopy = {
  eyebrow: "Contact",
  title: "Let's work together",
  sub: "Have a project in mind? I'd love to hear about it.",
  formHint: "Submissions are delivered securely through our contact form.",
};
