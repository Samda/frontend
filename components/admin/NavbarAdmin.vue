<template lang="pug">
  div
    v-navigation-drawer(
      v-model="drawer"
      app
      temporary)
      v-container
        div.mb-5.text-center
         nuxt-link(to="/admins")
          v-avatar(
            size="80"
            tile)
            v-img(src="https://www.khland.com.kh/assets/images/kh_lg.png")
        v-divider
        v-list(dense)
          v-list-item(
            color="brown"
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
      v-toolbar-title
        span.title
          nuxt-link.grey--text.text--darken-4.text-decoration-none(to="/admins") KH LAND
      v-spacer
      //-button( type="button" class="ml-2 v-btn v-btn--flat v-btn--text theme--light v-size--default" role="button" aria-haspopup="true" aria-expanded="false" style="min-width: 0px;")
        span(class="v-btn__content")
          i(aria-hidden="true" class="v-icon notranslate mdi mdi-account theme--light")
      v-btn(depressed small) Normal
      v-menu(bottom origin="center center" transition="slide-x-transition")
        v-btn.grey--text.text--darken-4(
          icon
          color="teal")
          v-icon mdi-account
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
          { icon: 'mdi-user', text: 'Profile', route: "/admins/users/profile" },
          { icon: 'mdi-user', text: 'update', route: "/admins/users/update" },
          { icon: 'mdi-logout', text: 'Logout', route: "" }
        ],
        items: [
          { icon: 'mdi-home-city-outline', text: 'ផ្ទះគំរូ', route: "/admins/houses" },
          { icon: 'mdi-home-group', text: 'ប្រភេទម៉ូតផ្ទះគំរូ', route: "/admins/house_models" },
          { icon: 'mdi-folder-home', text: 'ផ្ទះគំរូរបស់អតិថិជន', route: "/admins/modified_houses" },
          { icon: 'mdi-home', text: 'សំភារះសំរាប់ផ្ទះ', route: '/admins/utilities'},
          { icon: 'mdi-account-group', text: 'ផ្នាក់ងារលក់', route: "/admins/agencies" },
          { icon: 'mdi-cloud-upload', text: 'បញ្ចូលទិន្ន័យផ្ទះ', route: "/admins/user-import" },
          { icon: 'mdi-lifebuoy', text: 'ជំនួយក្នុងការប្រើប្រាស់', route: "/admins/support" },
          { icon: 'mdi-comment-account-outline', text: 'មតិអតិថិជន', route: "/admins/feedback" }
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
    methods: {
      Linkto(route){
        this.$router.push({ path: route })
      },
      Logout(){
        this.$store.dispatch('logOut')
        this.$router.push('/admins/login')
      }
    },
    computed: {
      ...mapState(['auth'])
    }

  }
</script>
<style lang="scss" scoped>
</style>
