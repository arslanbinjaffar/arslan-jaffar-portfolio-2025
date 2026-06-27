import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import { getAllPosts } from "@/lib/blog";
import { sitemapGroups, sitemapLabelKeys } from "@/config/sitemapGroups";

function Sitemap() {
  const { t } = useTranslation("common");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/sitemap");
  const posts = getAllPosts();

  return (
    <Section>
      <Seo {...seo} path="/sitemap" />
      <Container>
        <PageHeading accent={t("footer.sitemapAccent")}>
          {t("footer.sitemap")}
        </PageHeading>
        <p className="text-text-secondary text-center max-w-2xl mx-auto mb-10 leading-relaxed">
          {t("sitemap.description")}
        </p>

        <div className="max-w-3xl mx-auto space-y-10">
          {sitemapGroups.map((group) => (
            <section key={group.key}>
              <h2 className="text-lg font-semibold text-text-primary mb-4 border-b border-border pb-2">
                {t(`sitemap.groups.${group.key}`)}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-2 list-none m-0 p-0">
                {group.paths.map((path) => (
                  <li key={path}>
                    <Link
                      to={localizePath(path)}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {t(`footer.${sitemapLabelKeys[path]}`) || t(`nav.${sitemapLabelKeys[path]}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}

          {posts.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-text-primary mb-4 border-b border-border pb-2">
                {t("sitemap.groups.blog")}
              </h2>
              <ul className="space-y-2 list-none m-0 p-0">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link
                      to={localizePath(`/blog/${post.slug}`)}
                      className="text-sm text-text-secondary hover:text-accent transition-colors"
                    >
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}
        </div>
      </Container>
    </Section>
  );
}

export default Sitemap;
