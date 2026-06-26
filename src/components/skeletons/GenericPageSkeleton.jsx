import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeadingSkeleton from "./PageHeadingSkeleton";

function GenericPageSkeleton({ blocks = 3 }) {
  return (
    <Section className="relative !pt-24">
      <Container aria-busy="true" aria-label="Loading content">
        <PageHeadingSkeleton />
        <div className="max-w-3xl mx-auto space-y-4">
          {Array.from({ length: blocks }).map((_, i) => (
            <Skeleton key={i} className="h-4 w-full" />
          ))}
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
          <div className="grid sm:grid-cols-2 gap-4 pt-4">
            <Skeleton className="h-32 w-full rounded-2xl" />
            <Skeleton className="h-32 w-full rounded-2xl" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default GenericPageSkeleton;
