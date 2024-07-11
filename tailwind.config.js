/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { 
    extend: {
      colors: {
        primary: '#03D69D',
        secondary: '#133A6F',
      },

      fontFamily: {
        sans: "'Nunito', 'sans-serif'"
      }
    }
  },
  plugins: []
}
