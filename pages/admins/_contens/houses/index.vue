<template>
  <v-container fluid>
    <cardHouse />
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
