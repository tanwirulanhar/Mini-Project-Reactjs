/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '800': '800px',
       
      },
      width: {
        'custome' : '496x',
        '704' : '704px',
        '184' : '184',
        
      },
      margin: {
        '108' : '108px',
      },
      


    },
  },
  plugins: [],
}

