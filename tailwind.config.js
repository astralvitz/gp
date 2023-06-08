const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dialogue-box': 'url(/ui_dialogue.jpg)',
        'minimap': 'url(/ui_minimap_transparency.jpg)',
        'minimap-ge': 'url(/ui_minimap.jpg)',
      },
      fontFamily: {
        'runescape': ['Runescape', 'sans-serif'],
      }
    },
  },
  variants: {},
  plugins: [],
}
