import React, { useRef } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import ReadingProgressBar from "./ReadingProgressBar";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import {
  formatPostDate,
  getPostBySlug,
  getTagPath,
  getCategoryPath,
} from "@/lib/blog";
import { renderMarkdown } from "@/lib/markdown";
import { buildBlogPostSchema } from "@/lib/structuredData";
import { useLocale } from "@/context/LocaleContext";
import { fadeUp } from "@/lib/motion";

function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const { localizePath } = useLocale();
  const articleRef = useRef(null);

  if (!post || (post.draft && import.meta.env.PROD)) {
    return <Navigate to="/blog" replace />;
  }

  const html = renderMarkdown(post.content);

  return (
    <Section className="relative">
      <ReadingProgressBar targetRef={articleRef} />
      <Seo
        title={`${post.title} | Arslan Jaffar`}
        description={post.description}
        path={`/blog/${post.slug}`}
        ogImage={post.coverImage}
        ogType="article"
        jsonLd={buildBlogPostSchema(post)}
        rssLink
        articlePublishedTime={post.publishedAt}
        articleTags={post.tags}
        noindex={post.draft}
      />
      <Particle />
      <Container>
        <motion.article
          ref={articleRef}
          className="max-w-3xl mx-auto py-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
        >
          <Button variant="ghost" asChild className="mb-6 px-0">
            <Link to={localizePath("/blog")}>← Back to Blog</Link>
          </Button>

          <header className="mb-8">
            <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary mb-4">
              <time dateTime={post.publishedAt}>{formatPostDate(post.publishedAt)}</time>
              {post.category && (
                <>
                  <span aria-hidden="true">·</span>
                  <Link
                    to={localizePath(getCategoryPath(post.category))}
                    className="text-accent hover:underline"
                  >
                    {post.category}
                  </Link>
                </>
              )}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              {post.title}
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">{post.description}</p>
            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-6">
                {post.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={localizePath(getTagPath(tag))}
                    className="px-3 py-1 text-xs font-medium rounded-full border border-border text-text-secondary hover:text-accent hover:border-accent/50 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </header>

          <div
            className="blog-content prose prose-invert max-w-none text-text-secondary leading-relaxed [&_h2]:text-text-primary [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:text-text-primary [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-4 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-4 [&_li]:mb-2 [&_code]:bg-bg-secondary [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-accent [&_pre]:bg-bg-secondary [&_pre]:border [&_pre]:border-border [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:overflow-x-auto [&_pre_code]:bg-transparent [&_pre_code]:p-0 [&_a]:text-accent [&_a]:underline [&_strong]:text-text-primary"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </motion.article>
      </Container>
    </Section>
  );
}

export default BlogPost;
