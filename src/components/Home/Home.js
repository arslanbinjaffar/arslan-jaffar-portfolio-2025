import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Stats from "./Stats";
import ExperienceHighlights from "./ExperienceHighlights";
import Engineering from "./Engineering";
import Container from "../ui/Container";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { routeSeo } from "@/config/seo";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: delay || 0 },
  }),
};

const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.3 },
  },
};

const buttonHover = { scale: 1.05, transition: { duration: 0.2 } };

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

  return (
    <section>
      <Seo {...routeSeo["/"]} path="/" />
      <div className="relative bg-home-hero pt-20 pb-16" id="home">
        <Particle />
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 min-h-[calc(100vh-5rem)] items-center">
            <div className="z-10">
              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
                <h5 className="text-accent text-lg font-medium mb-2">Welcome to my portfolio</h5>
              </motion.div>

              <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.2}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-text-primary leading-tight">
                  Hi, I&apos;m{" "}
                  <span className="bg-gradient-to-br from-accent to-accent-light bg-clip-text text-transparent">
                    Arslan Jaffar
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
                I don&apos;t just build apps. I design systems that scale.
              </motion.p>

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
                  <Button onClick={() => navigate("/resume")}>
                    📄 Download Resume
                  </Button>
                </motion.div>
                <motion.div whileHover={buttonHover} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" onClick={() => navigate("/project")}>
                    🚀 View My Projects
                  </Button>
                </motion.div>
              </motion.div>
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
                  alt="Arslan Jaffar"
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
      <ExperienceHighlights />
      <Engineering />
    </section>
  );
}

export default Home;
