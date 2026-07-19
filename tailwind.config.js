/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "#080B12",
          soft: "#0D1220",
          raised: "#121829",
        },
        ink: {
          DEFAULT: "#E7EAF3",
          muted: "#8A93AC",
          faint: "#5B6480",
        },
        accent: {
          indigo: "#6C6BFF",
          cyan: "#2FE0D8",
          violet: "#B279F7",
          amber: "#F7B93E",
        },
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(8,11,18,0) 0%, #080B12 90%)",
        "aurora":
          "radial-gradient(60% 50% at 20% 10%, rgba(108,107,255,0.25) 0%, rgba(108,107,255,0) 70%), radial-gradient(50% 40% at 85% 20%, rgba(47,224,216,0.18) 0%, rgba(47,224,216,0) 70%), radial-gradient(45% 45% at 50% 90%, rgba(178,121,247,0.15) 0%, rgba(178,121,247,0) 70%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.45)",
        glow: "0 0 40px rgba(108,107,255,0.35)",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
