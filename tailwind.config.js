/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ["Outfit", "serif"],
        inter: ["inter", "serif"],
        logoFont: ["Playwrite NO Guides", "cursive"],
      },
      animation: {
        bounceSlow: "bounce 8s infinite",
      },
      scale: {
        175: "1.02",
        200: "1.2",
      },
    },
  },
  plugins: [],
};
