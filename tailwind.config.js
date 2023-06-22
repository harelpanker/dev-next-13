/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

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
    animation: {
      'spin-slow': 'spin 5s linear infinite',
    },
    colors: {
      theme_white: '#F2F6FA',
      theme_black: '#17191E',
      slate: colors.slate,
    },
    minHeight: {
      dvh: '100dvh',
      screen: '100vh',
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
