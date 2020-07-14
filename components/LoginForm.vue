<template lang="html">
  <v-app id="inspire">
    <v-container
      fluid
      class="fill-height"
    >
    <v-row
      align="center"
      justify="center"
      >
      <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="brown darken-2"
              dark
              flat
              >
              <v-spacer></v-spacer>
              <v-toolbar-title >Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  color="brown"
                  v-model="loginInfo.email"
                  label="Login"
                  name="login"
                  prepend-icon="mdi-account"
                  type="text"
                ></v-text-field>
                <v-text-field
                  color="brown"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  v-model="loginInfo.password"
                  id="password"
                  label="Password"
                  name="password"
                  prepend-icon="mdi-lock"
                  type="password"
                  :type="show1 ? 'text' : 'password'"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
              class="white--text"
              color="brown darken-2"
              @click="submitForm(loginInfo)"
              >Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
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
