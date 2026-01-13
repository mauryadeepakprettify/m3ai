"use client";
import { motion } from "framer-motion";

const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 2,
      ease: "easeOut",
    },
  },
};

const Animate = ({
  children,
  delay = 1,
  duration = 4,
  once = false,
  className = "",
}) => {
  return (
    <motion.div
      className={className}
      variants={slideUpVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      transition={{ delay, duration }}
    >
      {children}
    </motion.div>
  );
};

export default Animate;
