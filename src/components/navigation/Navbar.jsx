import React, { memo, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/context/LocaleContext";
import Container from "../ui/Container";
import BrandLogo from "../BrandLogo";
import DesktopNav from "./DesktopNav";
import TabletNav from "./TabletNav";
import MobileNav from "./MobileNav";
import NavActions from "./NavActions";
import { cn } from "@/lib/utils";

function useViewport() {
  const [viewport, setViewport] = useState(() => {
    if (typeof window === "undefined") return "desktop";
    const width = window.innerWidth;
    if (width >= 1200) return "desktop";
    if (width >= 768) return "tablet";
    return "mobile";
  });

  useEffect(() => {
    const update = () => {
      const width = window.innerWidth;
      if (width >= 1200) setViewport("desktop");
      else if (width >= 768) setViewport("tablet");
      else setViewport("mobile");
    };

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return viewport;
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const viewport = useViewport();
  const { localizePath } = useLocale();
  const { t } = useTranslation("common");
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY >= 20);
    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const menuMode = viewport === "tablet" ? "tablet-overflow" : "mobile";

  return (
    <header
      className={cn(
        "fixed top-0 start-0 end-0 z-[1030] transition-all duration-300",
        scrolled
          ? "bg-card/80 backdrop-blur-xl backdrop-saturate-150 shadow-lg border-b border-border/50"
          : "bg-transparent"
      )}
    >
      <nav aria-label={t("nav.menu")}>
        <Container className="flex items-center gap-3 py-3 min-[1200px]:py-2.5">
          <Link
            to={localizePath("/")}
            className="flex items-center shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
              <BrandLogo className="h-9 sm:h-10 w-auto" />
            </motion.div>
          </Link>

          {viewport === "desktop" && <DesktopNav />}

          {viewport === "tablet" && (
            <TabletNav menuOpen={menuOpen} onMenuOpenChange={setMenuOpen} />
          )}

          {viewport === "mobile" && (
            <div className="flex items-center gap-2 ms-auto">
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
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          )}

          {viewport !== "desktop" && (
            <MobileNav open={menuOpen} onOpenChange={setMenuOpen} mode={menuMode} />
          )}
        </Container>
      </nav>
    </header>
  );
}

export default memo(Navbar);
