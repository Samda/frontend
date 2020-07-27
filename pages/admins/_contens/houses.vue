<template lang="pug">
  <v-container>
    v-row
      v-column
    cardHouse
  </v-container>
</template>
<script>
  import cardHouse from '@/components/admin/cardHouse'
  export default {
    layout: "admin",
    data(){
      return {
        dialog: false
      }
    },
    components: {
      cardHouse
    }
  }
</script>
<style lang="scss" scoped>
</style>
