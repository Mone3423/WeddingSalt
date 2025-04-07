import React from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { useState, useEffect, useRef } from 'react';
import ContactForm from "../components/ContactForm";

const services = [
  {
    image: "/images/WeddingUyuniSaltFlats (9) 41.jpg",
    title: "Customized Ceremonies",
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
]; // Mantener el array de servicios igual
const serviceTitles = [
  "Customized Ceremonies",
  "Photography & Videography",
  "Accommodation",
  "Catering"
];
const WeddingServices = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef });
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    '/images/WeddingSalardeUyuni77.jpg',
    '/images/WeddingUyuniSaltWalts17.jpg',
    '/images/WeddingSalardeUyuni48.jpg'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <div className="bg-gray-100 text-gray">
      {/* Hero Section Mejorada */}
      <motion.section className="relative h-screen -mt-16 flex items-center justify-center text-center overflow-hidden px-6 md:px-0">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentImageIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentImageIndex]})`
            }}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.9, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Overlay para mejor contraste */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Contenido animado */}
        <motion.div
          className="relative z-10 text-white max-w-2xl p-6"
          animate={{
            y: ["0vh", "-20vh"],
            x: ["0vw", "-30vw"],
            scale: [1, 0.8],
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 20,
            delay: 1,
          }}
        >
          <h1 className="text-white text-5xl md:text-7xl font-bold font-serif drop-shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
            WEDDING SERVICES
          </h1>

          <motion.p
            className="mt-6 text-lg md:text-2xl p-4 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Making your Uyuni wedding an unforgettable experience.
          </motion.p>
        </motion.div>
      </motion.section>
      <div className="max-w-6xl mx-auto py-16 px-6">


        <div className="space-y-10">
          {services.map((service, index) => (
            <React.Fragment key={index}>
              {/* Sección de Imagen Full Vertical */}
              <motion.div
                className="relative h-screen flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
              >
                <div className="absolute inset-0 bg-black/40 z-10 flex items-center justify-center">
                  <motion.div
                    className="text-center text-white max-w-4xl px-4"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 60 }}
                  >
                    <h4 className="text-3xl md:text-5xl font-serif mb-6 drop-shadow-2xl">
                      {serviceTitles[index % 4]}
                    </h4>
                    <p className="text-lg md:text-xl italic">
                      {service.details[0]}
                    </p>
                  </motion.div>
                </div>
                <img
                  src={service.image}
                  alt={`${service.title} full view`}
                  className="w-full h-full object-cover absolute inset-0"
                />
              </motion.div>

              {/* Sección de Contenido Intercalado */}
              <div className="max-w-7xl mx-auto py-16 px-6">
                <motion.div
                  className="relative group"
                  initial={{
                    opacity: 0,
                    rotateY: 90,
                    scale: 0.8,
                    filter: "blur(4px)"
                  }}
                  whileInView={{
                    opacity: 1,
                    rotateY: 0,
                    scale: 1,
                    filter: "blur(0px)"
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 15,
                  }}
                  viewport={{ once: true, margin: "-20% 0px" }}
                >
                  <div className="relative bg-white shadow-2xl rounded-3xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-500 group-hover:shadow-3xl">   {/* Imagen - Alternar lados según el índice */}
                    <motion.div
                      className={`md:w-1/2 overflow-hidden ${index % 2 === 0 ? "order-last" : ""
                        }`}
                      initial={{ scale: 1.1 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-64 md:h-full object-cover transform transition-transform duration-500 hover:scale-105"
                      />
                    </motion.div>

                    {/* Contenido */}
                    <motion.div
                      className="md:w-1/2 p-8 flex flex-col justify-center"
                      initial={{ x: index % 2 === 0 ? 50 : -50 }}
                      whileInView={{ x: 0 }}
                      transition={{ delay: 0.3 }}
                    >
                      <h3 className="text-3xl font-bold text-gray-800 mb-4">
                        {service.title}
                      </h3>

                      <ul className="space-y-3 mb-6">
                        {service.details.map((detail, i) => (
                          <li key={i} className="text-gray-600 flex items-start">
                            <span className="text-primary mr-2">•</span> {detail}
                          </li>
                        ))}
                      </ul>

                      <p className="text-gray-700 italic">
                        {service.description}
                      </p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
      <ContactForm />
      {/* Servicios (mantener igual) */}
      {/* Sección de Servicios con Efectos Individuales */}

    </div>
  );
};

export default WeddingServices;