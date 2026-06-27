import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import caseStudies from "./caseStudiesData";
import { staggerContainer, staggerItem } from "@/lib/motion";

function CaseStudies() {
  const { t } = useTranslation("caseStudies");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/case-studies");

  return (
    <Section className="relative">
      <Seo {...seo} path="/case-studies" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        <motion.div
          className="space-y-8 max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {caseStudies.map((study) => (
            <motion.article
              key={study.slug}
              variants={staggerItem}
              className="bg-card border border-border rounded-2xl overflow-hidden backdrop-blur-sm hover:border-accent/40 transition-colors"
            >
              <div className="md:flex">
                <div className="md:w-2/5 shrink-0">
                  <img
                    src={study.imgPath}
                    alt={study.title}
                    className="w-full h-48 md:h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col">
                  <p className="text-xs font-medium text-accent uppercase tracking-wide mb-1">
                    {study.role}
                  </p>
                  <h2 className="text-xl font-bold text-text-primary mb-4">
                    {study.title}
                  </h2>

                  <div className="space-y-4 text-sm text-text-secondary leading-relaxed flex-1">
                    <div>
                      <h3 className="text-text-primary font-semibold mb-1">
                        {t("labels.challenge")}
                      </h3>
                      <p>{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold mb-1">
                        {t("labels.approach")}
                      </h3>
                      <p>{study.approach}</p>
                    </div>
                    <div>
                      <h3 className="text-text-primary font-semibold mb-1">
                        {t("labels.outcome")}
                      </h3>
                      <p>{study.outcome}</p>
                    </div>
                  </div>

                  {study.techStack?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {study.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-xs rounded-full border border-border text-text-secondary"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-3 mt-5">
                    {study.demoLink && (
                      <a
                        href={study.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        {t("labels.demo")}
                      </a>
                    )}
                    {study.ghLink && (
                      <a
                        href={study.ghLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-accent hover:underline"
                      >
                        <FaGithub />
                        {t("labels.source")}
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link to={localizePath("/project")}>{t("viewAllProjects")}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default CaseStudies;
