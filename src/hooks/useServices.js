import { useTranslation } from "react-i18next";
import { services } from "@/components/Services/servicesData";

export function useServices() {
  const { t } = useTranslation("services");
  const items = t("items", { returnObjects: true });

  const merged = services.map((service, index) => {
    const translated = Array.isArray(items) ? items[index] : null;
    if (!translated) return service;
    return {
      ...service,
      title: translated.title || service.title,
      description: translated.description || service.description,
      features: translated.features?.length ? translated.features : service.features,
    };
  });

  return {
    services: merged,
    heading: t("heading"),
    headingAccent: t("headingAccent"),
    subtitle: t("subtitle"),
  };
}
