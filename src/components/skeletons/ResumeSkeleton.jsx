import { Skeleton } from "@/components/ui/skeleton";

function ResumeSkeleton() {
  return (
    <div
      className="w-full max-w-[900px] space-y-6"
      aria-busy="true"
      aria-label="Loading resume"
    >
      <Skeleton className="h-[70vh] w-full rounded-lg" />
      <Skeleton className="h-[70vh] w-full rounded-lg" />
    </div>
  );
}

export default ResumeSkeleton;
