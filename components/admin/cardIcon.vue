<template lang="html">
  <v-card
    :color="color"
    max-width="300"
  >
    <v-card-title>
      <v-spacer></v-spacer>
      <v-icon
        size="100"
      >
        mdi-home-city-outline
      </v-icon>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-title class="mt-n10" size="90">
      <v-spacer></v-spacer>
      <span>House</span>
      <v-spacer></v-spacer>
    </v-card-title>
    <v-card-text>
      "Turns out semicolon-less "
    </v-card-text>
    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-content>
          <v-list-item-title>Evan You</v-list-item-title>
        </v-list-item-content>

        <v-row
          align="center"
          justify="end"
        >
          <v-icon class="mr-1">mdi-heart</v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1">mdi-share-variant</v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['color']
}
</script>

<style lang="css" scoped>
</style>
