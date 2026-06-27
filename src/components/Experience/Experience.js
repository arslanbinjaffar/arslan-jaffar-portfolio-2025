import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Particle from "../Particle";
import { useExperience } from "@/hooks/useExperience";
import { useLocale } from "@/context/LocaleContext";
import Container from "../ui/Container";
import Section from "../ui/Section";
import PageHeading from "../ui/PageHeading";
import { Button } from "@/components/ui/button";
import Seo from "../Seo";
import { useRouteSeo } from "@/hooks/useRouteSeo";
import ImageWithSkeleton from "../ImageWithSkeleton";
import { slideIn, staggerContainer } from "@/lib/motion";
import freelanceLogo from "../../Assets/Projects/freelance logo.jpg";

const slideVariants = slideIn();

function Experience() {
  const navigate = useNavigate();
  const { t } = useTranslation("experience");
  const { experienceData } = useExperience();
  const { localizePath } = useLocale();
  const seo = useRouteSeo("/experience");

  const freelanceBullets = t("freelance.bullets", { returnObjects: true });
  const aiBullets = t("freelance.aiBullets", { returnObjects: true });

  return (
    <Section className="relative">
      <Seo {...seo} path="/experience" />
      <Particle />
      <Container>
        <PageHeading accent={t("headingAccent")} subtitle={t("subtitle")}>
          {t("heading")}
        </PageHeading>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute start-4 md:start-1/2 top-0 bottom-0 w-0.5 bg-accent/30 -translate-x-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experienceData.map((exp, index) => (
              <motion.div
                key={index}
                className="relative ps-12 md:ps-0 md:grid md:grid-cols-2 md:gap-8 mb-10"
                variants={slideVariants}
                custom={index}
              >
                <div
                  className={`hidden md:block ${index % 2 === 0 ? "md:order-1" : "md:order-2"}`}
                />
                <div
                  className={`${index % 2 === 0 ? "md:order-2 md:text-start" : "md:order-1 md:text-end"}`}
                >
                  <div className="absolute start-4 md:start-1/2 w-4 h-4 rounded-full bg-accent border-4 border-bg-primary -translate-x-1/2 top-6" />
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
                        <ImageWithSkeleton
                          src={exp.companyImage}
                          alt={exp.company}
                          className="w-full h-full"
                          imgClassName="w-full h-full object-contain"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-text-primary">{exp.role}</h4>
                        <span className="text-accent text-sm font-medium">{exp.company}</span>
                        <span className="block text-text-secondary text-xs mt-1" dir="ltr">
                          {exp.duration}
                        </span>
                        {exp.openForWork && (
                          <span className="inline-block mt-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/15 text-accent border border-accent/30">
                            {t("openForRemote")}
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
                        {exp.tech.map((tech) => (
                          <span
                            key={tech}
                            className="text-xs px-2 py-1 rounded-full border border-border text-text-secondary"
                            dir="ltr"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
                <ImageWithSkeleton
                  src={freelanceLogo}
                  alt="Freelance"
                  className="w-full h-full"
                  imgClassName="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {t("freelance.title")}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  {t("freelance.description")}
                </p>
                <ul className="space-y-1.5 text-sm text-text-secondary mb-4">
                  {(Array.isArray(freelanceBullets) ? freelanceBullets : []).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <p className="text-sm font-semibold text-text-primary mb-2">
                  {t("freelance.aiTitle")}
                </p>
                <ul className="space-y-1.5 text-sm text-text-secondary mb-5">
                  {(Array.isArray(aiBullets) ? aiBullets : []).map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Button onClick={() => navigate(localizePath("/contact"))}>
                  {t("freelance.cta")}
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
