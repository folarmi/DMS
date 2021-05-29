module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#053582",
        ash: "#e5e5e5",
        lightAsh: "#E2E2EA",
        darkBlue: "#171725",
        dark: "#252525",
        offBlue: "#E8F0FE",
        grey: "#390E96",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
