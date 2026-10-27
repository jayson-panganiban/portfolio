/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: {
          light: "#FAF9F5",
          DEFAULT: "#FAF9F5",
          dark: "#111215",
          subtle: {
            light: "#F3F2ED",
            dark: "#15171B",
          },
        },
        surface: {
          card: {
            light: "#FFFFFF",
            dark: "#131418",
          },
          subtle: {
            light: "#F3F2ED",
            dark: "#15171B",
          },
          elevated: {
            light: "#FFFFFF",
            dark: "#1A1D23",
          },
        },
        ink: {
          primary: {
            light: "#111215",
            dark: "#E1E3E8",
          },
          secondary: {
            light: "#5A606D",
            dark: "#767A85",
          },
          tertiary: {
            light: "#878E9C",
            dark: "#4F535D",
          },
        },
        grid: {
          line: {
            light: "#E2E4EA",
            dark: "#26282E",
          },
          subtle: {
            light: "#ECEEF2",
            dark: "#1C1E24",
          },
          borderLight: {
            light: "#D8DBE2",
            dark: "#30333A",
          },
        },
        signal: {
          DEFAULT: "#FF3B00",
          orange: "#FF3B00",
          hover: "#FF5E1E",
          cyan: "#38BDF8",
          amber: "#E5A93C",
          green: "#22C55E",
          dim: "rgba(255, 59, 0, 0.12)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.035em",
        tighter: "-0.025em",
        tight: "-0.015em",
        widestTechnical: "0.12em",
      },
    },
  },
  plugins: [],
};
