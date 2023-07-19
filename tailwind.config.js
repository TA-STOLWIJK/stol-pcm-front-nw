const formKitTailwind = require('@formkit/themes/tailwindcss');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        back_dark: '#1E293B',
        back_light: '#E5E7EB',
        base_dark: '#293548',
        base_light: '#f3f4f6',
        primary_light: '#d22630',
        primary_lighter: '#FF0048',
        primary_dark: '#93c5fd',
        primary_darker: '#5CBBF6'
      }
    }
  },
  plugins: [
    formKitTailwind
  ]
}
