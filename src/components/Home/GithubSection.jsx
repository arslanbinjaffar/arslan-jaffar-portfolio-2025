import React, { useContext, useEffect, useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../App";
import GitHubStats from "../About/GitHubStats";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import SectionViewAll from "./SectionViewAll";

function GithubSection() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation("home");
  const [calendarColor, setCalendarColor] = useState("");

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--github-calendar")
      .trim();
    setCalendarColor(color);
  }, [theme]);

  return (
    <Section id="github">
      <Container>
        <PageHeading
          accent={t("sections.github.headingAccent")}
          subtitle={t("sections.github.subtitle")}
        >
          {t("sections.github.heading")}
        </PageHeading>

        <div className="mt-8">
          <GitHubStats />
          {calendarColor && (
            <div className="flex justify-center overflow-x-auto" dir="ltr">
              <GitHubCalendar
                username="arslanbinjaffar"
                blockSize={12}
                blockMargin={4}
                color={calendarColor}
                fontSize={14}
              />
            </div>
          )}
        </div>

        <SectionViewAll to="/about" label={t("sections.github.viewAll")} />
      </Container>
    </Section>
  );
}

export default GithubSection;
