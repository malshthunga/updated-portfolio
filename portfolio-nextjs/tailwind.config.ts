import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0D10",
        surface: "#14171C",
        surface2: "#1B1F26",
        border: "#262B33",
        borderSoft: "#1E222A",
        text: "#ECEDEE",
        textDim: "#8A9099",
        textFaint: "#565C66",
        accent: "#FF8A3D",
        accentDim: "#B8632C",
        accent2: "#6C8EEF",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        wrap: "1160px",
      },
    },
  },
  plugins: [],
};
export default config;
