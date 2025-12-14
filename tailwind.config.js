/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
        inter: ['inter'],
      },
      colors: {
        transparent: 'transparent',
        primary: '#FF325A',
        secondary: '#F29620',
        nu1: '#FFFFFF',
        nu2: '#0f0f0f',
        nu3: '#001100',
        nu4: '#18191f',
        nu5: '#263e26',
        nu6: '#343839',
        nu7: '#13181f',
        nu8: '#232627',
        nu9: '#878B95',
        nu10: '#0f270f',
        nu11: '#2b161c',
        nu12: '#000000',
        nu13: '#12261e',
        nu14: '#B6B6B6',
        cd: '#16191f',
      },

      screens: {
        'sm': '576px',
        'md': '768px',
        'lg': '992px',
        'xl': '1200px',
        '2xl': '1296px',
        '3xl': '1600px',
        '4xl': '1800px',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(45deg, #ff7e5f, #feb47b)',
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
