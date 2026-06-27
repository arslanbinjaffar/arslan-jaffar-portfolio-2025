import React, { useMemo, useState, useTransition } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import AchievementCard from "./AchievementCard";
import AchievementEmbedCard from "./AchievementEmbedCard";
import { useGallery } from "@/hooks/useGallery";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { staggerContainer } from "@/lib/motion";
import GalleryCardSkeleton from "../skeletons/GalleryCardSkeleton";

function Gallery() {
  const { t } = useTranslation("gallery");
  const { galleryItems, categories: galleryCategories } = useGallery();
  const seo = useRouteSeo("/gallery");
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);
  const [isPending, startTransition] = useTransition();

  const categories = useMemo(() => {
    const used = new Set(galleryItems.map((item) => item.category).filter(Boolean));
    return [t("allCategory", { defaultValue: "All" }), ...galleryCategories.filter((c) => used.has(c))];
  }, [galleryItems, galleryCategories, t]);

  const filteredItems = useMemo(() => {
    const allLabel = t("allCategory", { defaultValue: "All" });
    if (activeCategory === allLabel || activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, galleryItems, t]);

  const showFilters = galleryItems.length > 0 && categories.length > 1;

  const handleCategoryChange = (category) => {
    startTransition(() => {
      setActiveCategory(category);
    });
  };

  return (
    <Section className="relative">
      <Seo {...seo} path="/gallery" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full border transition-colors ${
                  activeCategory === category
                    ? "bg-accent text-bg-primary border-accent"
                    : "border-border text-text-secondary hover:text-accent hover:border-accent/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {filteredItems.length === 0 ? (
          <div className="text-center py-16 px-4 bg-card border border-border rounded-2xl backdrop-blur-sm">
            <p className="text-4xl mb-4" aria-hidden="true">
              🏆
            </p>
            <p className="text-lg font-semibold text-text-primary">
              {t("emptyTitle", { defaultValue: "Achievement photos coming soon." })}
            </p>
            <p className="text-sm text-text-secondary mt-2 max-w-md mx-auto">
              {t("emptyDescription", { defaultValue: "Awards, certificates, and event highlights will appear here once added." })}
            </p>
          </div>
        ) : isPending ? (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            aria-busy="true"
            aria-label="Loading gallery"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <GalleryCardSkeleton key={i} />
            ))}
          </div>
        ) : (
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            key={activeCategory}
          >
            {filteredItems.map((item) =>
              item.embedSrc ? (
                <div key={item.id} className="sm:col-span-2 lg:col-span-1 flex justify-center">
                  <AchievementEmbedCard item={item} />
                </div>
              ) : (
                <AchievementCard key={item.id} item={item} onSelect={setSelected} />
              )
            )}
          </motion.div>
        )}
      </Container>

      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="rounded-2xl sm:max-w-3xl p-0 overflow-hidden gap-0">
          {selected && (
            <>
              <div className="bg-bg-tertiary">
                <img
                  src={selected.imgPath}
                  alt={selected.title}
                  className="w-full max-h-[70vh] object-contain"
                />
              </div>
              <div className="p-6">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-text-primary">{selected.title}</DialogTitle>
                  {(selected.date || selected.category) && (
                    <DialogDescription className="text-text-secondary">
                      {[selected.category, selected.date].filter(Boolean).join(" · ")}
                    </DialogDescription>
                  )}
                </DialogHeader>
                {selected.description && (
                  <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                    {selected.description}
                  </p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

export default Gallery;
