import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { useGallery } from "@/hooks/useGallery";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import SectionViewAll from "./SectionViewAll";

function CertificationsPreview() {
  const { t } = useTranslation("home");
  const { galleryItems: items } = useGallery();
  const preview = items.slice(0, 3);

  if (preview.length === 0) return null;

  return (
    <Section id="certifications">
      <Container>
        <PageHeading
          accent={t("sections.certifications.headingAccent")}
          subtitle={t("sections.certifications.subtitle")}
        >
          {t("sections.certifications.heading")}
        </PageHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {preview.map((item, i) => (
            <motion.div
              key={item.id}
              className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                {item.category}
              </span>
              <h3 className="text-lg font-bold text-text-primary mt-3 mb-1">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.date}</p>
              {item.description && (
                <p className="text-sm text-text-secondary mt-2">{item.description}</p>
              )}
            </motion.div>
          ))}
        </div>

        <SectionViewAll to="/gallery" label={t("sections.certifications.viewAll")} />
      </Container>
    </Section>
  );
}

export default CertificationsPreview;
