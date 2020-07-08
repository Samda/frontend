
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { defer: true, src: "https://use.fontawesome.com/releases/v5.3.1/js/all.js" }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '@/plugins/vuetify.js'
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // '@nuxtjs/vuetify'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/vuetify',
    '@nuxtjs/bulma',
    '@nuxtjs/axios',
    '@nuxtjs/auth'
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    vuetify: {
      //what ever options you may like
    },
    vender: ['axios', 'vuetify'],
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      },

      extend(config, { isDev }) {
        const vueLoader = config.module.rules.find((rule) => rule.loader === 'vue-loader')
        vueLoader.options.transformToRequire['img'] = ['src', 'data-src']
        if (isClient) {
          vue.transformAssetUrls.video = ['src', 'poster']
        }
      }
    }
  },
  axios: {
    baseURL: 'http://localhost:3000/api'
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'auth/login',
            method: 'post',
            propertyName: 'data.token',
          },
          user: {
            url: 'v1/users/:id',
            method: 'get',
            propertyName: 'data.user'
          },
          logout: false,
          headers: {
            contentType: "application/json"
          }
          // logout: {
          //   url: 'auth/logout',
          //   method: 'post',
          //   propertyName: 'data.token',
          // }
        }
      }
    }
  }
}
