/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./public/page/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        creative: {
          primary: "#6366f1",
          secondary: "#ec4899",
          accent: "#f59e0b",
        },
      },
      animation: {
        blob: "blob 7s infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
        "bounce-slow": "bounceSlow 3s infinite",
      },
      keyframes: {
        bounceSlow: {
          "0%, 100%": {
            transform: "translateY(-5%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        blob: {
          "0%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
