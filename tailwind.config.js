// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["*.{html,js}"],
    theme: {
      extend: {
        fontFamily: {
            lexend: ["Lexend Deca", "sans-serif"],
            bigShoulder: ["Big Shoulders Display", "sans-serif"],
        },

        colors: {
            // primary
            "bright-orange": "hsl(31, 77%, 52%)",
            "dark-cyan": "hsl(184, 100%, 22%)",
            "very-dark-cyan": "hsl(179, 100%, 13%)",
            "neu-white": "hsla(0, 0%, 100%, 0.75)",
            "neu-gray": "hsl(0, 0%, 95%)",
          },
      },
    },
    plugins: [],
  }