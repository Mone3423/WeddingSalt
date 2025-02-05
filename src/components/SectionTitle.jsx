import React from "react";
import { motion } from "framer-motion";

const SectionTitle = ({ title }) => {
  return (
    <motion.h2
      className="text-4xl font-bold text-center mb-10"
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
  );
};

export default SectionTitle;
