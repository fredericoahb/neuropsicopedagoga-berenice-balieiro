/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eef9ff',
          100: '#d9f1ff',
          200: '#bce8ff',
          300: '#8edaff',
          400: '#59c4ff',
          500: '#2196F3',
          600: '#1976D2',
          700: '#1565C0',
          800: '#0D47A1',
          900: '#0a3270',
        },
        teal: {
          50: '#edfffe',
          100: '#d1fffe',
          200: '#a9fefb',
          300: '#6bf7f1',
          400: '#36e8e1',
          500: '#14ccc7',
          600: '#0da3a3',
          700: '#108283',
          800: '#136768',
          900: '#155556',
        },
        navy: {
          800: '#1a2332',
          900: '#0f1722',
          950: '#0a0f17',
        }
      },
      fontFamily: {
        display: ['var(--font-display)'],
        body: ['var(--font-body)'],
      },
    },
  },
  plugins: [],
}
