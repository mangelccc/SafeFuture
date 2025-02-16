 /** @type {import('tailwindcss').Config} */
 export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFBA49',
        purple: '#6320EE',
        turq: '#07BEB8',
        wsmk: '#F5F5F5',
        black1: '#1A1A1A',
        black2: '#2F2F2F',
        black3: '#3E3E3E'
      },
    },
  },
  plugins: [],
}

/* npx tailwindcss -i ./src/index.css -o ./src/output.css --watch */