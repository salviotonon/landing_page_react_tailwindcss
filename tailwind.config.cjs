/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'blue': '#2563EB',
      'white': '#FAFAFA',
      'black': '#0F172A',
      'gay': '#334155',
      'cyan': '#06b6d4',
      'blueSky': '#3b82f6',
      'grayText': '#DBEAFE',
    },
    fontFamily: {
      'sans': ['Lexend', 'sans-serif']

    },
    extend: {},
  },
  plugins: [],
};
