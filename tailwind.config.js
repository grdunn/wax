/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  plugins: [],
  theme: {
    extend: {
      colors: {
        "brand-background": "#fbf6dd",
        "brand-background-secondary": "#f3b63a",
        "brand-blue": "#2060ac",
        "brand-red": "#df472a",
        "brand-red-secondary": "#e1583b",
      },
      container: {
        center: true,
      },
    },
  },
  extend: {
    fontFamily: {
      sans: ["Overpass"],
    },
  },
};
