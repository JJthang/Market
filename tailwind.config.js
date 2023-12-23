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
        glo: [
          "Lato",
          "Meiryo",
          "Hiragino Mincho Pro",
          "Hiragino Kaku Gothic Pro",
          "Tahoma",
          "Osaka",
          "sans-serif",
        ],
      },
    },
    // fontSize: {
    //   15: "15px",
    // },
  },
  plugins: [],
};
