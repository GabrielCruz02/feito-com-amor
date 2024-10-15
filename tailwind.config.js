/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://github.com/GabrielCruz02/feito-com-amor/blob/main/public/images/bg.png?raw=true')",
        'icons-texture': "url('https://github.com/GabrielCruz02/feito-com-amor/blob/main/public/images/bg-icons.png?raw=true')"
      }
    },
  },
  plugins: [],
}

