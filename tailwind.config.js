/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/*/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#404040",
        customPurple: "#7f7aff",
      },
      textColor: {
        dark: "#404040",
      },
      colors: {
        dark: "#404040",
        faintWhite: "rgba(255 255 255 37)",
        customPurple: "#7f7aff",
      },
    },
  },
  plugins: [],
};
