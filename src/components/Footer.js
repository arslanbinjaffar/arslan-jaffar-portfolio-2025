import React from "react";
import { Link } from "react-router-dom";
import Container from "./ui/Container";
import BrandLogo from "./BrandLogo";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { socialLinks } from "@/config/site";

function Footer() {
  const year = new Date().getFullYear();

  const footerSocialLinks = [
    {
      href: socialLinks.github,
      icon: AiFillGithub,
      hover: "hover:text-social-github",
      label: "GitHub",
    },
    {
      href: socialLinks.linkedin,
      icon: FaLinkedinIn,
      hover: "hover:text-social-linkedin",
      label: "LinkedIn",
    },
    socialLinks.whatsapp && {
      href: socialLinks.whatsapp,
      icon: FaWhatsapp,
      hover: "hover:text-social-whatsapp",
      label: "WhatsApp",
    },
  ].filter(Boolean);

  return (
    <footer className="bg-bg-secondary border-t border-border py-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <Link to="/" className="flex justify-center md:justify-start">
            <BrandLogo className="h-8 w-auto" />
          </Link>
          <p className="text-sm text-text-secondary font-medium m-0">
            Designed and Developed by Arslan Jaffar
          </p>
          <div className="flex flex-col items-center md:items-end gap-3">
            <p className="text-sm text-text-secondary font-medium m-0">
              Copyright &copy; {year} Arslan Jaffar
            </p>
            <ul className="flex justify-center md:justify-end gap-4 list-none m-0 p-0">
              {footerSocialLinks.map(({ href, icon: Icon, hover, label }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={`text-2xl text-text-primary ${hover} transition-colors`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
