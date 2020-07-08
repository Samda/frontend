<template>
  <div>
    <h1>House</h1>
  </div>
</template>
<script>
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: true,
      items: [
        { icon: 'mdi-home-city-outline', text: 'Houses' },
        { icon: 'mdi-home-group', text: 'Admin Users' },
        { icon: 'mdi-folder-home', text: 'History' },
        { icon: 'mdi-home-account', text: 'ផ្ទះរបស់អតិថិជន' },
        { icon: 'mdi-home-import-outline', text: 'Import Houses' },
      ],
      items2: [
        { picture: 28, text: 'Joseph' },
        { picture: 38, text: 'Apple' },
        { picture: 48, text: 'Xbox Ahoy' },
        { picture: 58, text: 'Nokia' },
        { picture: 78, text: 'MKBHD' },
      ],
    }),
    created () {
      this.$vuetify.theme.tealDarken1 = true
    },
  }
</script>
<style lang="scss" scoped>
</style>
