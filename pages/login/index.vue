<template lang="html">
  <main>
    <LoginForm :submitForm="userLogin"/>
  </main>
</template>

<script>
export default {
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
      this.$router.replace('/')
      return
    }
  }
}
</script>

<style lang="css" scoped>
</style>
