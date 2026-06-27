import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import BlogPostCard from "./BlogPostCard";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import { getAllPosts, getAllTags, getAllCategories } from "@/lib/blog";
import { buildBlogIndexSchema } from "@/lib/structuredData";
import { fadeUp } from "@/lib/motion";

function BlogList() {
  const { t } = useTranslation("blog");
  const posts = getAllPosts();
  const tags = getAllTags();
  const categories = getAllCategories();
  const seo = useRouteSeo("/blog");
  const { localizePath } = useLocale();

  return (
    <Section className="relative">
      <Seo
        {...seo}
        path="/blog"
        jsonLd={buildBlogIndexSchema(posts)}
        rssLink
      />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        {(tags.length > 0 || categories.length > 0) && (
          <motion.div
            className="flex flex-wrap justify-center gap-2 mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
          >
            {categories.map((category) => (
              <Link
                key={category}
                to={localizePath(`/blog/category/${encodeURIComponent(category)}`)}
                className="px-4 py-1.5 text-sm font-medium rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
              >
                {category}
              </Link>
            ))}
            {tags.map((tag) => (
              <Link
                key={tag}
                to={localizePath(`/blog/tag/${encodeURIComponent(tag)}`)}
                className="px-3 py-1 text-xs font-medium rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </motion.div>
        )}

        {posts.length === 0 ? (
          <div className="text-center py-16 px-4 bg-card border border-border rounded-2xl backdrop-blur-sm">
            <p className="text-text-secondary">{t("emptyState")}</p>
          </div>
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

export default BlogList;
