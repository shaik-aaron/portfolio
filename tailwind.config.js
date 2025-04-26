/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        geist: ["Geist", "sans-serif"],
        geistbold: ["Geist-Bold", "sans-serif"],
        geistmedium: ["Geist-Medium", "sans-serif"],
        geistextrabold: ["Geist-ExtraBold", "sans-serif"],
        geistsemibold: ["Geist-SemiBold", "sans-serif"],
        geistlight: ["Geist-Light", "sans-serif"],
      },
    },
  },
  plugins: [],
};
