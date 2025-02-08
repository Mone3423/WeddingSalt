import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ContactForm from "../components/ContactForm";
import WeddingServices1 from "../components/WeddingServices1";
import Testimonials from "../components/Testimonials";



const Home = () => {

  return (

    <div>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{ backgroundImage: "url('/images/BodaenelSalardeUyuni (5) 12.jpg')" }}
        ></div>

        {/* Contenido */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl md:text-7xl font-serif font-bold">
            Uyuni Salt Flats Weddings
          </h1>
          <p className="mt-4 text-lg md:text-xl font-light max-w-2xl mx-auto">
            A magical experience in Bolivia's breathtaking salt flats.
          </p>
          <motion.button
            className="mt-6 px-8 py-3 bg-primary text-white rounded-full hover:bg-primary transition-all"
            whileHover={{ scale: 1.1 }}
            onClick={() => document.getElementById("why-uyuni").scrollIntoView({ behavior: "smooth" })}
          >
            Start Planning
          </motion.button>
        </motion.div>
      </section>

      {/* Why Uyuni (Se mantiene con los 3 recuadros y sin enlace) */}
      <section id="why-uyuni" className="py-16 bg-white text-center">
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
