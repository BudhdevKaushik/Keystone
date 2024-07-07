/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#C8CBD9",
        icon: "#B0C3CC",
        green: "#149D52",
        error: "#ff3333",
        inputBg: "#627B87",
        primary: "#5A6ACF",
        lightPurple: "#707FDD",
        sidebarColor: "#F1F2F7",
        blackPrimary: "#082431",
        blackSecondary: "#273240",
      },
    },
  },
  plugins: [],
};
