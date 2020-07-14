<template lang="html">
  <v-card
    :color="item.color"
    dark
  >
    <div class="d-flex flex-no-wrap justify-space-between">
      <div>
        <v-card-title
          class="headline"
          v-text="item.title"
        ></v-card-title>

        <v-card-subtitle>{{item.total}} {{item.unit}}</v-card-subtitle>
        <v-card-actions>
          <v-btn text small >បើកមើល</v-btn>
        </v-card-actions>
      </div>

      <v-card-title>
        <v-spacer></v-spacer>
        <v-icon
          size="100"
        >
          {{item.icon}}
        </v-icon>
        <v-spacer></v-spacer>
      </v-card-title>
    </div>
  </v-card>
</template>

<script>
export default {
  data: () => ({
  }),
  props: ['item']
}
</script>

<style lang="css" scoped>
</style>
