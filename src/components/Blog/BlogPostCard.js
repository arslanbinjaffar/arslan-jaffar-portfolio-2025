import React from "react";
import { Link } from "react-router-dom";
import { formatPostDate, getTagPath, getCategoryPath } from "@/lib/blog";
import { useLocale } from "@/context/LocaleContext";

function BlogPostCard({ post }) {
  const { localizePath } = useLocale();

  return (
    <article className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/40 transition-colors">
      <div className="flex flex-wrap items-center gap-2 text-sm text-text-secondary mb-3">
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
      <h2 className="text-xl font-bold text-text-primary mb-3">
        <Link
          to={localizePath(`/blog/${post.slug}`)}
          className="hover:text-accent transition-colors"
        >
          {post.title}
        </Link>
      </h2>
      <p className="text-text-secondary leading-relaxed mb-4">{post.description}</p>
      {post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
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
    </article>
  );
}

export default BlogPostCard;
