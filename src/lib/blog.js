import matter from "gray-matter";

const markdownModules = import.meta.glob("../content/blog/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function slugifyTag(tag) {
  return encodeURIComponent(tag);
}

function normalizeDate(value) {
  if (!value) return "";
  if (value instanceof Date) {
    return value.toISOString().slice(0, 10);
  }
  const str = String(value);
  if (/^\d{4}-\d{2}-\d{2}/.test(str)) {
    return str.slice(0, 10);
  }
  const parsed = new Date(str);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().slice(0, 10);
  }
  return str.slice(0, 10);
}

function parsePost(slugFromFile, rawContent) {
  const { data, content } = matter(rawContent);
  const slug = data.slug || slugFromFile;

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    publishedAt: normalizeDate(data.publishedAt),
    updatedAt: normalizeDate(data.updatedAt || data.publishedAt),
    tags: Array.isArray(data.tags) ? data.tags : [],
    category: data.category || "",
    draft: Boolean(data.draft),
    coverImage: data.coverImage || `/og/blog/${slug}.png`,
    content: content.trim(),
  };
}

const allPosts = Object.entries(markdownModules)
  .map(([filePath, rawContent]) => {
    const fileName = filePath.split("/").pop().replace(".md", "");
    return parsePost(fileName, rawContent);
  })
  .sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

export function getAllPosts({ includeDrafts = false } = {}) {
  if (includeDrafts) return allPosts;
  return allPosts.filter((post) => !post.draft);
}

export function getPostBySlug(slug) {
  return getAllPosts({ includeDrafts: true }).find((post) => post.slug === slug);
}

export function getPostsByTag(tag) {
  return getAllPosts().filter((post) =>
    post.tags.some((entry) => entry.toLowerCase() === tag.toLowerCase())
  );
}

export function getPostsByCategory(category) {
  return getAllPosts().filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllTags() {
  const tags = new Set();
  getAllPosts().forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return [...tags].sort((a, b) => a.localeCompare(b));
}

export function getAllCategories() {
  const categories = new Set();
  getAllPosts().forEach((post) => {
    if (post.category) categories.add(post.category);
  });
  return [...categories].sort((a, b) => a.localeCompare(b));
}

export function getTagPath(tag) {
  return `/blog/tag/${slugifyTag(tag)}`;
}

export function getCategoryPath(category) {
  return `/blog/category/${slugifyTag(category)}`;
}

export function decodeRouteParam(value) {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

export function formatPostDate(dateString) {
  if (!dateString) return "";
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
