import React, { useEffect, useState, useContext } from "react";
import GitHubCalendar from "react-github-calendar";
import PageHeading from "../ui/PageHeading";
import { ThemeContext } from "../../App";

function Github() {
  const { theme } = useContext(ThemeContext);
  const [calendarColor, setCalendarColor] = useState("");

  useEffect(() => {
    const color = getComputedStyle(document.documentElement)
      .getPropertyValue("--github-calendar")
      .trim();
    setCalendarColor(color);
  }, [theme]);

  return (
    <div className="flex flex-col items-center py-8">
      <PageHeading accent="Code" className="!mb-6">
        Days I
      </PageHeading>
      {calendarColor && (
        <GitHubCalendar
          username="arslanbinjaffar"
          blockSize={15}
          blockMargin={5}
          color={calendarColor}
          fontSize={16}
        />
      )}
    </div>
  );
}

export default Github;
