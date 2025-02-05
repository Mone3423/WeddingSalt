import React from "react";
import { motion } from "framer-motion";
const services = [
  {
    title: "Customized Ceremonies",
    description: "Tailor-made wedding ceremonies that reflect your unique love story.",
    image: "/images/BodaenelSalardeUyuni (12) 4.jpg",
  },
  {
    title: "Photography & Videography",
    description: "Capture the beauty of your wedding with expert photographers and videographers.",
    image: "/images/BodaenelSalardeUyuni (16) 8.jpg",
  },
  {
    title: "Accommodation",
    description: "Stay in luxury lodges or unique salt hotels with breathtaking views.",
    image: "/images/WeddingUyuniSaltWalts13.jpg",
  },
  {
    title: "Catering",
    description: "A fusion of local Bolivian flavors and international cuisine.",
    image: "/images/WeddingUyuniSaltWalts3.jpg",
  },
];

const WeddingServices1 = () => {
  return (
    <div className="bg-secondary text-gray">
      {/* Sección de Servicios */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg bg-white"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen con efecto de escala al pasar el mouse */}
              <motion.img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Contenido del Servicio */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl text-white font-bold">{service.title}</h3>
                <p className="mt-2 text-lg">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingServices1;
