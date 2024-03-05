/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html"],
  theme: {
    extend: {
      utilities: {
        '.reset': {
          all: 'initial',
        },
      },

      fontFamily:{
        inter: ['Inter'],

      },
      colors: {
        Primary: {
          Green: "hsl(75, 94%, 57%)",
        },
        Neutral: {
          White: "hsl(0, 0%, 100%)",
          Grey: "hsl(0, 0%, 20%)",
          DarkGrey: " hsl(0, 0%, 12%)",
          OffBlack: "hsl(0, 0%, 8%)",
        }
      },
    },
  },
  plugins: [],
};
