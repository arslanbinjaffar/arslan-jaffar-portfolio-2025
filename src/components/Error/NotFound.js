import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useLocale } from "@/context/LocaleContext";

function NotFound() {
  const { t } = useTranslation("common");
  const { localizePath } = useLocale();

  return (
    <Section className="relative min-h-[60vh] flex items-center">
      <Seo
        title={t("notFound.title")}
        description={t("notFound.description")}
        path="/404"
        noindex
      />
      <Container>
        <div className="max-w-xl mx-auto text-center">
          <p className="text-7xl md:text-8xl font-bold text-accent/30 mb-4">
            404
          </p>
          <PageHeading accent={t("notFound.headingAccent")} subtitle={t("notFound.subtitle")}>
            {t("notFound.heading")}
          </PageHeading>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button asChild>
              <Link to={localizePath("/")}>{t("notFound.backHome")}</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link to={localizePath("/contact")}>{t("notFound.contact")}</Link>
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default NotFound;
