/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "moiza-blue": "#3B82F6",
        "moiza-purple": "#8B5CF6",
        "moiza-gray-bg": "#F3F4F6",
        "moiza-gray-text": "#9CA3AF",
      },
      fontSize: {
        title: "18px",
        subtitle: "16px",
        body: "14px",
        small: "12px",
      },
      borderRadius: {
        card: "8px",
        pill: "20px",
      },
      maxWidth: {
        mobile: "420px",
      },
    },
  },
  plugins: [],
};
