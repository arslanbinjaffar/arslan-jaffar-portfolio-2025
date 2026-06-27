import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../App";
import { useLocale } from "@/context/LocaleContext";
import Container from "./ui/Container";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import AvailableBadge from "./ui/AvailableBadge";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import {
  MdWork,
  MdMail,
  MdDarkMode,
  MdLightMode,
  MdArticle,
  MdDesignServices,
  MdCode,
} from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";
import BrandLogo from "./BrandLogo";

const navRouteKeys = [
  { to: "/", icon: AiOutlineHome, key: "home" },
  { to: "/about", icon: AiOutlineUser, key: "about" },
  { to: "/experience", icon: MdWork, key: "experience" },
  { to: "/project", icon: AiOutlineFundProjectionScreen, key: "projects" },
  { to: "/#skills", icon: MdCode, key: "skills", isHash: true },
  { to: "/services", icon: MdDesignServices, key: "services" },
  { to: "/blog", icon: MdArticle, key: "blog" },
  { to: "/contact", icon: MdMail, key: "contact" },
  { to: "/resume", icon: CgFileDocument, key: "resume" },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { localizePath, isActivePath } = useLocale();
  const { t } = useTranslation("common");
  const location = useLocation();

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  const closeMenu = () => setExpanded(false);

  const getNavHref = (to, isHash) => {
    if (isHash) {
      return `${localizePath("/")}#skills`;
    }
    return localizePath(to);
  };

  const isNavActive = (to, isHash) => {
    if (isHash) {
      return isActivePath("/") && location.hash === "#skills";
    }
    return isActivePath(to);
  };

  return (
    <nav
      className={`fixed top-0 start-0 end-0 z-[1030] transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container className="relative flex items-center justify-between py-3 lg:py-2">
        <Link
          to={localizePath("/")}
          className="flex items-center shrink-0"
          onClick={closeMenu}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <BrandLogo className="h-9 sm:h-10 w-auto" />
          </motion.div>
        </Link>

        <button
          type="button"
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 rounded-lg"
          onClick={() => setExpanded(!expanded)}
          aria-label="Toggle navigation"
          aria-expanded={expanded}
          aria-controls="navbar-menu"
        >
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 origin-center ${
              expanded ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 ${
              expanded ? "opacity-0 scale-x-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-text-primary transition-all duration-300 origin-center ${
              expanded ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>

        <div
          id="navbar-menu"
          className={`${
            expanded
              ? "flex flex-col absolute top-full start-0 end-0 bg-bg-secondary/98 backdrop-blur-md border-b border-border px-4 py-3 gap-0.5 max-h-[calc(100vh-4rem)] overflow-y-auto"
              : "hidden"
          } lg:flex lg:flex-row lg:static lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:p-0 lg:items-center lg:gap-1 lg:max-h-none lg:overflow-visible`}
        >
          {navRouteKeys.map(({ to, icon: Icon, key, isHash }) => (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full lg:w-auto"
            >
              <Link
                to={getNavHref(to, isHash)}
                onClick={closeMenu}
                className={`flex items-center gap-1.5 w-full lg:w-auto px-3 py-2.5 lg:py-2 lg:px-2 xl:px-3 rounded-lg text-sm lg:text-[0.8125rem] xl:text-sm font-medium transition-colors hover:text-accent ${
                  isNavActive(to, isHash) ? "text-accent" : "text-text-primary"
                }`}
              >
                <Icon className="text-base shrink-0" />
                {t(`nav.${key}`)}
              </Link>
            </motion.div>
          ))}

          <div className="hidden xl:flex items-center ms-2">
            <AvailableBadge />
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-auto pt-1 lg:pt-0 lg:ms-2"
          >
            <LanguageSwitcher compact={expanded} />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-auto pt-1 lg:pt-0 lg:ms-1"
          >
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="!px-3 !py-2 w-full lg:w-auto justify-center"
              title={t(theme === "dark" ? "theme.switchToLight" : "theme.switchToDark")}
            >
              {theme === "dark" ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </Button>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-auto pt-1 lg:pt-0 lg:ms-2"
          >
            <Button asChild className="w-full lg:w-auto">
              <Link to={localizePath("/contact")} onClick={closeMenu}>
                {t("nav.hireMe")}
              </Link>
            </Button>
          </motion.div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
