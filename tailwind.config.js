/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme colors
        "dark-bg": "#0D1117",
        "dark-primary": "#58A6FF",
        "dark-secondary": "#8B949E",
        "dark-highlight": "#F7768E",
        "dark-card": "#161B22",
        "dark-border": "#30363D",
        "dark-code": "#1F2933",
        "dark-code-green": "#C3E88D",
        "dark-code-yellow": "#FFCB6B",

        // Light theme colors
        "light-bg": "#F9FAFB",
        "light-primary": "#1F2937",
        "light-secondary": "#3B82F6",
        "light-highlight": "#10B981",
        "light-card": "#FFFFFF",
        "light-border": "#E5E7EB",
        "light-muted": "#6B7280",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        "space-grotesk": ["Space Grotesk", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
};
