import React from "react";
import { motion } from "framer-motion";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Container from "../ui/Container";
import Section from "../ui/Section";

function Home2() {
  return (
    <Section id="about" className="!py-12">
      <Container>
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <h1 className="text-3xl md:text-4xl font-bold text-text-primary mb-6">
              LET ME <span className="text-accent">INTRODUCE</span> MYSELF
            </h1>
            <p className="text-text-secondary text-base leading-relaxed">
              Hi, I am Arslan Jaffar, a Senior MERN Stack Engineer with 4+ years
              of experience building scalable, production-ready web platforms.
              I focus on designing robust backend systems with Node.js, NestJS,
              and Express.js while delivering clean frontend experiences with
              React.js and Next.js.
              <br />
              <br />
              I have hands-on experience in microservices, distributed systems,
              caching, and asynchronous processing using PostgreSQL, MongoDB,
              Redis, RabbitMQ, and BullMQ. I enjoy turning complex product
              requirements into practical and maintainable architecture.
              <br />
              <br />
              Currently, I lead development for ERP and event management
              products, where I contribute to system design, engineering
              standards, CI/CD, and team mentorship.
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
              I don&apos;t just build apps.
              <br />
              <span className="text-accent font-semibold">
                I design systems that scale.
              </span>
              <br />
              <span className="text-text-secondary text-base">
                From idea → architecture → production.
              </span>
            </p>
          </motion.div>

          <h1 className="text-2xl font-bold text-text-primary">FIND ME ON</h1>
          <p className="text-text-secondary mt-2">
            Feel free to <span className="text-accent">connect</span> with me
          </p>
          <ul className="flex justify-center gap-4 mt-6 list-none p-0">
            <li>
              <a
                href="https://github.com/arslanbinjaffar"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-primary hover:text-accent hover:border-accent transition-colors text-xl"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arslanbinjaffar/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-border text-text-primary hover:text-social-linkedin hover:border-social-linkedin transition-colors text-xl"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </Section>
  );
}

export default Home2;
