/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // flex: {
      //   ""
      // },
      screens: {
        xs: "480px",
        mdx: "896px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        texas: {
          50: "#fff9ed",
          100: "#fff3d4",
          200: "#ffe3a8",
          300: "#ffce71",
          400: "#ffb955",
          500: "#fe9311",
          600: "#ef7707",
          700: "#c65908",
          800: "#9d470f",
          900: "#7e3b10",
          950: "#441c06",
        },
      },
    },
  },
  plugins: [],
}
