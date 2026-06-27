import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Container from "./ui/Container";
import BrandLogo from "./BrandLogo";
import LanguageSwitcher from "./LanguageSwitcher";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import { contactConfig, siteConfig, socialLinks } from "@/config/site";
import { useLocale } from "@/context/LocaleContext";

const quickRouteKeys = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/project", key: "projects" },
  { to: "/experience", key: "experience" },
  { to: "/gallery", key: "gallery" },
  { to: "/blog", key: "blog" },
  { to: "/services", key: "services" },
  { to: "/contact", key: "contact" },
  { to: "/resume", key: "resume" },
];

const legalRouteKeys = [
  { to: "/privacy", key: "privacyPolicy" },
  { to: "/terms", key: "termsConditions" },
  { to: "/cookies", key: "cookiesPolicy" },
];

const resourceRouteKeys = [
  { to: "/sitemap", key: "sitemap" },
  { to: "/faqs", key: "faqs" },
  { to: "/uses", key: "uses" },
  { to: "/case-studies", key: "caseStudies" },
  { to: "/changelog", key: "changelog" },
];

function FooterLink({ to, label, isActive, localizePath }) {
  return (
    <Link
      to={localizePath(to)}
      className={`text-sm transition-colors ${
        isActive
          ? "text-accent font-medium"
          : "text-text-secondary hover:text-accent"
      }`}
    >
      {label}
    </Link>
  );
}

function Footer() {
  const year = new Date().getFullYear();
  const { localizePath, isActivePath } = useLocale();
  const { t } = useTranslation("common");

  const footerSocialLinks = [
    {
      href: socialLinks.github,
      icon: AiFillGithub,
      hover: "hover:text-social-github",
      label: t("social.github"),
    },
    {
      href: socialLinks.linkedinMessage,
      icon: FaLinkedinIn,
      hover: "hover:text-social-linkedin",
      label: t("social.linkedinMessage"),
    },
    {
      href: socialLinks.twitter,
      icon: FaTwitter,
      hover: "hover:text-social-twitter",
      label: t("social.twitter"),
    },
    socialLinks.whatsapp && {
      href: socialLinks.whatsapp,
      icon: FaWhatsapp,
      hover: "hover:text-social-whatsapp",
      label: t("social.whatsapp"),
    },
  ].filter(Boolean);

  return (
    <footer className="bg-bg-secondary border-t border-border mt-auto">
      <Container className="py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to={localizePath("/")} className="inline-flex">
              <BrandLogo className="h-8 w-auto" />
            </Link>
            <p className="mt-4 text-sm font-semibold text-text-primary">
              {siteConfig.author}
            </p>
            <p className="mt-1 text-sm text-accent">{t("site.jobTitle")}</p>
            <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
            <div className="mt-4">
              <LanguageSwitcher compact />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-4">
              {t("footer.quickLinks")}
            </h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2.5 list-none m-0 p-0">
              {quickRouteKeys.map(({ to, key }) => (
                <li key={to}>
                  <FooterLink
                    to={to}
                    label={t(`nav.${key}`)}
                    isActive={isActivePath(to)}
                    localizePath={localizePath}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-4">
              {t("footer.contact")}
            </h3>
            <ul className="space-y-3 list-none m-0 p-0 text-sm">
              <li>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="inline-flex items-start gap-2 text-text-secondary hover:text-accent transition-colors"
                >
                  <FaEnvelope className="mt-0.5 shrink-0 text-accent" />
                  <span dir="ltr">{contactConfig.email}</span>
                </a>
              </li>
              <li className="text-text-secondary">
                <span className="text-accent font-medium">{t("footer.location")}: </span>
                {contactConfig.location}
              </li>
              <li className="text-text-secondary leading-relaxed">
                <span className="text-accent font-medium">{t("footer.availability")}: </span>
                {t("site.availability")}
              </li>
            </ul>
            {socialLinks.whatsapp && (
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-social-whatsapp bg-social-whatsapp/10 px-4 py-2 text-sm font-medium text-social-whatsapp hover:bg-social-whatsapp hover:text-white transition-colors"
              >
                <FaWhatsapp className="text-lg" />
                {t("footer.chatWhatsApp")}
              </a>
            )}
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wide mb-4">
              {t("footer.connect")}
            </h3>
            <p className="text-sm text-text-secondary mb-4 leading-relaxed">
              {t("footer.connectText")}
            </p>
            <ul className="flex flex-wrap gap-3 list-none m-0 p-0">
              {footerSocialLinks.map(({ href, icon: Icon, hover, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full border border-border text-text-primary ${hover} transition-colors text-lg`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    title={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 space-y-4">
              <div>
                <p className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-2">
                  {t("footer.legal")}
                </p>
                <div className="space-y-2">
                  {legalRouteKeys.map(({ to, key }) => (
                    <div key={to}>
                      <FooterLink
                        to={to}
                        label={t(`footer.${key}`)}
                        isActive={isActivePath(to)}
                        localizePath={localizePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-text-primary uppercase tracking-wide mb-2">
                  {t("footer.resources")}
                </p>
                <div className="space-y-2">
                  {resourceRouteKeys.map(({ to, key }) => (
                    <div key={to}>
                      <FooterLink
                        to={to}
                        label={t(`footer.${key}`)}
                        isActive={isActivePath(to)}
                        localizePath={localizePath}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-start">
          <p className="text-sm text-text-secondary m-0">
            {t("footer.designedBy", { author: siteConfig.author })}
          </p>
          <p className="text-sm text-text-secondary m-0">
            {t("footer.copyright", { year, author: siteConfig.author })}
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
