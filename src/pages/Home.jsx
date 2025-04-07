import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm"; 
import WeddingServices1 from "../components/WeddingServices1";
import Testimonials from "../components/Testimonials";
import AnimatedContent from '../AnimatedContent/AnimatedContent'



const Home = () => {

  return (

    <div>

      {/* Hero Section */}
      {/* Sección Hero con animaciones mejoradas */}
      <section className="relative h-screen -mt-16 flex items-center justify-center text-center overflow-hidden px-6 md:px-0">
        {/* Fondo con animación de entrada */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/BodaenelSalardeUyuni (5) 12.jpg')" }}
          initial={{ opacity: 0.7, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />

        {/* Contenido principal con animación coordinada */}
        <motion.div
          className="relative z-10 text-center max-w-4xl p-6"
          initial={{ y: 50, opacity: 0, scale: 0.95 }}
          animate={{
            y: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 80,
            damping: 20,
            delay: 0.3
          }}
        >
          {/* Título con efectos mejorados */}
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-bold tracking-wide leading-tight drop-shadow-2xl"
            style={{ textShadow: "2px 2px 15px rgba(202, 199, 199, 0.5)" }}
          >
            Uyuni Salt Flats Weddings
          </motion.h1>

          {/* Descripción con animación escalonada */}
          <motion.p
            className="mt-6 text-xl md:text-2xl font-light max-w-2xl mx-auto italic  p-4 rounded-lg backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            A magical experience in Bolivia's breathtaking salt flats.
          </motion.p>

          {/* Botón con efectos mejorados */}
          <motion.button
            className="mt-8 px-10 py-4 bg-primary/90 hover:bg-primary text-white text-lg rounded-full transition-all shadow-lg hover:shadow-xl"
            whileHover={{
              scale: 1.05,
              y: -3
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById("why-uyuni").scrollIntoView({ behavior: "smooth" })}
            aria-label="Start planning your wedding"
          >
            Start Planning
          </motion.button>
        </motion.div>
      </section>

      {/* Why Uyuni (Se mantiene con los 3 recuadros y sin enlace) */}
      <section id="why-uyuni" className="py-16 bg-white text-center">
        <AnimatedContent
          distance={150}
          direction="vertical"
          reverse={false}
          config={{ tension: 50, friction: 25 }}
          initialOpacity={0.7}
          animateOpacity
          scale={1.2}
          threshold={0.2}
        >
          <div>
          <h2 className="text-4xl font-serif font-bold text-gray-800">
            Why Choose Uyuni?
          </h2>
          <div className="grid gap-8 md:grid-cols-3 mt-10 max-w-6xl mx-auto">
            {[
              {
                title: "Unparalleled Beauty",
                desc: "The pristine white landscape offers a surreal and stunning backdrop.",
              },
              {
                title: "Unique Photo Opportunities",
                desc: "Capture mesmerizing photos with unique light and perspective.",
              },
              {
                title: "Intimate and Exclusive",
                desc: "Celebrate your day in a peaceful, secluded setting.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-serif font-semibold text-gray-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
          </div>
        </AnimatedContent>
      </section>

      {/* Wedding Services (Resumen con enlace) */}
      <section className="py-16 bg-secondary text-center">
        <h2 className="text-4xl font-bold text-gray-800">Wedding Services</h2>

        <Link to="/services" >
          <WeddingServices1 />
          <button className="mt-6 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary transition-all">
            View Services
          </button>
        </Link>
      </section>
      {/* Otras secciones */}
      <Testimonials />
      {/* Contact Form */}
      <ContactForm />
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

export default Home;
