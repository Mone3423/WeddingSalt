import { Link } from "react-router-dom";

const MobileMenu = ({ setMenuOpen }) => {
  return (
    <div className="md:hidden bg-white shadow-md absolute w-full">
      <div className="flex flex-col items-center py-4">
        <Link to="/" className="py-2" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/packages" className="hover:text-blue-500">Packages</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/portfolio" className="hover:text-blue-500">Portfolio</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>
          <Link to="/faqs" className="hover:text-blue-500">FAQ</Link>
          <Link to="/contact1" className="hover:text-blue-500">Contact</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
