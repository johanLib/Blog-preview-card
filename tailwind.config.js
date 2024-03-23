/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'myYellow': '#F4D04E',
        'myGrey': '#7F7F7F'
      },
      borderRadius: {
        'card': '20px',
        'svg': '10px',
        '4': '4px'
      },
      width: {
        'card': '327px',
        'card++': '384px',
        '73': '73px'
      },
      height: {
        'card': '501px',
        'svg': '200px',
        '26': '26px'
      },
      boxShadow: {
        'card': '8px 8px black',
      },
      fontFamily: {
        figtree: ['Figtree', 'sans-serif']
      }
    },
  },
  plugins: [],
}

