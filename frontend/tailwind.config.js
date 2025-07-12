/** @type {import('tailwindcss').Config} */
export default {
  content:[
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary-darker': '#B60336',
      },
      fontFamily:{
        Montserrat:['Montserrat','bigmont']
      },
      theme: {
        fontFeatureSettings: {
          'clig-off': ['"clig" off'],
          'liga-off': ['"liga" off'],
        },
      },
      container: {
        padding: '2rem',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

