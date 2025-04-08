import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PaymentInfo from "../components/PaymentInfo"

const heroImages = [
  "/images/LAPAZ/WeddingsPhotos3.jpg",
  "/images/LAPAZ/WeddingsPhotos4.jpg",
  "/images/LAPAZ/WeddingsPhotos5.jpg",
];

const packages = [
  {
    title: "Esencial Package",
    price: "$750",
    description: "Comprehensive coverage with a lead photographer and two videographers for a complete wedding documentation.",
    images: [
      "/images/LAPAZ/WeddingsPhotos1.jpg",
      "/images/LAPAZ/WeddingsPhotos6.jpg",
      "/images/LAPAZ/WeddingsPhotos14.jpg",
    ],
    features: [
      "Lead photographer + Two videographers",
      "7-hour coverage (civil/religious ceremony, couple session, reception)",
      "Digital delivery of photos & video on USB"
    ],
    photo: [
      "400-500 edited high-resolution photos",
      "50 postcard-sized prints"
    ],
    film: [
      "15-20 minute documentary video including:",
      "- Ceremony",
      "- Couple session",
      "- Toast",
      "- First dance",
      "- Party",
      "- Garter toss",
      "- Bouquet toss",
      "- Cake cutting",
      "3-5 minute highlights reel"
    ]
  },
  {
    title: "Classic Package",
    price: "$1.250",
    description: "Complete professional coverage for traditional weddings",
    images: [
      "/images/LAPAZ/WeddingsPhotos2.jpg",
      "/images/LAPAZ/WeddingsPhotos8.jpg",
      "/images/LAPAZ/WeddingsPhotos10.jpg",
    ],
    features: [
      "Lead photographer + Two filmmakers + Assistant",
      "Pre-wedding and post-wedding sessions (2 hours each)",
      "9-hour coverage (preparations, ceremonies, reception)",
      "Digital delivery on USB"
    ],
    photo: [
      "600-700 edited high-resolution photos",
      "80 postcard-sized prints",
      "Premium photo book 20x30cm (20 pages)"
    ],
    film: [
      "20-25 minute documentary video including:",
      "• Getting ready",
      "• Civil/religious ceremony",
      "• Couple session",
      "• Toast and first dance",
      "• Full party coverage",
      "• Traditions (garter toss, bouquet toss, cake cutting)",
      "3-5 minute cinematic highlights"
    ]
  },
  {
    title: "Premium Elite",
    price: "$1.667*", // *Conversión aproximada
    description: "Ultimate wedding coverage with professional team and drone technology",
    images: [
      "/images/LAPAZ/WeddingsPhotos14.jpg",
      "/images/LAPAZ/WeddingsPhotos1.jpg",
      "/images/LAPAZ/WeddingsPhotos6.jpg"
    ],
    features: [
      "Two photographers + Two filmmakers + Assistants",
      "Pre-wedding & post-wedding sessions (3 hours each)",
      "Full-day wedding coverage (12+ hours)",
      "Aerial photography & videography with professional drone",
      "Premium USB delivery with custom design"
    ],
    photo: [
      "800-1000 edited high-resolution photos",
      "100 postcard prints (4x6 in)",
      "Premium 12x12in hardcover photo book (30 pages)",
      "Two 8x8in mini photo books for parents/godparents"
    ],
    film: [
      "30-40 minute cinematic documentary including:",
      "• Pre-wedding preparations",
      "• Full ceremony coverage",
      "• Professional couple session",
      "• Complete toast & speeches",
      "• First dance highlights",
      "• Full party documentation",
      "• Traditions (garter/bouquet toss, cake cutting)",
      "• Post-wedding moments & farewell",
      "5-7 minute drone highlights reel",
      "Social media version (1 minute)"
    ]
  },
  {
    title: "Intimate Essence",
    price: "$217", // *Conversión aproximada
    description: "Tailored coverage for small weddings and private ceremonies",
    images: [
      "/images/LAPAZ/WeddingsPhotos7.jpg",
      "/images/LAPAZ/WeddingsPhotos15.jpg",
      "/images/LAPAZ/WeddingsPhotos16.jpg"
    ],
    features: [
      "Lead photographer + Two filmmakers",
      "2-4 hour coverage",
      "Essential moments: civil ceremony, couple session, first dance",
      "Digital delivery on premium USB"
    ],
    photo: [
      "100-200 edited high-resolution photos",
      "1 premium 12x16in print on Trupan board (frame not included)"
    ],
    film: [
      "5-10 minute cinematic highlights featuring:",
      "• Civil ceremony key moments",
      "• Best couple session shots",
      "• First dance highlights",
      "• Emotional details and reactions"
    ]
  }

];

// Función para convertir Bs a USD
const convertToUSD = (bs) => (bs / 12).toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const addOns = [
  { title: "Pre-Wedding Session", priceBs: 850 },
 { title: "Post-Wedding Session", priceBs: 950 },
 { title: "Extra Hour", priceBs: 700 },
 { title: "Drone Service", priceBs: 550 },
];

const photoBooks = [
  { size: "20 x 20 cm", priceBs: 1500 },
  { size: "25 x 25 cm", priceBs: 2500 },
  { size: "30 x 30 cm", priceBs: 4000 },
];
const LaPazPackages = () => {
  const [currentHeroImage, setCurrentHeroImage] = useState(0);
  const [imageIndexes, setImageIndexes] = useState(packages.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) =>
        prevIndexes.map((index, i) => (index + 1) % packages[i].images.length)
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-white text-gray-900 font-serif">

      {/* Hero Section con animación de título */}
      <motion.section className="relative h-screen -mt-16 flex items-center justify-center text-center overflow-hidden px-6 md:px-0">

        {/* Imagen de fondo con degradado */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0)), url(${heroImages[currentHeroImage]})`
          }}

          initial={{ opacity: 0.7, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Contenedor de texto con fondo oscuro semitransparente */}
        <motion.div
          className="relative z-10 text-white text-center md:text-left max-w-lg p-6 rounded-md"
          initial={{ y: 0, opacity: 1 }}
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
          {/* Título con mejor visibilidad */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif drop-shadow-2xl"
            style={{
              textShadow: "2px 2px 10px rgba(0,0,0,0.6)",
            }}
          >
            WEDDING COLLECTIONS
          </motion.h1>

          {/* Descripción con fondo oscuro para más contraste */}
          <motion.p
            className="text-xl md:text-2xl text-white/90 italic"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1.5 }}
          >
            Do you dream of capturing every moment of your wedding in images that will touch your heart forever?
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Paquetes */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className="group mb-28 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-20% 0px" }}
          >
            <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row-reverse" : ""} gap-8`}>
              {/* Sección de Imágenes */}
              <div className="lg:w-1/2 relative">
                <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                  <AnimatePresence mode='wait'>
                    <motion.img
                      key={imageIndexes[index]}
                      src={pkg.images[imageIndexes[index]]}
                      alt={pkg.title}
                      className="w-full h-full object-cover absolute inset-0"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                    />
                  </AnimatePresence>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {pkg.images.map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${i === imageIndexes[index] ? "bg-white" : "bg-white/50"
                          }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Contenido del Paquete */}
              <div className="lg:w-1/2 flex flex-col justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="mb-6">
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">
                      {pkg.title}
                    </h2>
                    <p className="text-2xl text-primary font-semibold mb-4">
                      {pkg.price}
                    </p>
                    <p className="text-lg text-gray-600 italic">
                      {pkg.description}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Características Principales */}
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">
                        Incluye:
                      </h3>
                      <ul className="space-y-3">
                        {pkg.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700">
                            <svg
                              className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Detalles de Foto y Video */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <span className="mr-2">📸</span> Photo
                        </h3>
                        <ul className="space-y-2">
                          {pkg.photo.map((item, i) => (
                            <li key={i} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                          <span className="mr-2">🎥</span> Film
                        </h3>
                        <ul className="space-y-2">
                          {pkg.film.map((item, i) => (
                            <li key={i} className="text-gray-700 pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-primary">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="max-w-4xl mx-auto p-6 bg-red-50 min-h-screen">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        CUSTOMIZE YOUR PACKAGES
        </h2>

        {/* Sección de Add-ons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {addOns.map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
                
              </div>
              <p className="text-2xl font-bold text-primary">
                {convertToUSD(item.priceBs)}
              </p>
            </div>
          ))}
        </div>

        {/* Sección de Fotolibros */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
          PREMIUM PHOTOBOOKS
          </h3>

          <div className="space-y-6">
            {photoBooks.map((book, index) => (
              <div key={index} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">{book.size}</span>
                  <div className="text-right">
                  
                    <p className="text-xl font-bold text-primary">
                      {convertToUSD(book.priceBs)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
        * Exchange rate: 1 USD = 12 Bs
        </p>
      </div>
      <div>
      <PaymentInfo/>
      </div>

    </div>
  );
};

export default LaPazPackages;