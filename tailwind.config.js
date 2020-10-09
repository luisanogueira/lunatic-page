module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    screens: {
      'sm': {'max': '767px'},
      'md': {'max': '1023px'},
      'lg': '1024px',
    },
    fontFamily: {
      body: ['SourceCodePro', 'sans-serif'],
    },
    extend: {
      colors: {
        'russian-violet': '#170940',
        'rusty-red': '#E70342',
        'tyrian-purple': '#61063F',
      },
      spacing: {
        
      }
    },
  },
  variants: {},
  plugins: [],
}
