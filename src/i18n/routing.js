import { DEFAULT_LOCALE, PREFIXED_LOCALES, isValidLocale } from "./locales";

export const ROUTE_PATHS = [
  "/",
  "/about",
  "/project",
  "/case-studies",
  "/experience",
  "/gallery",
  "/contact",
  "/resume",
  "/blog",
  "/services",
  "/uses",
  "/faqs",
  "/privacy",
  "/terms",
  "/cookies",
  "/sitemap",
  "/changelog",
];

export function getLocaleFromPath(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  const first = segments[0];
  if (PREFIXED_LOCALES.includes(first)) {
    return first;
  }
  return DEFAULT_LOCALE;
}

export function stripLocale(pathname) {
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && PREFIXED_LOCALES.includes(segments[0])) {
    const rest = segments.slice(1).join("/");
    return rest ? `/${rest}` : "/";
  }
  return pathname || "/";
}

export function localizePath(locale, path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const basePath = stripLocale(normalized);

  if (!locale || locale === DEFAULT_LOCALE) {
    return basePath;
  }

  if (!isValidLocale(locale)) {
    return basePath;
  }

  if (basePath === "/") {
    return `/${locale}`;
  }

  return `/${locale}${basePath}`;
}

export function switchLocalePath(currentPathname, targetLocale) {
  const basePath = stripLocale(currentPathname);
  return localizePath(targetLocale, basePath);
}

export function isActivePath(pathname, targetPath, locale) {
  const localizedTarget = localizePath(locale, targetPath);
  return pathname === localizedTarget;
}
