import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hi, I am Arslan Jaffar, a Senior MERN Stack Engineer with 4+ years
              of experience building scalable, production-ready web platforms.
              I focus on designing robust backend systems with Node.js, NestJS,
              and Express.js while delivering clean frontend experiences with
              React.js and Next.js.
              <br />
              <br />
              I have hands-on experience in microservices, distributed systems,
              caching, and asynchronous processing using PostgreSQL, MongoDB,
              Redis, RabbitMQ, and BullMQ. I enjoy turning complex product
              requirements into practical and maintainable architecture.
              <br />
              <br />
              Currently, I lead development for ERP and event management
              products, where I contribute to system design, engineering
              standards, CI/CD, and team mentorship.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <motion.div
              className="identity-statement"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="identity-quote">
                I don't just build apps.
                <br />
                <span className="purple">I design systems that scale.</span>
                <br />
                <span className="identity-sub">From idea → architecture → production.</span>
              </p>
            </motion.div>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/arslanbinjaffar"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/arslanbinjaffar/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
