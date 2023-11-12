/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary:'#ef4444',
        dark:'#0f172a',
        secondary : '#e11d48'
      },
      screens:{
        '2xl':'1320px'
      }
    },
  },
  plugins: [],
}

