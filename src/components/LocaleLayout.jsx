import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LocaleProvider } from "@/context/LocaleContext";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/locales";

function LocaleLayoutInner({ locale }) {
  const { i18n } = useTranslation();
  const meta = LOCALES[locale] ?? LOCALES[DEFAULT_LOCALE];

  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
    localStorage.setItem("locale", locale);
    document.documentElement.lang = locale;
    document.documentElement.dir = meta.dir;
    document.body.classList.toggle("font-rtl", meta.dir === "rtl");
  }, [locale, i18n, meta.dir]);

  return (
    <LocaleProvider locale={locale}>
      <Outlet />
    </LocaleProvider>
  );
}

function LocaleLayout({ locale: fixedLocale }) {
  const { locale: paramLocale } = useParams();
  const locale = fixedLocale ?? paramLocale ?? DEFAULT_LOCALE;

  return <LocaleLayoutInner locale={locale} />;
}

export default LocaleLayout;
