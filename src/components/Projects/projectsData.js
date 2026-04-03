const projects = [
  {
    imgPath: require("../../Assets/Projects/gigbase.png"),
    isBlog: false,
    title: "VoxtAsia Admin panel",
    role: "Backend Engineer",
    impact: "Event-driven microservices handling real-time audio streaming at scale",
    techStack: ["Node.js", "Express.js", "RabbitMQ", "Redis", "MongoDB", "AWS S3"],
    description:
      "VoxtAsia Admin is the central dashboard for managing our audio streaming platform. Admins can upload and organize audio content, manage stories, episodes, categories, and genres, track user engagement, and monitor analytics in real-time. The platform is designed to streamline content management, optimize user experience, and provide actionable insights — all in one intuitive interface. With role-based access and advanced moderation tools, running the backend of a large-scale audio streaming service has never been easier.",
    demoLink: "https://admin.voxtasia.com/signin",
    ghLink: "https://github.com/VoxtAsia/Vox-Front",
},
{
    imgPath: require("../../Assets/Projects/voxtasia-mobile-app.jpeg"),
    isBlog: false,
    title: "VoxtAsia — Mobile App",
    role: "Full-Stack Engineer",
    impact: "Cross-platform mobile app with offline-first audio playback",
    techStack: ["React Native", "Node.js", "Redis", "RabbitMQ", "MongoDB"],
    description:
      "VoxtAsia Mobile brings the full audio streaming experience to your smartphone. Users can stream stories, podcasts, and music on the go, create and manage playlists, follow favorite creators, and track listening progress. The app offers offline downloads, personalized recommendations, and push notifications for new releases. With a sleek, responsive design and seamless audio playback, VoxtAsia Mobile ensures users can enjoy their favorite content anytime, anywhere, with the convenience and performance of a native mobile experience.",
    demoLink: "https://drive.google.com/file/d/1PvwZRxeoxkpoI2fYRa7ffgM6Bq45E2dd/view?usp=drive_link",
    ghLink: "https://github.com/VoxtAsia/Vox-Mobile",
},
{
    imgPath: require("../../Assets/Projects/voxtasia-web.png"),
    isBlog: false,
    title: "VoxtAsia — Web Platform",
    role: "Full-Stack Engineer",
    impact: "Responsive web streaming platform with real-time content delivery",
    techStack: ["React.js", "Next.js", "Node.js", "Redis", "MongoDB", "AWS"],
    description:
      "VoxtAsia Web is the frontend of the audio streaming platform providing seamless browser-based access to stories, podcasts, and audio content. Users browse categories, follow creators, track listening history, and engage through likes and playlists. Built for high-quality audio playback, personalized recommendations, and SEO-optimized delivery.",
    demoLink: "https://www.voxtasia.com/",
    ghLink: "https://github.com/VoxtAsia/Vox-Admin",
  },
  {
    imgPath: require("../../Assets/Projects/gigbase.png"),
    isBlog: false,
    title: "Gigbase — Freelancer Platform",
    role: "Full-Stack Engineer",
    impact: "AI-assisted freelancer workspace replacing 10+ standalone tools",
    techStack: ["React.js", "Node.js", "NestJS", "PostgreSQL", "Stripe", "OpenAI"],
    description:
      "Gigbase is the all-in-one platform for digital freelancers, solopreneurs, and small creative agencies who want to spend more time doing client work — and less time on admin tasks. With Gigbase, you can sell freelance services, manage projects and clients, track time, send invoices and contracts, and get paid — all from one streamlined dashboard. And with your built-in AI Assistant, you’ll have an extra set of hands to automate the busywork: organizing your tasks, drafting client messages, generating proposals, and handling follow-ups — so you can stay focused on what you do best. No more switching between 10 tools. Gigbase gives freelancers everything they need to run and grow their business — faster, smarter, and with less effort.",
    demoLink: "https://gigbase.io/",
    ghLink: "https://www.app.gigbase.io/auth/login",
  },
 {
    imgPath: require("../../Assets/Projects/aml-watcher.png"),
    isBlog: false,
    title: "AML Watcher — Compliance Platform",
    role: "MERN Stack Developer",
    impact: "Real-time AML monitoring across financial transaction streams",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    description:
      "I was currently working as a MERN developer on the AML Watcher application, a web solution owned by Enlatics Software Company. In this role, I contribute to the design, development, and maintenance of the application, focusing on leveraging the MERN stack to build a responsive, scalable, and secure platform. I collaborate with cross-functional teams to ensure seamless integration of front-end interfaces with back-end services, ensuring high performance and reliability. This project demonstrates my expertise in full-stack development, API design, and real-time data processing, aimed at providing a robust solution for anti-money laundering monitoring.",
    demoLink: "https://amlwatcher.com/",
  },
   {
    imgPath: require("../../Assets/Projects/fleet.png"),
    isBlog: false,
    title: "AI Fleet Management ERP",
    role: "Lead Backend Engineer",
    impact: "Enterprise ERP covering fleet, HR, finance, and garage operations",
    techStack: ["NestJS", "Node.js", "MySQL", "React.js", "Docker", "CI/CD", "AWS"],
    description:
      "FleetERP System – Modules & Features\n\n1. MRM (Maintenance & Resource Management)\nManages the complete fleet lifecycle including fleet records, fleet types, suppliers, local purchase orders (LPOs), customers, timesheets, fleet purchases, purchase orders, and shipping/receiving operations.\n\n2. GOM (Garage Operations Management)\nCovers all garage-related activities such as job assignments, repair tracking, supplier management, and inventory control. Inventory features include brand, category, model, warehouse, stock lists, and spare parts management.\n\n3. HRM (Human Resource Management)\nProvides comprehensive employee management with payroll, salaries, and salary slips. Supports attendance tracking, holiday management, leave management (leave types, leave balance, leave requests), loans, and shift scheduling.\n\n4. Finance Management\nHandles organizational financial operations including chart of accounts, billing (invoices, quotations, payment receipts), transactions (journal entries, debit/credit notes, vouchers for receipts, payments, sundry, petty cash), and financial reporting.\n\n5. Role & Permission Management\nOffers robust access control with role creation, assignment of permissions, and the ability to edit or delete roles. Ensures secure and efficient management of user access across the system.",
    demoLink: "https://itc.beyondaio.com/",
    ghLink: "https://github.com/Beyondevs/Fleet-Management-Frontend"
  },
  {
    imgPath: require("../../Assets/Projects/afiawebsite.png"),
    isBlog: false,
    title: "AIFA Services — Company Website",
    role: "Frontend Developer",
    impact: "Conversion-focused corporate site for a multi-service FM company",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB"],
    description:
      "Our company is a dedicated and dynamic service provider delivering cost-efficient soft and hard services. We specialize in cleaning, pest control, HVAC, MEP projects, and more, with a skilled team offering tailored, reliable solutions to meet each client’s unique needs. Our service packages are designed to provide cost-effective, hassle-free maintenance for both residential and commercial buildings. From emergency services to long-term support, we ensure comprehensive coverage with high-quality standards. Clients can confidently rely on our expertise to maintain their spaces, knowing they will receive exceptional, professional service every time.",
    demoLink: "https://www.aifaservices.ae/",
    ghLink: "https://github.com/Beyondevs/aifaWebsite",
  },
    {
    imgPath: require("../../Assets/Projects/FeedDrop.png"),
    isBlog: false,
    title: "FeedDrop — AI Video Generation",
    role: "Full-Stack Engineer",
    impact: "AI pipeline generating short-form social videos in under 2 minutes",
    techStack: ["React.js", "Node.js", "OpenAI", "FFmpeg", "AWS S3", "Redis"],
    description:
      "FeedDrop is an innovative AI-powered platform designed to help creators, brands, and businesses generate engaging short-form videos similar to TikTok and Instagram reels. With cutting-edge artificial intelligence, the portal makes it easy to transform ideas, scripts, or prompts into high-quality, shareable content in just minutes. Key Highlights: 🎥 AI-Driven Video Creation – Automatically generate professional-grade short videos tailored for TikTok, Instagram, and other social platforms. ✨ Smart Editing Tools – Enhance your clips with AI effects, captions, music, and transitions—no editing skills required. 🚀 Fast & Scalable – Produce videos quickly at scale, perfect for marketing campaigns, influencers, or content creators. 🌍 For Everyone – Whether you're a solo creator, a brand, or an agency, FeedDrop simplifies content creation while boosting reach and engagement. FeedDrop is more than just a video tool—it's a creative assistant that reshapes how stories are told and shared in the digital age.",
    demoLink: "https://www.feeddrop.com/portal",
    ghLink: "https://www.feeddrop.com/portal",
  },
   {
    imgPath: require("../../Assets/Projects/orkhontech-web.png"),
    isBlog: false,
    title: "PATCO — Software Development Co.",
    role: "Frontend Developer",
    impact: "High-trust corporate site for an international 50+ team agency",
    techStack: ["React.js", "Docker", "Kubernetes", "Laravel"],
    description:
      "PATCO is a well-established AI-based software development company headquartered in Baku, Azerbaijan. With over 8 years in the industry and a team of more than 50 highly qualified specialists, they've successfully delivered 300+ projects across global markets—boasting a client return rate of 80%, a perfect GDPR compliance record, and a 4.9 rating on Clutch. Leadership & Vision: Shahin Valiyev, Founder & CEO — A tech visionary focused on bridging Azerbaijan and Pakistan's innovation ecosystems. Agha Zain Haider, Co-Founder & COO — Orchestrates operational excellence and strategic collaborations between the two nations. Core Capabilities: PATCO excels in delivering tailored development services—from web and mobile applications to complex backend systems—leveraging modern technologies such as React.js, Laravel, Docker, Kubernetes, and more.",
    demoLink: "https://www.patco.az/",
    ghLink: "https://github.com/Beyondevs/orkhontech-web",
  },
 
  {
    imgPath: require("../../Assets/Projects/aifaERPsystem.png"),
    isBlog: false,
    title: "Aifa ERP System",
    role: "Lead Full-Stack Engineer",
    impact: "End-to-end ERP automation cutting manual admin by ~60%",
    techStack: ["NestJS", "Node.js", "React.js", "MySQL", "Docker", "AWS Amplify"],
    description:
      "We designed and developed a comprehensive ERP system that seamlessly integrates all core business functions into a single platform. The solution covers: Finance Management – complete modules for invoicing, expenses, payroll, and real-time financial reporting. CRM (Customer Relationship Management) – centralized customer database, lead management, and sales pipeline tracking to boost client engagement. HRM (Human Resource Management) – recruitment, employee records, attendance, payroll, and performance management. Roles & Permissions – advanced role-based access control, ensuring security, accountability, and efficient team collaboration. This ERP provides end-to-end automation, enabling organizations to streamline operations, improve decision-making, and enhance productivity. With modular architecture, it is scalable, secure, and customizable to fit any business requirements.",
    demoLink: "https://staging.d31px19nsmiqd.amplifyapp.com/",
    ghLink: "https://github.com/Beyondevs/aifa-monorepo",
  },

 

  {
    imgPath: require("../../Assets/Projects/quick_legals.png"),
    isBlog: false,
    title: "QuickLegals Website & User Portal",
    role: "Full-Stack Engineer",
    impact: "Legal document generation platform with no-lawyer UX",
    techStack: ["React.js", "Node.js", "MongoDB", "REST APIs"],
    description:
      "QuickLegals is an intuitive online platform designed to help users generate premium legal documents in minutes—no lawyers necessary, no complexity involved. It puts legal solutions squarely within reach, offering simplicity and professionalism at your fingertips.\n\nKey Highlights:\n- Fast & User-Friendly: Users can quickly craft professional legal documents through an easy-to-use interface—ideal for those looking to save time and avoid legal jargon.\n- Accessible Legal Resources: The platform democratizes document creation, empowering individuals and businesses to generate legal drafts without the hassle of hiring a lawyer.",
    demoLink: "https://quicklegals.com/",
    ghLink: "https://github.com/Beyondevs/Quick-Legals-web"
  },
  {
    imgPath: require("../../Assets/Projects/admin_quick_legals.png"),
    isBlog: false,
    title: "QuickLegals Admin Portal",
    description:
      "QuickLegals Admin Portal provides administrative features for managing users, documents, and platform settings, supporting the main QuickLegals platform for legal document generation.",
    demoLink: "https://admin.quicklegals.com/",
    ghLink: "https://github.com/Beyondevs/Quick-Legals-Admin-Portal"
  },
  {
    imgPath: require("../../Assets/Projects/islamiya.png"),
    isBlog: false,
    title: "Islamiyya — Shari'ah-Compliant Wills",
    role: "Full-Stack Engineer",
    impact: "Scotland's first Shari'ah-compliant will writing service",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js"],
    description:
      "Islamiyya is Scotland’s first Shari‘ah-compliant will writing service, offering a professional and faith-based solution to estate planning. Features include Islamic will templates, localization for Scottish law, user guidance for creating valid Islamic wills, and a strong emphasis on legal compliance, data privacy, and Shari‘ah integrity.",
    demoLink: "https://islamiyya.com/",
    ghLink: "https://github.com/Beyondevs/Islamiya-FE"
  },
  {
    imgPath: require("../../Assets/Projects/adminIslamiya.png"),
    isBlog: false,
    title: "Islamiyya Admin Panel",
    description:
      "Islamiyya Admin Panel provides administrative control over the platform’s operations, including user management, document and template control, system configuration, analytics, and support handling. Admins can oversee users, manage legal templates, configure system settings, track analytics, and respond to feedback, ensuring secure and efficient platform management.",
    demoLink: "https://admin.islamiyya.com/",
    ghLink: "https://github.com/Beyondevs/Islamiya-admin-panel-fe"
  },
  {
    imgPath: require("../../Assets/Projects/eventbuizz mobile.png"),
    isBlog: false,
    title: "EventBuizz Mobile App",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends built with react.js, Material-UI, and Firebase. Features include realtime messaging, image sharing, and support for message reactions.",
    demoLink:
      "https://play.google.com/store/apps/details?id=com.eventbuizz.app&hl=en&gl=US&pli=1",
  },
    {
    imgPath:
      "https://new-portfolio-one-murex.vercel.app/assets/fb-724d47b8.png",
    isBlog: false,
    title: "Facebook Clone",
    description:
      "Facebook Clone is a social media platform built with React.js, replicating the core features of Facebook. Users can sign up, log in, and post updates, images, and videos on their timeline. The app includes a dynamic feed, real-time notifications, and interactive comment and like functionalities, creating a seamless social experience. With a sleek and responsive design, this clone mimics the user interface and user experience of Facebook while showcasing the power of React for building modern web applications.",
  },
   {
    imgPath:
      "https://new-portfolio-one-murex.vercel.app/assets/martialarts-006667b9.png",
    isBlog: false,
    title: "Martial Arts",
    description:
      "Martial Arts is a dynamic platform designed for martial arts trainers and enthusiasts. It features a seamless trainer sign-up and sign-in system, allowing instructors to easily create profiles and manage their sessions. The app also includes interactive animations for various training exercises, providing users with visual guides to help improve their technique and performance. Whether you're a trainer looking to engage with students or a practitioner aiming to refine your skills, this app combines functionality with a rich, user-friendly experience.",
    ghLink: "https://github.com/arslanbinjaffar/martial-art-school",
    demoLink: "https://martial-art-school-2.vercel.app/",
  },
   {
    imgPath:
      "https://new-portfolio-one-murex.vercel.app/assets/schesti-30412cf1.png",
    isBlog: false,
    title: "Hasty App",
    description:
      "Hasty App is a comprehensive platform designed to streamline and manage real estate projects, focusing on the collaboration between contractors, subcontractors, and property owners. The app facilitates seamless project management, task coordination, and communication, helping all parties stay aligned throughout the construction process. Whether you're a contractor, subcontractor, or property owner, Hasty App provides the tools to ensure efficiency, transparency, and timely project delivery.",
    ghLink: "https://github.com/arslanbinjaffar/hasty-next-app",
  },
  {
    imgPath: require("../../Assets/Projects/ninja-training.png"),
    isBlog: false,
    title: "Ninja Training App",
    description:
      "Ninja Training App is a dynamic platform designed to help users train like a ninja. The app offers multiple training modules, each focused on different aspects of physical and mental strength, agility, and combat skills. Users can follow step-by-step workout routines, track their progress, and improve their skills through interactive exercise animations. Additionally, trainers can register to create their own training programs, allowing them to share their expertise with others. The app creates a unique experience for both trainees and trainers, making fitness fun, engaging, and accessible to all.",
    demoLink: "https://ninja-training-alpha.vercel.app/",
  },
   {
    imgPath: require("../../Assets/Projects/eventbuizz.png"),
    isBlog: false,
    title: "Eventcenter Web-app",
    role: "React.js Developer",
    impact: "Real-time event scheduling and check-in system at Eventbuizz",
    techStack: ["React.js", "Redux", "Node.js", "MySQL", "Express.js"],
    description:
      "I worked as a MERN developer on the Eventcenter project, a company product focused on managing event and program schedules. My responsibilities included developing and maintaining features for event timing, participant check-ins and check-outs, and other event-related functionalities. I ensured smooth integration between the frontend and backend while optimizing the system for performance and scalability. This project gave me valuable experience in handling real-time data, managing user interactions, and implementing secure, efficient workflows for event management.",
    demoLink: "http://my.eventbuizz.com",
  },
];

const backendProjects = [
  {
    imgPath: require("../../Assets/Projects/Node.js_logo.png"),
    isBlog: false,
    title: "Voxtasia Backend",
    description: "Solo backend project for Voxtasia platform.",
    ghLink: "https://github.com/Beyondevs/Voxtasia-Backend",
  },
  {
    imgPath: require("../../Assets/Projects/Node.js_logo.png"),
    isBlog: false,
    title: "Islamiya Backend",
    description: "Solo backend project for Islamiya platform.",
    ghLink: "https://github.com/Beyondevs/Islamiya-Backend",
  },
  {
    imgPath: require("../../Assets/Projects/Node.js_logo.png"),
    isBlog: false,
    title: "Fleet Management Backend",
    description: "Solo backend project for Fleet Management system.",
    ghLink: "https://github.com/Beyondevs/Fleet-Management-Backend",
  },
  {
    imgPath: require("../../Assets/Projects/Node.js_logo.png"),
    isBlog: false,
    title: "Quick Legals Backend",
    description: "Solo backend project for Quick Legals platform.",
    ghLink: "https://github.com/Beyondevs/Quick-legals-backend",
  },
  {
    imgPath: require("../../Assets/Projects/Node.js_logo.png"),
    isBlog: false,
    title: "Aifa ERP Backend",
    description: "Solo backend project for Aifa ERP system.",
    ghLink: "https://github.com/Beyondevs/Aifa-ERP-Backend",
  },
];

export { projects, backendProjects };


