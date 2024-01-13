/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'shd': "url('./assets/img/bg-shd.jpg')",
      })
    },
  },
  plugins: [],
}