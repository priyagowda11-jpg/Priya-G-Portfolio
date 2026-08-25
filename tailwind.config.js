export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        'bg-card': '#0F0F0F',
        'bg-2': '#141414',
        orange: '#F97316',
        red: '#EF4444',
        'orange-dim': 'rgba(249,115,22,0.12)',
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body: ['"DM Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}
