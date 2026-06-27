import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Stats from "./Stats";
import TrustedBy from "./TrustedBy";
import TechStackSection from "./TechStackSection";
import FeaturedProjects from "./FeaturedProjects";
import ExperiencePreview from "./ExperiencePreview";
import ServicesPreview from "./ServicesPreview";
import TestimonialsCarousel from "../Testimonials/TestimonialsCarousel";
import GithubSection from "./GithubSection";
import BlogPreview from "./BlogPreview";
import CertificationsPreview from "./CertificationsPreview";
import OpenSourceSection from "./OpenSourceSection";
import ContactStrip from "./ContactStrip";
import Container from "../ui/Container";
import { Button } from "@/components/ui/button";
import AvailableBadge from "../ui/AvailableBadge";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { buildHomeSchema } from "@/lib/structuredData";
import { useLocale } from "@/context/LocaleContext";
import { contactConfig, socialLinks } from "@/config/site";
import { fadeUp, slideInRight, buttonHover } from "@/lib/motion";
import Type from "./Type";

const techStack = [
  "NestJS",
  "RAG",
  "LangGraph",
  "LLM",
  "MCP",
  "Python",
  "Microservices",
  "AWS",
];

function Home() {
  const navigate = useNavigate();
  const { t } = useTranslation("home");
  const { t: tc } = useTranslation("common");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/");

  const socialLinksRow = [
    {
      href: socialLinks.github,
      icon: AiFillGithub,
      label: tc("social.github"),
      hover: "hover:text-accent hover:border-accent",
    },
    {
      href: socialLinks.linkedinMessage,
      icon: FaLinkedinIn,
      label: tc("social.linkedin"),
      hover: "hover:text-social-linkedin hover:border-social-linkedin",
    },
    socialLinks.whatsapp && {
      href: socialLinks.whatsapp,
      icon: FaWhatsapp,
      label: tc("social.whatsapp"),
      hover: "hover:text-social-whatsapp hover:border-social-whatsapp",
    },
    {
      href: `mailto:${contactConfig.email}`,
      icon: FaEnvelope,
      label: "Email",
      hover: "hover:text-accent hover:border-accent",
    },
  ].filter(Boolean);

  return (
    <section>
      <Seo {...seo} path="/" jsonLd={buildHomeSchema()} />
      <div className="relative bg-home-hero pt-20 pb-16" id="home">
        <Particle />
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 min-h-[calc(100vh-5rem)] items-center">
            <div className="z-10">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
                <h5 className="text-accent text-lg font-medium mb-2">{t("welcome")}</h5>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
                  {t("greeting")}{" "}
                  <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">
                    {t("name")}
                  </span>
                </h1>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.35}
                className="text-xl md:text-2xl text-text-secondary mt-4 min-h-[2.5rem]"
              >
                <Type />
              </motion.div>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="text-text-secondary text-lg mt-4 max-w-lg"
              >
                {t("tagline")}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.55}
                className="mt-4"
              >
                <AvailableBadge />
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-2 mt-6"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.65}
              >
                {techStack.map((tech) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full border border-border text-text-secondary hover:bg-accent hover:text-bg-primary transition-colors cursor-default"
                    whileHover={{ scale: 1.08 }}
                    dir="ltr"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div
                className="flex flex-wrap gap-4 mt-8"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.8}
              >
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <Button onClick={() => navigate(localizePath("/contact"))}>
                    {tc("buttons.hireMe")}
                  </Button>
                </motion.div>
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" onClick={() => navigate(localizePath("/resume"))}>
                    📄 {tc("buttons.downloadResume")}
                  </Button>
                </motion.div>
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" onClick={() => navigate(localizePath("/project"))}>
                    🚀 {tc("buttons.viewProjects")}
                  </Button>
                </motion.div>
              </motion.div>

              <motion.ul
                className="flex flex-wrap gap-3 mt-8 list-none p-0"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.9}
              >
                {socialLinksRow.map(({ href, icon: Icon, label, hover }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className={`inline-flex items-center justify-center w-11 h-11 rounded-full border border-border text-text-primary transition-colors text-lg ${hover}`}
                    >
                      <Icon />
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            <motion.div
              className="relative flex justify-center items-center"
              variants={slideInRight}
              initial="hidden"
              animate="visible"
            >
              <div className="relative">
                <img
                  src="/profile_placeholder.jpg"
                  alt={t("name")}
                  className="relative z-10 w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-accent shadow-2xl"
                  onError={(e) => {
                    e.target.src = homeLogo;
                  }}
                />
                <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl scale-110" />
              </div>
            </motion.div>
          </div>
        </Container>
      </div>

      <Home2 />
      <Stats />
      <TrustedBy />
      <TechStackSection />
      <FeaturedProjects />
      <ExperiencePreview />
      <ServicesPreview />
      <TestimonialsCarousel />
      <GithubSection />
      <BlogPreview />
      <CertificationsPreview />
      <OpenSourceSection />
      <ContactStrip />
    </section>
  );
}

export default Home;
