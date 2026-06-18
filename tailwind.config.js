/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Brand / primary indigo (sampled from the Figma design)
        brand: {
          DEFAULT: "#4648d4",
          500: "#6063ee",
          400: "#6366f1",
          soft: "#e2e7ff",
          softer: "#e1e0ff",
          tint: "#dae2fd",
        },
        ink: "#131b2e", // primary heading text
        muted: "#464554", // body / secondary text
        faint: "#767586", // tertiary text
        canvas: "#faf8ff", // app background
        line: "#c7c4d7", // borders
        // Status colors
        warn: {
          DEFAULT: "#f59e0b",
          dot: "#fea619",
          bg: "#fff4e6",
          text: "#653e00",
          deep: "#855300",
        },
        success: {
          bg: "#dcfce7",
          text: "#15803d",
        },
      },
      fontFamily: {
        display: ['"Hanken Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
        label: ['"Geist"', '"Inter"', "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0px 4px 6px -1px rgba(15,23,42,0.05), 0px 2px 4px -2px rgba(15,23,42,0.03)",
        floaty:
          "0px 10px 15px -3px rgba(0,0,0,0.1), 0px 4px 6px -4px rgba(0,0,0,0.1)",
        header: "0px 1px 1px rgba(0,0,0,0.05)",
      },
      borderRadius: {
        card: "12px",
      },
    },
  },
  plugins: [],
};
