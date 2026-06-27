export const staticRoutes = [
  { path: "/", changefreq: "monthly", priority: "1.0", ogSlug: "home" },
  { path: "/about", changefreq: "monthly", priority: "0.8", ogSlug: "about" },
  { path: "/project", changefreq: "monthly", priority: "0.8", ogSlug: "project" },
  { path: "/case-studies", changefreq: "monthly", priority: "0.8", ogSlug: "case-studies" },
  { path: "/experience", changefreq: "monthly", priority: "0.8", ogSlug: "experience" },
  { path: "/gallery", changefreq: "monthly", priority: "0.8", ogSlug: "gallery" },
  { path: "/contact", changefreq: "monthly", priority: "0.8", ogSlug: "contact" },
  { path: "/resume", changefreq: "monthly", priority: "0.8", ogSlug: "resume" },
  { path: "/blog", changefreq: "weekly", priority: "0.7", ogSlug: "blog" },
  { path: "/services", changefreq: "monthly", priority: "0.8", ogSlug: "services" },
  { path: "/uses", changefreq: "monthly", priority: "0.6", ogSlug: "uses" },
  { path: "/faqs", changefreq: "monthly", priority: "0.6", ogSlug: "faqs" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3", ogSlug: "privacy" },
  { path: "/terms", changefreq: "yearly", priority: "0.3", ogSlug: "terms" },
  { path: "/cookies", changefreq: "yearly", priority: "0.3", ogSlug: "cookies" },
  { path: "/sitemap", changefreq: "yearly", priority: "0.2", ogSlug: "sitemap" },
  { path: "/changelog", changefreq: "yearly", priority: "0.2", ogSlug: "changelog" },
];

export const routeMeta = {
  "/": {
    title: "Arslan Jaffar | Senior MERN Stack Developer",
    description:
      "Arslan Jaffar is a Senior MERN Stack Developer with 3.5+ years of experience building scalable web and SaaS apps with React, Next.js, Node.js, and NestJS.",
  },
  "/about": {
    title: "About | Arslan Jaffar",
    description:
      "Learn about Arslan Jaffar — Senior MERN Stack Developer skilled in React, Node.js, NestJS, microservices, and scalable system design.",
  },
  "/project": {
    title: "Projects | Arslan Jaffar",
    description:
      "Explore portfolio projects by Arslan Jaffar — SaaS platforms, AI-powered apps, ERP systems, and full-stack web applications.",
  },
  "/case-studies": {
    title: "Case Studies | Arslan Jaffar",
    description:
      "In-depth case studies of selected projects by Arslan Jaffar — challenges, approaches, tech stacks, and measurable outcomes.",
  },
  "/experience": {
    title: "Experience | Arslan Jaffar",
    description:
      "Professional experience timeline of Arslan Jaffar — roles, responsibilities, and engineering outcomes across startups and enterprises.",
  },
  "/gallery": {
    title: "Gallery | Arslan Jaffar",
    description:
      "Awards, certificates, and milestones from Arslan Jaffar's engineering journey.",
  },
  "/contact": {
    title: "Contact | Arslan Jaffar",
    description:
      "Get in touch with Arslan Jaffar for collaboration, freelance work, or full-time opportunities.",
  },
  "/resume": {
    title: "Resume | Arslan Jaffar",
    description:
      "Download the resume of Arslan Jaffar — Senior MERN Stack Developer with expertise in backend systems and full-stack engineering.",
  },
  "/blog": {
    title: "Blog | Arslan Jaffar",
    description:
      "Articles and insights on full-stack development, backend architecture, and AI-powered systems by Arslan Jaffar.",
  },
  "/services": {
    title: "Services | Arslan Jaffar",
    description:
      "Freelance and contract services by Arslan Jaffar — full-stack web development, backend engineering, AI integration, and consulting.",
  },
  "/uses": {
    title: "Uses / Tech Setup | Arslan Jaffar",
    description:
      "The tools, hardware, and tech stack Arslan Jaffar uses to build production web and AI systems.",
  },
  "/faqs": {
    title: "FAQs | Arslan Jaffar",
    description:
      "Frequently asked questions about services, availability, tech stack, and working with Arslan Jaffar.",
  },
  "/privacy": {
    title: "Privacy Policy | Arslan Jaffar",
    description:
      "Privacy Policy for the Arslan Jaffar portfolio website — how your information is collected, used, and protected.",
  },
  "/terms": {
    title: "Terms & Conditions | Arslan Jaffar",
    description:
      "Terms and Conditions for using the Arslan Jaffar portfolio website.",
  },
  "/cookies": {
    title: "Cookies Policy | Arslan Jaffar",
    description:
      "Cookies Policy for the Arslan Jaffar portfolio website — how cookies and local storage are used.",
  },
  "/sitemap": {
    title: "Sitemap | Arslan Jaffar",
    description:
      "Browse all pages on the Arslan Jaffar portfolio website.",
  },
  "/changelog": {
    title: "Changelog | Arslan Jaffar",
    description:
      "Version history and notable updates to the Arslan Jaffar portfolio website.",
  },
};

export function getRouteOgImage(path) {
  const route = staticRoutes.find((entry) => entry.path === path);
  if (!route?.ogSlug) return "/og/default.png";
  return `/og/routes/${route.ogSlug}.png`;
}
