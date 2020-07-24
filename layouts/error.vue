<template lang="html">
  <v-app id="inspire">
    <v-container
      fluid
      class="fill-height"
    >
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <v-row
      align="center"
      justify="center"
      >
      <v-col
          cols="12"
          sm="8"
          md="4"
        >
        <v-card
          class="mx-auto"
          color="brown daren-1"
          dark
          max-width="800"
        >
          <v-img
            height="250"
            gradient="to bottom, rgba(0,0,0, .4), rgba(0,0,0,1)"
            src="https://library.kissclipart.com/20181214/igq/kissclipart-twibbon-sumpah-pemuda-clipart-crane-construction-c-d57ab034d4a8fd44.jpg"
            >

            <div class="d-flex flex-no-wrap justify-space-between mt-5">
              <div>
                <v-card-title
                  class="headline"
                >
                SORRY SOMETHING WENT WRONG HERE
                Please contact your Technical support !
                <nuxt-link to="/" class="inline text-decoration-underline" >back to home page</nuxt-link>

              </v-card-title>
              </div>

              <v-card-title>
                <v-spacer></v-spacer>
                <v-icon
                  size="100"
                >
                  mdi-alert-circle-outline
                </v-icon>
                <v-spacer></v-spacer>
              </v-card-title>
            </div>
          </v-img>
        </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'error-layout',
  props: ['error'],
}
</script>

<style lang="css" scoped>
</style>
