import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import ExperienceItemSkeleton from "./ExperienceItemSkeleton";
import PageHeadingSkeleton from "./PageHeadingSkeleton";

function ExperiencePageSkeleton() {
  return (
    <Section className="relative !pt-24">
      <Container aria-busy="true" aria-label="Loading experience">
        <PageHeadingSkeleton />
        <div className="max-w-3xl mx-auto space-y-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <ExperienceItemSkeleton key={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ExperiencePageSkeleton;
