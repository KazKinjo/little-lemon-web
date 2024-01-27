/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      primary: {
        green: '#495E57',
        yellow: '#F4CE14',
      },
      secondary: {
        lightred: '#EE9972',
        lightorange: '#FBDABB',
      },
      highlight: {
        gray: '#EDEFEE',
        black: '#333333',
      },
    },
    fontFamily: {
      Intel: ['Inter', 'sans-serif'],
      Karla: ['Karla', 'sans-serif'],
      Markazi: ['Markazi', 'sans-serif'],
    },
    extend: {
      reserve_button: {
        backgroundColor: '#F4CE14',
      }
    },
  },
  plugins: [],
}
