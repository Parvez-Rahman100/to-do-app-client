/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["aqua"],
  },
  plugins: [require("daisyui")],
}
