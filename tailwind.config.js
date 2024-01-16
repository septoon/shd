/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'shd': "url('./assets/img/bg-shd.jpg')",
        'menu': "url('./assets/img/menu-icon4.png')"
      })
    },
    colors: {
      'dark': "#1d1d1d",
      'transparent': 'transparent',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'orange': '#FFA500',
    }
  },
  plugins: [],
}