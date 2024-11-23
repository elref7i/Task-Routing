/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      screens: {
        '2xl': '1280px',
      },
      colors: {
        firstprime: '#2C3E50',
        secondprime: '#1ABC9C',
      },
    },
  },
  plugins: [],
};
