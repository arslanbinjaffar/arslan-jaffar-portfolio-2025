import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaFacebookMessenger,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";
import { socialLinks } from "@/config/site";

function StickyActionButtons() {
  const { t } = useTranslation("common");
  const [showScrollTop, setShowScrollTop] = useState(false);

  const chatActions = [
    {
      href: socialLinks.whatsapp,
      icon: FaWhatsapp,
      label: t("sticky.chatWhatsApp"),
      color: "bg-social-whatsapp",
    },
    {
      href: socialLinks.linkedinMessage,
      icon: FaLinkedinIn,
      label: t("sticky.linkedinMessage"),
      color: "bg-social-linkedin",
    },
    {
      href: socialLinks.facebookMessage,
      icon: FaFacebookMessenger,
      label: t("sticky.chatMessenger"),
      color: "bg-social-facebook",
    },
    {
      href: socialLinks.instagramMessage,
      icon: FaInstagram,
      label: t("sticky.instagramMessage"),
      color: "bg-social-instagram",
    },
  ].filter((action) => action.href);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  if (chatActions.length === 0 && !showScrollTop) return null;

  return (
    <div className="fixed bottom-6 end-6 z-[1020] flex flex-col-reverse items-center gap-3">
      {chatActions.map(({ href, icon: Icon, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={`flex items-center justify-center w-12 h-12 rounded-full ${color} text-white shadow-lg hover:brightness-110 transition-all text-xl`}
        >
          <Icon />
        </a>
      ))}

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            type="button"
            onClick={scrollToTop}
            aria-label={t("sticky.scrollTop")}
            initial={{ opacity: 0, y: 12, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border border-border bg-bg-secondary text-text-primary shadow-lg hover:text-accent hover:border-accent transition-colors text-lg"
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export default StickyActionButtons;
