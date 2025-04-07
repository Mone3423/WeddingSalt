import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  // Detectar tamaño de pantalla
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Control del scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  // Animaciones para el menú desplegable
  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <nav className="bg-transparent shadow-md fixed top-0 w-full z-50 p-0 m-0">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-raleway text-white">
          Uyuni Weddings
        </Link>

        {/* Menú Desktop */}
        <div className="hidden md:flex space-x-6 relative text-white text-raleway">
          <Link to="/" className="nav-link">Home</Link>
          
          {/* Menú Desplegable */}
          <div 
            className="relative"
            onMouseEnter={() => !isMobile && setDropdownOpen(true)}
            onMouseLeave={() => !isMobile && setDropdownOpen(false)}
          >
            <motion.button
              onClick={() => isMobile && setDropdownOpen(!dropdownOpen)}
              className="nav-link flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              Packages <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }}>▾</motion.span>
            </motion.button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={dropdownVariants}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-lg border border-gray-100"
                >
                  <Link 
                    to="/packages" 
                    className="dropdown-link"
                    onClick={() => setDropdownOpen(false)}
                  >
                    Uyuni Packages
                  </Link>
                  <Link 
                    to="/packages/lapaz" 
                    className="dropdown-link"
                    onClick={() => setDropdownOpen(false)}
                  >
                    La Paz Packages
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/blog" className="nav-link">Blog</Link>
          <Link to="/faqs" className="nav-link">FAQ</Link>
          <Link to="/contact1" className="nav-link">Contact</Link>
        </div>

        {/* Botón de Menú Móvil */}
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
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

// Estilos reutilizables
const navLinkStyle = "hover:text-rose-600 transition-colors duration-300 py-2 px-3 rounded-lg";
const dropdownLinkStyle = "block px-6 py-3 hover:bg-rose-50 transition-colors duration-200 text-gray-700";

export default Navbar;