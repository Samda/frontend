import colors from 'vuetify/lib/util/colors'
import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vuetify.config.silent = true

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.teal.darken1,
        secondary: colors.teal.darken2,
        accent: '#8c9eff',
        error: '#b71c1c',
      },
    },
  }
})
