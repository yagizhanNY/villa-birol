/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    'dancing': ['Dancing Script', 'cursive']
  },
}

