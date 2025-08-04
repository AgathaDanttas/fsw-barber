/** @type {import('tailwindcss').Config} */
export default {
   darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark_purple:'#221C3D',
        primary_purple:'#8162FF',
        background_black:'#141518',
        secondary_black: '#1A1B1F',
        primary_purple: '#8162FF',
        gray1:  '#26272B',
        gray2:  '#4E525B',
        gray3:  '#838896',
        redr:   '#EF4444',
        dark_red:'#2F1F1F',
      },
      fontFamily:{
        sans: ['Nunito', 'sans-serif']
      }
      
    },
  },
  plugins: [],
}
