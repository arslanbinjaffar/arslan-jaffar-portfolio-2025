import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteUrl = "https://arslan-jaffar-portfolio-2025.vercel.app";
const lastmod = "2026-06-27";

const paths = [
  "/",
  "/about",
  "/project",
  "/experience",
  "/gallery",
  "/contact",
  "/resume",
  "/blog",
  "/services",
  "/privacy",
  "/terms",
];

const locales = ["", "ur", "ar"];

const urls = [];
for (const locale of locales) {
  for (const p of paths) {
    const loc =
      locale === ""
        ? p === "/"
          ? siteUrl + "/"
          : `${siteUrl}${p}`
        : p === "/"
          ? `${siteUrl}/${locale}`
          : `${siteUrl}/${locale}${p}`;
    urls.push({ loc, priority: p === "/" ? "1.0" : p.includes("privacy") || p.includes("terms") ? "0.3" : "0.8" });
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "..", "public", "sitemap.xml"), xml);
console.log(`Generated sitemap with ${urls.length} URLs`);
