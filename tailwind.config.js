export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0B0F19',
        'bg-2': '#0F1623',
        'bg-card': '#111827',
        accent: '#3B82F6',
        teal: '#14B8A6',
        'accent-dim': 'rgba(59,130,246,0.15)',
      },
      fontFamily: {
        display: ['"Clash Display"','sans-serif'],
        body: ['"Satoshi"','sans-serif'],
        mono: ['"JetBrains Mono"','monospace'],
      },
    },
  },
  plugins: [],
}
