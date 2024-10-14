/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-section' : "url('/public/images/bg.svg')",
        'icons-texture' : "url('/public/images/bg-icons.svg')"
      }
    },
  },
  plugins: [],
}

