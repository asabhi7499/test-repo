/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },

    extend: {  
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
      maxWidth: {
      maxContent: "1260px",
      maxContentTab: "650px"
      },
    },
  },
  plugins: [],
};
