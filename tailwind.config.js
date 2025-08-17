/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",        // main App file
    "./app/**/*.{js,jsx,ts,tsx}",   // all files in /app (Expo Router structure)
    "./components/**/*.{js,jsx,ts,tsx}", // any components folder
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
