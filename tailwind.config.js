/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      'title': '26px'
    },
    extend: {
      backgroundImage: theme => ({
        'shd': "url('./assets/img/bg-shd.jpg')",
        'menu': "url('./assets/img/menu-icon.png')",
        'main': "url('./assets/img/bg-main2.JPG')"
      }),
      backgroundPosition: {
        bottom: 'bottom',
        'bottom-4': 'center bottom 1rem',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
        'top-4': 'center top 1rem',
      },
      boxShadow: {
        '3xl': '0 35px 60px 5px rgba(0, 0, 0, .9)',
      },
      spacing: {
        'half-screen': '55vh',
        'screen-20': '120vh',
        'main-btn': '4dvh'
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
      'DimGray': '#696969',
    }
  },
  plugins: [],
}