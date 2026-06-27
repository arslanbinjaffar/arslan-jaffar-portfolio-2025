import React from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import BlogPostCard from "./BlogPostCard";
import {
  decodeRouteParam,
  getPostsByCategory,
  getCategoryPath,
} from "@/lib/blog";
import { buildBlogCategorySchema } from "@/lib/structuredData";
import { useLocale } from "@/context/LocaleContext";
import { fadeUp } from "@/lib/motion";

function BlogCategory() {
  const { category: categoryParam } = useParams();
  const category = decodeRouteParam(categoryParam);
  const posts = getPostsByCategory(category);
  const { localizePath } = useLocale();

  return (
    <Section className="relative">
      <Seo
        title={`${category} | Arslan Jaffar Blog`}
        description={`${category} articles by Arslan Jaffar on full-stack development and software engineering.`}
        path={getCategoryPath(category)}
        jsonLd={buildBlogCategorySchema(category, posts)}
        rssLink
      />
      <Particle />
      <Container>
        <PageHeading accent={category} subtitle={`Articles in ${category}.`}>
          Category
        </PageHeading>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
          <Link to={localizePath("/blog")} className="inline-block mb-8 text-accent hover:underline">
            ← Back to Blog
          </Link>
        </motion.div>

        {posts.length === 0 ? (
          <p className="text-center text-text-secondary py-12">
            No posts found in this category.
          </p>
        ) : (
          <motion.div
            className="grid gap-6 max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
          >
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </motion.div>
        )}
      </Container>
    </Section>
  );
}

export default BlogCategory;
