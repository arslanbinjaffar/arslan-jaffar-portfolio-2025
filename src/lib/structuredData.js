import { absoluteUrl, siteConfig } from "@/config/site";

export function buildPersonSchema(config = siteConfig) {
  return {
    "@type": "Person",
    name: config.author,
    jobTitle: config.jobTitle,
    url: config.siteUrl,
    sameAs: config.sameAs,
  };
}

export function buildWebSiteSchema(config = siteConfig) {
  return {
    "@type": "WebSite",
    name: config.siteName,
    url: config.siteUrl,
    description: config.defaultDescription,
    author: {
      "@type": "Person",
      name: config.author,
    },
  };
}

function truncateDescription(text, maxLength = 160) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function projectToSchemaItem(project) {
  const description =
    project.seoDescription || truncateDescription(project.description);
  const url = project.demoLink || project.ghLink || undefined;

  return {
    "@type": "SoftwareApplication",
    name: project.title,
    description,
    applicationCategory: "WebApplication",
    operatingSystem: "Web",
    ...(url ? { url } : {}),
    ...(project.techStack?.length
      ? { keywords: project.techStack.join(", ") }
      : {}),
  };
}

export function buildProjectsItemList(projects = [], backendProjects = []) {
  const allProjects = [...projects, ...backendProjects];

  return {
    "@type": "ItemList",
    name: "Portfolio Projects",
    itemListElement: allProjects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: projectToSchemaItem(project),
    })),
  };
}

export function buildArticleSchema(post, config = siteConfig) {
  const image = post.coverImage
    ? absoluteUrl(post.coverImage)
    : absoluteUrl(config.ogImage);

  return {
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      "@type": "Person",
      name: config.author,
      url: config.siteUrl,
    },
    publisher: {
      "@type": "Person",
      name: config.author,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    url: absoluteUrl(`/blog/${post.slug}`),
    image,
    ...(post.tags?.length ? { keywords: post.tags.join(", ") } : {}),
    ...(post.category ? { articleSection: post.category } : {}),
  };
}

export function buildBlogItemList(posts = []) {
  return {
    "@type": "ItemList",
    name: "Blog Posts",
    itemListElement: posts.map((post, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "BlogPosting",
        headline: post.title,
        url: absoluteUrl(`/blog/${post.slug}`),
        datePublished: post.publishedAt,
      },
    })),
  };
}

export function buildBlogSchema(posts = [], config = siteConfig) {
  return {
    "@type": "Blog",
    name: `${config.author} Blog`,
    url: absoluteUrl("/blog"),
    description: "Articles on full-stack development, backend architecture, and AI-powered systems.",
    author: {
      "@type": "Person",
      name: config.author,
    },
    blogPost: posts.slice(0, 10).map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
    })),
  };
}

export function buildBreadcrumbList(items = []) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

import { testimonials } from "@/components/Testimonials/testimonialsData";

export function buildTestimonialsSchema(items = testimonials) {
  return items.map((item) => ({
    "@type": "Review",
    reviewBody: item.quote,
    author: {
      "@type": "Person",
      name: item.name,
      ...(item.company ? { worksFor: { "@type": "Organization", name: item.company } } : {}),
    },
    ...(item.rating
      ? {
          reviewRating: {
            "@type": "Rating",
            ratingValue: item.rating,
            bestRating: 5,
          },
        }
      : {}),
  }));
}

export function buildHomeSchema() {
  return [buildPersonSchema(), buildWebSiteSchema(), ...buildTestimonialsSchema()];
}

export function buildAboutSchema() {
  return [buildPersonSchema(), buildWebSiteSchema()];
}

export function buildProjectsSchema(projects, backendProjects) {
  return [buildPersonSchema(), buildProjectsItemList(projects, backendProjects)];
}

export function buildBlogIndexSchema(posts) {
  return [buildPersonSchema(), buildBlogSchema(posts), buildBlogItemList(posts)];
}

export function buildBlogPostSchema(post) {
  return [
    buildPersonSchema(),
    buildArticleSchema(post),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: post.title, path: `/blog/${post.slug}` },
    ]),
  ];
}

export function buildBlogTagSchema(tag, posts) {
  return [
    buildPersonSchema(),
    buildBlogItemList(posts),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      { name: `Tag: ${tag}`, path: `/blog/tag/${encodeURIComponent(tag)}` },
    ]),
  ];
}

export function buildBlogCategorySchema(category, posts) {
  return [
    buildPersonSchema(),
    buildBlogItemList(posts),
    buildBreadcrumbList([
      { name: "Home", path: "/" },
      { name: "Blog", path: "/blog" },
      {
        name: category,
        path: `/blog/category/${encodeURIComponent(category)}`,
      },
    ]),
  ];
}

export function buildFaqSchema(items = []) {
  return [
    {
      "@type": "FAQPage",
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ];
}
