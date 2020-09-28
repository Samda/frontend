<template lang="pug">
  div
    v-navigation-drawer(
      v-model="drawer"
      app
      temporary)
      v-container
        div.mb-5.text-center
         nuxt-link(to="/admin")
          v-avatar(
            size="80"
            tile)
            v-img(src="https://www.khland.com.kh/assets/images/kh_lg.png")
        v-divider
        v-list(dense)
          v-list-item(
            color="brown darken-4"
            v-for="item in items"
            :key="item.text"
            router
            :to="(item.route)")
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
                v-icon(color="#6b4912") mdi-logout
              v-list-item-title Logout
    v-app-bar( app clipped-left)
      v-app-bar-nav-icon(color="#6b4912" @click="drawer = true")
      v-toolbar-title
        span.title
          nuxt-link.text-decoration-none(to="/admin")
           span.brown--text.text-darken-4 KH
           span.light-green--text.text-darken-3 LAND
      v-spacer
      v-menu(
        z-index="90"
        transition="slide-y-transition"
        small
        bottom
        offset-y)
        template(v-slot:activator="{ on, attrs }")
          v-btn(
            v-bind="attrs"
            v-on="on"
            color="#6b4912"
            text
            )
            v-icon(left) mdi-account
            | {{$auth.user.email}}
        v-list
          v-list-item(router to="/admin/users/2")
            v-list-item-icon
              v-icon mdi-account-box-outline
            v-list-item-content
              v-list-item-title My Profile
          v-divider
          v-list-item(router to="/admin/users/edit/2")
            v-list-item-icon
              v-icon mdi-account-edit
            v-list-item-content
              v-list-item-title Edit Profile
          v-divider
          v-list-item(router to="settings")
            v-list-item-icon
              v-icon mdi-cog
            v-list-item-content
              v-list-item-title Settings
          v-divider
          v-list-item(@click="Logout" color="red")
            v-list-item-icon
              v-icon mdi-logout
            v-list-item-content
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
          { icon: 'mdi-home-city-outline', text: 'ផ្ទះគំរូ', route: "/admin/houses" },
          { icon: 'mdi-home-group', text: 'ប្រភេទម៉ូតផ្ទះគំរូ', route: "/admin/house_models" },
          { icon: 'mdi-folder-home', text: 'ផ្ទះគំរូរបស់អតិថិជន', route: "/admin/modified_houses" },
          { icon: 'mdi-home', text: 'សំភារះសំរាប់ផ្ទះ', route: '/admin/utilities'},
          { icon: 'mdi-account-group', text: 'សមាជិក', route: "/admin/users" },
          // { icon: 'mdi-cloud-upload', text: 'បញ្ចូលទិន្ន័យផ្ទះ', route: "/admin/import-file" },
          { icon: 'mdi-lifebuoy', text: 'ជំនួយក្នុងការប្រើប្រាស់', route: "/admin/system-support" },
          { icon: 'mdi-comment-account-outline', text: 'មតិអតិថិជន', route: "/admin/feedback" }
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
        this.$router.push('/admin/login')
      }
    },
    computed: {
      ...mapState(['auth'])
    }

  }
</script>
<style lang="scss" scoped>
</style>
