import React, { memo, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import NavLink from "./NavLink";
import MobileNavGroup from "./MobileNavGroup";
import NavActions from "./NavActions";
import { cn } from "@/lib/utils";

function MobileNav({ open, onOpenChange, mode = "full" }) {
  const { t } = useTranslation("common");

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const close = () => onOpenChange(false);

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const showHome = mode === "full" || mode === "mobile";
  const showServicesContact =
    mode === "full" || mode === "mobile" || mode === "tablet-overflow";
  const showHireMeInDrawer = mode === "full" || mode === "tablet-overflow";

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.button
            type="button"
            className="fixed inset-0 z-[1040] bg-black/40 backdrop-blur-sm min-[1200px]:hidden"
            aria-label={t("nav.closeMenu")}
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
          />
          <motion.aside
            id="mobile-nav-drawer"
            role="dialog"
            aria-modal="true"
            aria-label={t("nav.menu")}
            className={cn(
              "fixed top-0 end-0 z-[1050] flex h-full w-[min(100%,20rem)] flex-col",
              "border-s border-border bg-bg-secondary/98 backdrop-blur-xl shadow-2xl",
              "min-[1200px]:hidden"
            )}
            initial={{ x: prefersReducedMotion ? 0 : "100%" }}
            animate={{ x: 0 }}
            exit={{ x: prefersReducedMotion ? 0 : "100%" }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.25, ease: "easeOut" }}
          >
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <span className="text-sm font-semibold text-text-primary">{t("nav.menu")}</span>
              <button
                type="button"
                onClick={close}
                className="rounded-lg p-2 text-text-primary hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={t("nav.closeMenu")}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-1" aria-label={t("nav.menu")}>
              {showHome && (
                <NavLink item={{ key: "home", to: "/" }} variant="mobile" onClick={close} />
              )}

              <MobileNavGroup groupKey="about" onNavigate={close} />
              <MobileNavGroup groupKey="portfolio" onNavigate={close} />

              {showServicesContact && (
                <NavLink
                  item={{ key: "services", to: "/services" }}
                  variant="mobile"
                  onClick={close}
                />
              )}

              <MobileNavGroup groupKey="resources" onNavigate={close} />

              {showServicesContact && (
                <NavLink
                  item={{ key: "contact", to: "/contact" }}
                  variant="mobile"
                  onClick={close}
                />
              )}
            </nav>

            <div className="border-t border-border p-4">
              <NavActions
                onNavigate={close}
                layout="column"
                showHireMe={showHireMeInDrawer}
              />
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}

export default memo(MobileNav);
