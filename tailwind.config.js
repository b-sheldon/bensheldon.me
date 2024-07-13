/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0px 10px 5px rgba(56, 161, 105, 0.6)',
      },
      colors: {
        blue: {
          dark: '#164863',
          DEFAULT: '#427D9D',
          light: '#9BBEC8',
          lighter: '#DDF2FD',
        },
      },
      fontFamily: {
        marcellus: ['Marcellus SC', 'serif'],
      },
    },
  },
  plugins: [],
};
