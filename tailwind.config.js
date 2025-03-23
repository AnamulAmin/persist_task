const flowbite = require("flowbite-react/tailwind");
/**
 * @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        primary: "#000000db",
        secondary: "#7a56d6",
        secondary_light: "#a58ae9",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
