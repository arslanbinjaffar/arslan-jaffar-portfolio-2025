import React, { forwardRef, memo } from "react";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/context/LocaleContext";
import { getNavLabelKey, resolveNavHref } from "@/config/navigation";
import { cn } from "@/lib/utils";
import { useNavActive } from "./useNavActive";

const NavLink = forwardRef(function NavLink(
  {
    item,
    onClick,
    className,
    showExternalIcon = true,
    variant = "default",
  },
  ref
) {
  const { t } = useTranslation("common");
  const { localizePath } = useLocale();
  const { isItemActive, isTopLinkActive } = useNavActive();

  const active =
    item.type === "link" ? isTopLinkActive(item) : isItemActive(item);

  const href = resolveNavHref(item, localizePath);
  const label = t(getNavLabelKey(item));

  const baseClass = cn(
    "inline-flex items-center gap-1.5 text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary",
    variant === "dropdown-item"
      ? "w-full px-3 py-2.5 hover:bg-accent/10 hover:text-accent"
      : variant === "mobile"
        ? "w-full px-3 py-3 hover:bg-accent/10 hover:text-accent"
        : "px-2.5 py-2 hover:text-accent relative",
    active ? "text-accent" : "text-text-primary",
    variant === "default" &&
      active &&
      "after:absolute after:bottom-0 after:start-2.5 after:end-2.5 after:h-0.5 after:rounded-full after:bg-accent",
    className
  );

  if (item.external || (item.href && !item.to)) {
    return (
      <a
        ref={ref}
        href={href}
        className={baseClass}
        target="_blank"
        rel="noopener noreferrer"
        onClick={onClick}
        aria-current={active ? "page" : undefined}
      >
        {label}
        {showExternalIcon && (
          <ExternalLink className="h-3.5 w-3.5 opacity-60" aria-hidden />
        )}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      to={href}
      className={baseClass}
      onClick={onClick}
      aria-current={active ? "page" : undefined}
    >
      {label}
    </Link>
  );
});

export default memo(NavLink);
