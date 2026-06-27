import React, { memo, useContext } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { ThemeContext } from "@/App";
import { useLocale } from "@/context/LocaleContext";
import LanguageSwitcher from "../LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function NavActions({
  onNavigate,
  showLanguage = true,
  showTheme = true,
  showHireMe = true,
  layout = "row",
  className,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { localizePath } = useLocale();
  const { t } = useTranslation("common");

  const isColumn = layout === "column";

  return (
    <div
      className={cn(
        "flex items-center gap-2",
        isColumn && "flex-col items-stretch w-full gap-3",
        className
      )}
    >
      {showLanguage && (
        <LanguageSwitcher compact={isColumn} onSelect={onNavigate} className={isColumn ? "w-full" : ""} />
      )}

      {showTheme && (
        <Button
          variant="outline"
          onClick={toggleTheme}
          className={cn("!px-3 !py-2", isColumn && "w-full justify-center")}
          title={t(theme === "dark" ? "theme.switchToLight" : "theme.switchToDark")}
          aria-label={t(theme === "dark" ? "theme.switchToLight" : "theme.switchToDark")}
        >
          {theme === "dark" ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
        </Button>
      )}

      {showHireMe && (
        <Button asChild className={cn(isColumn && "w-full")}>
          <Link to={localizePath("/contact")} onClick={onNavigate}>
            {t("nav.hireMe")}
          </Link>
        </Button>
      )}
    </div>
  );
}

export default memo(NavActions);
