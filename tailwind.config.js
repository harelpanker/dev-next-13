const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-general)', ...fontFamily.sans],
        serif: ['var(--font-cabinetgrotesk)', ...fontFamily.serif],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
