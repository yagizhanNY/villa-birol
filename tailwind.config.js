/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f1c2e',
          light:   '#1a2d42',
          mid:     '#162236',
        },
        gold: {
          DEFAULT: '#c9a96e',
          light:   '#e2c99a',
        },
        cream: '#f8f5f0',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
        dancing: ['"Dancing Script"', 'cursive'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease both',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
