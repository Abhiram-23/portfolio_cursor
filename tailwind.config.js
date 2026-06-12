/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme — deep ink + neon accents
        "dark-bg": "#070710",
        "dark-primary": "#E2E8F0",
        "dark-secondary": "#94A3B8",
        "dark-highlight": "#22D3EE",
        "dark-card": "#0E0E1F",
        "dark-border": "#1E1E38",
        "dark-code": "#11112A",
        "dark-code-green": "#C3E88D",
        "dark-code-yellow": "#FFCB6B",

        // Light theme
        "light-bg": "#F8FAFC",
        "light-primary": "#0F172A",
        "light-secondary": "#0891B2",
        "light-highlight": "#7C3AED",
        "light-card": "#FFFFFF",
        "light-border": "#E2E8F0",
        "light-muted": "#64748B",

        // Accent palette
        accent: {
          cyan: "#22D3EE",
          violet: "#A78BFA",
          pink: "#F472B6",
        },
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out both",
        blink: "blink 1s step-end infinite",
        float: "float 9s ease-in-out infinite",
        "float-slow": "float 14s ease-in-out infinite",
        "spin-slow": "spin 14s linear infinite",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(40px, -40px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};
