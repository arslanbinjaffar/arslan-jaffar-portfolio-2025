import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useServices } from "@/hooks/useServices";
import { useLocale } from "@/context/LocaleContext";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import SectionViewAll from "./SectionViewAll";

function ServicesPreview() {
  const { t } = useTranslation("home");
  const { services } = useServices();
  const { localizePath } = useLocale();
  const preview = services.slice(0, 4);

  return (
    <Section id="services">
      <Container>
        <PageHeading
          accent={t("sections.services.headingAccent")}
          subtitle={t("sections.services.subtitle")}
        >
          {t("sections.services.heading")}
        </PageHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {preview.map((service, i) => (
            <motion.div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors h-full flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-3xl mb-3" aria-hidden>
                {service.icon}
              </span>
              <h3 className="text-lg font-bold text-text-primary mb-2">{service.title}</h3>
              <p className="text-sm text-text-secondary flex-1 mb-4">{service.description}</p>
              <Button asChild variant="outline" size="sm" className="w-fit">
                <Link to={localizePath("/contact")}>{t("sections.services.getQuote")}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <SectionViewAll to="/services" label={t("sections.services.viewAll")} />
      </Container>
    </Section>
  );
}

export default ServicesPreview;
