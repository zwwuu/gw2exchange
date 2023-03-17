const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/**/*.{ts,tsx}", "./src/components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-cabin)", ...fontFamily.sans],
      },
    },
  },
  daisyui: {
    themes: ["dark", "light"],
    logs: false,
  },
  plugins: [require("daisyui")],
};
