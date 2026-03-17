/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef6ff', 100: '#d9ecff', 200: '#bcdeff', 300: '#8ecaff',
          400: '#59adff', 500: '#1a6fb5', 600: '#155d99', 700: '#104b7d',
          800: '#0b3a62', 900: '#072a48', 950: '#041c32',
        },
        teal: {
          50: '#edfffe', 100: '#d1fffe', 200: '#a9fefb', 300: '#6bf7f1',
          400: '#36e8e1', 500: '#14ccc7', 600: '#0da3a3', 700: '#108283',
          800: '#136768', 900: '#155556',
        },
        warm: {
          50: '#fdf8f3', 100: '#faf0e4', 200: '#f5e0c8', 300: '#edcba3',
        },
        navy: { 800: '#1a2332', 900: '#0f1722', 950: '#0a0f17' },
      },
    },
  },
  plugins: [],
}
