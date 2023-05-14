/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        smx: "512px",
        mdx: "896px",
      },
      fontFamily: {
        josefin: `var(--josefin_sans), var(--inter), sans-serif;`,
        inter: `var(--inter), sans-serif;`,
        roboto: `var(--roboto), var(--inter), sans-serif;`,
        jetbrains: `var(--jetbrains), var(--inter), sans-serif;`,
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
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
