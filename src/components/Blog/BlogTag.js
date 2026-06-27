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
  getPostsByTag,
  getTagPath,
} from "@/lib/blog";
import { buildBlogTagSchema } from "@/lib/structuredData";
import { useLocale } from "@/context/LocaleContext";
import { fadeUp } from "@/lib/motion";

function BlogTag() {
  const { tag: tagParam } = useParams();
  const tag = decodeRouteParam(tagParam);
  const posts = getPostsByTag(tag);
  const { localizePath } = useLocale();

  return (
    <Section className="relative">
      <Seo
        title={`${tag} Articles | Arslan Jaffar Blog`}
        description={`Articles tagged with ${tag} by Arslan Jaffar.`}
        path={getTagPath(tag)}
        jsonLd={buildBlogTagSchema(tag, posts)}
        rssLink
      />
      <Particle />
      <Container>
        <PageHeading accent={tag} subtitle={`Articles tagged with ${tag}.`}>
          Tag
        </PageHeading>

        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.1}>
          <Link to={localizePath("/blog")} className="inline-block mb-8 text-accent hover:underline">
            ← Back to Blog
          </Link>
        </motion.div>

        {posts.length === 0 ? (
          <p className="text-center text-text-secondary py-12">No posts found for this tag.</p>
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

export default BlogTag;
