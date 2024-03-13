/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public//**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        archivo: "'Archivo Narrow', sans-serif !important",
      },
      keyframes: {
        wave: {
          '0%': { transform: 'rotatey(0deg)' },
          '100%': { transform: 'rotatey(180deg)' },
        },
      },
      animation: {
        'waving-hand': 'wave  0.6s ease-in-out 0.2s  alternate ',
      },
    },
  },
  plugins: [],
}

