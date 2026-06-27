import posts from "../content/blog/posts.json";

function slugifyTag(tag) {
  return encodeURIComponent(tag);
}

const allPosts = posts;

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
