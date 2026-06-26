import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Container from "../ui/Container";
import Section from "../ui/Section";

const stats = [
  { value: 4, suffix: "+", label: "Years Experience" },
  { value: 8, suffix: "+", label: "Products Shipped" },
  { value: 4, suffix: "+", label: "Companies" },
  { value: 300, suffix: "%+", label: "API Performance Gain" },
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
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

function Stats() {
  return (
    <Section className="!py-12">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <Col key={stat.label} stat={stat} index={i} />
          ))}
        </div>
      </Container>
    </Section>
  );
}

function Col({ stat, index }) {
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
      <div className="text-sm text-text-secondary mt-2">{stat.label}</div>
    </motion.div>
  );
}

export default Stats;
