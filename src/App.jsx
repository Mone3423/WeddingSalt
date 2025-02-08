import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WeddingPackages from "./components/WeddingPackages";
import WeddingServices from "./pages/WeddingServices";
import WeddingServices1 from "./components/WeddingServices1";
import ContactForm1 from "./components/Contactform1";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import BlogPage from "./pages/BlogPage";
import FAQ from "./pages/FAQ";
import BlogDetailPage from "./pages/BlocgDetailPage"
import Testimonials from "./components/TestimonialCard"
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop"; // Importamos el fix

function App() {
  return (
    <div className="font-sans mt-16 bg-background ">
      <Navbar />
      <ScrollToTop /> {/* Agregamos el fix aquí */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<WeddingPackages />} />
        <Route path="/services" element={<WeddingServices />} />
        <Route path="/services1" element={<WeddingServices1 />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/faqs" element={<FAQ />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact1" element={<ContactForm1 />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/testimonials/" element={<Testimonials />} />
      </Routes>
      <WhatsAppButton /> {/* Botón flotante siempre visible */}
      <Footer />
    </div>
  );
}

export default App;
