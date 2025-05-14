 /** @type {import('tailwindcss').Config} */
 const textShadow = require('tailwindcss-textshadow');
 export default {
  darkMode: "class",
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx,css}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFBA49',
        purple: '#6320EE',
        purpleOp: '#6520ee70',
        turq: '#07BEB8',
        white: '#F5F5F5',
        whiteOp: '#F5F5F570',
        white2: '#DDDDDD',
        white3: '#CECECE',
        black: '#101010',
        black1: '#1A1A1A',
        black2: '#2F2F2F',
        black3: '#3E3E3E'
      },
      scale: {
        '102': '1.02',
      },
      screens: {
        'hsm': { 'max': '640px' }, // Breakpoint para pantallas más pequeñas o iguales a 480px
        'sm': { 'min': '640px' }, 
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
    keyframes: {
      fadeInUp: {
        '0%': { opacity: '0', transform: 'translateY(1.5rem)' },
        '100%': { opacity: '1', transform: 'translateY(0)' },
      },
    },
    animation: {
      fadeInUp: 'fadeInUp 0.6s ease-out forwards',
    },
  },
  plugins: [textShadow],
}

/* npx tailwindcss -i ./src/index.css -o ./src/output.css --watch */