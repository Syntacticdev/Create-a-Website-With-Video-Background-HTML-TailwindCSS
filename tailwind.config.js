module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        overlay: '#03a9fa',
        textColor: '#111'
      },
      transitionProperty:{
        'position': 'right'
      }
    },
    fontFamily: {
      'Poppins': ['Poppins', 'serins-serif']
    }
  },
  variants: {
   
    extend: {
        letterSpacing: ['hover', 'focus'],
        transitionProperty: ['responsive', 'motion-safe', 'motion-reduce'],
    },
  },
  plugins: [
    require('tailwindcss-blend-mode')()
  ],
}
