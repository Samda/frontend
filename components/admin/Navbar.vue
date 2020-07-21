<template lang="pug">
  div
    v-navigation-drawer(
      v-model="drawer"
      app
      temporary)
      v-container(class="mb-n10")
        div(class="text-center")
          v-avatar(
            size="80"
            tile)
            v-img(src="https://www.khland.com.kh/assets/images/kh_lg.png")
        v-divider
      v-list(dense)
        v-list-item(
          v-for="item in items"
          :key="item.text"
          link
          @click="Linkto(item.route)")
          v-list-item-action
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.text }}
        v-subheader(class="mt-4 grey--text text--darken-1") Admin Users
        v-list
          v-list-item(
            v-for="item in items2"
            :key="item.text"
            link)
            v-list-item-avatar
              img(
                :src="`https://randomuser.me/api/portraits/men/${item.picture}.jpg`"
                alt="")
            v-list-item-title(v-text="item.text")
        v-list
          v-list-item( link @click="Logout")
            v-list-item-action
              v-icon(color="grey darken-1") mdi-logout
            v-list-item-title(class="grey--text text--darken-1") Logout
    v-app-bar( app clipped-left color="teal darken-1" dense)
      v-app-bar-nav-icon(@click="drawer = true")
      //- <v-list-item-avatar tile>
          <v-img src="https://www.khland.com.kh/assets/images/kh_lg.png"></v-img>
      v-toolbar-title(class="mr-12 align-center")
        span.title
          nuxt-link(class="black--text" to="/") KH LAND
        v-spacer
        //- <span>{{ getLoggedIn }}</span> -->
      v-spacer
      v-menu( bottom origin="center center" transition="slide-x-transition")
        template(v-slot:activator="{ on, attrs }")
          v-btn( v-bind="attrs" v-on="on" class="ma-8" small text)
            | {{auth.user.name}}
            v-icon(right dark) mdi-account
        v-list
          v-list-item(@click="")
            v-list-item-title Profile
          v-list-item(@click="")
            v-list-item-title Update
          v-list-item(@click="Logout")
            v-list-item-title Logout
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    props: {
      source: String,
    },
    data () {
      return {
        drawer: true,
        user_menu_items: [
          { icon: 'mdi-user', text: 'Profile', route: "/profile" },
          { icon: 'mdi-user', text: 'update', route: "/update" },
          { icon: 'mdi-logout', text: 'Logout', route: "/auth/logout" }
        ],
        items: [
          { icon: 'mdi-home-city-outline', text: 'ផ្ទះគំរូ', route: "/houses" },
          { icon: 'mdi-home-group', text: 'ប្រភេទម៉ូតផ្ទះគំរូ', route: "/house_models" },
          { icon: 'mdi-folder-home', text: 'ផ្ទះគំរូរបស់អតិថិជន', route: "/modified_houses" },
          { icon: 'mdi-home', text: 'សំភារះសំរាប់ផ្ទះ', route: '/utilities'},
          { icon: 'mdi-account-group', text: 'ផ្នាក់ងារលក់', route: "/agencies" },
          { icon: 'mdi-cloud-upload', text: 'បញ្ចូលទិន្ន័យផ្ទះ', route: "/import" }
        ],
        items2: [
          { picture: 28, text: 'Joseph' },
          { picture: 38, text: 'Apple' },
          { picture: 48, text: 'Xbox Ahoy' },
          { picture: 58, text: 'Nokia' },
          { picture: 78, text: 'MKBHD' },
        ]
      }
    },
    created () {
      this.$vuetify.theme.tealDarken1 = true
    },
    methods: {
      Linkto(route){
        this.$router.push({ path: route })
      },
      Logout(){
        this.$store.dispatch('logOut')
        this.$router.push('/login')
      }
    },
    computed: {
      ...mapState(['auth'])
    }

  }
</script>
<style lang="scss" scoped>
</style>
