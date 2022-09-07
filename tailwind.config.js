/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        twitterWhite: "#e7e9ea",
        twitterBlue: "#308cd8",
        twitterDarkBlue: "#1c9ceb",
        twitterBorder: "#2f3336",
        twitterLightGrey: "#71767b",
        twitterDarkGrey: "#17181c",
      }
    },
  },
  plugins: [],
}