/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ragul:['Regular'],
      },
      fontFamily:{
        zoro:['Regular'],
      },
      backgroundImage: {
        'zoro': "url('./src/assets/logo/zoro dev.webp')",
        
      }

    },
  },
  plugins: [],
}

