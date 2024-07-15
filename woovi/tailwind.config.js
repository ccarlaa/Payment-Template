/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: 
    {
      primary: "#03d69d",
      secondary: "#133A6F",
      gray: {
        100: "#E5E5E5",
        200: "#B2B2B2",
        300: "#AFAFAF",
        400: "#4D4D4D"
      }
    },
    fontSize: {
      xl: '24px',
      lg: '18px',
      md: '16px',
      sm: '14px',
    },
    fontFamily: {
      default: ['Nunito', 'sans-serif'],
    },
  },
  },
  plugins: [],
}

