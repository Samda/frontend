<template lang="pug">
v-layout(row justify-center)
  v-app-bar(
    app
    class="d-none d-sm-block")
    v-toolbar-title
      a(href="/")
        v-img(
          max-height="60"
          max-width="60"
          contain
          src="https://www.khland.com.kh/assets/images/kh_lg.png")
    v-toolbar-items(class="ml-16")
     v-btn(
       class="navbar-items"
       to="/configuration"
       text) Config a home now
    v-spacer
    v-toolbar-items(class="ml-16")
     v-btn(
       class="navbar-items"
       v-for="item in nav"
       :key="item.icon"
       text
       :title="item.title"
       :to="item.link") {{ item.text }}
  v-app-bar(app class="d-block d-sm-none")
    v-toolbar-title
      a(href="/")
        v-img(
          max-height="50"
          max-width="50"
          contain
          src="https://www.khland.com.kh/assets/images/kh_lg.png")
    v-spacer
    v-btn(
      @click="dialog = true"
      color="primary"
      icon)
      v-app-bar-nav-icon
  v-dialog(v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition" class="d-flex d-sm-none")
    v-card
      v-app-bar(flat)
        v-toolbar-title
          a(href="/")
            v-img(
              max-height="50"
              max-width="50"
              contain
              src="https://www.khland.com.kh/assets/images/kh_lg.png")
        v-spacer
        v-btn(icon @click="dialog = false")
          v-icon mdi-close
      v-list(flat)
        v-list-item-group
          v-list-item(
            v-for="(item, index) in nav"
            :key="index"
            class="text-transform-uppercase"
            @click="toRoute(item.link)")
            v-list-item-icon
              v-icon(v-text="item.icon")
            v-list-item-content
              v-list-item-title(v-text="item.text" :to="item.link")
</template>

<script>
export default {
  data(){
    return {
      dialog: false,
      nav: [
        {
          icon: 'mdi-home',
          text: 'Home',
          active: true,
          link: '/'
        },
        {
          icon: 'mdi-information-outline',
          text: 'About',
          active: false,
          link: '/about'
        },
        {
          icon: 'mdi-lifebuoy',
          text: 'SUPPORT',
          active: false,
          link: 'support'
        },
        {
          icon: 'mdi-email',
          text: 'Contact',
          active: false,
          link: 'contact'
        },
        {
          icon: 'mdi-login',
          text: 'login',
          active: false,
          link: 'login'
        }
      ]
    }
  },

  methods: {
    toRoute(link){
      this.$router.push(link)
      this.dialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
a.navbar-items:hover, a.v-btn--active:hover {
  border-bottom: 2px solid #4e342e;
  color: #4e342e;
}
</style>
