import React from "react";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";

function Changelog() {
  const { t } = useTranslation("changelog");
  const seo = useRouteSeo("/changelog");
  const entries = t("entries", { returnObjects: true });
  const changelogEntries = Array.isArray(entries) ? entries : [];

  return (
    <Section>
      <Seo {...seo} path="/changelog" />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        <div className="max-w-3xl mx-auto space-y-8">
          {changelogEntries.map((entry) => (
            <article
              key={`${entry.version}-${entry.date}`}
              className="relative pl-8 border-l-2 border-accent/30"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary" />
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                <span className="text-sm font-semibold text-accent">{entry.version}</span>
                <time className="text-xs text-text-secondary">{entry.date}</time>
              </div>
              <ul className="space-y-2 list-none m-0 p-0">
                {(Array.isArray(entry.items) ? entry.items : []).map((item) => (
                  <li
                    key={item}
                    className="text-sm text-text-secondary flex items-start gap-2"
                  >
                    <span className="text-accent mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Changelog;
