/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#080B10',       // Sleek deepest space dark
          card: '#0F1622',     // Slate/navy card color
          cardBorder: '#1E293B',
          textMuted: '#94A3B8',
        },
        accent: {
          primary: '#6366F1',   // Indigo
          secondary: '#8B5CF6', // Violet
          highlight: '#22D3EE', // Cyan
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 10s infinite',
        'pulse-glow': 'pulse-glow 3s infinite',
        'grid-move': 'grid-move 20s linear infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.95)',
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.4',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '0.8',
            transform: 'scale(1.05)',
          },
        },
        'grid-move': {
          '0%': {
            transform: 'translateY(0)',
          },
          '100%': {
            transform: 'translateY(40px)',
          },
        },
      },
      boxShadow: {
        'neon-indigo': '0 0 15px rgba(99, 102, 241, 0.4)',
        'neon-violet': '0 0 15px rgba(139, 92, 246, 0.4)',
        'neon-cyan': '0 0 15px rgba(34, 211, 238, 0.4)',
      }
    },
  },
  plugins: [],
}
