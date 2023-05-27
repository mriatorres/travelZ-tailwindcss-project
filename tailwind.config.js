module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/LA.jpg')",
        'bali': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/bali.jpg')",
        'chicago': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/chicago.jpg')",
        'europe': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/europe.jpg')",
        'iceland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/iceland.jpg')",
        'miami': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/miami.jpg')",
        'new_york': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/new_york.jpg')",
        'norway': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/norway.jpg')",
        'sanFrancisco': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFrancisco.jpg')",
        'sanFranciscoDesktop': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sanFranciscoDesktop.jpg')",
        'seattle': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/seattle.jpg')",
        'switzerland': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/switzerland.jpg')",
        'sidney': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/sydney.jpg')",
        'yosemite': "url('https://raw.githubusercontent.com/platzi/PlatziTravel/main/public/img/yosemite.jpg')"


        


      }  
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio')
  ],
}