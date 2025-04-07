import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const MobileMenu = ({ setMenuOpen }) => {
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed inset-0 bg-black/50 z-50 flex justify-end"
    >
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        transition={{ duration: 0.3 }}
        className="w-3/4 sm:w-1/2 bg-white shadow-lg h-full flex flex-col py-10 space-y-2"
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="self-end text-gray-600 text-3xl px-6 mb-8 hover:text-rose-600 transition-colors"
        >
          ✖
        </button>

        <nav className="flex flex-col space-y-2 text-lg font-medium px-6">
          <Link 
            to="/" 
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          
          {/* Menú desplegable de Paquetes */}
          <div className="flex flex-col">
            <button 
              className="mobile-menu-link flex items-center justify-between"
              onClick={() => setIsPackagesOpen(!isPackagesOpen)}
            >
              <span>Packages</span>
              <motion.span
                animate={{ rotate: isPackagesOpen ? 180 : 0 }}
                className="text-sm"
              >
                ▼
              </motion.span>
            </button>

            <AnimatePresence>
              {isPackagesOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="pl-4"
                >
                  <Link
                    to="/packages"
                    className="mobile-menu-sub-link"
                    onClick={() => {
                      setMenuOpen(false);
                      setIsPackagesOpen(false);
                    }}
                  >
                    Uyuni Packages
                  </Link>
                  <Link
                    to="/packages/lapaz"
                    className="mobile-menu-sub-link"
                    onClick={() => {
                      setMenuOpen(false);
                      setIsPackagesOpen(false);
                    }}
                  >
                    La Paz Packages
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link 
            to="/services" 
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/portfolio" 
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link 
            to="/blog" 
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/faqs" 
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link 
            to="/contact1" 
            className="mobile-menu-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </nav>
      </motion.div>
    </motion.div>
  );
};

// Estilos reutilizables
const mobileMenuLink = "py-3 px-4 hover:bg-rose-50 rounded-lg text-gray-700 hover:text-rose-600 transition-colors";
const mobileMenuSubLink = "py-2 px-4 block text-gray-600 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors text-base";

export default MobileMenu;