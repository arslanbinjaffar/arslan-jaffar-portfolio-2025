import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import Section from "../ui/Section";

const statValues = [
  { value: 4, suffix: "+" },
  { value: 8, suffix: "+" },
  { value: 15, suffix: "K+" },
  { value: 35, suffix: "%" },
];

function AnimatedCounter({ target, suffix }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1400;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} dir="ltr">
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  const { t } = useTranslation("home");
  const labels = t("stats", { returnObjects: true });

  return (
    <Section className="!py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {statValues.map((stat, i) => (
            <Col
              key={i}
              stat={stat}
              label={Array.isArray(labels) ? labels[i]?.label : ""}
              index={i}
            />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Col({ stat, label, index }) {
  return (
    <motion.div
      className="bg-card border border-border rounded-2xl p-6 text-center backdrop-blur-sm hover:shadow-lg hover:shadow-accent/20 transition-shadow"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
    >
      <div className="text-3xl md:text-4xl font-extrabold text-accent">
        <AnimatedCounter target={stat.value} suffix={stat.suffix} />
      </div>
      <div className="text-sm text-text-secondary mt-2">{label}</div>
    </motion.div>
  );
}

export default Stats;
