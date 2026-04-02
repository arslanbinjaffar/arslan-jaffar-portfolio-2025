import React from "react";
import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Particle from "../Particle";
import { experienceData } from "./experienceData";

function Experience() {
  return (
    <Container fluid className="experience-section">
      <Particle />
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="project-heading">
            My Professional <strong className="purple">Experience</strong>
          </h1>
          <p style={{ color: "#9d9dc7", marginBottom: "50px" }}>
            A timeline of roles, responsibilities, and outcomes from my engineering journey.
          </p>
        </motion.div>

        <div className="timeline">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div className="timeline-dot" />
              <div className="timeline-content">
                <div className="timeline-header">
                  <div className="timeline-company-logo">
                    <img src={exp.companyImage} alt={exp.company} />
                  </div>
                  <div>
                    <h4 className="timeline-role">{exp.role}</h4>
                    <span className="timeline-company">{exp.company}</span>
                    <span className="timeline-duration">{exp.duration}</span>
                  </div>
                </div>
                <p className="timeline-desc">{exp.description}</p>
                {exp.highlights?.length > 0 && (
                  <ul className="timeline-highlights">
                    {exp.highlights.map((point, pi) => (
                      <li key={pi}>{point}</li>
                    ))}
                  </ul>
                )}
                {exp.tech?.length > 0 && (
                  <div className="timeline-tech">
                    {exp.tech.map((t) => (
                      <span key={t} className="timeline-tech-tag">{t}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default Experience;