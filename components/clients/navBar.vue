<template lang="pug">
v-layout(row, justify-center)
  v-app-bar.d-none.d-sm-block(app)
    v-toolbar-title
      a(href="/")
        v-img(
          max-height="60",
          max-width="60",
          contain,
          src="https://www.khland.com.kh/assets/images/kh_lg.png"
        )
    v-toolbar-items.ml-16
      v-btn.navbar-items(to="/configuration", text) Config you house now
    v-spacer
    v-toolbar-items.ml-16
      v-btn.navbar-items(
        v-for="item in nav",
        :key="item.icon",
        text,
        :title="item.title",
        :to="item.link"
      ) {{ item.text }}
  v-app-bar.d-block.d-sm-none(app)
    v-toolbar-title
      a(href="/")
        v-img(
          max-height="50",
          max-width="50",
          contain,
          src="https://www.khland.com.kh/assets/images/kh_lg.png"
        )
    v-spacer
    v-btn(@click="dialog = true", color="primary", icon)
      v-app-bar-nav-icon
  v-dialog.d-flex.d-sm-none(
    v-model="dialog",
    fullscreen,
    hide-overlay,
    transition="dialog-bottom-transition"
  )
    v-card
      v-app-bar(flat)
        v-toolbar-title
          a(href="/")
            v-img(
              max-height="50",
              max-width="50",
              contain,
              src="https://www.khland.com.kh/assets/images/kh_lg.png"
            )
        v-toolbar-items.ml-16
          v-btn.navbar-items(to="/configuration", text) Config you house now
        v-spacer
        v-btn(icon, @click="dialog = false")
          v-icon mdi-close
      v-list(flat)
        v-list-item-group
          v-list-item.text-transform-uppercase(
            v-for="(item, index) in nav",
            :key="index",
            @click="toRoute(item.link)"
          )
            v-list-item-icon
              v-icon(v-text="item.icon")
            v-list-item-content
              v-list-item-title(v-text="item.text", :to="item.link")
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      nav: [
        {
          icon: "mdi-home",
          text: "Home",
          title: "Back to Home page",
          active: true,
          link: "/",
        },
        {
          icon: "mdi-information-outline",
          text: "About",
          title: "About this demo",
          active: false,
          link: "/about",
        },
        {
          icon: "mdi-lifebuoy",
          text: "SUPPORT",
          title: "Some stuff that needs doing",
          active: false,
          link: "support",
        },
        {
          icon: "mdi-email",
          text: "Contact",
          title: "Our Contact info",
          active: false,
          link: "contact",
        },
        {
          icon: "mdi-login",
          text: "login",
          title: "Our Contact info",
          active: false,
          link: "login",
        },
      ],
    };
  },

  methods: {
    toRoute(link) {
      this.$router.push(link);
      this.dialog = false;
    },
  },
};
</script>

<style lang="scss" scoped>
a.navbar-items:hover,
a.v-btn--active:hover {
  border-bottom: 2px solid #4e342e;
  color: #4e342e;
}
</style>
