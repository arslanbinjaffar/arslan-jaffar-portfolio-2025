import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const localesDir = path.join(root, "src", "locales");

function writeJson(locale, namespace, data) {
  const dir = path.join(localesDir, locale);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(
    path.join(dir, `${namespace}.json`),
    JSON.stringify(data, null, 2) + "\n"
  );
}

function extractProjects(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const items = [];
  const blocks = content.match(/\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/gs) || [];
  for (const block of blocks) {
    if (!block.includes("title:")) continue;
    const title = block.match(/title:\s*"([^"]+)"/)?.[1];
    if (!title) continue;
    const role = block.match(/role:\s*"([^"]+)"/)?.[1] || "";
    const impact = block.match(/impact:\s*"([^"]+)"/)?.[1] || "";
    const description = block.match(/description:\s*\n?\s*"([^"]+)"/s)?.[1] || block.match(/description:\s*"([^"]+)"/)?.[1] || "";
    items.push({ title, role, impact, description });
  }
  return items;
}

function extractExperience(filePath) {
  const content = fs.readFileSync(filePath, "utf8");
  const expMatch = content.match(/const experienceData = \[([\s\S]*?)\];\s*\n\s*const homeHighlights/);
  if (!expMatch) return { items: [], highlights: [] };

  const items = [];
  const roleBlocks = expMatch[1].match(/\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/gs) || [];
  for (const block of roleBlocks) {
    const role = block.match(/role:\s*"([^"]+)"/)?.[1];
    if (!role) continue;
    const company = block.match(/company:\s*"([^"]+)"/)?.[1] || "";
    const designation = block.match(/designation:\s*"([^"]+)"/)?.[1] || "";
    const duration = block.match(/duration:\s*"([^"]+)"/)?.[1] || "";
    const description = block.match(/description:\s*\n?\s*"([^"]+)"/s)?.[1] || "";
    const highlights = [...block.matchAll(/"([^"]+)"/g)]
      .map((m) => m[1])
      .filter((s) => s.length > 40 && !s.includes("http") && !s.includes("../../"));
    items.push({ role, company, designation, duration, description, highlights: highlights.slice(0, 8) });
  }

  const hlMatch = content.match(/const homeHighlights = \[([\s\S]*?)\];/);
  const highlights = [];
  if (hlMatch) {
    const hlBlocks = hlMatch[1].match(/\{[^{}]+\}/g) || [];
    for (const block of hlBlocks) {
      highlights.push({
        company: block.match(/company:\s*"([^"]+)"/)?.[1] || "",
        text: block.match(/text:\s*"([^"]+)"/)?.[1] || "",
        tech: block.match(/tech:\s*"([^"]+)"/)?.[1] || "",
      });
    }
  }
  return { items, highlights };
}

const projectsPath = path.join(root, "src/components/Projects/projectsData.js");
const experiencePath = path.join(root, "src/components/Experience/experienceData.js");
const servicesPath = path.join(root, "src/components/Services/servicesData.js");

const projectItems = extractProjects(projectsPath);
const backendItems = extractProjects(projectsPath).slice(-4);
const mainProjects = projectItems.slice(0, -4);

const { items: experienceItems, highlights } = extractExperience(experiencePath);

const servicesContent = fs.readFileSync(servicesPath, "utf8");
const serviceItems = [];
const serviceBlocks = servicesContent.match(/\{[^{}]*(?:\{[^{}]*\}[^{}]*)*\}/gs) || [];
for (const block of serviceBlocks) {
  const title = block.match(/title:\s*"([^"]+)"/)?.[1];
  if (!title) continue;
  const description = block.match(/description:\s*\n?\s*"([^"]+)"/)?.[1] || "";
  const features = [...block.matchAll(/"([^"]{10,80})"/g)].map((m) => m[1]).filter((f) => !f.includes("icon"));
  serviceItems.push({ title, description, features: features.slice(0, 4) });
}

const enCommon = {
  nav: {
    home: "Home",
    about: "About",
    projects: "Projects",
    experience: "Experience",
    gallery: "Gallery",
    blog: "Blog",
    services: "Services",
    contact: "Contact",
    resume: "Resume",
  },
  footer: {
    tagline: "Senior MERN & AI engineer building scalable web platforms, SaaS products, and production AI systems.",
    quickLinks: "Quick Links",
    contact: "Contact",
    connect: "Connect",
    connectText: "Open to remote freelance, part-time contracts, and collaboration.",
    location: "Location",
    availability: "Availability",
    chatWhatsApp: "Chat on WhatsApp",
    privacyPolicy: "Privacy Policy",
    termsConditions: "Terms & Conditions",
    designedBy: "Designed and Developed by {{author}}",
    copyright: "Copyright © {{year}} {{author}}. All rights reserved.",
  },
  social: {
    github: "GitHub",
    linkedin: "LinkedIn",
    linkedinMessage: "Message on LinkedIn",
    twitter: "Twitter",
    whatsapp: "WhatsApp",
    viewGithub: "View on GitHub",
  },
  theme: {
    switchToLight: "Switch to light mode",
    switchToDark: "Switch to dark mode",
  },
  language: {
    label: "Language",
    en: "English",
    ur: "Urdu",
    ar: "Arabic",
  },
  rating: {
    title: "How did you like my portfolio?",
    description: "Your feedback helps me improve my work and showcase projects better.",
    skip: "Skip",
    submit: "Submit Rating",
    selectRating: "Select a rating",
    feedback: {
      "1": "😞 I'd love to hear what I can improve!",
      "2": "😐 Please share your feedback for improvement.",
      "3": "😊 Glad you liked it! Any suggestions?",
      "4": "😄 Great! Happy to hear that!",
      "5": "🎉 Awesome! Thank you so much!",
    },
  },
  buttons: {
    downloadResume: "Download Resume",
    viewProjects: "View My Projects",
    sendMessage: "Send Message",
    messageSent: "Message Sent! ✓",
  },
  site: {
    jobTitle: "Senior MERN Stack Developer",
    availability: "Open for remote freelance & part-time contracts",
  },
  sticky: {
    scrollTop: "Scroll to top",
    chatWhatsApp: "Chat on WhatsApp",
    linkedinMessage: "Message on LinkedIn",
    chatMessenger: "Chat on Messenger",
    instagramMessage: "Message on Instagram",
  },
};

const enHome = {
  welcome: "Welcome to my portfolio",
  greeting: "Hi, I'm",
  name: "Arslan Jaffar",
  tagline: "I don't just build apps. I design systems that scale.",
  taglineLine1: "I don't just build apps.",
  taglineLine2: "I design systems that scale.",
  taglineLine3: "From idea → architecture → production.",
  introTitle: "LET ME",
  introAccent: "INTRODUCE",
  introTitleEnd: "MYSELF",
  introBody: "Hi, I am Arslan Jaffar — Senior Software Engineer at PixelPK and AI Systems Engineer / Team Lead at Beyond Technologies, with 4+ years building scalable, production-ready platforms.\n\nI architect backend systems with Node.js, NestJS, and Python — microservices, event-driven workflows, and cloud-native deployments on AWS. I also build AI systems: RAG pipelines, LangGraph multi-agent workflows, vector search with Qdrant, and MCP-based tool integrations using Gemini and Ollama.\n\nCurrently I lead cross-functional teams on enterprise ERP and SaaS products while shipping Pakistan Lawbot and enterprise AI assistant platforms — from architecture and CI/CD through production AI orchestration.",
  findMeOn: "FIND ME ON",
  findMeText: "Feel free to <accent>connect</accent> with me",
  typewriter: [
    "AI Systems Engineer",
    "Senior Software Engineer @ PixelPK",
    "RAG & LLM Orchestration",
    "LangGraph Multi-Agent Developer",
    "Team Lead @ Beyond Technologies",
    "Backend Architect - Node.js / NestJS",
    "Microservices and API Specialist",
    "Cloud-Native Systems Engineer",
  ],
  stats: [
    { label: "Years Experience" },
    { label: "Products Shipped" },
    { label: "Lawbot Users" },
    { label: "API Response Improvement" },
  ],
  engineering: {
    heading: "What I",
    headingAccent: "Actually Build",
    subtitle: "Beyond writing code — designing systems that handle real-world scale and complexity.",
    cards: [
      { title: "AI Agents & RAG Systems", desc: "Multi-agent workflows with LangGraph and LangChain. Qdrant vector retrieval, Gemini and Ollama LLMs, memory-aware conversations, tool-calling, and MCP integrations." },
      { title: "Production AI Backend", desc: "Intelligent routing across LLM, Agent, and RAG layers. Chunking, embeddings, reranking, contextual memory, and stateful orchestration with observability and retries." },
      { title: "Backend Systems & APIs", desc: "Production-grade REST and GraphQL APIs built with Node.js, NestJS, and Express.js. Focus on security, validation, and performance at scale." },
      { title: "Microservices & Queues", desc: "Distributed architectures with event-driven communication using RabbitMQ and BullMQ. Redis caching to cut latency and improve throughput." },
      { title: "Cloud & DevOps", desc: "Dockerized deployments on AWS and GCP. CI/CD pipelines with GitLab and GitHub Actions. Kubernetes orchestration for scalable infrastructure." },
      { title: "Frontend Engineering", desc: "Clean and responsive UIs with React.js and Next.js. State management via Redux. Optimised for performance, accessibility, and SEO." },
    ],
  },
  highlights: {
    heading: "Career",
    headingAccent: "Highlights",
    subtitle: "Key outcomes from my recent engineering and AI systems work.",
  },
};

writeJson("en", "common", enCommon);
writeJson("en", "home", enHome);
writeJson("en", "projects", {
  heading: "My Recent",
  headingAccent: "Works",
  subtitle: "Here are a few projects I've worked on recently.",
  items: mainProjects,
  backendItems: backendItems,
});
writeJson("en", "experience", {
  heading: "My Professional",
  headingAccent: "Experience",
  subtitle: "A timeline of roles, responsibilities, and outcomes from my engineering journey.",
  openForWork: "Open for Work",
  openForRemote: "Open for remote work",
  freelance: {
    title: "Available for Freelance & Part-Time Remote Work",
    description: "I'm open to remote freelance and part-time contracts — ideal for startups, agencies, and founders who need a senior MERN engineer (and growing AI integration specialist) without a full-time hire. I work across US, EU, and APAC time zones with clear async updates and milestone delivery.",
    bullets: [
      "Part-time retainers (20–40 hrs/week) or fixed-scope project contracts",
      "Full-stack development: React, Next.js, Node.js, NestJS, APIs, databases",
      "MVP builds, feature delivery, performance tuning, and production support",
      "Experienced on Fiverr & Upwork — comfortable with remote client workflows",
    ],
    aiTitle: "AI engineering & intelligent product work",
    aiBullets: [
      "RAG pipelines, AI workflows, and AI agents integrated into real products",
      "LLM API flows, model orchestration, and production-ready AI assistants",
      "Chatbots, document Q&A, and grounded answers over custom knowledge bases",
      "Actively preparing for AI engineering — deepening Python, models, and MLOps-style delivery",
    ],
    cta: "Discuss a remote engagement",
  },
  items: experienceItems,
  highlights,
});
writeJson("en", "services", {
  heading: "Services I",
  headingAccent: "Offer",
  subtitle: "End-to-end engineering services for startups, enterprises, and freelance clients.",
  items: serviceItems,
});
writeJson("en", "gallery", {
  heading: "Achievement",
  headingAccent: "Gallery",
  subtitle: "Awards, certificates, and milestones from my engineering journey.",
  categories: ["Award", "Certificate", "Event", "Recognition"],
  items: [{ title: "LinkedIn Achievement", date: "2025", category: "Recognition", description: "A milestone shared on LinkedIn.", embedTitle: "Embedded post" }],
});
writeJson("en", "contact", {
  heading: "Get In",
  headingAccent: "Touch",
  subtitle: "Feel free to reach out for remote freelance, part-time work, or collaboration.",
  formTitle: "Send me a message",
  nameLabel: "Your Name",
  namePlaceholder: "Enter your name",
  emailLabel: "Your Email",
  emailPlaceholder: "your.email@example.com",
  messageLabel: "Message",
  messagePlaceholder: "Your message here (min 10 characters)...",
  infoTitle: "Contact Information",
  chatTitle: "Chat with me",
  followTitle: "Follow Me",
  labels: { email: "Email", location: "Location", availability: "Availability", whatsapp: "WhatsApp" },
  validation: {
    nameRequired: "Name is required",
    emailRequired: "Valid email is required",
    messageRequired: "Message must be at least 10 characters",
  },
});
writeJson("en", "blog", {
  heading: "My",
  headingAccent: "Blog",
  subtitle: "Articles on web development, system design, and engineering insights.",
  comingSoon: "Coming Soon",
  comingSoonDescription: "I'm working on articles about full-stack development, backend architecture, and AI-powered systems. Check back soon or reach out if you'd like to connect in the meantime.",
  getInTouch: "Get in Touch",
});
writeJson("en", "resume", {
  heading: "My",
  headingAccent: "Resume",
  subtitle: "Download my resume or view it below.",
  download: "Download CV",
});
writeJson("en", "about", {
  knowWho: "Know Who",
  knowAccent: "I'M",
  skillsetHeading: "Professional",
  skillsetAccent: "Skillset",
  toolsHeading: "Tools",
  toolsAccent: "I use",
  valuesHeading: "Core",
  valuesAccent: "Engineering Values",
  values: [
    { title: "Scalability First", desc: "Design systems that handle growth without rewrites — from day one." },
    { title: "Production Reliability", desc: "Ship features that stay up. Observability, error handling, and graceful degradation built in." },
    { title: "Clean Architecture", desc: "Modular, testable, and maintainable code that teams can confidently extend." },
    { title: "AI-First Systems", desc: "Intelligent workflows with RAG, multi-agent orchestration, and production-grade LLM integrations at scale." },
  ],
  card: {
    intro: "Hi Everyone, I am Arslan Jaffar from Lahore, Pakistan.",
    currentRole: "I am currently working as a Senior Software Engineer @ PixelPK and AI Systems Engineer / Team Lead @ Beyond Technologies.",
    experience: "With over 4+ years of professional experience, I specialize in building scalable and high-performance products across web, backend, cloud, and AI systems.",
    platforms: "I have led engineering delivery on enterprise-scale platforms such as the Enterprise AI Assistant Platform, Pakistan Lawbot, AI Fleet Management ERP, and operations-focused business systems. My day-to-day work includes architecture decisions, AI orchestration, mentoring, PR reviews, and building reliable features end-to-end.",
    strengths: "My core strengths include Node.js, NestJS, Python, React.js, Next.js, RAG, LangGraph, LangChain, LLM orchestration, and MCP, PostgreSQL, MongoDB, Redis, Qdrant, and modern DevOps workflows with Docker, Kubernetes, and CI/CD. I also work with asynchronous architecture using RabbitMQ and BullMQ to design performant and maintainable systems.",
    outside: "Outside of development, I enjoy collaborating with teams and building products that solve real business problems.",
    interests: [
      "Learning AI Engineering (RAG, agents, LLM orchestration, MCP)",
      "System Design and Architecture Research",
      "Mentoring and Team Collaboration",
    ],
    quote: "Build systems that scale, teams that grow, and products that matter.",
    quoteAuthor: "— Arslan Jaffar",
  },
  github: {
    heading: "Days I",
    headingAccent: "Code",
    subtitle: "My GitHub contribution activity",
  },
});
writeJson("en", "legal", {
  privacy: {
    heading: "Privacy",
    headingAccent: "Policy",
    lastUpdated: "Last updated: June 27, 2026",
    sections: [
      { title: "Introduction", body: "This Privacy Policy explains how Arslan Jaffar (\"I\", \"me\", or \"my\") collects, uses, and protects information when you visit this portfolio website." },
      { title: "Information I Collect", body: "When you use the contact form, I collect the name, email address, and message you voluntarily provide. Theme preferences (dark/light mode) may be stored locally in your browser via localStorage." },
      { title: "How I Use Your Information", body: "Contact form submissions are used solely to respond to your inquiry. I do not sell, rent, or share your personal information with third parties for marketing purposes." },
      { title: "Cookies & Analytics", body: "This site does not currently use third-party analytics or advertising cookies. If analytics are added in the future, this policy will be updated accordingly." },
      { title: "Data Retention", body: "Contact form data is retained only as long as necessary to respond to your message and maintain a record of our communication." },
      { title: "Your Rights", body: "You may request access to, correction of, or deletion of your personal data by contacting me at {{email}}." },
      { title: "Contact", body: "For questions about this Privacy Policy, please email {{email}}." },
    ],
  },
  terms: {
    heading: "Terms &",
    headingAccent: "Conditions",
    lastUpdated: "Last updated: June 27, 2026",
    sections: [
      { title: "Acceptance of Terms", body: "By accessing and using this portfolio website, you agree to these Terms & Conditions. If you do not agree, please do not use this site." },
      { title: "Use of the Website", body: "This website is provided for informational purposes to showcase professional work and services. You agree to use the site lawfully and not to attempt to disrupt, damage, or gain unauthorized access to any part of the site or its infrastructure." },
      { title: "Intellectual Property", body: "All content on this site — including text, images, code samples, project descriptions, and design — is the property of Arslan Jaffar unless otherwise stated. You may not reproduce, distribute, or create derivative works without prior written permission." },
      { title: "External Links", body: "This site may contain links to third-party websites (e.g. GitHub, LinkedIn, project demos). I am not responsible for the content or privacy practices of those external sites." },
      { title: "Disclaimer", body: "This website and its content are provided \"as is\" without warranties of any kind. I make no guarantees regarding the accuracy, completeness, or availability of the information presented." },
      { title: "Limitation of Liability", body: "To the fullest extent permitted by law, Arslan Jaffar shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this website." },
      { title: "Changes to Terms", body: "I reserve the right to update these Terms & Conditions at any time. Continued use of the site after changes constitutes acceptance of the revised terms." },
      { title: "Contact", body: "For questions about these Terms & Conditions, please email {{email}}." },
    ],
  },
});
writeJson("en", "seo", {
  siteName: "Arslan Jaffar Portfolio",
  defaultTitle: "Arslan Jaffar | Senior MERN Stack Developer",
  defaultDescription: "Arslan Jaffar is a Senior MERN Stack Developer with 3.5+ years of experience building scalable, high-performance web and SaaS applications using React.js, Next.js, Node.js, NestJS, and Microservices architecture.",
  routes: {
    "/": { title: "Arslan Jaffar | Senior MERN Stack Developer", description: "Arslan Jaffar is a Senior MERN Stack Developer with 3.5+ years of experience building scalable, high-performance web and SaaS applications using React.js, Next.js, Node.js, NestJS, and Microservices architecture." },
    "/about": { title: "About | Arslan Jaffar", description: "Learn about Arslan Jaffar — Senior MERN Stack Developer skilled in React, Node.js, NestJS, microservices, and scalable system design." },
    "/project": { title: "Projects | Arslan Jaffar", description: "Explore portfolio projects by Arslan Jaffar — SaaS platforms, AI-powered apps, ERP systems, and full-stack web applications." },
    "/experience": { title: "Experience | Arslan Jaffar", description: "Professional experience timeline of Arslan Jaffar — roles, responsibilities, and engineering outcomes across startups and enterprises." },
    "/gallery": { title: "Gallery | Arslan Jaffar", description: "Awards, certificates, and milestones from Arslan Jaffar's engineering journey." },
    "/contact": { title: "Contact | Arslan Jaffar", description: "Get in touch with Arslan Jaffar for collaboration, freelance work, or full-time opportunities." },
    "/resume": { title: "Resume | Arslan Jaffar", description: "Download the resume of Arslan Jaffar — Senior MERN Stack Developer with expertise in backend systems and full-stack engineering." },
    "/blog": { title: "Blog | Arslan Jaffar", description: "Articles and insights on full-stack development, backend architecture, and AI-powered systems by Arslan Jaffar." },
    "/services": { title: "Services | Arslan Jaffar", description: "Freelance and contract services by Arslan Jaffar — full-stack web development, backend engineering, AI integration, and technical consulting." },
    "/privacy": { title: "Privacy Policy | Arslan Jaffar", description: "Privacy Policy for the Arslan Jaffar portfolio website — how your information is collected, used, and protected." },
    "/terms": { title: "Terms & Conditions | Arslan Jaffar", description: "Terms and Conditions for using the Arslan Jaffar portfolio website." },
  },
});

console.log("Generated English locale files in src/locales/en/");
