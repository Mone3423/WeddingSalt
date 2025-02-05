
import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";

const services = [
  {
    title: "Customized Ceremonies",
    image: "/images/WeddingUyuniSaltFlats (9) 41.jpg",
    details: [
      "Intimate Elopements: For couples seeking a private, romantic experience.",
      "Traditional Ceremonies: Incorporating local Bolivian customs and rituals.",
      "Modern Celebrations: Sleek, contemporary designs that complement the salt flats' minimalist beauty.",
      "Themed Weddings: From bohemian chic to elegant luxury, we can bring your dream theme to life.",
    ],
    description: "Our team works closely with each couple to tailor every aspect of the ceremony, from the layout and decor to the music and rituals. We've organized everything from sunrise ceremonies with colorful Andean textiles to starlit evening events with crystal decorations mimicking the salt formations.",
  },
  {
    title: "Photography & Videography",
    image: "/images/BodaenelSalardeUyuni (11) 3.jpg",
    details: [
      "Expert photographers familiar with the unique lighting conditions of the salt flats.",
      "Videographers who know how to showcase the stunning landscapes in your wedding film.",
      "Drone footage options to capture the vast expanse of the salt flats.",
      "Specialized equipment for night photography to capture starry sky backgrounds.",
    ],
    description: "Our team knows how to play with perspective to create those iconic salt flat photos that appear to defy reality. We'll guide you through a variety of poses and locations to ensure you have a diverse and stunning wedding album.",
  },
  {
    title: "Accommodation",
    image: "/images/BodaenelsalardeUyuni36.jpg",
    details: [
      "Salt Hotels: Experience the novelty of staying in hotels built entirely from salt blocks, offering a truly unique experience.",
      "Luxury Lodges: For those seeking more traditional comfort with a touch of local charm.",
      "Honeymoon Suites: Special rooms for newlyweds, often with panoramic views of the salt flats.",
    ],
    description: "Our partner hotels, such as Luna Salada and Palacio de Sal, offer rooms with heating, hot water, and stunning views of the Salar. Many feature spa services, perfect for relaxing before or after your big day.",
  },
  {
    title: "Catering",
    image: "/images/WeddingUyuniSaltWalts4.jpg",
    details: [
      "Customizable menus featuring local specialties like quinoa dishes and llama steaks.",
      "Gourmet options for those seeking a more refined dining experience.",
      "Dietary accommodation for various needs (vegetarian, vegan, gluten-free, etc.).",
      "Signature cocktails created especially for your event, often incorporating local ingredients.",
    ],
    description: "We work with top chefs who can create visually stunning dishes that complement the unique setting. From elegantly plated meals to interactive food stations, we ensure your wedding feast is as remarkable as its surroundings.",
  },
];

const WeddingServices = () => {
  return (
    <div className="bg-gray-100 text-gray">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/WeddingSalardeUyuni77.jpg')" }}
        ></div>
        <motion.div
          className="relative z-10 max-w-2xl"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold">Wedding Services</h1>
          <p className="mt-4 text-lg">
            Making your Uyuni wedding an unforgettable experience.
          </p>
        </motion.div>
      </section>

      {/* Servicios */}
      <div className="max-w-6xl mx-auto py-16 px-6">
        <SectionTitle title="Our Services" />

        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden flex flex-col md:flex-row"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Imagen a la izquierda en desktop, arriba en móvil */}
              <div className="md:w-1/2">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 md:h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Contenido del Servicio */}
              <div className="md:w-1/2 p-6 flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-gray-800">{service.title}</h3>
                <ul className="mt-4 space-y-2">
                  {service.details.map((detail, i) => (
                    <li key={i} className="text-gray-600 flex items-start">
                      <span className="text-blue-500 mr-2">•</span> {detail}
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-gray-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeddingServices;
