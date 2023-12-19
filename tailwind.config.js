/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/primevue/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Lato",
          "Meiryo",
          '"Hiragino Mincho Pro"',
          '"Hiragino Kaku Gothic Pro"',
          "Tahoma",
          "Osaka",
          "sans-serif",
          // "Crimson Text",
          // "serif",
          // "Noto Serif",
          // "serif",
          // "Poppins",
          // "sans-serif",
          // "Roboto",
          // "sans-serif",
        ],
      },
    },
    fontSize: {
      sm: "0.875rem",
      "2xl": "1.75rem",
      xl: "30px",
      base: "0.8rem",
    },
  },
  plugins: [],
};
