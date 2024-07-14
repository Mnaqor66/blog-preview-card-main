/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    },
    colors: {
      'Yellow': '#f4d04e',
      'White': '#ffffff',
      'Grey': '#808080',
      'Black': '#121212'
    },
    fontFamily: {
      'Figtree': '"Figtree"'
    },
    extend: {
      boxShadow: {
        'basic': '10px 10px 0px 0px #121212',
        'active': '20px 20px 0px 0px #121212'
      }
    }
  },
  plugins: [],
}

