/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gunmetal': '#2E2E48',
        'yankees-blue': '#232339',
        'crayola': '#ACB1C3',
        'azureish-white': '#E2E6EE',
        'pale-violet': '#C696FC',
        'jordy-blue': '#95AAFB',
        'floral': '#A478E8',
        'ultramarine-blue': '#516CF7',
        'gainsboro': '#D9DFE8',
        'cobalt': '#2A337E',
        'violet': '#5531A7',
        'cosmic-cobalt': '#2A337E',
      }
    },

    typography: {
      quoteless: {
        css: {
          'blockquote p:first-of-type::before': true,
          'blockquote p:first-of-type::after': true,
        },
      },
    },

    fontFamily: {
      dmsans: ['DM Sans', 'sans-serif'],
      outfit: ['Outfit', 'sans-serif'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
