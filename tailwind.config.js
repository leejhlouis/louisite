const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "480px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        muted: {
          DEFAULT: colors.neutral["300"],
          dark: colors.neutral["800"],
        },
      },
      spacing: {
        18: "72px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.5rem",
        xl: "3rem",
      },
    },
  },
  plugins: [],
};
