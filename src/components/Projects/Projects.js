import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects, backendProjects } from "./projectsData";

function Projects() {
  const allProjects = [
    ...projects.map((project) => ({ ...project, isBackend: false })),
    ...backendProjects.map((project) => ({ ...project, isBackend: true })),
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {allProjects.map((project, idx) => (
            <Col md={4} className="project-card" key={`${project.title}-${idx}`}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;