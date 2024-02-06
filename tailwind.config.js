/** @type {import('tailwindcss').Config} */
export default {
  node:'jit',
  purgue:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
   
  plugins: [],
}

