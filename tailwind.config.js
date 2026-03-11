/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gh: {
          bg:       '#0d1117',
          surface:  '#161b22',
          surface2: '#21262d',
          border:   '#30363d',
          text:     '#e6edf3',
          muted:    '#8b949e',
          subtle:   '#c9d1d9',
          green:    '#238636',
          'green-hover': '#2ea043',
          blue:     '#2f81f7',
          'blue-light': '#79c0ff',
          orange:   '#ffa657',
          purple:   '#d2a8ff',
          red:      '#ff7b72',
        },
      },
      fontFamily: {
        sans: ['-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', '"Noto Sans"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 1.5s ease-in-out infinite',
        'fade-in':    'fadeIn 0.35s ease forwards',
        'spin-fast':  'spin 0.8s linear infinite',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
