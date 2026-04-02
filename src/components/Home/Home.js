import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Stats from "./Stats";
import Engineering from "./Engineering";

// Animation variants for staggered entrance
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

// Button hover animation
const buttonHover = {
  scale: 1.05,
  transition: { duration: 0.2 },
};

function Home() {
  const navigate = useNavigate();

  // Navigate to resume page
  const handleDownloadResume = () => {
    navigate("/resume");
  };

  // Navigate to projects page
  const handleViewProjects = () => {
    navigate("/project");
  };

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          {/* Hero Section - Two Column Layout */}
          <Row className="hero-row" style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
            {/* Left Column - Text Content */}
            <Col lg={6} className="hero-content-col">
              {/* Greeting */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                <h5 className="hero-greeting">Welcome to my portfolio</h5>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.2}
              >
                <h1 className="hero-title">
                  Hi, I'm <span className="accent-text">Arslan Jaffar</span>
                </h1>
              </motion.div>

              {/* Typewriter Effect Subtitle */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.35}
                className="hero-subtitle-container"
              >
                <Type />
              </motion.div>

              {/* Tagline */}
              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.5}
                className="hero-tagline"
              >
                I don't just build apps. I design systems that scale.
              </motion.p>

              {/* Tech Stack Tags */}
              <motion.div
                className="hero-tech-stack"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.65}
              >
                {["NestJS", "Microservices", "React.js", "Redis", "RabbitMQ", "AWS", "Docker"].map(
                  (tech) => (
                    <motion.span
                      key={tech}
                      className="tech-badge"
                      whileHover={{ scale: 1.08, backgroundColor: "var(--imp-text-color)" }}
                    >
                      {tech}
                    </motion.span>
                  )
                )}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="hero-cta-buttons"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.8}
              >
                <motion.div
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="cta-button download-resume"
                    onClick={handleDownloadResume}
                  >
                    📄 Download Resume
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={buttonHover}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="cta-button view-projects"
                    onClick={handleViewProjects}
                  >
                    🚀 View My Projects
                  </Button>
                </motion.div>
              </motion.div>
            </Col>

            {/* Right Column - Profile Image or Placeholder */}
            <Col lg={6} className="hero-image-col">
              <motion.div
                className="profile-image-container"
                variants={slideInRight}
                initial="hidden"
                animate="visible"
              >
                {/* Profile placeholder - user will replace with actual image */}
                <img
                  src="/profile_placeholder.jpg"
                  alt="Arslan Jaffar"
                  className="profile-image"
                  onError={(e) => {
                    e.target.src = homeLogo; // Fallback to SVG if image not found
                  }}
                />
                {/* Floating animation background circle */}
                <div className="profile-glow"></div>
              </motion.div>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Sections below Hero */}
      <Home2 />
      <Stats />
      <Engineering />
    </section>
  );
}

export default Home;
