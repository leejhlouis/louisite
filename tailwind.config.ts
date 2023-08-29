import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['index.html', './src/**/*.{js,jsx,ts,tsx}'],
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
        md: '2rem',
        xl: '3rem'
      }
    },
    screens: {
      xs: '480px',
      ...defaultTheme.screens
    }
  },
  plugins: []
} satisfies Config
