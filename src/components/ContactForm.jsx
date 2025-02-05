import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";

const ContactSection = () => {
  // Detectar el scroll de la página
  const { scrollY } = useScroll();
  const bgPosition = useTransform(scrollY, [0, 500], ["0%", "50%"]); // Efecto Parallax

  return (
    <section className="relative h-[500px] flex items-center justify-center text-center text-gray-900">
      {/* Imagen de fondo con efecto Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/BodaenelsalardeUyuni38.jpg')",
          backgroundPositionY: bgPosition,
        }}
      ></motion.div>

      {/* Capa blanca semitransparente */}
      <div className="absolute inset-0 bg-white opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl">
        <h2 className="text-4xl font-bold">Explore our honeymoon packages</h2>
        <p className="mt-4 text-lg">Find the perfect adventure for you and your partner. Get more information!</p>
        <Link to="/contact1">
          <button className="mt-6 px-8 py-3 bg-accent text-white rounded-lg hover:bg-dark transition-all">
            Contact Us
          </button>
        </Link>
      </div>
    </section>
  );
};

export default ContactSection;
