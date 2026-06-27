import React from "react";
import { motion } from "framer-motion";
import {
  SiNodedotjs,
  SiRabbitmq,
  SiReact,
} from "react-icons/si";
import { AiOutlineCloudServer } from "react-icons/ai";
import { Brain, Bot } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";

const cardIcons = [Brain, Bot, SiNodedotjs, SiRabbitmq, AiOutlineCloudServer, SiReact];
const cardTags = [
  ["RAG", "LangGraph", "Qdrant", "MCP"],
  ["NestJS", "Python", "Vector Search", "Agents"],
  ["Node.js", "NestJS", "REST", "GraphQL"],
  ["Microservices", "RabbitMQ", "BullMQ", "Redis"],
  ["Docker", "AWS", "GCP", "CI/CD", "Kubernetes"],
  ["React.js", "Next.js", "Redux", "TypeScript"],
];

function Engineering() {
  const { t } = useTranslation("home");
  const cards = t("engineering.cards", { returnObjects: true });

  return (
    <Section>
      <Container>
        <PageHeading
          accent={t("engineering.headingAccent")}
          subtitle={t("engineering.subtitle")}
        >
          {t("engineering.heading")}
        </PageHeading>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {(Array.isArray(cards) ? cards : []).map((card, i) => {
            const Icon = cardIcons[i];
            return (
              <motion.div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors h-full flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.1 }}
              >
                {Icon && <Icon className="text-4xl text-accent mb-4" />}
                <h5 className="text-lg font-bold text-text-primary mb-2">{card.title}</h5>
                <p className="text-sm text-text-secondary flex-1 mb-4">{card.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {(cardTags[i] || []).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary"
                      dir="ltr"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default Engineering;
