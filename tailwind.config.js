/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./site/**/*.njk'],
  theme: {
    extend: {},
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
    width: {
      'content': '80rem',
    },
    minHeight: {
      'footer': '3rem',
    }
  },
  plugins: [],
}

