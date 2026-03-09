import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects, backendProjects } from "./projectsData";

function Projects() {
  const allProjects = useMemo(
    () => [
      ...projects.map((project) => ({ ...project, isBackend: false })),
      ...backendProjects.map((project) => ({ ...project, isBackend: true })),
    ],
    [] // Empty dependency array - projects and backendProjects are static imports
  );

  const [displayProjects, setDisplayProjects] = useState(() => {
    // Shuffle projects on initial load
    const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
    return shuffled;
  });

  useEffect(() => {
    // Re-shuffle every 10 minutes
    const interval = setInterval(() => {
      const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
      setDisplayProjects(shuffled);
    }, 600000); // 10 minutes

    return () => clearInterval(interval);
  }, [allProjects]);

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
          {displayProjects.map((project, idx) => (
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