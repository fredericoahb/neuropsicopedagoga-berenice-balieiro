/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e8f7ff', 100: '#c5dff0', 200: '#9dc8e0', 300: '#6fafc9',
          400: '#3d8fb0', 500: '#004369', 600: '#003554', 700: '#002940',
          800: '#001d2d', 900: '#00121c',
        },
        accent: {
          50: '#e6f5f0', 100: '#c0e6d9', 200: '#96d5c0', 300: '#6bc4a6',
          400: '#4db893', 500: '#2fa07a', 600: '#1e8a66', 700: '#136e50',
        },
        navy: { 800: '#1e2d3d', 900: '#141f2b', 950: '#0c1520' },
      },
    },
  },
  plugins: [],
}
