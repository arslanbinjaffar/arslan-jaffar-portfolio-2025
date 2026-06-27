import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useExperience } from "@/hooks/useExperience";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import SectionViewAll from "./SectionViewAll";

function ExperiencePreview() {
  const { t } = useTranslation("home");
  const { experienceData } = useExperience();
  const preview = experienceData.slice(0, 3);

  return (
    <Section id="experience">
      <Container>
        <PageHeading
          accent={t("sections.experience.headingAccent")}
          subtitle={t("sections.experience.subtitle")}
        >
          {t("sections.experience.heading")}
        </PageHeading>

        <div className="relative mt-8 ps-0 md:ps-6">
          <div className="absolute start-3 top-0 bottom-0 w-0.5 bg-border hidden md:block" aria-hidden />
          <div className="space-y-8">
            {preview.map((item, i) => (
              <motion.div
                key={`${item.company}-${item.role}`}
                className="relative md:ps-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="absolute start-0 top-2 h-3 w-3 rounded-full bg-accent border-2 border-bg-primary hidden md:block" />
                <div className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors">
                  <div className="flex flex-wrap items-start gap-4 mb-3">
                    {item.companyImage && (
                      <img
                        src={item.companyImage}
                        alt={item.company}
                        className="h-10 w-10 rounded-lg object-cover"
                        loading="lazy"
                      />
                    )}
                    <div>
                      <h3 className="font-bold text-text-primary">{item.role}</h3>
                      <p className="text-sm text-accent">
                        {item.company} · {item.duration}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-3">{item.description}</p>
                  {item.highlights?.[0] && (
                    <p className="text-sm text-text-primary">
                      ✓ {item.highlights[0]}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <SectionViewAll to="/experience" label={t("sections.experience.viewAll")} />
      </Container>
    </Section>
  );
}

export default ExperiencePreview;
