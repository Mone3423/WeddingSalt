import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-lg font-serif">
        © {new Date().getFullYear()} Uyuni Weddings. All rights reserved.
      </p>
      <div className="mt-6 flex justify-center space-x-6">
        <a href="#" className="text-gray-400 hover:text-accent transition-all">
          Privacy Policy
        </a>
        <a href="#" className="text-gray-400 hover:text-accent transition-all">
          Terms of Service
        </a>
      </div>
    </div>
  </footer>
  
  );
};

export default Footer;
