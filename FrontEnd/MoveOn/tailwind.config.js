 /** @type {import('tailwindcss').Config} */
 export default {
  darkMode: "class",
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFBA49',
        purple: '#6320EE',
        purpleOp: '#6520ee70',
        turq: '#07BEB8',
        white: '#F5F5F5',
        white2: '#DDDDDD',
        white3: '#CECECE',
        black: '#101010',
        black1: '#1A1A1A',
        black2: '#2F2F2F',
        black3: '#3E3E3E'
      },
      spacing: {
        /* 
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem'
        */
      },
      width: {
      /*
        72: '18rem',
        84: '21rem',
        96: '24rem', */
      },
      height: {
        /* 128: '32rem', */
      }
    },
  },
  plugins: [],
}

/* npx tailwindcss -i ./src/index.css -o ./src/output.css --watch */