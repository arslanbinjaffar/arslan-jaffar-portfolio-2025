import React, { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { Input } from "@/components/ui/input";

function ProjectToolbar({
  searchQuery,
  onSearchChange,
  selectedTech,
  onTechToggle,
  allTechnologies,
}) {
  const { t } = useTranslation("projects");

  const sortedTech = useMemo(
    () => [...allTechnologies].sort((a, b) => a.localeCompare(b)),
    [allTechnologies]
  );

  return (
    <div className="mb-10 space-y-4">
      <div className="relative max-w-md mx-auto">
        <FaSearch className="absolute start-3 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
        <Input
          type="search"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder={t("searchPlaceholder")}
          className="ps-10"
          aria-label={t("searchPlaceholder")}
        />
      </div>

      {sortedTech.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2">
          {sortedTech.map((tech) => {
            const active = selectedTech.includes(tech);
            return (
              <button
                key={tech}
                type="button"
                onClick={() => onTechToggle(tech)}
                aria-pressed={active}
                className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                  active
                    ? "bg-accent text-bg-primary border-accent"
                    : "border-border text-text-secondary hover:text-accent hover:border-accent/50"
                }`}
              >
                {tech}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default ProjectToolbar;
