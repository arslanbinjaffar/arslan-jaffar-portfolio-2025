import { useTranslation } from "react-i18next";
import { experienceData, homeHighlights } from "@/components/Experience/experienceData";

export function useExperience() {
  const { t } = useTranslation("experience");
  const items = t("items", { returnObjects: true });
  const highlights = t("highlights", { returnObjects: true });

  const mergeExperience = (base, translated, index) => {
    if (!Array.isArray(translated) || !translated[index]) return base;
    const text = translated[index];
    return {
      ...base,
      role: text.role || base.role,
      company: text.company || base.company,
      designation: text.designation || base.designation,
      duration: text.duration || base.duration,
      description: text.description || base.description,
      highlights:
        text.highlights?.length && text.highlights[0] !== text.role
          ? text.highlights
          : base.highlights,
    };
  };

  const mergeHighlights = (base, translated, index) => {
    if (!Array.isArray(translated) || !translated[index]) return base;
    return { ...base, ...translated[index] };
  };

  return {
    experienceData: experienceData.map((item, i) =>
      mergeExperience(item, items, i)
    ),
    homeHighlights: homeHighlights.map((item, i) =>
      mergeHighlights(item, highlights, i)
    ),
    labels: {
      heading: t("heading"),
      headingAccent: t("headingAccent"),
      subtitle: t("subtitle"),
      openForWork: t("openForWork"),
    },
  };
}
