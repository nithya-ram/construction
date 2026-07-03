/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/js/**/*.js"],
  theme: {
    extend: {
      colors: {
        ink: "#1D2126",
        inksoft: "#2A2F36",
        concrete: "#EFEAE1",
        concretedim: "#E3DDD0",
        blueprint: "#2B4A6F",
        blueline: "#7FA8C9",
        steel: "#6E7479",
        amber: "#D9891F",
        hairline: "#C8C0B2",
        offwhite: "#FBFAF7",
      },
      fontFamily: {
        display: ["'Barlow Condensed'", "sans-serif"],
        body: ["'Work Sans'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(28px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        growLine: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.8s ease forwards",
        growLine: "growLine 1.2s ease forwards",
      },
    },
  },
  plugins: [],
};
