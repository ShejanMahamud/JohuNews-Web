/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
fontFamily: {
        "poppins": "Poppins",
        "inter" : "Inter",
        "oldenglishtextmt" : ['oldenglishtextmt']
      },
      backgroundImage: {
        advertise:
          "linear-gradient(rgba(5, 0, 29, 0.80), url('./public/neon-bg.jpg'))",
      },
},
  },
  plugins: [require("daisyui")], 
}
