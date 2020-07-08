<template>
  <main>
    <LoginForm :submitForm="loginUser"/>
  </main>
</template>

<script>

export default {
  methods: {
    loginUser () {
      this.$store.commit('loginUser')
    }
  },
  // computed: {
  //   loginUser(){
  //     return this.$store.$auth.$state.loggedIn
  //   }
  // }
}
</script>

<style>
</style>
