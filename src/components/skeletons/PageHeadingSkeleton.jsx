import { Skeleton } from "@/components/ui/skeleton";

function PageHeadingSkeleton() {
  return (
    <div className="text-center mb-10 space-y-3" aria-busy="true" aria-label="Loading content">
      <Skeleton className="h-10 w-64 mx-auto" />
      <Skeleton className="h-4 w-80 max-w-full mx-auto" />
    </div>
  );
}

export default PageHeadingSkeleton;
