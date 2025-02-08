import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const packages = [
  {
    title: "Salt Flat Explorer Package",
    duration: "5 days / 4 nights",
    image: "/images/WeddingUyuniSaltFlats (3) 35.jpg",
    price: "$2,500 per couple",
    details: [
      "Luxury accommodation in a salt hotel",
      "Private guided tour of Salar de Uyuni",
      "Sunrise photography session on the salt flats",
      "Romantic dinner under the stars",
      "Visit to Incahuasi Island",
      "Relaxing couples' spa treatment",
    ],
  },
  {
    title: "Adventure Lovers Package",
    duration: "7 days / 6 nights",
    image: "/images/BodaenelSalardeUyuni (10) 2.jpg",
    price: "$3,800 per couple",
    details: [
      "Accommodation in various unique locations (salt hotel, desert ecolodge)",
      "Extended Salar de Uyuni exploration",
      "4x4 excursion to surrounding attractions",
      "Flamingo watching at Laguna Colorada",
      "Stargazing night with private astronomer guide",
      "Hot air balloon ride over the salt flats (seasonal)",
    ],
  },
  {
    title: "Luxury Retreat Package",
    duration: "10 days / 9 nights",
    image: "/images/WeddingSalardeUyuni39.jpg",
    price: "$6,500 per couple",
    details: [
      "Premium suite in luxury salt hotel",
      "Private chef for duration of stay",
      "Daily spa treatments",
      "Helicopter tour of Salar de Uyuni",
      "Private photography session",
      "Exclusive wine tasting featuring Bolivian wines",
      "Day trip to Potosí or Sucre",
    ],
  },
];

const WeddingPackages = () => {
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section con efecto Parallax */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-70"
          style={{
            backgroundImage: "url('/images/BodaenelSalardeUyuni (14) 6.jpg')",
            backgroundPositionY: backgroundPosition,
          }}
        ></motion.div>
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold">Honeymoon Packages</h1>
          <p className="mt-4 text-lg">
            Extend the magic of your wedding with our exclusive honeymoon experiences.
          </p>
        </motion.div>
      </section>

      {/* Lista de Paquetes */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <SectionTitle title="Our Honeymoon Packages" />

        <div className="space-y-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className={`relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen con Efecto de Parallax */}
              <motion.div
                className="md:w-1/2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </motion.div>

              {/* Contenido del Paquete */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-800">{pkg.title}</h3>
                <p className="text-lg text-primary font-semibold">{pkg.duration}</p>
                <ul className="mt-4 space-y-2">
                  {pkg.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-primary mr-2">•</span> {detail}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-xl font-bold text-gray-900">{pkg.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Sección de Beneficios Incluidos */}
      <section className="py-16 bg-white-800 text-white text-center">
        <h2 className="text-4xl font-bold">All Packages Include</h2>
        <div className="mt-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-lg">
          {[
            "Airport transfers",
            "Daily breakfast",
            "24/7 concierge service",
            "Customized itinerary planning",
          ].map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-gray-700 p-4 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {benefit}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default WeddingPackages;
