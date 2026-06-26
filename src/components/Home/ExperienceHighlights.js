import React from "react";
import { motion } from "framer-motion";
import { homeHighlights } from "../Experience/experienceData";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";

function ExperienceHighlights() {
  return (
    <Section className="!py-12">
      <Container>
        <PageHeading
          accent="Highlights"
          subtitle="Key outcomes from my recent engineering and AI systems work."
        >
          Career
        </PageHeading>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {homeHighlights.map((item, i) => (
            <motion.div
              key={item.text}
              className="bg-card border border-border rounded-2xl p-5 backdrop-blur-sm hover:border-accent/50 transition-colors h-full flex flex-col"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30 w-fit mb-3">
                {item.company}
              </span>
              <p className="text-sm text-text-secondary leading-relaxed flex-1">
                {item.text}
              </p>
              {item.tech && (
                <span className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary w-fit mt-4">
                  {item.tech}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default ExperienceHighlights;
