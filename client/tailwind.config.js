/** @type {import('tailwindcss').Config} */
  module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          // You can replace these with your own branding colours later
          primary: "#1F2937",   // dark‑gray background
          accent: "#F59E0B",    // orange accent (like Spribe)
        },
      },
    },
    plugins: [],
  };

