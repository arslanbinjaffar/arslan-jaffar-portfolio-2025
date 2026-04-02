import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Stats from "./Stats";
import Engineering from "./Engineering";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: delay || 0 } }),
};

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.1}
              >
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.25}
              >
                <h1 className="heading-name">
                  I'M
                  <strong className="main-name"> Arslan Jaffar</strong>
                </h1>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.4}
                style={{ padding: "50px 50px 20px", textAlign: "left" }}
              >
                <Type />
              </motion.div>

              <motion.div
                className="hero-tag-strip"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={0.6}
              >
                {["NestJS", "Microservices", "Redis", "RabbitMQ", "CI/CD", "AWS", "Docker"].map((tag) => (
                  <span key={tag} className="hero-tag">{tag}</span>
                ))}
              </motion.div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <motion.img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.3 }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Stats />
      <Engineering />
    </section>
  );
}

export default Home;
