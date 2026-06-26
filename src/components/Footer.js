import React from "react";
import Container from "./ui/Container";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-bg-secondary border-t border-border py-8 mt-auto">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <h3 className="text-sm text-text-secondary font-medium">
            Designed and Developed by Arslan Jaffar
          </h3>
          <h3 className="text-sm text-text-secondary font-medium">
            Copyright &copy; {year} SB
          </h3>
          <ul className="flex justify-center md:justify-end gap-4 list-none m-0 p-0">
            <li>
              <a
                href="https://github.com/arslanbinjaffar"
                className="text-2xl text-text-primary hover:text-social-github transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arslanbinjaffar"
                className="text-2xl text-text-primary hover:text-social-linkedin transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
