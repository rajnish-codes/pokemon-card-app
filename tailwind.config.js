/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",       // Needed for Next.js app folder
    "./components/**/*.{js,ts,jsx,tsx}" // Needed for your components
  ],
  theme: {
    extend: {
      animation: {
        "fade-in-up": "fadeInUp 0.5s ease-out",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
