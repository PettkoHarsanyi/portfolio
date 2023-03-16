/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: "burtons",
      },
      boxShadow:{
        card: "0 0 2rem 0.2rem",
        hoveredCardDark: "0 0 1rem 0.5rem #fb923c",
        hoveredCardLight: "0 0 1rem 0.5rem #0c4a6e",
      },
      height:{
        500: "500px"
      }
    },
  },
  plugins: [],
}