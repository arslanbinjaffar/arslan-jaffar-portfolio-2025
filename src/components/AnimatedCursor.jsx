import React, { useEffect, useRef, useState } from "react";

function AnimatedCursor() {
  const [active, setActive] = useState(false);
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.innerWidth < 768;

    if (coarse || reduced || mobile) {
      setActive(false);
      return;
    }

    setActive(true);
    document.body.classList.add("custom-cursor-active");

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.15;
      ring.current.y += (pos.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (!active) return null;

  return (
    <>
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[1040] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-accent/50"
        aria-hidden="true"
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[1041] pointer-events-none -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-accent"
        aria-hidden="true"
      />
    </>
  );
}

export default AnimatedCursor;
