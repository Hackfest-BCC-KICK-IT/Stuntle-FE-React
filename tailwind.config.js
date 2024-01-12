/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        violet: "#54194D",
        orange: "#FF884C",
        white: "#FFFFFF",
        black: "#212427",
        grey: "#74696D",
        "light-violet": "#9D738E",
        "dark-orange": "E84C3D",
        "border-grey": "#CBC4C6",
        "neutral-white": "#FCFCFC",
        green: "#06976E",
        yellow: "#F8B11C",
        red: "#DE162D",
        "light-yellow": "#FFF7CD",
        "light-green": "#CDFCD2",
        "light-red": "#FFE5D6",
      },
    },
  },
  plugins: [],
};
