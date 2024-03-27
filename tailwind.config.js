/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,jsx,ts,tsx}', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      md: '465px',
      lg: '768px',
    },
    colors: {
      transparent: 'transparent',
      gray: {
        100: '#F2F2F2',
        200: '#E5E5E5',
        300: '#D9D9D9',
        400: '#CCCCCC',
        500: '#BFBFBF',
        600: '#B3B3B3',
      },
      blue: {
        100: '#173042FC',
        200: '#DFE9F5',
      },
      green: {
        100: '#749E50',
      },
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}

