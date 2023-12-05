import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const colorSheme = colors.sky;

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      transparent: colors.transparent,
      white: colors.white,
      sheme50: colorSheme[50],
      sheme100: colorSheme[100],
      sheme200: colorSheme[200],
      sheme300: colorSheme[300],
      sheme400: colorSheme[400],
      sheme500: colorSheme[500],
      sheme600: colorSheme[600],
      sheme700: colorSheme[700],
      sheme800: colorSheme[800],
      sheme900: colorSheme[900],
      sheme950: colorSheme[950],
    },
  },
  plugins: [],
};
export default config;
