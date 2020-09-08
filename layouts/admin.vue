<template lang="pug">
  v-main
    v-app(id="inspire")
      NavbarAdmin(v-if="$auth.loggedIn")
      div.mb-15
        nuxt
      footerAdmin
</template>

<script>
import NavbarAdmin from '@/components/admin/NavbarAdmin'
import footerAdmin from '@/components/admin/footerAdmin'

export default {
  name: "admin",
  components: {
    NavbarAdmin,
    footerAdmin
  },
  created(){
    if(this.$auth.loggedIn){
      let auth_user = JSON.parse(localStorage.getItem("auth_user"))
      let auth_token = localStorage.getItem("auth_token")
      this.$nuxt.$auth.setToken('local', auth_token)
      this.$auth.setUser(auth_user)
      this.$axios.defaults.headers.common['Authorization'] = auth_token
    }
    else {
      this.$router.push('/admin/login')
    }
  }
}
</script>

<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
