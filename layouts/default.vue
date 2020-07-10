<template>
  <v-main>
    <v-app id="inspire">
      <Navbar v-if="$auth.loggedIn"/>
        <v-container fluid>
          <Nuxt v-if="$auth.loggedIn" />
          <LoginForm :submitForm="userLogin" v-if="!$auth.loggedIn"/>
        </v-container>
    </v-app>
  </v-main>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  created(){
    console.log(this.$auth.loggedIn)
    console.log(this.$auth)
  },
  methods: {
    async userLogin(loginInfo) {
      try {
        let response = await this.$auth.loginWith('local', { data: loginInfo })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
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

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
