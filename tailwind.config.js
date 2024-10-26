module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, 
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.scrollbar-hide': {
          
          '-webkit-overflow-scrolling': 'touch',
          '-ms-overflow-style': 'none', 
          'scrollbar-width': 'none', 
          '&::-webkit-scrollbar': {
            display: 'none', 
          },
        },
      });
    },
  ],
};
