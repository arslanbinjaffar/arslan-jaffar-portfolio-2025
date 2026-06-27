import React from "react";
import { useTranslation } from "react-i18next";
import { useProjects } from "@/hooks/useProjects";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import FeaturedProjectCard from "./FeaturedProjectCard";
import SectionViewAll from "./SectionViewAll";

function FeaturedProjects() {
  const { t } = useTranslation("home");
  const { featuredProjects } = useProjects();

  const labels = {
    problem: t("sections.projects.problem"),
    solution: t("sections.projects.solution"),
    demo: t("sections.projects.demo"),
    caseStudy: t("sections.projects.caseStudy"),
  };

  if (featuredProjects.length === 0) return null;

  return (
    <Section id="projects">
      <Container>
        <PageHeading
          accent={t("sections.projects.headingAccent")}
          subtitle={t("sections.projects.subtitle")}
        >
          {t("sections.projects.heading")}
        </PageHeading>

        <div className="space-y-8 mt-8">
          {featuredProjects.map((project) => (
            <FeaturedProjectCard key={project.title} {...project} labels={labels} />
          ))}
        </div>

        <SectionViewAll to="/project" label={t("sections.projects.viewAll")} />
      </Container>
    </Section>
  );
}

export default FeaturedProjects;
