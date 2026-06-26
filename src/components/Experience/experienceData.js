import freelanceLogo from "../../Assets/Projects/freelance logo.jpg";

const experienceData = [
  {
    role: "Full-Stack Engineer",
    company: "PixelPK Technologies",
    designation: "Full-Stack Engineer",
    duration: "Present",
    companyImage: new URL("../../Assets/Projects/pixel tech logo.jpeg", import.meta.url).href,
    description:
      "Building own-product legal technology at PixelPK Technologies, with end-to-end ownership across frontend and backend for Pakistan Lawbot — Pakistan's first AI-powered legal research, drafting, and lawyer marketplace platform.",
    highlights: [
      "Developed AI legal research and chat grounded in Pakistani statutes, court judgments, and citations.",
      "Built instant legal document drafting, lawyer marketplace, and bilingual (English/Urdu) user experiences.",
      "Delivered scalable APIs and web interfaces serving 15,000+ advocates, firms, and citizens.",
      "Integrated LLM workflows with verified legal data sources for cited, production-ready answers.",
      "Shipped features across research, drafting, marketplace booking, and WhatsApp-based legal assistance."
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "MongoDB",
      "AI/LLM",
      "REST APIs",
      "Redis",
      "AWS"
    ]
  },
  {
    role: "Senior Software Engineer - MERN / Backend Architect",
    company: "Beyond Technologies",
    designation: "Senior Software Engineer",
    duration: "October 2023 - Present",
    companyImage: new URL("../../Assets/Projects/beyond tech logo.png", import.meta.url).href,
    description:
      "Leading end-to-end engineering for ERP and event management platforms, with ownership of architecture, delivery planning, and production reliability.",
    highlights: [
      "Designed and delivered scalable backend services using Node.js, NestJS, and Express.js.",
      "Built secure REST and GraphQL APIs with role-based access and robust validation.",
      "Improved application performance through query optimization, Redis caching, and queue-based processing.",
      "Implemented CI/CD pipelines and deployed Dockerized services on cloud infrastructure.",
      "Mentored engineers, reviewed pull requests, and drove engineering best practices across teams."
    ],
    tech: [
      "Node.js",
      "NestJS",
      "Express.js",
      "React.js",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "RabbitMQ",
      "BullMQ",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP"
    ]
  },
  {
    role: "Midlevel React.js / Full-Stack Developer",
    company: "Eventbuizz",
    designation: "React.js Developer",
    duration: "February 2022 - October 2023",
    companyImage: new URL("../../Assets/Projects/eventbuizz logo.jpg", import.meta.url).href,
    description:
      "Contributed to multiple web and mobile products with a full-stack approach, focusing on user experience, API integration, and delivery speed.",
    highlights: [
      "Built responsive user interfaces with React.js and reusable component-driven architecture.",
      "Integrated REST and GraphQL APIs with secure authentication and data flow handling.",
      "Worked across React Native, Node.js, and Express.js for cross-platform delivery.",
      "Optimized frontend performance and SEO on key pages using Next.js techniques.",
      "Collaborated closely with product and QA teams to ensure stable production releases."
    ],
    tech: [
      "React.js",
      "React Native",
      "Next.js",
      "Node.js",
      "Express.js",
      "Vue.js",
      "Redux",
      "MongoDB",
      "PostgreSQL",
      "Docker"
    ]
  },
  {
    role: "Frontend / Full-Stack Developer",
    company: "Enlatics",
    designation: "React/Vue.js Developer",
    duration: "March 2021 - February 2022",
    companyImage: new URL("../../Assets/Projects/enlatics logo.jpg", import.meta.url).href,
    description:
      "Worked on dynamic product modules with a focus on usability, maintainable frontend architecture, and smooth backend integration.",
    highlights: [
      "Developed modern interfaces using React.js and Vue.js with reusable patterns.",
      "Integrated backend APIs and managed complex client-side state efficiently.",
      "Delivered analytics and real-time interaction features for AML Watcher workflows.",
      "Improved UI consistency, cross-browser compatibility, and performance baselines.",
      "Supported deployment automation and quality checks in team release cycles."
    ],
    tech: [
      "React.js",
      "Vue.js",
      "Redux",
      "JavaScript",
      "REST APIs",
      "Docker",
      "Cloud Deployment"
    ]
  },
  {
    role: "Full-Stack & Freelance Developer",
    company: "Freelance / Remote (Fiverr & Upwork)",
    designation: "Independent Contractor",
    duration: "2021 - Present",
    companyImage: freelanceLogo,
    openForWork: true,
    description:
      "Delivering remote freelance and part-time contracts for clients worldwide through Fiverr and Upwork — alongside full-time product work. I take on MVPs, API integrations, legacy refactors, and production support with async-friendly communication across time zones.",
    highlights: [
      "Currently open for remote freelance, part-time, and fixed-scope contract work.",
      "Flexible engagement: project-based sprints, ongoing part-time (20–40 hrs/week), or milestone delivery.",
      "Built and shipped full-stack applications for international clients from discovery through deployment.",
      "Managed requirements, timelines, and client communication independently on Upwork and Fiverr.",
      "Delivered React/Next.js frontends, Node.js/NestJS APIs, database design, and cloud deployments.",
    ],
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "NestJS",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "REST APIs",
      "Docker",
      "AWS",
      "Remote / Async",
    ],
  },
  {
    role: "Junior Web Developer / Trainee",
    company: "Tech Startup",
    designation: "Trainee Developer",
    duration: "Sep 2020 - Dec 2020",
    companyImage: new URL("../../Assets/avatar.svg", import.meta.url).href,
    description:
      "Started my professional journey by building frontend and basic full-stack features while learning software delivery fundamentals.",
    highlights: [
      "Built early-stage UI modules using HTML, CSS, JavaScript, and React.js.",
      "Learned version control, agile collaboration, and pull-request based workflows.",
      "Supported backend integration and testing across staging environments.",
      "Improved debugging and problem-solving skills through production support tasks.",
      "Developed a strong foundation for scalable engineering practices."
    ],
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Git",
      "Agile"
    ]
  }
];

export { experienceData };