/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        recoletaAlt: ["RecoletaAlt", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        mulishMedium: ["MulishMedium", "sans-serif"],
        mulishSemiBold: ["MulishSemiBold", "sans-serif"],
        mulishBold: ["MulishBold", "sans-serif"],
      },
      colors: {
        background: "#060607",
        foreground: "#061752",
        "gray-light": "#585858",
        yellow: "#FFE58E",
      },
    },
  },
  plugins: [],
};
