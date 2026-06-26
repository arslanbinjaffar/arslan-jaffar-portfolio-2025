import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import PageHeadingSkeleton from "./PageHeadingSkeleton";
import ProjectCardSkeleton from "./ProjectCardSkeleton";

function ProjectsPageSkeleton() {
  return (
    <Section className="relative !pt-24">
      <Container aria-busy="true" aria-label="Loading projects">
        <PageHeadingSkeleton />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ProjectsPageSkeleton;
