import { useState } from "react";
import emailjs from "@emailjs/browser";
import SectionTitle from "../components/SectionTitle";

export default function Contact1() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    service: "Customized Ceremonies",
    honeymoon: "",
  });

  const services = ["Customized Ceremonies", "Photography & Videography", "Accommodation", "Catering"];
  const honeymoonPackages = [
    { title: "Salt Flat Explorer Package", duration: "5 days / 4 nights" },
    { title: "Adventure Lovers Package", duration: "7 days / 6 nights" },
    { title: "Luxury Retreat Package", duration: "10 days / 9 nights" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        () => alert("Message sent successfully! ✅"),
        (error) => alert("Error sending message. ❌ Try again.")
      );
  };

  return (
    <div className="max-w-6xl mx-auto p-8 bg-white shadow-md rounded-lg grid md:grid-cols-2 gap-8">
      {/* About Us Section */}
      <div>
    <SectionTitle title="About Us" />
    <p className="text-gray-700 mb-4">
      At <span className="font-semibold">Uyuni Weddings</span>, we are passionate about creating extraordinary wedding experiences in one of the world’s most unique locations - the Salar de Uyuni salt flats in Bolivia.
    </p>

    <h3 className="text-xl font-semibold text-accent">Our Story</h3>
    <p className="text-gray-700 mb-4">
      Our journey began in 2015 when our founder, a local photographer, fell in love with the idea of helping couples celebrate their love in this surreal landscape. What started as a small team of enthusiastic locals has grown into a group of wedding planning experts, photographers, and hospitality professionals.
    </p>

    <h3 className="text-xl font-semibold text-accent">Our Mission</h3>
    <ul className="list-disc pl-5 text-gray-700 mb-4">
      <li>Create bespoke wedding experiences that reflect each couple’s unique vision</li>
      <li>Showcase the natural wonder of Bolivia’s salt flats</li>
      <li>Support local communities through sustainable tourism</li>
      <li>Provide unparalleled service from inquiry to final farewell</li>
    </ul>

    <h3 className="text-xl font-semibold text-accent">Why Choose Us?</h3>
    <ul className="list-disc pl-5 text-gray-700">
      <li><span className="font-semibold">Unrivaled Experience:</span> Experts in Uyuni Salt Flat weddings</li>
      <li><span className="font-semibold">Local Expertise:</span> Strong connections with local vendors</li>
      <li><span className="font-semibold">Attention to Detail:</span> We handle everything from legal paperwork to perfect sunset lighting</li>
      <li><span className="font-semibold">Passion for Excellence:</span> We create unforgettable memories</li>
    </ul>
  </div>


      {/* Contact Form */}
      <div>
        <SectionTitle title="Contact Us" />


        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />

          <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500" />

          <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32"></textarea>

          <select name="service" value={formData.service} onChange={handleChange}
            className="w-full p-3 border rounded-lg">
            {services.map((service) => (
              <option key={service} value={service}>{service}</option>
            ))}
          </select>

          <select name="honeymoon" value={formData.honeymoon} onChange={handleChange}
            className="w-full p-3 border rounded-lg">
            <option value="">Select Honeymoon Package (Optional)</option>
            {honeymoonPackages.map((packageItem) => (
              <option key={packageItem.title} value={packageItem.title}>
                {packageItem.title} ({packageItem.duration})
              </option>
            ))}
          </select>

          <button type="submit" className="w-full bg-primary text-white p-3 rounded-lg hover:bg-blue-700">
            Send Message ✉️
          </button>
        </form>

        {/* Social Media Links */}
        <div className="mt-6 text-center">
          <h3 className="text-lg font-semibold">Follow us on social media 🌍</h3>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/1409/1409946.png" alt="Instagram" className="w-8" />
            </a>
            <a href="https://wa.me/YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" alt="WhatsApp" className="w-8" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

