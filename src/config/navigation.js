/**
 * Single source of truth for site navigation.
 * Add pages here + i18n key + AppRoutes entry.
 */
import { socialLinks } from "./site";

/** @typedef {{ key: string, to?: string, href?: string, hash?: string, external?: boolean, footerOnly?: boolean, optional?: boolean, showOnTablet?: boolean }} NavItem */

/** @type {Record<string, { labelKey: string, items: NavItem[] }>} */
export const NAV_GROUPS = {
  about: {
    labelKey: "nav.groups.about",
    items: [
      { key: "aboutMe", to: "/about" },
      { key: "experience", to: "/experience" },
      { key: "education", to: "/about", hash: "education" },
      { key: "certifications", to: "/gallery" },
    ],
  },
  portfolio: {
    labelKey: "nav.groups.portfolio",
    items: [
      { key: "projects", to: "/project", showOnTablet: true },
      { key: "caseStudies", to: "/case-studies" },
      { key: "openSource", to: "/", hash: "opensource" },
      { key: "github", href: socialLinks.github, external: true },
      { key: "awards", to: "/gallery", optional: true },
    ],
  },
  resources: {
    labelKey: "nav.groups.resources",
    items: [
      { key: "blog", to: "/blog" },
      { key: "resume", to: "/resume" },
      { key: "techStack", to: "/uses" },
      { key: "faqs", to: "/faqs" },
    ],
  },
};

/** @type {Array<{ type: "link", key: string, to: string, hash?: string, showOnTablet?: boolean } | { type: "dropdown", group: string }>} */
export const NAV_TOP_LEVEL = [
  { type: "link", key: "home", to: "/", showOnTablet: true },
  { type: "dropdown", group: "about" },
  { type: "dropdown", group: "portfolio" },
  { type: "link", key: "services", to: "/services" },
  { type: "dropdown", group: "resources" },
  { type: "link", key: "contact", to: "/contact" },
];

/** Tablet bar: top-level links shown inline before hamburger */
export const TABLET_INLINE_KEYS = ["home", "portfolio", "resources"];

export const FOOTER_COLUMNS = {
  explore: {
    labelKey: "footer.explore",
    items: [
      { key: "home", to: "/" },
      { key: "about", to: "/about" },
      { key: "services", to: "/services" },
      { key: "contact", to: "/contact" },
      { key: "hireMe", to: "/contact" },
    ],
  },
  portfolio: {
    labelKey: "footer.portfolio",
    items: [
      { key: "projects", to: "/project" },
      { key: "caseStudies", to: "/case-studies" },
      { key: "gallery", to: "/gallery" },
    ],
  },
  resources: {
    labelKey: "footer.resources",
    items: [
      { key: "blog", to: "/blog" },
      { key: "resume", to: "/resume" },
      { key: "uses", to: "/uses" },
      { key: "faqs", to: "/faqs" },
    ],
  },
  legalMeta: {
    labelKey: "footer.legalMeta",
    items: [
      { key: "privacyPolicy", to: "/privacy", footerOnly: true },
      { key: "termsConditions", to: "/terms", footerOnly: true },
      { key: "cookiesPolicy", to: "/cookies", footerOnly: true },
      { key: "sitemap", to: "/sitemap", footerOnly: true },
      { key: "changelog", to: "/changelog", footerOnly: true },
      { key: "rssFeed", href: "/rss.xml", external: true, footerOnly: true },
    ],
  },
};

function filterOptionalItems(items) {
  return items.filter((item) => !item.optional);
}

export function getGroupItems(groupKey) {
  const group = NAV_GROUPS[groupKey];
  if (!group) return [];
  return filterOptionalItems(group.items);
}

export function resolveNavHref(item, localizePath) {
  if (item.external && item.href) return item.href;
  if (item.href) return item.href;
  const base = localizePath(item.to || "/");
  if (item.hash) {
    return `${base}#${item.hash}`;
  }
  return base;
}

export function getNavLabelKey(item) {
  if (item.key === "aboutMe") return "nav.aboutMe";
  if (item.key === "privacyPolicy") return "footer.privacyPolicy";
  if (item.key === "termsConditions") return "footer.termsConditions";
  if (item.key === "cookiesPolicy") return "footer.cookiesPolicy";
  if (item.key === "rssFeed") return "footer.rssFeed";
  if (item.key === "caseStudies") return "footer.caseStudies";
  if (item.key === "hireMe") return "nav.hireMe";
  if (item.key === "uses" && item.to === "/uses") {
    return "footer.uses";
  }
  const footerKeys = ["sitemap", "changelog", "faqs"];
  if (footerKeys.includes(item.key)) return `footer.${item.key}`;
  return `nav.${item.key}`;
}

export function flattenNavItems() {
  const seen = new Set();
  const items = [];

  const add = (item) => {
    const id = item.href || `${item.to || ""}#${item.hash || ""}`;
    if (seen.has(id) || item.footerOnly) return;
    seen.add(id);
    items.push(item);
  };

  NAV_TOP_LEVEL.forEach((entry) => {
    if (entry.type === "link") {
      add({ key: entry.key, to: entry.to, hash: entry.hash });
    } else if (entry.type === "dropdown") {
      getGroupItems(entry.group).forEach(add);
    }
  });

  return items;
}

export function getSitemapGroups() {
  const mainPaths = [
    "/",
    "/about",
    "/experience",
    "/project",
    "/case-studies",
    "/gallery",
    "/blog",
    "/services",
    "/contact",
    "/resume",
    "/uses",
    "/faqs",
  ];

  return [
    { key: "main", paths: mainPaths },
    { key: "legal", paths: ["/privacy", "/terms", "/cookies"] },
    { key: "resources", paths: ["/sitemap", "/changelog"] },
  ];
}

export const sitemapLabelKeys = {
  "/": "home",
  "/about": "about",
  "/project": "projects",
  "/case-studies": "caseStudies",
  "/experience": "experience",
  "/gallery": "gallery",
  "/blog": "blog",
  "/services": "services",
  "/contact": "contact",
  "/resume": "resume",
  "/uses": "uses",
  "/faqs": "faqs",
  "/privacy": "privacyPolicy",
  "/terms": "termsConditions",
  "/cookies": "cookiesPolicy",
  "/sitemap": "sitemap",
  "/changelog": "changelog",
};
