<template>
  <v-container fluid>
    <cardHouse />
  </v-container>
</template>
<script>
  import cardHouse from '@/components/cardHouse'
  export default {
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
