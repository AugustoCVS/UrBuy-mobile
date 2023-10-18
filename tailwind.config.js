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
      blue: {
        100: '#173042FC',
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

