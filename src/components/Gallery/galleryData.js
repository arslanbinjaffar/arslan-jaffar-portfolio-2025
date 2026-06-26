/**
 * Achievement gallery entries.
 *
 * To add a photo:
 * 1. Place the image in src/Assets/Achievements/
 * 2. Add an object below with a unique id, imgPath, title, date, category, and optional description.
 *
 * To add a LinkedIn (or other) embed:
 * Use embedSrc instead of imgPath — see the linkedin entry below.
 *
 * Categories: Award | Certificate | Event | Recognition
 *
 * Example:
 * {
 *   id: "hackathon-winner-2024",
 *   imgPath: new URL("../../Assets/Achievements/hackathon-winner.jpg", import.meta.url).href,
 *   title: "Hackathon Winner",
 *   date: "2024",
 *   category: "Award",
 *   description: "First place at company-wide innovation hackathon.",
 * },
 */

const galleryItems = [
  {
    id: "linkedin-share-7474821966898720769",
    embedSrc:
      "https://www.linkedin.com/embed/feed/update/urn:li:share:7474821966898720769?collapsed=1",
    embedHeight: 670,
    embedWidth: 504,
    embedTitle: "Embedded post",
    title: "LinkedIn Achievement",
    date: "2025",
    category: "Recognition",
    description: "A milestone shared on LinkedIn.",
  },
];

export const GALLERY_CATEGORIES = ["Award", "Certificate", "Event", "Recognition"];

export default galleryItems;
