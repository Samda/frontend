<template lang="pug">
  v-container
    v-row( align="center" justify="center")
      v-col(cols="12" md="6")
        v-card.elevation-12
          v-toolbar(
            color="brown darken-2"
            dark
            flat)
            v-spacer
            v-toolbar-title Login
            v-spacer
          v-card-text
            v-form
              v-text-field(
                color="brown"
                v-model="loginInfo.email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text")
              v-text-field(
                color="brown"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="loginInfo.password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1")
          v-card-actions
            v-spacer
            v-btn(
            class="white--text"
            color="brown darken-2"
            @click="submitForm(loginInfo)") Login
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      loginInfo: {
        email: 'samda@email.com',
        password: 'samda'
      }
    }
  },
  props: ["submitForm"]
}
</script>

<style lang="css" scoped>
</style>
