<template lang="pug">
  div
    v-navigation-drawer(
      v-model="drawer"
      app
      temporary)
      v-container(class="mb-n10")
        div(class="text-center")
         nuxt-link(to="/admin")
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKSEuKKwqIqbJH-NRiDHluGbuC9ysMW99BPA&usqp=CAU"
                alt="")
            v-list-item-title(v-text="item.text")
        v-list
          v-list-item( link @click="Logout")
            v-list-item-action
              v-icon(color="grey darken-1") mdi-logout
            v-list-item-title(class="grey--text text--darken-1") Logout
    v-app-bar( app clipped-left color="brown darken-1" dense)
      v-app-bar-nav-icon.grey--text.text--darken-4(@click="drawer = true")
      //- <v-list-item-avatar tile>
          <v-img src="https://www.khland.com.kh/assets/images/kh_lg.png"></v-img>
      v-toolbar-title(class="mr-12 align-center")
        span.title
          nuxt-link.grey--text.text--darken-4( to="/admin") KH LAND
        v-spacer
        //- <span>{{ getLoggedIn }}</span> -->
      v-menu( bottom origin="center center" transition="slide-x-transition")
        v-btn.grey--text.text--darken-4(
          icon
          tile
          large
          color="teal")
          v-icon mdi-account
          //-| {{auth.user.name}}
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
        drawer: false,
        user_menu_items: [
          { icon: 'mdi-user', text: 'Profile', route: "/admin/users/profile" },
          { icon: 'mdi-user', text: 'update', route: "/admin/users/update" },
          { icon: 'mdi-logout', text: 'Logout', route: "" }
        ],
        items: [
          { icon: 'mdi-home-city-outline', text: 'ផ្ទះគំរូ', route: "/admins/contents/houses" },
          { icon: 'mdi-home-group', text: 'ប្រភេទម៉ូតផ្ទះគំរូ', route: "/admins/contents/house_models" },
          { icon: 'mdi-folder-home', text: 'ផ្ទះគំរូរបស់អតិថិជន', route: "/admins/contents/modified_houses" },
          { icon: 'mdi-home', text: 'សំភារះសំរាប់ផ្ទះ', route: '/admins/contents/utilities'},
          { icon: 'mdi-account-group', text: 'ផ្នាក់ងារលក់', route: "/admins/contents/agencies" },
          { icon: 'mdi-cloud-upload', text: 'បញ្ចូលទិន្ន័យផ្ទះ', route: "/admins/contents/user-import" },
          { icon: 'mdi-lifebuoy', text: 'ជំនួយក្នុងការប្រើប្រាស់', route: "/admins/contents/support" },
          { icon: 'mdi-comment-account-outline', text: 'មតិអតិថិជន', route: "/admins/contents/feedback" }
        ],
        items2: [
          { picture: 28, text: 'Brian Nang' },
          { picture: 38, text: 'Panha Leng' },
          { picture: 48, text: 'Khemrith' },
          { picture: 58, text: 'Emma' },
          { picture: 78, text: 'Pisey' },
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
