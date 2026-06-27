import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { DEFAULT_LOCALE, LOCALE_CODES } from "./locales";

const namespaces = [
  "common",
  "home",
  "about",
  "projects",
  "experience",
  "gallery",
  "services",
  "contact",
  "blog",
  "testimonials",
  "resume",
  "legal",
  "uses",
  "faqs",
  "caseStudies",
  "changelog",
  "seo",
];

const localeModules = import.meta.glob("../locales/*/*.json", { eager: true });

const resources = {};

for (const [path, module] of Object.entries(localeModules)) {
  const match = path.match(/locales\/([^/]+)\/([^/]+)\.json$/);
  if (!match) continue;
  const [, locale, namespace] = match;
  if (!resources[locale]) resources[locale] = {};
  resources[locale][namespace] = module.default ?? module;
}

i18n.use(initReactI18next).init({
  resources,
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: LOCALE_CODES,
  ns: namespaces,
  defaultNS: "common",
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
});

export default i18n;
