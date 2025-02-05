/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      
      colors: {
        primary: '#BE657E', // Azul intenso para los enlaces
        accent: '#BE657E', // Naranja para hover en los enlaces
        secondary: '#e7dbe3', // Gris para el texto secundario
        background: '#f7f7f7', // Fondo claro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Fuente personalizada
      },
    },
  },
  plugins: [],
};


