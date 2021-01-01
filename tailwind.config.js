module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        purple: {
          light: '#3121E6',
          DEFAULT: '#3121E6',
          dark: '#3121E6'
        }
      }
    },
    variants: {
      extend: {}
    },
    plugins: []
  }
}
