import React, { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

function ImageWithSkeleton({
  src,
  alt,
  className,
  imgClassName,
  onError,
  ...props
}) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {!loaded && (
        <Skeleton className="absolute inset-0 h-full w-full rounded-none" aria-hidden="true" />
      )}
      <img
        src={src}
        alt={alt}
        className={cn(
          "transition-opacity duration-300",
          loaded ? "opacity-100" : "opacity-0",
          imgClassName
        )}
        onLoad={() => setLoaded(true)}
        onError={(e) => {
          setLoaded(true);
          onError?.(e);
        }}
        {...props}
      />
    </div>
  );
}

export default ImageWithSkeleton;
