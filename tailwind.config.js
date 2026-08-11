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
          50: '#f1f5f9', // Slate 100
          100: '#e2e8f0', // Slate 200
          500: '#0f766e', // Teal 600
          600: '#115e59', // Teal 700
          700: '#134e4a', // Teal 900
          900: '#0f172a', // Slate 900
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
