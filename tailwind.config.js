/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c35b5",
        signup: "#000",
        bglogin: "#e6ecf1",
        navbarmid: "#fff",
        bgsignupfree: "#b256ee"
      }
    },
  },
  plugins: [],
}