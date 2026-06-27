import React, { useEffect, useState, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import { useTranslation } from "react-i18next";
import PageHeading from "../ui/PageHeading";
import GitHubStats from "./GitHubStats";
import { ThemeContext } from "../../App";

function Github() {
  const { theme } = useContext(ThemeContext);
  const { t } = useTranslation("about");
  const [calendarColor, setCalendarColor] = useState("");

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--github-calendar")
      .trim();
    setCalendarColor(color);
  }, [theme]);

  return (
    <div className="flex flex-col items-center py-8">
      <PageHeading accent={t("github.headingAccent")} className="!mb-6">
        {t("github.heading")}
      </PageHeading>
      <GitHubStats />
      {calendarColor && (
        <div dir="ltr">
          <GitHubCalendar
            username="arslanbinjaffar"
            blockSize={15}
            blockMargin={5}
            color={calendarColor}
            fontSize={16}
          />
        </div>
      )}
    </div>
  );
}

export default Github;
