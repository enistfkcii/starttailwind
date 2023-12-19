/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container : {
      center:true
    },
    extend: {
      fontFamily: {
        gemunu : ['Gemunu Libre','sans-serif'],
        open   : ['Open Sans','sans-serif'],
      },
      colors:{
        'origin-red' : '#BC1A45',
        'origin-melon' : '#FFD369',
        'origin-grey' : '#DDDDDD',
        'origin-white' : '#F7F7F7',
       },
    },
  },
  plugins: [],
}

