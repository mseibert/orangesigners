/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,jsx,vue}'],
  theme: {
    extend: {
      colors: {
        'oranienschule': {
          400: '#ff9a1a', // heller Orange
          500: '#f08300', // Hauptfarbe der Oranienschule
          600: '#e07400', // dunkler Orange
          700: '#d07100', // noch dunkler
        }
      }
    },
  },
  plugins: [],
}
