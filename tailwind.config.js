/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    backgroundImage: {
      bg: "url('../src/assets/bg.jpg')",
      compass: "url('../src/assets/compass.png')",
    },
    fontFamily: {
      poppins: "Poppins",
    },
    extend: {},
  },
  plugins: [],
};
