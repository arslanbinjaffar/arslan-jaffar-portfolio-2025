import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiRabbitmq,
//   SiDocker,
  SiReact,
} from "react-icons/si";
// import { MdOutlineArchitecture } from "react-icons/md";
import { AiOutlineCloudServer } from "react-icons/ai";

const cards = [
  {
    icon: <SiNodedotjs size={36} color="#c770f0" />,
    title: "Backend Systems & APIs",
    desc: "Production-grade REST and GraphQL APIs built with Node.js, NestJS, and Express.js. Focus on security, validation, and performance at scale.",
    tags: ["Node.js", "NestJS", "REST", "GraphQL"],
  },
  {
    icon: <SiRabbitmq size={36} color="#c770f0" />,
    title: "Microservices & Queues",
    desc: "Distributed architectures with event-driven communication using RabbitMQ and BullMQ. Redis caching to cut latency and improve throughput.",
    tags: ["Microservices", "RabbitMQ", "BullMQ", "Redis"],
  },
  {
    icon: <AiOutlineCloudServer size={36} color="#c770f0" />,
    title: "Cloud & DevOps",
    desc: "Dockerized deployments on AWS and GCP. CI/CD pipelines with GitLab and GitHub Actions. Kubernetes orchestration for scalable infrastructure.",
    tags: ["Docker", "AWS", "GCP", "CI/CD", "Kubernetes"],
  },
  {
    icon: <SiReact size={36} color="#c770f0" />,
    title: "Frontend Engineering",
    desc: "Clean and responsive UIs with React.js and Next.js. State management via Redux. Optimised for performance, accessibility, and SEO.",
    tags: ["React.js", "Next.js", "Redux", "TypeScript"],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

function Engineering() {
  return (
    <Container fluid className="engineering-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-heading" style={{ marginBottom: "8px" }}>
            What I <strong className="purple">Actually Build</strong>
          </h1>
          <p className="engineering-subtitle">
            Beyond writing code — designing systems that handle real-world scale and complexity.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Row style={{ justifyContent: "center", marginTop: "30px" }}>
            {cards.map((card) => (
              <Col md={6} lg={3} key={card.title} style={{ marginBottom: "24px" }}>
                <motion.div className="eng-card" variants={cardVariants}>
                  <div className="eng-card-icon">{card.icon}</div>
                  <h5 className="eng-card-title">{card.title}</h5>
                  <p className="eng-card-desc">{card.desc}</p>
                  <div className="eng-card-tags">
                    {card.tags.map((t) => (
                      <span key={t} className="eng-tag">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </Container>
  );
}

export default Engineering;
