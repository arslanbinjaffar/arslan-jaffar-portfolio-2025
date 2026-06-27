import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import laptopImg from "../../Assets/about.png";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import { useLocale } from "@/context/LocaleContext";
import { buildAboutSchema } from "@/lib/structuredData";

function About() {
  const { t } = useTranslation("about");
  const { t: tc } = useTranslation("common");
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/about");
  const values = t("values", { returnObjects: true });

  return (
    <Section className="relative">
      <Seo {...seo} path="/about" jsonLd={buildAboutSchema()} />
      <Particle />
      <Container>
        <div className="grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-7 py-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-text-primary mb-6"
            >
              {t("knowWho")}{" "}
              <span className="text-accent">{t("knowAccent")}</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Aboutcard />
            </motion.div>
          </div>
          <div className="md:col-span-5 flex justify-center pt-8 md:pt-24">
            <motion.img
              src={laptopImg}
              alt="about"
              className="max-w-full h-auto"
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-12 scroll-mt-24"
          id="education"
        >
          <PageHeading accent={t("educationAccent")}>{t("educationHeading")}</PageHeading>
          <div className="grid gap-4 max-w-3xl">
            {(Array.isArray(t("education", { returnObjects: true }))
              ? t("education", { returnObjects: true })
              : []
            ).map((entry) => (
              <div
                key={`${entry.institution}-${entry.period}`}
                className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm"
              >
                <h3 className="text-lg font-semibold text-text-primary">{entry.degree}</h3>
                <p className="text-accent text-sm mt-1">{entry.institution}</p>
                <p className="text-text-secondary text-sm mt-2">{entry.period}</p>
                {entry.detail && (
                  <p className="text-text-secondary text-sm mt-3 leading-relaxed">{entry.detail}</p>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <PageHeading accent={t("skillsetAccent")}>{t("skillsetHeading")}</PageHeading>
          <Techstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <PageHeading accent={t("toolsAccent")}>{t("toolsHeading")}</PageHeading>
          <Toolstack />
          <div className="text-center mt-2">
            <Button variant="link" asChild className="text-accent">
              <Link to={localizePath("/uses")}>{tc("about.viewSetup")}</Link>
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12"
        >
          <PageHeading accent={t("valuesAccent")}>{t("valuesHeading")}</PageHeading>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(Array.isArray(values) ? values : []).map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-card border border-border rounded-2xl p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{["⚙️", "🛡️", "🏗️", "🤖"][i]}</div>
                <div className="text-lg font-bold text-text-primary mb-2">{v.title}</div>
                <div className="text-sm text-text-secondary">{v.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <Github />
      </Container>
    </Section>
  );
}

export default About;
