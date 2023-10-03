/**@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js"],
  theme: {
    extend: {
      colors: {
        paleViolent: "hsl(276, 100%, 81%)",
        moderateViolent: "hsl(276, 55%, 52%)",
        desaturatedViolent: "hsl(271, 15%,43%)",
        greyishBue: "hsl(206, 6%, 79%)",
        darkViolet: "hsl(271, 36%, 24%)",
        grayishViolet: "hsl(270, 7%, 64%)",
        lightMagenta: "hsl(293, 100%, 63%)",
        lightViolet: "hsl(264, 100%, 61%)",
        white: "hsl(0, 0%, 100%)",
        appBackground: "hsl(270, 20%, 96%)",
        submitButton: "hsl(271,36%,24%)",
        radioButton: "hsl(289,100%,72%)",
      },

      fontFamily: {
        rubik: "Rubik",
      },
    },
  },
  plugins: [],
};
