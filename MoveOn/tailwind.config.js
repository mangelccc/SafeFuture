/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFBA49', // Color amarillo dorado
      },
    },
  },
  plugins: [],
}

