import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft, FaStar } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { Button } from "@/components/ui/button";
import { testimonials } from "./testimonialsData";

const INTERVAL_MS = 6000;

function TestimonialsCarousel({ sectionId = "testimonials" }) {
  const { t } = useTranslation("testimonials");
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goNext = useCallback(() => {
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const goPrev = useCallback(() => {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (paused || testimonials.length <= 1) return;
    const timer = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [paused, goNext]);

  if (testimonials.length === 0) return null;

  const current = testimonials[index];

  return (
    <Section id={sectionId} className="!py-16">
      <Container>
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-text-primary">
            {t("heading")}{" "}
            <span className="text-accent">{t("headingAccent")}</span>
          </h2>
          {t("subtitle") && (
            <p className="text-text-secondary mt-2 max-w-xl mx-auto">{t("subtitle")}</p>
          )}
        </div>

        <div
          className="relative max-w-3xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={current.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card border border-border rounded-2xl p-8 md:p-10 text-center backdrop-blur-sm"
            >
              <FaQuoteLeft className="text-accent text-2xl mx-auto mb-4 opacity-80" />
              <p className="text-lg text-text-secondary leading-relaxed italic mb-6">
                &ldquo;{current.quote}&rdquo;
              </p>
              {current.rating > 0 && (
                <div className="flex justify-center gap-1 mb-4" aria-label={`${current.rating} stars`}>
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <FaStar key={i} className="text-accent text-sm" />
                  ))}
                </div>
              )}
              <footer>
                <cite className="not-italic">
                  <p className="font-semibold text-text-primary">{current.name}</p>
                  <p className="text-sm text-text-secondary mt-1">
                    {current.role}
                    {current.company ? ` · ${current.company}` : ""}
                  </p>
                </cite>
              </footer>
            </motion.blockquote>
          </AnimatePresence>

          {testimonials.length > 1 && (
            <>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                onClick={goPrev}
                className="absolute start-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden sm:inline-flex rounded-full"
                aria-label={t("prev")}
              >
                <FaChevronLeft />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                onClick={goNext}
                className="absolute end-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden sm:inline-flex rounded-full"
                aria-label={t("next")}
              >
                <FaChevronRight />
              </Button>
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((item, i) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`${t("goTo")} ${i + 1}`}
                    aria-current={i === index ? "true" : undefined}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      i === index ? "bg-accent" : "bg-border hover:bg-accent/50"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default TestimonialsCarousel;
