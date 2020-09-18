<template lang="pug">
  div
    v-container
      v-row( align="center" justify="center")
        v-col(cols="12" md="6")
          .text-center
            v-avatar(size="100" tile)
              v-img(
                aspect-ratio="1"
                height="100%"
                src="https://www.khland.com.kh/assets/images/kh_lg.png")
    LoginForm(:submitForm="userLogin")
</template>

<script>
export default {
  layout: "admin",

  methods: {
    userLogin(loginInfo) {
      this.$store.dispatch('userLogin', loginInfo)
    }
  },

  mounted () {
    if (this.$auth.loggedIn) {
      if (this.$auth.$storage.getUniversal('redirect')) {
        this.$router.replace(this.$auth.$storage.getUniversal('redirect'))
        this.$auth.$storage.removeUniversal('redirect')
        return;
      }
      this.$router.replace('/admin')
      return
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
