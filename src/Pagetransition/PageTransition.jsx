import { motion, AnimatePresence } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
      >
        {children}
        
        {/* Efecto de carga */}
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-50"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        
        <motion.div
          className="fixed top-0 left-0 w-full h-full bg-white z-50"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;