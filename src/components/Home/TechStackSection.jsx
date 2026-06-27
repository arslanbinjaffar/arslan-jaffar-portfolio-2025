import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useSkills } from "@/hooks/useSkills";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import SectionViewAll from "./SectionViewAll";

function TechStackSection() {
  const { t } = useTranslation("home");
  const { categories } = useSkills();

  return (
    <Section id="skills">
      <Container>
        <PageHeading
          accent={t("sections.skills.headingAccent")}
          subtitle={t("sections.skills.subtitle")}
        >
          {t("sections.skills.heading")}
        </PageHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              className="bg-card border border-border rounded-2xl p-5 backdrop-blur-sm hover:border-accent/50 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <h3 className="text-sm font-bold text-accent uppercase tracking-wide mb-4">
                {category.label}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-between text-sm"
                    dir="ltr"
                  >
                    <span className="text-text-primary">{skill.name}</span>
                    <span className="text-text-secondary text-xs">
                      {skill.years}+ {t("sections.skills.years")}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <SectionViewAll to="/about" label={t("sections.skills.viewAll")} />
      </Container>
    </Section>
  );
}

export default TechStackSection;
