import React, { useEffect, useState, useMemo } from "react";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import { projects, backendProjects } from "./projectsData";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";

function Projects() {
  const allProjects = useMemo(
    () => [
      ...projects.map((project) => ({ ...project, isBackend: false })),
      ...backendProjects.map((project) => ({ ...project, isBackend: true })),
    ],
    []
  );

  const [displayProjects, setDisplayProjects] = useState(() =>
    [...allProjects].sort(() => Math.random() - 0.5)
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayProjects([...allProjects].sort(() => Math.random() - 0.5));
    }, 600000);
    return () => clearInterval(interval);
  }, [allProjects]);

  return (
    <Section className="relative">
      <Particle />
      <Container>
        <PageHeading
          accent="Works"
          subtitle="Here are a few projects I've worked on recently."
        >
          My Recent
        </PageHeading>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {displayProjects.map((project, idx) => (
            <div key={`${project.title}-${idx}`}>
              <ProjectCard {...project} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Projects;
