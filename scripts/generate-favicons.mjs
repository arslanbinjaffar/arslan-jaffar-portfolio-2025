import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import pngToIco from "png-to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const source = join(publicDir, "ai.png");

const sizes = [
  { name: "favicon-16x16.png", size: 16 },
  { name: "favicon-32x32.png", size: 32 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "icon-192.png", size: 192 },
  { name: "icon-512.png", size: 512 },
];

for (const { name, size } of sizes) {
  await sharp(source)
    .resize(size, size, { fit: "contain", background: { r: 15, g: 23, b: 42, alpha: 1 } })
    .png()
    .toFile(join(publicDir, name));
  console.log(`Created ${name}`);
}

const favicon32 = await sharp(source)
  .resize(32, 32, { fit: "contain", background: { r: 15, g: 23, b: 42, alpha: 1 } })
  .png()
  .toBuffer();

const favicon16 = await sharp(source)
  .resize(16, 16, { fit: "contain", background: { r: 15, g: 23, b: 42, alpha: 1 } })
  .png()
  .toBuffer();

const icoBuffer = await pngToIco([favicon16, favicon32]);
writeFileSync(join(publicDir, "favicon.ico"), icoBuffer);
console.log("Created favicon.ico");

const iconSize = 280;
const icon = await sharp(source)
  .resize(iconSize, iconSize, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer();

const textSvg = `
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0f172a"/>
  <text x="620" y="260" font-family="Arial, Helvetica, sans-serif" font-size="56" font-weight="bold" fill="#f8fafc">Arslan Jaffar</text>
  <text x="620" y="330" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#94a3b8">Senior MERN Stack Developer</text>
  <text x="620" y="400" font-family="Arial, Helvetica, sans-serif" font-size="22" fill="#64748b">React · Node.js · NestJS · Microservices</text>
</svg>`;

await sharp(Buffer.from(textSvg))
  .composite([{ input: icon, left: 280, top: 175 }])
  .png()
  .toFile(join(publicDir, "og-image.png"));

console.log("Created og-image.png");
