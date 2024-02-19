/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jost: ['Jost', 'sans-serif'],
        urbanist: ['Urbanist', 'sans-serif'],
      },
      colors: {
        'pulp-orange': '#fd7e14',
      },
    },
  },
  plugins: [],
};
