import { Skeleton } from "@/components/ui/skeleton";

function ExperienceItemSkeleton() {
  return (
    <div className="rounded-2xl border border-border bg-card/80 p-6 space-y-4" aria-hidden="true">
      <div className="flex items-start gap-4">
        <Skeleton className="h-12 w-12 rounded-xl shrink-0" />
        <div className="flex-1 space-y-2">
          <Skeleton className="h-5 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-4/5" />
    </div>
  );
}

export default ExperienceItemSkeleton;
