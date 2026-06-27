import React, { memo } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import NavLink from "./NavLink";
import NavActions from "./NavActions";
import { cn } from "@/lib/utils";

function TabletGroupLink({ labelKey, to }) {
  const { t } = useTranslation("common");
  const { localizePath } = useLocale();

  return (
    <Link
      to={localizePath(to)}
      className={cn(
        "inline-flex items-center px-2.5 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap",
        "text-text-primary hover:text-accent",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary"
      )}
    >
      {t(labelKey)}
    </Link>
  );
}

function TabletNav({ menuOpen, onMenuOpenChange }) {
  const { t } = useTranslation("common");

  return (
    <div className="flex flex-1 items-center justify-end gap-1 min-w-0 ms-2">
      <NavLink item={{ key: "home", to: "/" }} />
      <TabletGroupLink labelKey="nav.groups.portfolio" to="/project" />
      <TabletGroupLink labelKey="nav.groups.resources" to="/blog" />

      <div className="flex items-center gap-2 ms-2 shrink-0">
        <NavActions showLanguage={false} showTheme={false} />
        <button
          type="button"
          className={cn(
            "inline-flex items-center justify-center rounded-lg border border-border p-2",
            "text-text-primary hover:text-accent hover:border-accent/40",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          )}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav-drawer"
          aria-label={menuOpen ? t("nav.closeMenu") : t("nav.openMenu")}
          onClick={() => onMenuOpenChange((prev) => !prev)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

export default memo(TabletNav);
