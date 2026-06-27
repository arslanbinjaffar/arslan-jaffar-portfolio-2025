import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { clientGroups } from "@/content/clientsData";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";

function TrustedBy() {
  const { t } = useTranslation("home");
  const groups = t("sections.clients.groups", { returnObjects: true });

  return (
    <Section id="clients" className="!py-12">
      <Container>
        <PageHeading
          accent={t("sections.clients.headingAccent")}
          subtitle={t("sections.clients.subtitle")}
        >
          {t("sections.clients.heading")}
        </PageHeading>

        <div className="space-y-10 mt-8">
          {clientGroups.map((group) => (
            <div key={group.id}>
              <h3 className="text-sm font-semibold text-text-secondary uppercase tracking-wider mb-4 text-center">
                {groups?.[group.id] || group.id}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                {group.clients.map((client) => {
                  const content = (
                    <motion.div
                      key={client.name}
                      className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    >
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="h-10 md:h-12 w-auto max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                        loading="lazy"
                      />
                      <span className="text-xs text-text-secondary">{client.name}</span>
                    </motion.div>
                  );

                  return client.url ? (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={client.name}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={client.name}>{content}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default TrustedBy;
