import React, { useState, useEffect } from "react"; 
import { motion, useScroll, useTransform } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm"; 
const honeymoonImages = [
  "/images/WeddingUyuniSaltWalts14.jpg",
  "/images/WeddingUyuniSaltFlats (8) 40.jpg",
  "/images/WeddingUyuniSaltWalts14.jpg",
];

const packages = [
  {
    title: "Salt Flat Explorer Package",
    duration: "Full day tour",
    image: "/images/WeddingUyuniSaltFlats (3) 35.jpg", // Agregar ruta de imagen
    price: "Starting from $2,000 per couple",
    details: [
      "Luxury accommodation in a salt hotel (first night)",
      "Private guided tour of Salar de Uyuni",
      "Sunrise photography session on the salt flats",
      "Romantic dinner",
      "Visit to Incahuasi Island"
    ],
  },
  {
    title: "Luxury Retreat Package",
    duration: "2 days/1 night",
    image: "/images/BodaenelSalardeUyuni (10) 2.jpg", // Agregar ruta de imagen
    price: "$2,500 per couple",
    details: [
      "Luxury accommodation in a salt hotel",
      "Private guided tour of Salar de Uyuni",
      "Sunset photography session on the salt flats",
      "Romantic dinner",
      "Visit to Incahuasi Island",
      "Stargazing experience"
    ],
  },
  {
    title: "Adventure Lovers Package",
    duration: "3 days/2 nights",
    image: "/images/WeddingSalardeUyuni39.jpg", // Agregar ruta de imagen
    price: "$3,500 per couple",
    details: [
      "Accommodation in various unique locations (salt hotel, desert ecolodge)",
      "Extended Salar de Uyuni exploration",
      "4x4 excursion to surrounding attractions (colored lagoons, Licancabur Volcano)",
      "Flamingo watching at Laguna Colorada",
      "Stargazing night with private guide"
    ],
  }
];

const WeddingPackages = ({ isFirstMount }) => {
  const { scrollYProgress } = useScroll();
  const backgroundPosition = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  // Estado para las imágenes del honeymoon
  const [currentHoneymoonImage, setCurrentHoneymoonImage] = useState(0);
  
  // Efecto para rotar imágenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHoneymoonImage(prev => (prev + 1) % honeymoonImages.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []); // Dependencia vacía = solo al montar

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: isFirstMount ? 0 : 1, y: isFirstMount ? 40 : 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1.2,
          ease: [0.33, 1, 0.68, 1],
          delay: isFirstMount ? 1.2 : 0 
        }}
        className="relative h-screen -mt-16 flex items-center justify-center text-center overflow-hidden px-6 md:px-0"
      >
        {/* Imagen de fondo con transición */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${honeymoonImages[currentHoneymoonImage]})`,
          }}
          initial={{ opacity: 0.7, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Contenido animado */}
        <motion.div
          className="relative z-10 max-w-4xl p-6"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: ["0vh", "-15vh"],
            scale: [1, 0.9],
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 65,
            damping: 18,
            delay: 1.2
          }}
        >
  <motion.h1
    className="text-5xl md:text-6xl font-bold drop-shadow-2xl text-white font-serif tracking-wide"
    initial={{ letterSpacing: "0.3em", opacity: 0 }}
    animate={{ letterSpacing: "0.1em", opacity: 1 }}
    transition={{ 
      type: "spring",
      stiffness: 80,
      damping: 25,
      delay: 0.8
    }}
  >
    HONEYMOON PACKAGES
  </motion.h1>

  <motion.p
    className="mt-6 text-lg md:text-xl font-light max-w-xl mx-auto bg-black/40 p-4 rounded-lg backdrop-blur-sm text-white italic"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ 
      delay: 2, 
      duration: 1.2, 
      ease: "easeInOut" 
    }}
  >
    Extend the magic of your wedding with our exclusive honeymoon experiences.
  </motion.p>
</motion.div>
</motion.section>

      {/* Lista de Paquetes con Scroll Vertical */}
<div className="max-w-6xl mx-auto py-16 px-6">
  <SectionTitle title="Our Honeymoon Packages" />
  
  <div className="space-y-32"> {/* Espacio entre secciones */}
    {packages.map((pkg, index) => (
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
                {index % 2 === 0 ? "Live the Experience" : "Discover the Magic"}
              </h4>
              <p className="text-lg md:text-xl italic">
                {pkg.details[0]}
              </p>
            </motion.div>
          </div>
          <img
            src={pkg.image}
            alt={`${pkg.title} full view`}
            className="w-full h-full object-cover absolute inset-0"
          />
        </motion.div>
        {/* Sección de Paquete */}
        <motion.div 
        
          className={`relative bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} min-h-[80vh]`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: isFirstMount ? 1.4 : 0.2 }}
  
        >
          {/* Contenido del Paquete */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{pkg.title}</h3>
              <p className="text-lg md:text-xl text-primary font-semibold mb-6">{pkg.duration}</p>
              <ul className="space-y-3 mb-8">
                {pkg.details.map((detail, i) => (
                  <motion.li 
                    key={i}
                    className="text-gray-600 flex items-start"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <span className="text-primary mr-2">•</span> {detail}
                  </motion.li>
                ))}
              </ul>
              <motion.p
                className="text-xl md:text-2xl font-bold text-gray-900"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                {pkg.price}
              </motion.p>
            </motion.div>
          </div>

          {/* Imagen del Paquete */}
          <motion.div 
            className="md:w-1/2 relative overflow-hidden min-h-[400px]"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <img
              src={pkg.image}
              alt={pkg.title}
              className="w-full h-full object-cover absolute inset-0"
            />
          </motion.div>
        </motion.div>

       
      </React.Fragment>
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
      <ContactForm/>
    </div>
  );
};

export default WeddingPackages;
