/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/public/images/bg.png')",
        'icons-texture': "url('/public/images/bg-icons.png')"
      }
    },
  },
  plugins: [],
}

