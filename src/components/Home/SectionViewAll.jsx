import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/context/LocaleContext";
import { ArrowRight } from "lucide-react";

function SectionViewAll({ to, label }) {
  const { localizePath } = useLocale();
  const { t } = useTranslation("common");

  return (
    <div className="text-center mt-10">
      <Link
        to={localizePath(to)}
        className="inline-flex items-center gap-2 text-accent font-medium hover:underline"
      >
        {label || t("buttons.viewAll")}
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default SectionViewAll;
