module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-text': '#282828',
        'custom-coral': '#FF7F50',
        'custom-blue' : '#3FBD82'
      },
      boxShadow: {
        'notclick': '0 4px #e5e5e5',
        'click': '0 4px #E45D2C',
      },
      width: {
        '15%': '15%',
        '48%': '48%',
        '30%': '30%',
        '31%': '31.3%',
        '70%': '70%',
        '80%': '80%',
        '90%': '90%'
      },
      minHeight: {
        'custom-min-height': '8rem'
      }
    },
    
  },
  plugins: [],
}
