<template lang="pug">
  v-container(fluid)
    v-row
      v-col(cols="12")
        h5.text-h4.text-uppercase House For Modifying
        v-spacer
      v-col(cols="12")
        v-btn(
          small
          outlined
          color="brown darken-1" to="/admin/houses/new") Add new
    //-cardHouse
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
