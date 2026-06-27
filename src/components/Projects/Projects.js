import React, { useMemo, useTransition, useCallback } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import ProjectCard from "./ProjectCards";
import ProjectToolbar from "./ProjectToolbar";
import Particle from "../Particle";
import { useProjects } from "@/hooks/useProjects";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { buildProjectsSchema } from "@/lib/structuredData";
import { staggerContainer, staggerItem } from "@/lib/motion";

function Projects() {
  const { t } = useTranslation("projects");
  const { projects, backendProjects } = useProjects();
  const seo = useRouteSeo("/project");
  const [searchParams, setSearchParams] = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const searchQuery = searchParams.get("q") || "";
  const selectedTech = useMemo(
    () => searchParams.getAll("tech").filter(Boolean),
    [searchParams]
  );

  const allProjects = useMemo(
    () =>
      [...projects, ...backendProjects]
        .map((project, idx) => ({
          ...project,
          isBackend: idx >= projects.length,
        }))
        .sort((a, b) => a.title.localeCompare(b.title)),
    [projects, backendProjects]
  );

  const allTechnologies = useMemo(() => {
    const set = new Set();
    allProjects.forEach((p) => p.techStack?.forEach((tech) => set.add(tech)));
    return [...set];
  }, [allProjects]);

  const filteredProjects = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return allProjects.filter((project) => {
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        (project.description || "").toLowerCase().includes(q) ||
        project.techStack?.some((tech) => tech.toLowerCase().includes(q));

      const matchesTech =
        selectedTech.length === 0 ||
        selectedTech.some((tech) => project.techStack?.includes(tech));

      return matchesSearch && matchesTech;
    });
  }, [allProjects, searchQuery, selectedTech]);

  const setSearchQuery = useCallback(
    (value) => {
      startTransition(() => {
        setSearchParams((prev) => {
          const next = new URLSearchParams(prev);
          if (value) next.set("q", value);
          else next.delete("q");
          return next;
        });
      });
    },
    [setSearchParams]
  );

  const toggleTech = useCallback(
    (tech) => {
      startTransition(() => {
        setSearchParams((prev) => {
          const next = new URLSearchParams(prev);
          const current = next.getAll("tech");
          next.delete("tech");
          if (current.includes(tech)) {
            current.filter((t) => t !== tech).forEach((t) => next.append("tech", t));
          } else {
            [...current, tech].forEach((t) => next.append("tech", t));
          }
          return next;
        });
      });
    },
    [setSearchParams]
  );

  return (
    <Section className="relative">
      <Seo
        {...seo}
        path="/project"
        jsonLd={buildProjectsSchema(projects, backendProjects)}
      />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        <ProjectToolbar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedTech={selectedTech}
          onTechToggle={toggleTech}
          allTechnologies={allTechnologies}
        />

        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 px-4 bg-card border border-border rounded-2xl backdrop-blur-sm">
            <p className="text-lg font-semibold text-text-primary">{t("emptyTitle")}</p>
            <p className="text-sm text-text-secondary mt-2">{t("emptyDescription")}</p>
          </div>
        ) : (
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            aria-busy={isPending}
          >
            {filteredProjects.map((project) => (
              <motion.div key={project.title} variants={staggerItem}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </Container>
    </Section>
  );
}

export default Projects;
