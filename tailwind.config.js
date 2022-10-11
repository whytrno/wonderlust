/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
        'poppins': ['"Poppins"', 'sans-serif'],
        'pd': ['"Playfair Display"', 'serif'],
    },
    extend: {
      colors: {
        primary: '#242424',
        secondary: '#7B838A',
      }
    }
  },
  plugins: [],
}
