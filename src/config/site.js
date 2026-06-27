const siteUrl =
  import.meta.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  "https://arslan-jaffar-portfolio.vercel.app";

export const contactConfig = {
  email: "arslanbinjaffar12000@gmail.com",
  location: "Lahore, Pakistan",
  availability: "Open for remote freelance & part-time contracts",
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || "",
  whatsappMessage:
    "Hi Arslan, I found your portfolio and would like to connect.",
};

export const socialLinks = {
  github: "https://github.com/arslanbinjaffar",
  linkedin: "https://www.linkedin.com/in/arslanbinjaffar",
  twitter: "https://twitter.com/arslan_jaffar",
  whatsapp: contactConfig.whatsappNumber
    ? `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(contactConfig.whatsappMessage)}`
    : null,
};

export const siteConfig = {
  siteUrl,
  siteName: "Arslan Jaffar Portfolio",
  author: "Arslan Jaffar",
  jobTitle: "Senior MERN Stack Developer",
  defaultTitle: "Arslan Jaffar | Senior MERN Stack Developer",
  defaultDescription:
    "Arslan Jaffar is a Senior MERN Stack Developer with 3.5+ years of experience building scalable, high-performance web and SaaS applications using React.js, Next.js, Node.js, NestJS, and Microservices architecture.",
  twitterHandle: "@arslan_jaffar",
  ogImage: "/og-image.png",
  themeColor: "#0f172a",
  sameAs: [
    "https://github.com/arslanbinjaffar",
    "https://www.linkedin.com/in/arslanbinjaffar",
    "https://twitter.com/arslan_jaffar",
  ],
};

export function absoluteUrl(path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}
