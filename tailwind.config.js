/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#492a48',
        secondary: '#ac0808',
        tertiary: '#038307',
      },
      boxShadow: {
        'default': '2px 4px 8px 0px rgba(0, 0, 0, 0.1)',
        'button-active': 'inset 0px 2px 0px 0px rgba(0, 0, 0, 0.2)',
        'article': '4px 8px 16px 0px rgba(34, 18, 90, 0.2)',
      },
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      backgroundColor: {
        'main': '#f8f8f2',
      },
      backgroundImage: {
        'pattern': "url('/images/graphics/pattern.png')",
        'pattern-footer': "url('/images/graphics/pattern-footer.png')",
      },
    },
  },
  plugins: [],
}
