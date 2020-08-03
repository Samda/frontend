<template lang="pug">
  v-container(fluid)
    v-row
      v-col(cols="12", sm="4", md="4", lg="4", :key="i", v-for="i in 5")
        v-card(
          class="mx-auto"
          max-width="400")
          v-img(
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")
            v-card-title New Two Floor Twin Villa

          v-card-subtitle(class="pb-0") Number 10
          v-card-text(class="text--primary")
            div Two Floor Villa
            div Western style decoration.

          v-card-actions
            v-btn(
              color="orange"
              text
              Share)
            v-btn(
              color="orange"
              text
              Explore)
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
</style>
