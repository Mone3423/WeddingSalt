import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white">
      {/* Imagen de fondo */}
      <div
  className="absolute inset-0 bg-cover bg-center opacity-80"
  style={{ backgroundImage: "url('/images/edited/IMG_5480.jpg')" }}
></div>

      {/* Contenido */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl md:text-7xl font-serif font-bold">
          Uyuni Salt Flats Weddings
        </h1>
        <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
          A magical experience in Bolivia's breathtaking salt flats.
        </p>
        <motion.button
          className="mt-6 px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
          whileHover={{ scale: 1.1 }}
        >
          Start Planning
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
