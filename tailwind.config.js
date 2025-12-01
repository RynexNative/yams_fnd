/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2563eb",
          secondary: "#1e40af",
          accent: "#38bdf8",
        },
      },
    },
  },
  plugins: [],
}

