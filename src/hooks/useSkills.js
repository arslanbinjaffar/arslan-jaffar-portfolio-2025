import { useTranslation } from "react-i18next";
import { skillCategories } from "@/content/skillsData";

export function useSkills() {
  const { t } = useTranslation("home");
  const categories = t("sections.skills.categories", { returnObjects: true });

  return {
    categories: skillCategories.map((cat) => {
      const translated = categories?.[cat.id];
      return {
        ...cat,
        label: translated?.label || cat.id,
        skills: cat.skills.map((skill, i) => ({
          ...skill,
          name: translated?.skills?.[i]?.name || skill.name,
        })),
      };
    }),
  };
}
