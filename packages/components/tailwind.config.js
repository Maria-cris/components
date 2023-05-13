/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    fontFamily: {
      principal: ["Nunito Sans"],
      secondary: ["poppins"],
      icons: ["Material Icons"],
    },
    colors: {
      primary: {
        100: "#fff3f2",
        200: "#ace2db",
        300: "#67bab1",
        400: "#47a398",
        500: "#2b897e",
        600: "#177065",
        700: "#0a5048",
      },
      secondary: {
        100: "#dda6a7",
        200: "",
        300: "",
        400: "",
        500: "",
        600: "",
        700: "",
        800: "",
        900: "",
      },

      neutral: {
        100: "#fff",
        200: "#f2f2f2",
        300: "#e6e6e6",
        400: "#cdcdcd",
        500: "#9a9a9a",
        600: "#686868",
        700: "#818181",
        800: "#282828",
        900: "#000",
      },
      rainbow: {
        100: "#8B9BA3",
        200: "#B0003C",
        300: "#00BEB4",
        400: "#E84537",
        500: "",
      },
      success: { 100: "", 200: "", 300: "", 400: "", 500: "" },
    },
    extend: {
      boxShadow: {
        lb: "4px 6px 0px 0px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
