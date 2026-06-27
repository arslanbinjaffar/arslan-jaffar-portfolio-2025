const caseStudies = [
  {
    slug: "enterprise-ai-assistant",
    imgPath: new URL("../../Assets/Projects/pixel tech logo.jpeg", import.meta.url).href,
    title: "Enterprise AI Assistant Platform",
    role: "AI Systems Engineer",
    techStack: [
      "LangGraph",
      "LangChain",
      "RAG",
      "Qdrant",
      "Gemini",
      "Ollama",
      "MCP",
      "NestJS",
      "Python",
    ],
    challenge:
      "Enterprises needed a secure assistant that could answer internal knowledge queries, call external tools, and route requests between LLM, agent, and retrieval layers without sacrificing observability.",
    approach:
      "Built multi-agent workflows with LangGraph, designed RAG pipelines using Qdrant for vector search, and integrated Gemini plus local models via Ollama. Added MCP-based tool integrations, memory-aware conversations, and intelligent request routing with retry mechanisms.",
    outcome:
      "Delivered a production AI backend with chunking, embeddings, reranking, contextual memory, and stateful agent orchestration — reducing manual lookup time for internal teams and enabling tool-calling workflows at scale.",
    demoLink: null,
    ghLink: null,
  },
  {
    slug: "gigbase",
    imgPath: new URL("../../Assets/Projects/gigbase.png", import.meta.url).href,
    title: "Gigbase — Freelancer Platform",
    role: "Full-Stack Engineer",
    techStack: ["React.js", "Node.js", "NestJS", "PostgreSQL", "Stripe", "OpenAI"],
    challenge:
      "Freelancers were juggling 10+ disconnected tools for clients, invoicing, contracts, and project management — losing billable hours to admin overhead.",
    approach:
      "Designed an all-in-one SaaS dashboard with Stripe billing, project/client management, and an embedded OpenAI assistant for proposals, follow-ups, and task automation. Built on NestJS with PostgreSQL for reliable transactional data.",
    outcome:
      "Unified freelance operations into a single workspace with AI-assisted workflows, replacing fragmented tooling and helping users focus on client delivery instead of admin work.",
    demoLink: "https://gigbase.io/",
    ghLink: "https://www.app.gigbase.io/auth/login",
  },
  {
    slug: "voxtasia-admin",
    imgPath: new URL("../../Assets/Projects/gigbase.png", import.meta.url).href,
    title: "VoxtAsia Admin Panel",
    role: "Backend Engineer",
    techStack: ["Node.js", "Express.js", "RabbitMQ", "Redis", "MongoDB", "AWS S3"],
    challenge:
      "A large-scale audio streaming platform needed a central admin system to manage content, users, and real-time analytics without bottlenecks under high traffic.",
    approach:
      "Architected event-driven microservices with RabbitMQ for async processing, Redis for caching hot paths, and AWS S3 for media storage. Implemented role-based access, moderation tools, and real-time engagement dashboards.",
    outcome:
      "Enabled admins to upload, organize, and monitor audio content at scale with reliable real-time analytics and streamlined content management for a multi-surface streaming product.",
    demoLink: "https://admin.voxtasia.com/signin",
    ghLink: "https://github.com/VoxtAsia/Vox-Front",
  },
];

export default caseStudies;

export const caseStudySlugs = new Set(caseStudies.map((study) => study.slug));

export function getCaseStudyBySlug(slug) {
  return caseStudies.find((study) => study.slug === slug);
}

const titleToSlug = {
  "Enterprise AI Assistant Platform": "enterprise-ai-assistant",
  "Gigbase — Freelancer Platform": "gigbase",
  "VoxtAsia Admin panel": "voxtasia-admin",
};

export function getCaseStudySlugForTitle(title) {
  return titleToSlug[title] || null;
}
