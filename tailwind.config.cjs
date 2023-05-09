/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
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
        'fiord': '#47516B',
        'waterloo': '#79819A',
        'white-lilac': '#F7F9FC',
        'hawkes-blue': '#E1E7FE',
      },

      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },

      animation: {
        rotate: 'rotate 10s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg) scale(6.9)' },
          '100%': { transform: 'rotate(-360deg) scale(6.9)' },
        },
      },
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
    require("daisyui"),
    require('@tailwindcss/typography'),
    // ...
  ],

  daisyui: {
    themes: false,
  },
}
