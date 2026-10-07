/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 950: '#060d1c', 900: '#0a1730', 800: '#10224a', 700: '#1a3166' },
        emerald: { deep: '#0f6b4f', rich: '#13805f', soft: '#e4f2ec' },
        gold: { DEFAULT: '#b8975a', light: '#d9c08f', soft: '#f3ead7' },
        ivory: { DEFAULT: '#faf8f4', 100: '#f3f0e9', 200: '#e8e3d8' },
        ink: '#17213a',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Fraunces"', 'Georgia', 'serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(10,23,48,.04), 0 12px 32px -12px rgba(10,23,48,.12)',
        lift: '0 2px 4px rgba(10,23,48,.05), 0 24px 48px -16px rgba(10,23,48,.22)',
      },
    },
  },
  plugins: [],
}
