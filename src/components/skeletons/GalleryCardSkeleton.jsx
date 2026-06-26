import { Skeleton } from "@/components/ui/skeleton";

function GalleryCardSkeleton() {
  return (
    <div
      className="rounded-2xl border border-border bg-card/80 overflow-hidden"
      aria-hidden="true"
    >
      <Skeleton className="aspect-[4/3] w-full rounded-none" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-5 w-4/5" />
        <Skeleton className="h-4 w-1/3" />
      </div>
    </div>
  );
}

export default GalleryCardSkeleton;
