import { useTranslation } from "react-i18next";
import galleryItems, { GALLERY_CATEGORIES } from "@/components/Gallery/galleryData";

export function useGallery() {
  const { t } = useTranslation("gallery");
  const items = t("items", { returnObjects: true });
  const categories = t("categories", { returnObjects: true });

  const merged = galleryItems.map((item, index) => {
    const translated = Array.isArray(items) ? items[index] : null;
    if (!translated) return item;
    return {
      ...item,
      title: translated.title || item.title,
      description: translated.description || item.description,
      category: translated.category || item.category,
      embedTitle: translated.embedTitle || item.embedTitle,
    };
  });

  return {
    galleryItems: merged,
    categories: Array.isArray(categories) ? categories : GALLERY_CATEGORIES,
    heading: t("heading"),
    headingAccent: t("headingAccent"),
    subtitle: t("subtitle"),
  };
}
