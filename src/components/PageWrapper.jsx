import { motion } from "framer-motion";
import { pageEnter } from "@/lib/motion";

function PageWrapper({ children }) {
  return (
    <motion.div
      initial={pageEnter.initial}
      animate={pageEnter.animate}
      transition={pageEnter.transition}
    >
      {children}
    </motion.div>
  );
}

export default PageWrapper;
