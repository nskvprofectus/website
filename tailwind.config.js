/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.njk'],
  theme: {
    colors: {
      "bg" : "#0D0F15",
      "white" : "#FFFFFF",
      "blue" : "#3A3C66",
      "red" : "#A54A40",
    },
    fontFamily: {
      'large': [
        '"Noto Sans"', 
      ],
      'small': [
        '"Titillium Web"',
      ]
    },
    backgroundImage: {
      'sports-pattern': "url('/media/background_pattern.svg')",
    },
    backgroundSize: {
      'pattern-size': '32rem',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      maxWidth: {
        'content': '80rem',
        
      },
      minHeight: {
        'footer': '3rem',
        'header': '4rem',
      },
      screens: {
        'tresh': '1024px',
        'logo-tresh': '1024px',
      },
      height: {
        'home-vid-height': '40rem',
        'mob-home-vid-height': '20rem',
        'board-items-height' : '30rem'
      }
    },
  },
  plugins: [],
}

