/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: "#5F7464",
        sageDark: "#3F5547",
        cream: "#F7F3EA",
        sand: "#E9DED0",
        clay: "#B97A61",
        ink: "#25312A",
        muted: "#66736B"
      },
      fontFamily: {
        sans: ["Arial", "Helvetica", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"]
      }
    },
  },
  plugins: [],
};
