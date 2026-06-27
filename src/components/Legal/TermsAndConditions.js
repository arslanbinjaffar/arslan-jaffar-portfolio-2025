import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { contactConfig } from "@/config/site";

function TermsAndConditions() {
  const { t } = useTranslation("legal");
  const seo = useRouteSeo("/terms");
  const sections = t("terms.sections", { returnObjects: true });

  return (
    <Section>
      <Seo {...seo} path="/terms" />
      <Container>
        <PageHeading accent={t("terms.headingAccent")}>
          {t("terms.heading")}
        </PageHeading>
        <div className="max-w-3xl mx-auto text-text-secondary space-y-6 leading-relaxed">
          <p className="text-sm">{t("terms.lastUpdated")}</p>

          {(Array.isArray(sections) ? sections : []).map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                {section.title}
              </h2>
              <p>
                {section.body.replace(/\{\{email\}\}/g, contactConfig.email)}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TermsAndConditions;
