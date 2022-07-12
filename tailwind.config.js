/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      // xl: "1440px",
    },
    extend: {
      colors: {
        darkGray: 'hsl(0, 0%, 63%)',
        veryDarkGray: 'hsl(0, 0%, 27%)'
      },
      fontSize: {
        kekere: "7px",
        bigKekere: "8px"
      },
    },
  },
  plugins: [],
}

