const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export const fadeUp = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.6,
      delay: prefersReducedMotion ? 0 : delay || 0,
    },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.4 },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: prefersReducedMotion ? 0 : 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.7,
      delay: prefersReducedMotion ? 0 : 0.3,
    },
  },
};

export const slideIn = (direction = "left") => ({
  hidden: {
    opacity: 0,
    x: prefersReducedMotion ? 0 : direction === "left" ? -40 : 40,
  },
  visible: (index = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: prefersReducedMotion ? 0.01 : 0.55,
      delay: prefersReducedMotion ? 0 : index * 0.08,
    },
  }),
});

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: prefersReducedMotion ? 0 : 0.08,
      delayChildren: prefersReducedMotion ? 0 : 0.05,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: prefersReducedMotion ? 0.01 : 0.45 },
  },
};

export const pageEnter = {
  initial: { opacity: 0, y: prefersReducedMotion ? 0 : 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: prefersReducedMotion ? 0.01 : 0.35 },
};

export const buttonHover = prefersReducedMotion
  ? {}
  : { scale: 1.05, transition: { duration: 0.2 } };

export function getMotionProps(props) {
  if (!prefersReducedMotion) return props;
  return {
    ...props,
    initial: false,
    animate: props.animate ?? props.whileInView,
    transition: { duration: 0.01 },
  };
}

export { prefersReducedMotion };
