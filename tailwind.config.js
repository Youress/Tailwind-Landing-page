/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'regal-orange' : '#F55253',
        'icon-color':'#F54B4B',
        'rose-baht':'#FDECEC',
        'grey-color':'#676767',
        'yellow':"#FDC55E",
        'section-bg':'#FEF5F5',
        'svg-color':'#FF6162',
      },
      boxShadow:{
        'b-sh': 'rgb(188 188 188 / 20%) 0px 8px 24px'
      }
    },
  },
  plugins: [],
};

