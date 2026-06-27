import { Helmet } from "react-helmet-async";
import { absoluteUrl, siteConfig } from "@/config/site";

/**
 * Note: Social crawlers may not execute JS on deep routes.
 * Helmet updates head after hydration; prerender if share previews fail.
 */
function Seo({
  title,
  description,
  path = "/",
  ogImage,
  ogType = "website",
  jsonLd = [],
  noindex = false,
  rssLink = false,
  articlePublishedTime,
  articleTags = [],
}) {
  const pageTitle = title || siteConfig.defaultTitle;
  const pageDescription = description || siteConfig.defaultDescription;
  const canonical = absoluteUrl(path);
  const resolvedOgImage = absoluteUrl(ogImage || siteConfig.ogImage);
  const shouldNoIndex =
    noindex || import.meta.env.VITE_NOINDEX === "true";

  const schemaGraph = jsonLd.filter(Boolean);
  const hasJsonLd = schemaGraph.length > 0;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="author" content={siteConfig.author} />
      {shouldNoIndex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      {rssLink && (
        <link
          rel="alternate"
          type="application/rss+xml"
          title={`${siteConfig.siteName} RSS Feed`}
          href={absoluteUrl("/rss.xml")}
        />
      )}

      <meta property="og:url" content={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {ogType === "article" && articlePublishedTime && (
        <meta
          property="article:published_time"
          content={articlePublishedTime}
        />
      )}
      {ogType === "article" &&
        articleTags.map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {hasJsonLd && (
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@graph": schemaGraph,
          })}
        </script>
      )}
    </Helmet>
  );
}

export default Seo;
