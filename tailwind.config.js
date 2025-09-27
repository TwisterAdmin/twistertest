/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'twister': {
          'red': '#FF6B6B',
          'blue': '#4ECDC4',
          'yellow': '#FFE66D',
          'green': '#95E1D3',
          'purple': '#A8E6CF',
          'orange': '#FFB74D'
        },
        'rainbow': {
          'start': '#FF6B6B',
          'middle': '#4ECDC4',
          'end': '#FFE66D'
        }
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'rainbow': 'rainbow 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        },
        rainbow: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      },
      backgroundImage: {
        'rainbow-gradient': 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFE66D, #95E1D3, #A8E6CF, #FFB74D)',
        'rainbow-animated': 'linear-gradient(45deg, #FF6B6B, #4ECDC4, #FFE66D, #95E1D3, #A8E6CF, #FFB74D)',
      },
      backgroundSize: {
        '400%': '400% 400%'
      },
      fontFamily: {
        'game': ['Comic Neue', 'cursive'],
        'display': ['Fredoka One', 'cursive']
      }
    },
  },
  plugins: [],
}