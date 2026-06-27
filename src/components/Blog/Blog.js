import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MdArticle } from "react-icons/md";
import Particle from "../Particle";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import { fadeUp } from "@/lib/motion";

function Blog() {
  const { t } = useTranslation("blog");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/blog");

  return (
    <Section className="relative">
      <Seo {...seo} path="/blog" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>
        <motion.div
          className="flex flex-col items-center justify-center text-center py-16 md:py-24"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.2}
        >
          <div className="mb-6 text-accent">
            <MdArticle className="text-6xl md:text-7xl" aria-hidden="true" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4">
            {t("comingSoon")}
          </h2>
          <p className="text-text-secondary max-w-md mb-8 leading-relaxed">
            {t("comingSoonDescription")}
          </p>
          <Button asChild>
            <Link to={localizePath("/contact")}>{t("getInTouch")}</Link>
          </Button>
        </motion.div>
      </Container>
    </Section>
  );
}

export default Blog;
