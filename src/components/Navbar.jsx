import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Uyuni Weddings
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/packages" className="hover:text-blue-500">Packages</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/faqs" className="hover:text-blue-500">FAQ</Link>
          <Link to="/contact1" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Botón de Menú Móvil */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          whileTap={{ scale: 0.9, rotate: menuOpen ? 90 : 0 }}
        >
          <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </motion.button>
      </div>

      {/* Menú Móvil */}
      <AnimatePresence>
        {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;

