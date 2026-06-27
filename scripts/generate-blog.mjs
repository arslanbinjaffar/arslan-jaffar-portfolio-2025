import matter from "gray-matter";
import {
  mkdirSync,
  readdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const blogDir = join(rootDir, "src", "content", "blog");
const outputPath = join(blogDir, "posts.json");

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

function loadBlogPosts() {
  if (!existsSync(blogDir)) return [];

  return readdirSync(blogDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => {
      const slugFromFile = file.replace(/\.md$/, "");
      const raw = readFileSync(join(blogDir, file), "utf8");
      return parsePost(slugFromFile, raw);
    })
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

const posts = loadBlogPosts();
mkdirSync(blogDir, { recursive: true });
writeFileSync(outputPath, `${JSON.stringify(posts, null, 2)}\n`, "utf8");
console.log(`Generated ${posts.length} blog post(s) → ${outputPath}`);
