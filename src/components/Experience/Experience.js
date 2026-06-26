import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Particle from "../Particle";
import { experienceData } from "./experienceData";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { routeSeo } from "@/config/seo";

import freelanceLogo from "../../Assets/Projects/freelance logo.jpg";

function Experience() {
  const navigate = useNavigate();

  return (
    <Section className="relative">
      <Seo {...routeSeo["/experience"]} path="/experience" />
      <Particle />
      <Container>
        <PageHeading
          accent="Experience"
          subtitle="A timeline of roles, responsibilities, and outcomes from my engineering journey."
        >
          My Professional
        </PageHeading>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8 mb-10"
              initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: 0.1 }}
            >
              <div
                className={`hidden md:block ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
              />
              <div
                className={`${index % 2 === 0 ? "md:order-2 md:text-left" : "md:order-1 md:text-right"}`}
              >
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary -translate-x-1/2 top-6" />
                <div
                  className={`bg-card border rounded-2xl p-6 backdrop-blur-sm hover:border-accent/50 transition-colors ${
                    exp.openForWork ? "border-accent/40 ring-1 ring-accent/20" : "border-border"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`rounded-xl overflow-hidden bg-bg-tertiary shrink-0 p-1 ${
                        exp.openForWork ? "w-16 h-12" : "w-12 h-12"
                      }`}
                    >
                      <img
                        src={exp.companyImage}
                        alt={exp.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-text-primary">{exp.role}</h4>
                      <span className="text-accent text-sm font-medium">{exp.company}</span>
                      <span className="block text-text-secondary text-xs mt-1">
                        {exp.duration}
                      </span>
                      {exp.openForWork && (
                        <span className="inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                          Open for remote work
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm leading-relaxed">{exp.description}</p>
                  {exp.highlights?.length > 0 && (
                    <ul className="mt-3 space-y-1 list-disc list-inside text-sm text-text-secondary">
                      {exp.highlights.map((point, pi) => (
                        <li key={pi}>{point}</li>
                      ))}
                    </ul>
                  )}
                  {exp.tech?.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="bg-card border border-accent/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-20 h-14 rounded-xl overflow-hidden bg-bg-tertiary shrink-0 p-1">
                <img
                  src={freelanceLogo}
                  alt="Freelance on Fiverr and Upwork"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  Available for Freelance &amp; Part-Time Remote Work
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  I&apos;m open to remote freelance and part-time contracts — ideal for startups,
                  agencies, and founders who need a senior MERN engineer without a full-time hire.
                  I work across US, EU, and APAC time zones with clear async updates and milestone
                  delivery.
                </p>
                <ul className="space-y-1.5 text-sm text-text-secondary mb-5">
                  <li>• Part-time retainers (20–40 hrs/week) or fixed-scope project contracts</li>
                  <li>• Full-stack development: React, Next.js, Node.js, NestJS, APIs, databases</li>
                  <li>• MVP builds, feature delivery, performance tuning, and production support</li>
                  <li>• Experienced on Fiverr &amp; Upwork — comfortable with remote client workflows</li>
                </ul>
                <Button onClick={() => navigate("/contact")}>
                  Discuss a remote engagement
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

export default Experience;
