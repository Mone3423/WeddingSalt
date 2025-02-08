import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const phoneNumber = "71948121"; // Cambia esto con tu número de WhatsApp

  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg flex items-center justify-center w-16 h-16"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <img
        src="/images/whatsapp-icon.svg" // Asegúrate de tener este ícono en `public/images/`
        
        alt="WhatsApp"
        className="w-8 h-8"
      />
    </motion.a>
  );
};

export default WhatsAppButton;
