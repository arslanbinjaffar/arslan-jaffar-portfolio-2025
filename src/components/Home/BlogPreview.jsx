import React from "react";
import { useTranslation } from "react-i18next";
import { getAllPosts } from "@/lib/blog";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import BlogPostCard from "../Blog/BlogPostCard";
import SectionViewAll from "./SectionViewAll";

function BlogPreview() {
  const { t } = useTranslation("home");
  const posts = getAllPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <Section id="blog">
      <Container>
        <PageHeading
          accent={t("sections.blog.headingAccent")}
          subtitle={t("sections.blog.subtitle")}
        >
          {t("sections.blog.heading")}
        </PageHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>

        <SectionViewAll to="/blog" label={t("sections.blog.viewAll")} />
      </Container>
    </Section>
  );
}

export default BlogPreview;
