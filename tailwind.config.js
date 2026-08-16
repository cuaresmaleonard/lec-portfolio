/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        professional: {
          50: '#f0fdfa',   // Teal 50
          100: '#ccfbf1',  // Teal 100
          200: '#99f6e4',  // Teal 200
          300: '#5eead4',  // Teal 300 - Light, vibrant & readable in dark mode
          400: '#2dd4bf',  // Teal 400 - Crisp contrast in dark mode
          500: '#14b8a6',  // Teal 500
          600: '#0d9488',  // Teal 600
          700: '#0f766e',  // Teal 700
          800: '#115e59',  // Teal 800
          900: '#134e4a',  // Teal 900
          950: '#042f2e',  // Teal 950
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
