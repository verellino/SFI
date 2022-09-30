module.exports = {
  content: [
    "./components/**/*.vue",
    "./slices/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif:
        'Merriweather, ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    extend: {
      colors: {
        "light-blue": "#c1d3df",
        "turquoise": "#1d5564",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
