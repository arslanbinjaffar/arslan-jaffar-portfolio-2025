import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

const values = [
  {
    icon: "⚙️",
    title: "Scalability First",
    desc: "Design systems that handle growth without rewrites — from day one.",
  },
  {
    icon: "🛡️",
    title: "Production Reliability",
    desc: "Ship features that stay up. Observability, error handling, and graceful degradation built in.",
  },
  {
    icon: "🏗️",
    title: "Clean Architecture",
    desc: "Modular, testable, and maintainable code that teams can confidently extend.",
  },
];

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <motion.div
          className="core-values-section"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <h1 className="project-heading" style={{ textAlign: "center" }}>
            Core <strong className="purple">Engineering Values</strong>
          </h1>
          <div className="core-values-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="core-value-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
              >
                <div className="core-value-icon">{v.icon}</div>
                <div className="core-value-title">{v.title}</div>
                <div className="core-value-desc">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Github />
      </Container>
    </Container>
  );
}

export default About;
