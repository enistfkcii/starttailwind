/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {

    container : {
      center:true,
      screens:{
        lg: '1140px',
        xl: '1140px',
        '2xl' : '1140px',
      }
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

