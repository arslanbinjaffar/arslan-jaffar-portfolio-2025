import React, { useCallback, useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import ImageWithSkeleton from "../ImageWithSkeleton";
import placeholderImg from "../../Assets/Projects/placeholder.png";

function ProjectImageGallery({ open, onOpenChange, title, images = [] }) {
  const [index, setIndex] = useState(0);
  const galleryImages = images.length > 0 ? images : [placeholderImg];
  const hasMultiple = galleryImages.length > 1;

  useEffect(() => {
    if (open) setIndex(0);
  }, [open]);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length);
  }, [galleryImages.length]);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % galleryImages.length);
  }, [galleryImages.length]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, goPrev, goNext]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0 overflow-hidden" showCloseButton>
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Project screenshots for {title}</DialogDescription>
        </DialogHeader>
        <div className="relative bg-bg-secondary">
          <ImageWithSkeleton
            src={galleryImages[index]}
            alt={`${title} screenshot ${index + 1}`}
            className="w-full"
            imgClassName="w-full max-h-[70vh] object-contain"
            onError={(e) => {
              e.target.src = placeholderImg;
            }}
          />
          {hasMultiple && (
            <>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={goPrev}
                className="absolute start-2 top-1/2 -translate-y-1/2 rounded-full opacity-90"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </Button>
              <Button
                type="button"
                variant="secondary"
                size="icon"
                onClick={goNext}
                className="absolute end-2 top-1/2 -translate-y-1/2 rounded-full opacity-90"
                aria-label="Next image"
              >
                <FaChevronRight />
              </Button>
              <p className="absolute bottom-3 inset-x-0 text-center text-sm text-text-secondary">
                {index + 1} / {galleryImages.length}
              </p>
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProjectImageGallery;
