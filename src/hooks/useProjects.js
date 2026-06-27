import { useTranslation } from "react-i18next";
import { projects, backendProjects } from "@/components/Projects/projectsData";

export function useProjects() {
  const { t } = useTranslation("projects");
  const items = t("items", { returnObjects: true });
  const backendItems = t("backendItems", { returnObjects: true });

  const merge = (base, text, index) => {
    const translated = Array.isArray(text) ? text[index] : null;
    if (!translated) return base;
    return {
      ...base,
      title: translated.title || base.title,
      role: translated.role || base.role,
      impact: translated.impact || base.impact,
      description: translated.description || base.description,
      businessProblem: translated.businessProblem || base.businessProblem,
      solution: translated.solution || base.solution,
    };
  };

  return {
    projects: projects.map((p, i) => merge(p, items, i)),
    backendProjects: backendProjects.map((p, i) => merge(p, backendItems, i)),
    featuredProjects: projects
      .map((p, i) => merge(p, items, i))
      .filter((p) => p.featured),
  };
}
