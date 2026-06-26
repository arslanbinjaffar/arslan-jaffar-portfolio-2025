import React from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiRabbitmq,
  SiReact,
} from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";

const cards = [
  {
    icon: SiNodedotjs,
    title: "Backend Systems & APIs",
    desc: "Production-grade REST and GraphQL APIs built with Node.js, NestJS, and Express.js. Focus on security, validation, and performance at scale.",
    tags: ["Node.js", "NestJS", "REST", "GraphQL"],
  },
  {
    icon: SiRabbitmq,
    title: "Microservices & Queues",
    desc: "Distributed architectures with event-driven communication using RabbitMQ and BullMQ. Redis caching to cut latency and improve throughput.",
    tags: ["Microservices", "RabbitMQ", "BullMQ", "Redis"],
  },
  {
    icon: AiOutlineCloudServer,
    title: "Cloud & DevOps",
    desc: "Dockerized deployments on AWS and GCP. CI/CD pipelines with GitLab and GitHub Actions. Kubernetes orchestration for scalable infrastructure.",
    tags: ["Docker", "AWS", "GCP", "CI/CD", "Kubernetes"],
  },
  {
    icon: SiReact,
    title: "Frontend Engineering",
    desc: "Clean and responsive UIs with React.js and Next.js. State management via Redux. Optimised for performance, accessibility, and SEO.",
    tags: ["React.js", "Next.js", "Redux", "TypeScript"],
  },
];

function Engineering() {
  return (
    <Section>
      <Container>
        <PageHeading
          accent="Actually Build"
          subtitle="Beyond writing code — designing systems that handle real-world scale and complexity."
        >
          What I
        </PageHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
            >
              <card.icon className="text-4xl text-accent mb-4" />
              <h5 className="text-lg font-bold text-text-primary mb-2">{card.title}</h5>
              <p className="text-sm text-text-secondary flex-1 mb-4">{card.desc}</p>
              <div className="flex flex-wrap gap-2">
                {card.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default Engineering;
