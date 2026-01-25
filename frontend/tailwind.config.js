/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cafe-primary': '#8B4513',    // Tu marrón tierra
        'cafe-secondary': '#D4A373',  // Beige suave
        'cafe-dark': '#362f2d',       // Casi negro
        'cafe-light': '#FBF8F4',      // Crema fondo
        'cafe-footer': '#2c2927',     // Gris footer
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '2rem',
      }
    },
  },
  plugins: [],
}