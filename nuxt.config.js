
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */

  // router: {
  //   base: '/'
  // },

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
    port: 8000, // default: 8000
    host: '0.0.0.0' // default: localhost
  },
  head: {
    title: 'KH LAND Co.,ltd.',
    meta: [
      { charset: 'utf-8' },
      {"http-equiv"": "X-UA-Compatible", content: "IE=edge"},
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/khland.png' }
    ],
    script: [
      // { defer: true, src: "https://use.fontawesome.com/releases/v5.3.1/js/all.js" }
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
    '@/plugins/vuetify.js',
    '@/plugins/axios.js'
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
    // [
    //   '@nuxtjs/router',
    //   {
    //     path: 'router',
    //     fileName: 'index.js',
    //     keepDefaultRouter: true,
    //   },
    // ]
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
  ** Build configuratioan
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
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
    baseURL: process.env.npm_package_app_url || "http:locahost:3000/api/v1"
  },
  auth: {
    cookie: {
      options: {
        secure: false,
      },
    },
    redirect: {
      login: '/login',
      logout: '/',
      // callback: '/login',
      home: '/'
    },
    strategies: {
      local: {
        endpoints: {
          headers: {
            contentType: "application/json"
          },
          login: {
            url: '/auth/login',
            method: 'post',
            propertyName: 'data.token',
          },
          user: false,
          logout: false,
          // user: {
          //   url: 'v1/users/:id',
          //   method: 'get',
          //   propertyName: 'data.user'
          // },
          // logout: {
          //   url: 'auth/logout',
          //   method: 'post',
          //   propertyName: 'data.token',
          // }
        },
        tokenType: '',
        tokenName: 'x-auth',
        autoFetchUser: false
      }
    }
  }
}
