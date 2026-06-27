import React from "react";
import { useTranslation } from "react-i18next";
import { siteConfig } from "@/config/site";

function AvailableBadge({ className = "" }) {
  const { t } = useTranslation("common");

  if (!siteConfig.openForWork) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400 ${className}`.trim()}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden />
      {t("badge.available")}
    </span>
  );
}

export default AvailableBadge;
