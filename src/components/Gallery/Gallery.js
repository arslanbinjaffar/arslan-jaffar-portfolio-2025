import React, { useMemo, useState } from "react";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import AchievementCard from "./AchievementCard";
import AchievementEmbedCard from "./AchievementEmbedCard";
import galleryItems, { GALLERY_CATEGORIES } from "./galleryData";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selected, setSelected] = useState(null);

  const categories = useMemo(() => {
    const used = new Set(galleryItems.map((item) => item.category).filter(Boolean));
    return ["All", ...GALLERY_CATEGORIES.filter((c) => used.has(c))];
  }, []);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return galleryItems;
    return galleryItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const showFilters = galleryItems.length > 0 && categories.length > 1;

  return (
    <Section className="relative">
      <Particle />
      <Container>
        <PageHeading
          accent="Gallery"
          subtitle="A visual collection of awards, certificates, and milestones from my journey."
        >
          Achievements
        </PageHeading>

        {showFilters && (
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
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
              Achievement photos coming soon.
            </p>
            <p className="text-sm text-text-secondary mt-2 max-w-md mx-auto">
              Awards, certificates, and event highlights will appear here once added.
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item) =>
              item.embedSrc ? (
                <div key={item.id} className="sm:col-span-2 lg:col-span-1 flex justify-center">
                  <AchievementEmbedCard item={item} />
                </div>
              ) : (
                <AchievementCard key={item.id} item={item} onSelect={setSelected} />
              )
            )}
          </div>
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
                <DialogHeader className="text-left">
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
