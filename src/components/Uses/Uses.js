import React from "react";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Techstack from "../About/Techstack";
import Toolstack from "../About/Toolstack";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";

function Uses() {
  const { t } = useTranslation("uses");
  const seo = useRouteSeo("/uses");
  const sections = t("sections", { returnObjects: true });

  return (
    <Section className="relative">
      <Seo {...seo} path="/uses" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        <div className="max-w-3xl mx-auto space-y-8 mb-12">
          {(Array.isArray(sections) ? sections : []).map((section) => (
            <section
              key={section.title}
              className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm"
            >
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                {section.title}
              </h2>
              <ul className="space-y-2 list-none m-0 p-0">
                {(Array.isArray(section.items) ? section.items : []).map((item) => (
                  <li key={item} className="text-sm text-text-secondary flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <PageHeading accent={t("skillsetAccent")}>{t("skillsetHeading")}</PageHeading>
        <Techstack />

        <PageHeading accent={t("toolsAccent")}>{t("toolsHeading")}</PageHeading>
        <Toolstack />
      </Container>
    </Section>
  );
}

export default Uses;
