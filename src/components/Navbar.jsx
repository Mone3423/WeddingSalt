import { useState } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          Uyuni Weddings
        </Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/packages" className="hover:text-blue-500">Packages</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/faqs" className="hover:text-blue-500">FAQ</Link>
          <Link to="/contact1" className="hover:text-blue-500">Contact</Link>
        </div>

        {/* Botón Menú Móvil */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú Móvil */}
      {menuOpen && <MobileMenu setMenuOpen={setMenuOpen} />}
    </nav>
  );
};

export default Navbar;
