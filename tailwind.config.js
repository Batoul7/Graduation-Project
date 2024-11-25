/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "myprimary" : "#FFD11A",
      },
      fontFamily : {
        "inter" : "var(--inter-font)",
        "kumbhSans" : "var(--kumbh-font)",
      }
    },
  },
  plugins: [],
}

