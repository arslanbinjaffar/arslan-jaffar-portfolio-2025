import React, { useEffect, useRef, useState } from "react";
import ProgressBar from "@/components/ui/progress-bar";

function ReadingProgressBar({ targetRef }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );

    const el = targetRef?.current;
    if (!el) return;

    if (el.scrollHeight < 400) {
      setVisible(false);
      return;
    }
    setVisible(true);

    let rafId = null;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const elTop = rect.top + window.scrollY;
      const elHeight = el.offsetHeight;
      const viewportBottom = window.scrollY + window.innerHeight;
      const read = viewportBottom - elTop;
      const total = elHeight;
      const next = total > 0 ? Math.min(100, Math.max(0, (read / total) * 100)) : 0;
      setProgress(next);
      rafId = null;
    };

    const onScroll = () => {
      if (rafId === null) rafId = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [targetRef]);

  if (!visible) return null;

  return <ProgressBar progress={progress} reducedMotion={reducedMotion} />;
}

export default ReadingProgressBar;
