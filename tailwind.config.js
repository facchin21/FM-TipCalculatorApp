/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Space Mono" : ["Space Mono", "monospace"]
      },
      colors:{
        primary: "hsl(183, 100%, 15%)",
        secondary: "hsl(172, 67%, 45%)",
        light: "hsl(185, 41%, 84%)",
        gray: "hsl(189, 41%, 97%)",
        detail: "hsl(184, 14%, 56%)",
        detailDark: "hsl(186, 14%, 43%)",
      }
    },
  },
  plugins: [],
}

