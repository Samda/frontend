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
    v-row
      v-col(cols="6" ms="4" md="4" lg="4" xl="4" v-for="i in 8", :key="i")
        v-card(
          class="mx-auto"
          max-width="400")
          v-img(
            class="white--text align-end"
            height="200px"
            src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/118149058_1802696249896606_8024808295273225789_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=-Dkx1ZnqTboAX_Sg5iM&_nc_ht=scontent.fpnh1-2.fna&oh=edb2c70cf8a59fe8fcfc6b43af08e67c&oe=5F951D02")
            v-card-title វីឡាតូលកូនកាត់ ពីរជាន់
          v-card-subtitle(class="pb-0") $ 90000

          v-card-text(class="text--primary")
            div មាន ២បន្ទប់
          v-card-actions
            v-btn(
              to="houses/edit/2"
              color="orange"
              text) Edit
            v-btn(
              to="houses/2"
              color="orange"
              text) Explore
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
