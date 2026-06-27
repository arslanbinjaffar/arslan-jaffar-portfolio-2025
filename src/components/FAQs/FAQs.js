import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import { buildFaqSchema } from "@/lib/structuredData";

function FAQs() {
  const { t } = useTranslation("faqs");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/faqs");
  const items = t("items", { returnObjects: true });
  const faqItems = Array.isArray(items) ? items : [];

  return (
    <Section className="relative">
      <Seo {...seo} path="/faqs" jsonLd={buildFaqSchema(faqItems)} />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqItems.map((item, index) => (
            <details
              key={item.question}
              className="group bg-card border border-border rounded-2xl backdrop-blur-sm open:border-accent/40 transition-colors"
              {...(index === 0 ? { open: true } : {})}
            >
              <summary className="cursor-pointer list-none px-6 py-4 font-semibold text-text-primary flex items-center justify-between gap-4 [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span className="text-accent text-xl shrink-0 group-open:rotate-45 transition-transform">
                  +
                </span>
              </summary>
              <div className="px-6 pb-4 text-sm text-text-secondary leading-relaxed border-t border-border pt-4">
                {item.answer}
              </div>
            </details>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-text-secondary mb-4">{t("ctaText")}</p>
          <Button asChild>
            <Link to={localizePath("/contact")}>{t("ctaButton")}</Link>
          </Button>
        </div>
      </Container>
    </Section>
  );
}

export default FAQs;
