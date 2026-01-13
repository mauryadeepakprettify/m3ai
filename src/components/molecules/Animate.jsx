"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slideUpVariants = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
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
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

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
