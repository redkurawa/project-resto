/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#C12116',
        },
        accent: {
          red: '#D9206E',
          green: '#079455',
          yellow: '#FDB022',
        },
      },
    },
  },
  plugins: [],
};
