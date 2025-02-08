import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = ({ setMenuOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }} // Empieza fuera de la pantalla
      animate={{ x: 0 }} // Entra desde la derecha
      exit={{ x: "100%" }} // Sale hacia la derecha
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    >
      {/* Menú */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="w-3/4 sm:w-1/2 bg-white shadow-lg h-full flex flex-col items-center py-10 space-y-6"
      >
        {/* Botón de cerrar */}
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-gray-600 text-3xl px-6"
        >
          ✖
        </button>

        {/* Enlaces del menú */}
        <nav className="flex flex-col items-center space-y-6 text-lg font-medium">
          <Link to="/" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/packages" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Packages</Link>
          <Link to="/services" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Services</Link>
          <Link to="/portfolio" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Portfolio</Link>
          <Link to="/blog" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Blog</Link>
          <Link to="/faqs" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>FAQ</Link>
          <Link to="/contact1" className="hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
        </nav>
      </motion.div>
    </motion.div>
  );
};

export default MobileMenu;
