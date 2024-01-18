/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'shd': "url('./assets/img/bg-shd.jpg')",
        'menu': "url('./assets/img/menu-icon.png')"
      }),
      boxShadow: {
        '3xl': '0 35px 60px 5px rgba(0, 0, 0, .9)',
      },
      spacing: {
        'half-screen': '60vh',
      }
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
      'light-gray': '#D3D3D3',
      'lightSlate-gray': '#778899',
    }
  },
  plugins: [],
}