/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
     extend: {
      width: {
        '128': '80%'
      },
      screens: {
        'md': {'max': '780px'},
        'sm': {'max': '639px'}
      }
     },
   },
   plugins: [],
 };
