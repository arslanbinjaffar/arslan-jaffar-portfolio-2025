import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useLocale } from "@/context/LocaleContext";
import { LOCALE_CODES, LOCALES } from "@/i18n/locales";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

function LanguageSwitcher({ compact = false, onSelect, className }) {
  const { locale, setLocale } = useLocale();
  const { t } = useTranslation("common");
  const [open, setOpen] = useState(false);
  const [menuStyle, setMenuStyle] = useState({});
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const options = LOCALE_CODES.map((code) => ({
    code,
    flag: LOCALES[code].flag,
    label: t(`language.${code}`),
    shortCode: code.toUpperCase(),
  }));

  const current = options.find((o) => o.code === locale) ?? options[0];

  useEffect(() => {
    if (!open || !buttonRef.current) return;

    const updatePosition = () => {
      const rect = buttonRef.current.getBoundingClientRect();
      const isRtl = document.documentElement.dir === "rtl";

      setMenuStyle({
        position: "fixed",
        top: rect.bottom + 8,
        ...(isRtl
          ? { left: rect.left, right: "auto" }
          : { right: window.innerWidth - rect.right, left: "auto" }),
        zIndex: 1100,
        minWidth: "11rem",
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event) => {
      if (containerRef.current?.contains(event.target)) return;
      if (menuRef.current?.contains(event.target)) return;
      setOpen(false);
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  const handleSelect = (code) => {
    if (code !== locale) {
      setLocale(code);
    }
    setOpen(false);
    onSelect?.();
  };

  const menu = open ? (
    <ul
      ref={menuRef}
      role="listbox"
      style={menuStyle}
      className="rounded-xl border border-border/60 bg-card/95 backdrop-blur-xl shadow-xl py-1 list-none m-0 p-0"
    >
      {options.map(({ code, flag, label }) => (
        <li key={code} role="option" aria-selected={locale === code}>
          <button
            type="button"
            className={`flex w-full items-center gap-2 px-3 py-2.5 text-sm text-start hover:bg-accent/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent ${
              locale === code ? "text-accent font-medium" : "text-text-primary"
            }`}
            onClick={() => handleSelect(code)}
          >
            <span>{flag}</span>
            <span className="flex-1">{label}</span>
            {locale === code && <Check className="h-4 w-4 shrink-0" />}
          </button>
        </li>
      ))}
    </ul>
  ) : null;

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <div ref={buttonRef}>
        <Button
          variant="outline"
          type="button"
          className={cn(
            "!px-2.5 !py-2 gap-1.5 min-w-[4.5rem] justify-center",
            compact && "w-full"
          )}
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-label={t("language.label")}
        >
          <Globe className="h-4 w-4 shrink-0" aria-hidden />
          <span className="text-xs font-semibold tracking-wide">{current.shortCode}</span>
          <ChevronDown
            className={cn("h-3 w-3 shrink-0 opacity-70 transition-transform", open && "rotate-180")}
            aria-hidden
          />
        </Button>
      </div>

      {menu && createPortal(menu, document.body)}
    </div>
  );
}

export default LanguageSwitcher;
