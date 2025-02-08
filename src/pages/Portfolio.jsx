import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

// Lista de imágenes del portafolio
const portfolioImages = [
  "WeddingSalardeUyuni38", "WeddingSalardeUyuni20", "WeddingSalardeUyuni21",
  "WeddingSalardeUyuni22", "WeddingSalardeUyuni37", "WeddingSalardeUyuni24",
  "WeddingSalardeUyuni25", "WeddingSalardeUyuni26", "WeddingSalardeUyuni27",
  "WeddingSalardeUyuni29", "WeddingSalardeUyuni28", "WeddingSalardeUyuni30",
  "WeddingSalardeUyuni31", "WeddingSalardeUyuni32", "WeddingSalardeUyuni34",
  "WeddingSalardeUyuni36", "WeddingSalardeUyuni44", "WeddingSalardeUyuni45",
  "WeddingSalardeUyuni46", "WeddingSalardeUyuni47", "WeddingSalardeUyuni48",
  "WeddingSalardeUyuni49", "WeddingSalardeUyuni50", "WeddingUyuniSaltWalts9",
  "WeddingUyuniSaltWalts10", "WeddingUyuniSaltWalts11", "WeddingUyuniSaltWalts12",
  "WeddingUyuniSaltWalts13", "WeddingUyuniSaltWalts14", "WeddingUyuniSaltWalts15",
  "WeddingUyuniSaltWalts16", "WeddingUyuniSaltWalts17", "WeddingUyuniSaltWalts18",
  "WeddingUyuniSaltWalts19", "WeddingUyuniSaltWalts20", "WeddingUyuniSaltWalts21",
  "WeddingUyuniSaltWalts22", "WeddingUyuniSaltWalts23", "WeddingUyuniSaltWalts24"
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Función para abrir el slider
  const openSlider = (index) => {
    setCurrentIndex(index);
    setSelectedImage(portfolioImages[index]);
  };

  // Función para cerrar el slider
  const closeSlider = () => {
    setSelectedImage(null);
  };

  // Función para navegar con teclado
  const handleKeyDown = useCallback((e) => {
    if (!selectedImage) return;
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") closeSlider();
  }, [selectedImage]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Función para tocar en móviles (deslizar izquierda/derecha)
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    if (touchStart - touchEnd > 50) nextImage(); // Deslizar izquierda (siguiente)
    if (touchEnd - touchStart > 50) prevImage(); // Deslizar derecha (anterior)
  };

  // Función para avanzar de imagen
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % portfolioImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioImages[newIndex]);
  };

  // Función para retroceder de imagen
  const prevImage = () => {
    const newIndex = (currentIndex - 1 + portfolioImages.length) % portfolioImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioImages[newIndex]);
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-accent">Our Wedding Portfolio</h2>
        <p className="mt-4 text-lg">Discover the magic of Salar de Uyuni weddings through our stunning gallery.</p>
      </div>

      {/* Grid de imágenes con Lazy Loading */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {portfolioImages.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            viewport={{ once: true }}
            onClick={() => openSlider(index)}
          >
            <img
              src={`/images/${image}.jpg`}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
              loading="lazy" // Lazy Loading para optimización
            />
          </motion.div>
        ))}
      </div>

      {/* Modal de Slider con swipe y navegación por teclado */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="relative max-w-4xl mx-auto p-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Botón de Cerrar */}
              <button onClick={closeSlider} className="absolute top-4 right-4 text-white text-3xl font-bold">
                ✖
              </button>

              {/* Imagen actual en el slider */}
              <img
                src={`/images/${selectedImage}.jpg`}
                alt="Selected"
                className="w-full h-[500px] object-contain rounded-lg"
              />

              {/* Controles de navegación */}
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button onClick={prevImage} className="text-white text-4xl font-bold">❮</button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button onClick={nextImage} className="text-white text-4xl font-bold">❯</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Wedding Packages (Resumen con enlace) */}
      <section className="py-16 bg-white text-center">
          <h2 className="text-4xl font-bold text-gray-800">Wedding Packages</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Choose from our specially designed wedding packages, from intimate elopements to luxurious celebrations.
          </p>
          <Link to="/packages">
            <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary transition-all">
              Explore Packages
            </button>
          </Link>
        </section>
    </div>
  );
};

export default Portfolio;
