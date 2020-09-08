<template lang="pug">
  v-container
    v-row( align="center" justify="center")
      v-col(cols="12" md="6" ms="8")
        v-card.elevation-12
          v-toolbar(
            color="#78a152"
            class="brown--text"
            flat)
            v-spacer
            v-toolbar-title.text-h4.text-uppercase LOGIN
            v-spacer
          v-card-text
            v-form
              v-text-field(
                color="#78a152"
                v-model="loginInfo.user.email"
                label="Login"
                name="login"
                prepend-icon="mdi-account"
                type="text")
              v-text-field(
                color="#78a152"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                v-model="loginInfo.user.password"
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1")
          v-card-actions
            v-btn(
              class="ml-2"
              color="primary"
              outlined
              @click="submitForm(loginInfo)") Sign in
            v-btn(
              color="primary"
              outlined
              class="mr-5") Sing Up
            v-spacer
            span
              nuxt-link(to="/forget_password") Forget password?
</template>

<script>
export default {
  data () {
    return {
      show1: false,
      loginInfo: {
        user: {
            email: 'user2@email.com',
            password: 'password'
          }
      }
    }
  },
  props: ["submitForm"],
}
</script>

<style lang="scss" scoped>
</style>
