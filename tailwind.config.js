/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'draw-tile': '0 4px 8px rgba(0, 0, 0, 0.2)',
        'game-board': '0px 0px 10px #eee;'
      }
    }
  },
  plugins: []
};
