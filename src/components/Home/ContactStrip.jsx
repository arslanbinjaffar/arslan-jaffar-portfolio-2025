import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaLinkedinIn, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { useLocale } from "@/context/LocaleContext";
import { contactConfig, siteConfig, socialLinks } from "@/config/site";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";

function ContactStrip() {
  const { t } = useTranslation("home");
  const { t: tc } = useTranslation("common");
  const { localizePath } = useLocale();

  const actions = [
    socialLinks.whatsapp && {
      href: socialLinks.whatsapp,
      icon: FaWhatsapp,
      label: tc("social.whatsapp"),
      external: true,
    },
    {
      href: socialLinks.linkedinMessage,
      icon: FaLinkedinIn,
      label: tc("social.linkedin"),
      external: true,
    },
    {
      href: `mailto:${contactConfig.email}`,
      icon: FaEnvelope,
      label: "Email",
      external: true,
    },
  ].filter(Boolean);

  return (
    <Section id="contact" className="!pb-20">
      <Container>
        <PageHeading
          accent={t("sections.contact.headingAccent")}
          subtitle={t("sections.contact.subtitle")}
        >
          {t("sections.contact.heading")}
        </PageHeading>

        <motion.div
          className="max-w-2xl mx-auto text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-secondary mb-6">{t("sections.contact.body")}</p>

          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {actions.map(({ href, icon: Icon, label, external }) =>
              external ? (
                <Button key={label} asChild variant="outline">
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <Icon className="inline mr-2" />
                    {label}
                  </a>
                </Button>
              ) : null
            )}
            {siteConfig.calendarUrl && (
              <Button asChild variant="outline">
                <a href={siteConfig.calendarUrl} target="_blank" rel="noopener noreferrer">
                  {tc("buttons.bookCall")}
                </a>
              </Button>
            )}
          </div>

          <Button asChild size="lg">
            <Link to={localizePath("/contact")}>{tc("buttons.letsTalk")}</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

export default ContactStrip;
