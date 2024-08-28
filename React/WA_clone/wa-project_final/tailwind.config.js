/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#04a784",
        "primary-dense": "#008069",
        background: "#eff2f5",
        "chat-bg": "#F2EFE9",
        "primary-light":"#D9FDD2"
      }
    },
  },
  plugins: [],
}
