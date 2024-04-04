/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: "#363853",
        },
        primary: {
          DEFAULT: "#0012FF",
        },
        green: {
          DEFAULT: "#67D4CA",
        },
        red: {
          DEFAULT: "#F28080",
        },
      },
    },
  },
  plugins: [],
};
