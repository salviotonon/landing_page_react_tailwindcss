/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {

    fontFamily: {
      'sans': ['Lexend', 'sans-serif']

    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'blue': '#2563EB',
        'white': '#FFFF',
        'black': '#0F172A',
        'gay': '#334155',
        'cyan': '#06b6d4',
        'blueSky': '#3b82f6',
        'grayText': '#DBEAFE',
        'textMenu': '#0F172A',
      },
    },
  },
  plugins: [],
};
