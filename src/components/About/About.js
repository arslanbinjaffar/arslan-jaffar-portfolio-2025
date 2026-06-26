import React from "react";
import { motion } from "framer-motion";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";

const values = [
  {
    icon: "⚙️",
    title: "Scalability First",
    desc: "Design systems that handle growth without rewrites — from day one.",
  },
  {
    icon: "🛡️",
    title: "Production Reliability",
    desc: "Ship features that stay up. Observability, error handling, and graceful degradation built in.",
  },
  {
    icon: "🏗️",
    title: "Clean Architecture",
    desc: "Modular, testable, and maintainable code that teams can confidently extend.",
  },
];

function About() {
  return (
    <Section className="relative">
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
              Know Who <span className="text-accent">I&apos;M</span>
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
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <PageHeading accent="Skillset">Professional</PageHeading>
          <Techstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-12"
        >
          <PageHeading accent="I use">Tools</PageHeading>
          <Toolstack />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-12"
        >
          <PageHeading accent="Engineering Values">Core</PageHeading>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="bg-card border border-border rounded-2xl p-6 text-center backdrop-blur-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.12 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{v.icon}</div>
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
