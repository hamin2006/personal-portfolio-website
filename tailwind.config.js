/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 50%': { opacity: 1 },
          '51%, 100%': { opacity: 0 },
        }
      },
      animation: {
        blink: 'blink 0.5s steps(1) infinite',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(45deg, #b88a4a, #f2c14d, #ffcc00, #f5a623)',
      },
      colors: {
        'dark-teal': '#062930',
      }
    },
  },
  plugins: [],
};



