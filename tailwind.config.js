/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#191919",
        dark2: "#252725",
        dark3: "#1C1C1D",
        purple: "#9939F2",
        secondary: "#f401f7",
        secondary2: "#7FF701",
        secondary3: "#0104F7",
      }
    },
  },
  plugins: [],
}