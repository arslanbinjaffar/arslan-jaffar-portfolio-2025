import React from "react";
import { cn } from "@/lib/utils";

function ProgressBar({ progress = 0, className, barClassName, reducedMotion = false }) {
  const clamped = Math.min(100, Math.max(0, progress));

  return (
    <div
      className={cn(
        "fixed top-0 inset-x-0 z-[1030] h-[3px] bg-transparent pointer-events-none",
        className
      )}
      role="progressbar"
      aria-valuenow={Math.round(clamped)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-hidden="true"
    >
      <div
        className={cn(
          "h-full bg-accent origin-left",
          reducedMotion ? "" : "transition-[width] duration-75 ease-out",
          barClassName
        )}
        style={{ width: `${clamped}%` }}
      />
    </div>
  );
}

export default ProgressBar;
