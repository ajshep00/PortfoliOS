/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        'rose': '#ff0080',
        'gunmetal': '#292F36',
        'un_blue': '#5899E2'
      },
      opacity: {
        '20': '.20',
      },
      backgroundImage: {
        'paper-texture': "url('/files/artwork/textures/paper_texture.png')",
        'paper-texture-lg': "url('/files/artwork/textures/paper_texture_big.png')"
      }
    },
  },
  plugins: [],
}
