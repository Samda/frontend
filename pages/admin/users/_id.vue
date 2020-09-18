<template lang="pug">
  v-container.mt-15
    h1 User Vuew
</template>

<script>
export default {
  layout: 'admin',
  computed: {
    getUser(){
      this.$store.current_user();
    }
  },
  asyncData({ params }) {
    debugger
    this.$store.dispatch('getCurrentUser', params.id)
  }

}
</script>

<style lang="scss" scoped>
</style>
