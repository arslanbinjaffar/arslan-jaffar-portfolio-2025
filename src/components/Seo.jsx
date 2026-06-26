import { Helmet } from "react-helmet-async";
import { absoluteUrl, siteConfig } from "@/config/site";

function Seo({ title, description, path = "/" }) {
  const pageTitle = title || siteConfig.defaultTitle;
  const pageDescription = description || siteConfig.defaultDescription;
  const canonical = absoluteUrl(path);
  const ogImage = absoluteUrl(siteConfig.ogImage);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      {import.meta.env.VITE_NOINDEX === "true" && (
        <meta name="robots" content="noindex, nofollow" />
      )}
      <link rel="canonical" href={canonical} />

      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.siteName} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={siteConfig.twitterHandle} />
      <meta name="twitter:creator" content={siteConfig.twitterHandle} />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}

export default Seo;
