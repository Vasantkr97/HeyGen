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
        bgsignupfree: "#b256ee",
        forfree: '#e6ecf1'
      }
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'hex': '1280px',
      'smm': '479px',
      'mdd': '767px',
      'lgg': '991px',
    },
    gridAutoRows: {
      "customAuto": "auto auto",
    },
    gridAutoColumns: {
      'frr': '1fr',
    }
  },
  plugins: [],
}

