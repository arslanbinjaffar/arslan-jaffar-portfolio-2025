import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { contactConfig } from "@/config/site";
import { useLocale } from "@/context/LocaleContext";

function PrivacyPolicy() {
  const { t } = useTranslation("legal");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/privacy");
  const sections = t("privacy.sections", { returnObjects: true });

  return (
    <Section>
      <Seo {...seo} path="/privacy" />
      <Container>
        <PageHeading accent={t("privacy.headingAccent")}>
          {t("privacy.heading")}
        </PageHeading>
        <div className="max-w-3xl mx-auto text-text-secondary space-y-6 leading-relaxed">
          <p className="text-sm">{t("privacy.lastUpdated")}</p>

          {(Array.isArray(sections) ? sections : []).map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-text-primary mb-2">
                {section.title}
              </h2>
              <p>
                {section.body.replace(/\{\{email\}\}/g, contactConfig.email)}
              </p>
              {section.linkTo && section.linkText && (
                <p className="mt-2">
                  <Link
                    to={localizePath(section.linkTo)}
                    className="text-accent hover:underline font-medium"
                  >
                    {section.linkText}
                  </Link>
                </p>
              )}
            </section>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default PrivacyPolicy;
