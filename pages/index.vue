<template lang="pug">
  v-container(fluid)
    v-row(dense)
      v-col(cols="12")
        navBar
</template>

<script>
import navBar from "@/components/clients/navBar"
export default {
  components: {
    navBar
  },
  data() {
    return {

    }
  }
}
</script>

<style>
</style>
