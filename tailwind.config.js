const { mauve, violet } = require('@radix-ui/colors')

module.exports = {
  mode: 'jit',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        linkedin: '#0077b5',
        instagram: '#e1306c',
        twitter: '#1da1f2',
        ...mauve,
        ...violet,
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': ['0 35px 35px rgba(0, 0, 0, 0.25)', '0 45px 65px rgba(0, 0, 0, 0.15)'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
