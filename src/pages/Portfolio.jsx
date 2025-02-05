import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Lista de imágenes del portafolio
const portfolioImages = [
  ,
  "WeddingSalardeUyuni38",
  "WeddingSalardeUyuni20",
  "WeddingSalardeUyuni21",
  "WeddingSalardeUyuni22",
  "WeddingSalardeUyuni37",
  "WeddingSalardeUyuni24",
  "WeddingSalardeUyuni25",
  "WeddingSalardeUyuni26",
  "WeddingSalardeUyuni27",
  "WeddingSalardeUyuni29",
  "WeddingSalardeUyuni28",
  "WeddingSalardeUyuni30",
  "WeddingSalardeUyuni31",
  "WeddingSalardeUyuni32",
  "WeddingSalardeUyuni34",
  "WeddingSalardeUyuni36",
  "WeddingSalardeUyuni44",
  "WeddingSalardeUyuni45",
  "WeddingSalardeUyuni46",
  "WeddingSalardeUyuni47",
  "WeddingSalardeUyuni48",
  "WeddingSalardeUyuni49",
  "WeddingSalardeUyuni50",
  "WeddingUyuniSaltWalt9",
  "WeddingUyuniSaltWalt10",
  "WeddingUyuniSaltWalt11",
  "WeddingUyuniSaltWalt12",
  "WeddingUyuniSaltWalt13",
  "WeddingUyuniSaltWalt14",
  "WeddingUyuniSaltWalt15",
  "WeddingUyuniSaltWalt16",
  "WeddingUyuniSaltWalt17",
  "WeddingUyuniSaltWalt18",
  "WeddingUyuniSaltWalt19",
  "WeddingUyuniSaltWalt20",
  "WeddingUyuniSaltWalt21",
  "WeddingUyuniSaltWalt22",
  "WeddingUyuniSaltWalt23",
  "WeddingUyuniSaltWalt24",
  "WeddingUyuniSaltWalt25",
  "WeddingUyuniSaltWalt26",
  "WeddingUyuniSaltWalt27",
  "WeddingUyuniSaltWalt28",
  "WeddingUyuniSaltWalt29",
  "WeddingUyuniSaltWalt30",
  "WeddingUyuniSaltWalt31",
  "WeddingUyuniSaltWalt32",
  "WeddingUyuniSaltWalt33",
  "WeddingUyuniSaltWalt34",
  "WeddingUyuniSaltWalt35",
  "WeddingUyuniSaltWalt36",
  "WeddingUyuniSaltWalt37",
  "WeddingUyuniSaltWalt38",
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null); // Imagen seleccionada
  const [currentIndex, setCurrentIndex] = useState(0); // Índice actual en el slider

  // Función para abrir el slider
  const openSlider = (index) => {
    setCurrentIndex(index);
    setSelectedImage(portfolioImages[index]);
  };

  // Función para cerrar el slider
  const closeSlider = () => {
    setSelectedImage(null);
  };

  // Funciones para navegar entre imágenes
  const nextImage = () => {
    const newIndex = (currentIndex + 1) % portfolioImages.length;
    setCurrentIndex(newIndex);
    setSelectedImage(portfolioImages[newIndex]);
  };

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

      {/* Grid de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {portfolioImages.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => openSlider(index)} // Abre la imagen al hacer clic
          >
            <img
              src={`/images/${image}.jpg`}
              alt={`Portfolio ${index + 1}`}
              className="w-full h-80 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal de Slider (Aparece si hay una imagen seleccionada) */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Contenedor de la imagen */}
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
    </div>
  );
};

export default Portfolio;
