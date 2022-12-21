/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat' : 'Montserrat',
        'Playfair' : 'Playfair Display'
      },

      colors: {
        'secondary' : '#BDBDBD',
        'orange' : '#F2994A'
      }, 

      fontSize: {
        small: '0.5rem',
        small2: '0.625rem'
      },

      gridTemplateColumns: {
        'card': '50% 216px'
      },
    },
  },
  plugins: [],
}
