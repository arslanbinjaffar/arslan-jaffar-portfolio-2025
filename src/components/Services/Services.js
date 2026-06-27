import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import { useServices } from "@/hooks/useServices";
import { staggerContainer, staggerItem } from "@/lib/motion";

function Services() {
  const { t } = useTranslation("services");
  const { services } = useServices();
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/services");

  return (
    <Section className="relative">
      <Seo {...seo} path="/services" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={staggerItem}>
              <Card className="h-full border-border bg-bg-secondary/50 hover:border-accent/50 transition-colors">
                <CardContent className="p-6 flex flex-col h-full">
                  <span className="text-3xl mb-4" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3 className="text-xl font-bold text-text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="list-disc list-inside text-sm text-text-secondary space-y-1 mb-6 flex-grow">
                    {service.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="w-fit">
                    <Link to={localizePath("/contact")}>
                      {t("getQuote", { defaultValue: "Get a Quote" })}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </Section>
  );
}

export default Services;
