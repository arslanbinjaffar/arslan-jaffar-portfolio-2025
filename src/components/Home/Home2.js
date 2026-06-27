import React from "react";
import { motion } from "framer-motion";
import { useTranslation, Trans } from "react-i18next";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";
import { socialLinks } from "@/config/site";

function Home2() {
  const { t } = useTranslation("home");
  const { t: tc } = useTranslation("common");

  const findMeLinks = [
    {
      href: socialLinks.github,
      icon: AiFillGithub,
      hover: "hover:text-accent hover:border-accent",
      label: tc("social.github"),
    },
    {
      href: socialLinks.linkedinMessage,
      icon: FaLinkedinIn,
      hover: "hover:text-social-linkedin hover:border-social-linkedin",
      label: tc("social.linkedin"),
    },
    socialLinks.whatsapp && {
      href: socialLinks.whatsapp,
      icon: FaWhatsapp,
      hover: "hover:text-social-whatsapp hover:border-social-whatsapp",
      label: tc("social.whatsapp"),
    },
  ].filter(Boolean);

  return (
    <Section id="about" className="!py-12">
      <Container>
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              {t("introTitle")}{" "}
              <span className="text-accent">{t("introAccent")}</span>{" "}
              {t("introTitleEnd")}
            </h1>
            <p className="text-text-secondary text-base leading-relaxed whitespace-pre-line">
              {t("introBody")}
            </p>
          </div>
          <div className="md:col-span-4 flex justify-center">
            <Tilt>
              <img src={myImg} className="max-w-[280px] w-full" alt="avatar" />
            </Tilt>
          </div>
        </div>

        <div className="mt-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <p className="text-xl text-text-secondary leading-relaxed">
              {t("taglineLine1")}
              <br />
              <span className="text-accent font-semibold">{t("taglineLine2")}</span>
              <br />
              <span className="text-text-secondary text-base">{t("taglineLine3")}</span>
            </p>
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary">{t("findMeOn")}</h1>
          <p className="text-text-secondary mt-2">
            <Trans
              i18nKey="findMeText"
              ns="home"
              components={{ accent: <span className="text-accent" /> }}
            />
          </p>
          <ul className="flex justify-center gap-4 mt-6 list-none p-0">
            {findMeLinks.map(({ href, icon: Icon, hover, label }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-primary transition-colors text-xl ${hover}`}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default Home2;
