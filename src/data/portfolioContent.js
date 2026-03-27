/**
 * Central copy + project list — aligned with jordanbensondev.com content.
 * Project screenshots use Microlink’s public screenshot embed (same approach as the live Next.js site).
 */

export const siteMeta = {
  name: "Jordan Benson",
  /** Browser tab / OG — matches public site */
  title: "Jordan Benson | Developer",
  description:
    "Developer and entrepreneur focused on building thoughtful, scalable solutions for the modern web.",
  email: "Jordan@duodynamicsit.com",
  social: [
    { label: "GitHub", url: "https://github.com/ChristIsKingAlways" },
    { label: "LinkedIn", url: "https://linkedin.com/in/" },
  ],
};

/** Primary nav — labels mirror the public site (“Work” → #projects). */
export const navLinks = [
  { id: "projects", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  line1: "Crafting digital",
  line2: "experiences that matter",
  lede: "Developer and entrepreneur focused on building thoughtful, scalable solutions for the modern web.",
};

export const aboutIntro = {
  eyebrow: "About",
  lead: "Builder. Problem solver. Always learning.",
};

export const aboutParagraphs = [
  "I'm a builder at heart with a background in IT support and a growing focus on full-stack development. After 17 years of solving real-world technical problems, I've shifted toward creating digital tools, websites, and systems that actually move things forward.",
  "I don't come from a traditional developer path—I come from hands-on experience. I've spent years troubleshooting, learning how systems break, and more importantly, how to fix them. That perspective carries into everything I build today: practical, user-focused, and built to work in the real world.",
  "Right now, I'm actively developing projects that combine modern web technologies with automation and AI. From building platforms like IronDisciple to working with tools like Supabase, Vercel, and API integrations, I'm focused on creating solutions that are not just functional—but meaningful.",
  "I'm especially interested in building things that help people—whether that's through better user experiences, smarter systems, or tools that solve real problems.",
  "I'm not just writing code. I'm building, testing, and improving every day.",
];

/** Skill chips shown under About (single row wrap). */
export const skillTags = ["React", "Next.js", "JavaScript", "HTML & CSS"];

/**
 * Build Microlink screenshot URL (no API key; embed mode returns image URL).
 * @param {string} pageUrl — live project URL
 */
export function microlinkScreenshotUrl(pageUrl) {
  const q = new URLSearchParams({
    url: pageUrl,
    screenshot: "true",
    meta: "false",
    embed: "screenshot.url",
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
    title: "Authoship",
    category: "SaaS Platform",
    url: "https://authoship.io/",
    imageAlt: "Preview of Authoship",
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

export const contactCopy = {
  eyebrow: "Contact",
  title: "Let's work together",
  sub: "Have a project in mind? I'd love to hear about it.",
  formHint: "Submissions are validated client-side. Connect a backend or form service for production.",
};
