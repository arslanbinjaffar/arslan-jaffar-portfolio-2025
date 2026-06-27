import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaCodeBranch } from "react-icons/fa";
import { useProjects } from "@/hooks/useProjects";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import SectionViewAll from "./SectionViewAll";

function OpenSourceSection() {
  const { t } = useTranslation("home");
  const { backendProjects } = useProjects();

  const repos = backendProjects.map((p) => ({
    id: p.title,
    title: p.title,
    type: "repo",
    description: p.description,
    url: p.ghLink,
  })).slice(0, 6);

  return (
    <Section id="opensource">
      <Container>
        <PageHeading
          accent={t("sections.opensource.headingAccent")}
          subtitle={t("sections.opensource.subtitle")}
        >
          {t("sections.opensource.heading")}
        </PageHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {repos.map((repo, i) => (
            <motion.div
              key={repo.id}
              className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="flex items-center gap-2 mb-3">
                {repo.type === "repo" ? (
                  <FaGithub className="text-accent" />
                ) : (
                  <FaCodeBranch className="text-accent" />
                )}
                <span className="text-xs uppercase text-text-secondary">{repo.type}</span>
              </div>
              <h3 className="font-bold text-text-primary mb-2">{repo.title}</h3>
              <p className="text-sm text-text-secondary flex-1 mb-4">{repo.description}</p>
              {repo.url && (
                <Button asChild size="sm" variant="outline" className="w-fit">
                  <a href={repo.url} target="_blank" rel="noopener noreferrer">
                    {t("sections.opensource.viewRepo")}
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>

        <SectionViewAll
          to="/project"
          label={t("sections.opensource.viewAll")}
        />
      </Container>
    </Section>
  );
}

export default OpenSourceSection;
