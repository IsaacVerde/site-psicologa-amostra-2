/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A2340', 
        secondary: '#C5A47E', 
        background: '#FDFCF8', 
        surface: '#F5F0EB', 
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        rounded: ['"Quicksand"', 'sans-serif'], // Nova fonte arredondada
      },
      borderRadius: {
        'organic': '2rem 3rem 2rem 3rem', // Curvas irregulares para a foto
      }
    },
  },
  plugins: [],
}