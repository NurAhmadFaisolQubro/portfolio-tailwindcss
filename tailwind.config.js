/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#21ADDA",
        secondary: "#64748b",
        dark: "#0e0629",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
