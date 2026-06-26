import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Skeleton } from "@/components/ui/skeleton";
import PageHeadingSkeleton from "./PageHeadingSkeleton";
import GalleryCardSkeleton from "./GalleryCardSkeleton";

function GalleryPageSkeleton() {
  return (
    <Section className="relative !pt-24">
      <Container aria-busy="true" aria-label="Loading gallery">
        <PageHeadingSkeleton />
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {Array.from({ length: 4 }).map((_, i) => (
            <Skeleton key={i} className="h-8 w-20 rounded-full" />
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <GalleryCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default GalleryPageSkeleton;
