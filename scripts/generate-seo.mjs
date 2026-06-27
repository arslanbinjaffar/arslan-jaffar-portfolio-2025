import sharp from "sharp";
import {
  mkdirSync,
  readFileSync,
  writeFileSync,
  existsSync,
} from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import { staticRoutes, routeMeta } from "../src/config/routes.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const publicDir = join(rootDir, "public");
const blogDir = join(rootDir, "src", "content", "blog");
const ogDir = join(publicDir, "og");
const ogRoutesDir = join(ogDir, "routes");
const ogBlogDir = join(ogDir, "blog");

const productionSiteUrl = "https://arslan-jaffar-portfolio.vercel.app";
const vercelUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : undefined;
const vercelEnv = process.env.VERCEL_ENV;
const branch = process.env.VERCEL_GIT_COMMIT_REF;
const isLocalDev = !vercelEnv;
const isStaging = branch === "staging";
const isProduction = vercelEnv === "production" || branch === "main";

const siteUrl =
  process.env.VITE_SITE_URL?.replace(/\/$/, "") ||
  (isLocalDev && "http://localhost:3000") ||
  (isStaging && vercelUrl) ||
  (isProduction && productionSiteUrl) ||
  vercelUrl ||
  productionSiteUrl;

const noIndex =
  process.env.VITE_NOINDEX === "true" || isLocalDev || isStaging;

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function escapeSvgText(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function truncate(text, maxLength) {
  if (!text || text.length <= maxLength) return text || "";
  return `${text.slice(0, maxLength - 3).trim()}...`;
}

function wrapSvgLines(text, maxChars = 42) {
  const words = text.split(/\s+/);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
  }

  if (current) lines.push(current);
  return lines.slice(0, 3);
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

function loadBlogPosts() {
  const postsJsonPath = join(blogDir, "posts.json");
  if (!existsSync(postsJsonPath)) return [];

  return JSON.parse(readFileSync(postsJsonPath, "utf8"))
    .filter((post) => !post.draft)
    .map(({ content, ...post }) => ({
      ...post,
      description:
        post.description ||
        truncate((content || "").replace(/[#*`]/g, ""), 160),
    }));
}

async function createOgImage({ outputPath, title, subtitle, eyebrow }) {
  mkdirSync(dirname(outputPath), { recursive: true });

  const titleLines = wrapSvgLines(title, 28);
  const subtitleLines = wrapSvgLines(subtitle || "", 46);

  const titleSvg = titleLines
    .map(
      (line, index) =>
        `<text x="80" y="${220 + index * 64}" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="bold" fill="#f8fafc">${escapeSvgText(line)}</text>`
    )
    .join("\n");

  const subtitleSvg = subtitleLines
    .map(
      (line, index) =>
        `<text x="80" y="${220 + titleLines.length * 64 + 40 + index * 34}" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#94a3b8">${escapeSvgText(line)}</text>`
    )
    .join("\n");

  const svg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f172a"/>
  <rect x="0" y="540" width="1200" height="90" fill="#1e293b"/>
  <text x="80" y="585" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#64748b">${escapeSvgText(eyebrow || "Arslan Jaffar Portfolio")}</text>
  ${titleLines.length ? titleSvg : `<text x="80" y="260" font-family="Arial, Helvetica, sans-serif" font-size="52" font-weight="bold" fill="#f8fafc">${escapeSvgText(title)}</text>`}
  ${subtitleSvg}
</svg>`;

  await sharp(Buffer.from(svg)).png().toFile(outputPath);
}

function collectTags(posts) {
  const tags = new Set();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return [...tags];
}

function collectCategories(posts) {
  const categories = new Set();
  posts.forEach((post) => {
    if (post.category) categories.add(post.category);
  });
  return [...categories];
}

function toDateString(value, fallback) {
  if (!value) return fallback;
  if (value instanceof Date) return value.toISOString().slice(0, 10);
  return String(value).slice(0, 10);
}

function buildSitemap(posts) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = [];
  const localePrefixes = ["", "ur", "ar"];

  for (const locale of localePrefixes) {
    for (const route of staticRoutes) {
      const pathPart = route.path === "/" ? "" : route.path;
      const loc =
        locale === ""
          ? `${siteUrl}${pathPart || "/"}`
          : pathPart === ""
            ? `${siteUrl}/${locale}`
            : `${siteUrl}/${locale}${pathPart}`;

      urls.push({
        loc,
        lastmod: today,
        changefreq: route.changefreq,
        priority: route.priority,
      });
    }
  }

  for (const post of posts) {
    urls.push({
      loc: `${siteUrl}/blog/${post.slug}`,
      lastmod: toDateString(post.updatedAt || post.publishedAt, today),
      changefreq: "monthly",
      priority: "0.6",
    });
  }

  for (const tag of collectTags(posts)) {
    urls.push({
      loc: `${siteUrl}/blog/tag/${encodeURIComponent(tag)}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.5",
    });
  }

  for (const category of collectCategories(posts)) {
    urls.push({
      loc: `${siteUrl}/blog/category/${encodeURIComponent(category)}`,
      lastmod: today,
      changefreq: "weekly",
      priority: "0.5",
    });
  }

  const body = urls
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

function buildRobotsTxt() {
  if (noIndex) {
    return `# Generated for non-production environment\nUser-agent: *\nDisallow: /\n`;
  }

  return `# https://www.robotstxt.org/robotstxt.html\nUser-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`;
}

function formatRssDate(dateString) {
  const normalized = normalizeDate(dateString);
  const date = new Date(`${normalized}T12:00:00.000Z`);
  if (Number.isNaN(date.getTime())) return new Date().toUTCString();
  return date.toUTCString();
}

function buildRssFeed(posts) {
  const items = posts
    .map(
      (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${formatRssDate(post.publishedAt)}</pubDate>
      <description>${escapeXml(post.description)}</description>
      ${post.category ? `<category>${escapeXml(post.category)}</category>` : ""}
      ${post.tags.map((tag) => `<category>${escapeXml(tag)}</category>`).join("\n      ")}
    </item>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Arslan Jaffar Blog</title>
    <link>${siteUrl}/blog</link>
    <description>Articles on full-stack development, backend architecture, and AI-powered systems.</description>
    <language>en-us</language>
    <lastBuildDate>${formatRssDate(new Date().toISOString())}</lastBuildDate>
${items}
  </channel>
</rss>
`;
}

async function generateOgImages(posts) {
  mkdirSync(ogRoutesDir, { recursive: true });
  mkdirSync(ogBlogDir, { recursive: true });

  await createOgImage({
    outputPath: join(ogDir, "default.png"),
    title: "Arslan Jaffar",
    subtitle: "Senior MERN Stack Developer",
    eyebrow: "Portfolio · React · Node.js · NestJS",
  });

  // Backward compatibility for manifest/index references
  await createOgImage({
    outputPath: join(publicDir, "og-image.png"),
    title: "Arslan Jaffar",
    subtitle: "Senior MERN Stack Developer",
    eyebrow: "Portfolio · React · Node.js · NestJS",
  });

  for (const route of staticRoutes) {
    const meta = routeMeta[route.path];
    if (!meta) continue;

    await createOgImage({
      outputPath: join(ogRoutesDir, `${route.ogSlug}.png`),
      title: meta.title.split("|")[0].trim(),
      subtitle: truncate(meta.description, 120),
      eyebrow: route.path === "/" ? "Portfolio Home" : route.path.replace("/", ""),
    });
  }

  for (const post of posts) {
    await createOgImage({
      outputPath: join(ogBlogDir, `${post.slug}.png`),
      title: post.title,
      subtitle: truncate(post.description, 120),
      eyebrow: post.category || "Blog Article",
    });
  }
}

async function main() {
  const posts = loadBlogPosts();

  mkdirSync(publicDir, { recursive: true });
  await generateOgImages(posts);

  writeFileSync(join(publicDir, "sitemap.xml"), buildSitemap(posts), "utf8");
  writeFileSync(join(publicDir, "robots.txt"), buildRobotsTxt(), "utf8");
  writeFileSync(join(publicDir, "rss.xml"), buildRssFeed(posts), "utf8");

  console.log(`Generated SEO assets for ${siteUrl}`);
  console.log(`  sitemap.xml (${staticRoutes.length + posts.length} base URLs + tag/category URLs)`);
  console.log(`  robots.txt (noindex=${noIndex})`);
  console.log(`  rss.xml (${posts.length} posts)`);
  console.log(`  og/default.png + route/blog images`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
