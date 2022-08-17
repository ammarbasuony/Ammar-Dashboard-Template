const properties = require("./src/properties.json");

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: properties.appearence.primary_color,
        'primary-dimmed': properties.appearence.primary_color_dimmed,
        secondary: properties.appearence.secondary_color,
      },
      fontFamily: {
        orbitron: ["Orbitron"],
      },
    },
  },
  plugins: [],
};
