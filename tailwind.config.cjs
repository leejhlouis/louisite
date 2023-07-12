const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        muted: {
          DEFAULT: colors.neutral['300'],
          dark: colors.neutral['800']
        }
      },
      spacing: {
        18: '4.5rem'
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        xl: '3rem'
      }
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    }
  },
  plugins: []
}
