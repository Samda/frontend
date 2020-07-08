import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vuetify.config.silent = true

Vue.use(Vuetify)

// export default new Vuetify({
//   theme: {
//     dark: true,
//   },
// })

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.green.lighten1,
        secondary: colors.brown.darken2,
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  },
})

export default vuetify;
