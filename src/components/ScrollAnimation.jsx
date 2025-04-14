import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.55, 0.55, 1],
        delay: 0.2,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
