import React, { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeContext } from "../App";
import Container from "./ui/Container";
import { Button } from "@/components/ui/button";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { MdWork, MdMail, MdDarkMode, MdLightMode, MdEmojiEvents } from "react-icons/md";
import { CgFileDocument } from "react-icons/cg";

const navLinks = [
  { to: "/", icon: AiOutlineHome, label: "Home" },
  { to: "/about", icon: AiOutlineUser, label: "About" },
  { to: "/project", icon: AiOutlineFundProjectionScreen, label: "Projects" },
  { to: "/experience", icon: MdWork, label: "Experience" },
  { to: "/gallery", icon: MdEmojiEvents, label: "Gallery" },
  { to: "/contact", icon: MdMail, label: "Contact" },
  { to: "/resume", icon: CgFileDocument, label: "Resume" },
];

function NavBar() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();

  useEffect(() => {
    const scrollHandler = () => setScrolled(window.scrollY >= 20);
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  useEffect(() => {
    setExpanded(false);
  }, [location.pathname]);

  const closeMenu = () => setExpanded(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1030] transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <Container className="relative flex items-center justify-between py-3 lg:py-2">
        <Link to="/" className="flex items-center shrink-0" onClick={closeMenu}>
          <motion.h1
            className="text-xl sm:text-2xl font-extrabold text-accent m-0"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            AJ.
          </motion.h1>
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
              ? "flex flex-col absolute top-full left-0 right-0 bg-bg-secondary/98 backdrop-blur-md border-b border-border px-4 py-3 gap-0.5 max-h-[calc(100vh-4rem)] overflow-y-auto"
              : "hidden"
          } lg:flex lg:flex-row lg:static lg:bg-transparent lg:backdrop-blur-none lg:border-0 lg:p-0 lg:items-center lg:gap-1 lg:max-h-none lg:overflow-visible`}
        >
          {navLinks.map(({ to, icon: Icon, label }) => (
            <motion.div
              key={to}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full lg:w-auto"
            >
              <Link
                to={to}
                onClick={closeMenu}
                className={`flex items-center gap-1.5 w-full lg:w-auto px-3 py-2.5 lg:py-2 lg:px-2 xl:px-3 rounded-lg text-sm lg:text-[0.8125rem] xl:text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === to ? "text-accent" : "text-text-primary"
                }`}
              >
                <Icon className="text-base shrink-0" />
                {label}
              </Link>
            </motion.div>
          ))}

          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-full lg:w-auto pt-1 lg:pt-0 lg:ml-2"
          >
            <Button
              variant="outline"
              onClick={toggleTheme}
              className="!px-3 !py-2 w-full lg:w-auto justify-center"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
            </Button>
          </motion.div>
        </div>
      </Container>
    </nav>
  );
}

export default NavBar;
