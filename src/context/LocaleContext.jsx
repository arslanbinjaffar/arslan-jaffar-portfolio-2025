import React, { createContext, useContext, useCallback, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LOCALES, DEFAULT_LOCALE } from "@/i18n/locales";
import {
  getLocaleFromPath,
  localizePath,
  stripLocale,
  switchLocalePath,
} from "@/i18n/routing";

const LocaleContext = createContext(null);

export function LocaleProvider({ children, locale: localeProp }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  const locale =
    localeProp ?? getLocaleFromPath(location.pathname) ?? DEFAULT_LOCALE;
  const dir = LOCALES[locale]?.dir ?? "ltr";
  const basePath = stripLocale(location.pathname);

  const setLocale = useCallback(
    (nextLocale) => {
      if (!LOCALES[nextLocale]) return;
      localStorage.setItem("locale", nextLocale);
      const nextPath = switchLocalePath(location.pathname, nextLocale);
      i18n.changeLanguage(nextLocale);
      if (nextPath !== location.pathname) {
        navigate(nextPath);
      }
    },
    [i18n, location.pathname, navigate]
  );

  const value = useMemo(
    () => ({
      locale,
      dir,
      basePath,
      setLocale,
      localizePath: (path) => localizePath(locale, path),
      isActivePath: (path) => {
        const localized = localizePath(locale, path);
        return location.pathname === localized;
      },
    }),
    [locale, dir, basePath, setLocale, location.pathname]
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }
  return context;
}
