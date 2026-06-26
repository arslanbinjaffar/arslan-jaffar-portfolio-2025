import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/skeleton";

function HomePageSkeleton() {
  return (
    <Section className="relative !pt-24">
      <Container aria-busy="true" aria-label="Loading home">
        <div className="grid lg:grid-cols-2 gap-8 items-center min-h-[50vh]">
          <div className="space-y-4">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-12 w-full max-w-md" />
            <Skeleton className="h-8 w-72" />
            <Skeleton className="h-4 w-full max-w-lg" />
            <div className="flex flex-wrap gap-2 pt-2">
              {Array.from({ length: 6 }).map((_, i) => (
                <Skeleton key={i} className="h-7 w-20 rounded-full" />
              ))}
            </div>
            <div className="flex gap-4 pt-4">
              <Skeleton className="h-10 w-40 rounded-lg" />
              <Skeleton className="h-10 w-36 rounded-lg" />
            </div>
          </div>
          <div className="flex justify-center">
            <Skeleton className="h-64 w-64 md:h-80 md:w-80 rounded-full" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default HomePageSkeleton;
