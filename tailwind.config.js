/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: "#164988",
        grey: "#A4B0C3EF",
        lightGrey: "#F6F6F6",
        pink: "#FFEBEB",
        lightGreen: "#D5EED5",
        lighterGreen: "#f3fcf2",
        greenShade: "#1BBF5C",
        gray: "#9499A1",
        lightGray: "#f7fafb",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
