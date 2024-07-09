/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0px 10px 5px rgba(56, 161, 105, 0.6)',
      },
      colors: {
        'blue-dark': '#164863',
        'blue-medium': '#427D9D',
        'blue-light': '#9BBEC8',
        'blue-lighter': '#DDF2FD',
      },
    },
  },
  plugins: [],
};
