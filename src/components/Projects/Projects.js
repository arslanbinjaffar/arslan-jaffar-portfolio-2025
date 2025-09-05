import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects, backendProjects } from "./projectsData";


const allProjects = [
  ...projects.map((project) => ({ ...project, isBackend: false })),
  ...backendProjects.map((project) => ({ ...project, isBackend: true })),
];

const [displayProjects, setDisplayProjects] = useState(() => {
  const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
  const randomThree = shuffled.slice(0, 3);
  const rest = allProjects.filter(
    (p) => !randomThree.some((rp) => rp.title === p.title)
  );
  return [...randomThree, ...rest];
});
  function Projects() {
    const allProjects = [
      ...projects.map((project) => ({ ...project, isBackend: false })),
      ...backendProjects.map((project) => ({ ...project, isBackend: true })),
    ];

    // Helper to shuffle and save to localStorage
    const shuffleAndSave = () => {
      const shuffled = [...allProjects].sort(() => Math.random() - 0.5);
      localStorage.setItem("projectOrder", JSON.stringify(shuffled.map(p => p.title)));
      return shuffled;
    };

    // Get order from localStorage or shuffle
    const getOrderedProjects = () => {
      const order = JSON.parse(localStorage.getItem("projectOrder"));
      if (order && Array.isArray(order) && order.length === allProjects.length) {
        // Map titles to projects
        return order.map(title => allProjects.find(p => p.title === title)).filter(Boolean);
      }
      return shuffleAndSave();
    };

    const [displayProjects, setDisplayProjects] = useState(getOrderedProjects);

    useEffect(() => {
      const interval = setInterval(() => {
        setDisplayProjects(shuffleAndSave());
      }, 600000); // 10 minutes
      return () => clearInterval(interval);
    }, [allProjects]);

    // On mount, update localStorage if needed (for refresh consistency)
    useEffect(() => {
      setDisplayProjects(getOrderedProjects());
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