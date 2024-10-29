/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'vsm': '410px',
        'max-vsm': '410px',
      }
    },
  },
  plugins: [],
}
