/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/app/**/*.html" ],
  theme: {
    extend: {
      colors : {
        textyellow : "#CCF381",
        bgblue : "#4831D4"
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      "display": ["Oswald"],
      "inter": ["Inter"]
    }
  },
  plugins: [],
}
