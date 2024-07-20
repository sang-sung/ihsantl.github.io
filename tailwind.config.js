/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom: {
          50: "#D6EFD8", // Lightest shade
          100: "#C5E5C6", // Slightly darker than 50
          200: "#A3D1A5", // Intermediate light green
          300: "#80AF81", // Provided shade
          400: "#6A986B", // Mid-tone green
          500: "#508D4E", // Provided main color
          600: "#427942", // Darker than 500
          700: "#365F36", // Darker still
          800: "#1A5319", // Provided darker shade
          900: "#143B13", // Darkest shade
        },
      },
    },
  },
  plugins: [],
};
