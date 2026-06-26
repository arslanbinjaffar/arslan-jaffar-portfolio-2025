import React from "react";
import { motion } from "framer-motion";
import BrandLogo from "./BrandLogo";
import { Skeleton } from "@/components/ui/skeleton";

function Pre({ load }) {
  return (
    <div
      className={`fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-bg-primary transition-opacity duration-500 ${
        load ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      aria-hidden={!load}
      aria-busy={load}
      aria-label={load ? "Loading portfolio" : undefined}
    >
      <div className="absolute inset-x-8 top-24 space-y-4 opacity-30 max-w-4xl mx-auto w-full pointer-events-none">
        <Skeleton className="h-4 w-32" shimmer={false} />
        <Skeleton className="h-8 w-2/3 max-w-md" shimmer={false} />
        <Skeleton className="h-4 w-full max-w-lg" shimmer={false} />
      </div>

      <motion.div
        className="relative flex items-center justify-center"
        animate={load ? { scale: [1, 1.05, 1] } : { scale: 1 }}
        transition={{ duration: 1.2, repeat: load ? Infinity : 0, ease: "easeInOut" }}
      >
        <div className="absolute h-28 w-28 rounded-full border-2 border-accent/30 animate-pulse" />
        <div className="absolute h-36 w-36 rounded-full border border-accent/15" />
        <BrandLogo className="relative h-16 w-auto z-10" />
      </motion.div>
    </div>
  );
}

export default Pre;
