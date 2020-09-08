import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'spa',
  // router: {
  //   base: '/'
  // },
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'KH LAND Co.,ltd.',
    meta: [
      { name: "msapplication-TileColor", content: "#ffffff" },
      { name: "msapplication-TileImage", content: "/ms-icon-144x144.png" },
      { name: "theme-color", content: "#ffffff" },

      { charset: 'utf-8' },
      { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Realestate Leading Company In Cambodia' }
    ],
    link: [
      { rel: "manifest", href: "/manifest.json" },
      { rel: "apple-touch-icon", sizes: "57x57", href: "/apple-icon-57x57.png" },
      { rel: "apple-touch-icon", sizes: "60x60", href: "/apple-icon-60x60.png" },
      { rel: "apple-touch-icon", sizes: "72x72", href: "/apple-icon-72x72.png" },
      { rel: "apple-touch-icon", sizes: "76x76", href: "/apple-icon-76x76.png" },
      { rel: "apple-touch-icon", sizes: "114x114", href: "/apple-icon-114x114.png" },
      { rel: "apple-touch-icon", sizes: "120x120", href: "/apple-icon-120x120.png" },
      { rel: "apple-touch-icon", sizes: "144x144", href: "/apple-icon-144x144.png" },
      { rel: "apple-touch-icon", sizes: "152x152", href: "/apple-icon-152x152.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-icon-180x180.png" },

      { rel: "icon", type: "image/png", sizes: "192x192", href: "/android-icon-192x192.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "96x96", href: "/favicon-96x96.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
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
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/vuetify',
    '@nuxtjs/axios',
    '@nuxtjs/auth',
    "nuxt-leaflet",
  ],
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuratioan
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },

  axios: {
    baseURL: process.env.npm_package_app_url
  },

  auth: {
    cookie: {
      options: {
        secure: false,
      },
    },

    redirect: {
      login: '/admins/login',
      logout: '/admins/login',
      home: '/admins'
    },

    strategies: {
      local: {
        endpoints: {
          headers: {
            contentType: "application/json",
            Accept: "application/json"
          },
          login: {
            url: '/api/v1/auth/login',
            method: 'post',
            propertyName: 'data.token',
          },
          user: false,
          logout: false,
        },
        tokenType: 'Bear',
        tokenName: 'Authentication',
        autoFetchUser: false
      }
    }
  },

  extend(config, ctx) {
    // Run ESLint on save
    if(ctx.isDev && ctx.isClient){
      config.module.rules.push({
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/,
        options: {
          fix: true
        }
      })
    }
  }
}
