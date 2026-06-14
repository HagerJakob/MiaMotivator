/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fff8f1",
        blush: "#f7c8d0",
        rosewood: "#8f4e5c",
        berry: "#6f3345",
        lavender: "#d9d0f3",
        sage: "#b9d6c4",
        honey: "#ffe1a8"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Fraunces", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 24px 80px rgba(111, 51, 69, 0.14)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        },
        pulseSoft: {
          "0%, 100%": { transform: "scale(0.96)", opacity: "0.65" },
          "50%": { transform: "scale(1.04)", opacity: "1" }
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" }
        },
        confettiDrop: {
          "0%": { transform: "translateY(-20vh) rotate(0deg)", opacity: "1" },
          "100%": { transform: "translateY(100vh) rotate(540deg)", opacity: "0" }
        }
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
        shimmer: "shimmer 2.8s linear infinite",
        confettiDrop: "confettiDrop 1.8s ease-in forwards"
      }
    }
  },
  plugins: []
};
