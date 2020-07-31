<template lang="pug">
  v-container(fluid)
    v-row
      v-col(cols="12")
        span.text-h4.text-uppercase House For Modifying
        v-spacer
        v-btn(
          outlined
          large color="brown darken-1" to="/admins/contents/houses/content/new") Add new
    cardHouse
</template>
<script>
  import cardHouse from '@/components/admin/cardHouse'
  export default {
    layout: "admin",
    components: {
      cardHouse
    }
  }
</script>
<style lang="scss" scoped>
</style>
