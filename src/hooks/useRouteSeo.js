import { useTranslation } from "react-i18next";
import { stripLocale } from "@/i18n/routing";
import { getRouteOgImage } from "@/config/routes";

export function useRouteSeo(path = "/") {
  const { t } = useTranslation("seo");
  const basePath = stripLocale(path);
  const routes = t("routes", { returnObjects: true });
  const route =
    (routes && typeof routes === "object" && routes[basePath]) ||
    (routes && routes["/"]);

  if (route && typeof route === "object") {
    return {
      ...route,
      ogImage: route.ogImage || getRouteOgImage(basePath),
    };
  }

  return {
    title: t("defaultTitle"),
    description: t("defaultDescription"),
    ogImage: getRouteOgImage(basePath),
  };
}
