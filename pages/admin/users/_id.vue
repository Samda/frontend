<template lang="pug">
  v-container.mt-15
    v-row
      v-col(cols="6")
        h4.text-h4 ព័តមានទូទៅ
      v-col.text-right(cols="6")
        v-btn(small color="primary" to="edit/2") Edit
    v-row
      v-col(cols="12" md="4" sm="4" lg="4")
        v-card
          v-row(justify="center" align="center")
            v-avatar.my-10(size="200" rounded)
              img(
                src="/person/img5.png"
                alt="John")
          v-card-actions
            .text-center
              v-btn(x-small center color="primary" to="edit/2")
                v-icon.mr-0(left) mdi-pencil-box-outline
                | Edit
      v-col(cols="12" md="8" sm="8" lg="8")
        v-expansion-panels(v-model="panel" readonly multiple focusable)
          v-expansion-panel
            v-expansion-panel-header ពត័មានសំរាប់ទំនាក់ទំនង
            v-expansion-panel-content
              v-row.my-5
                strong Email:
                v-spacer
                p sample-user@email.com
              v-row.my-5
                strong Phone:
                v-spacer
                p 090 009 223
          v-expansion-panel
            v-expansion-panel-header ពត័មានទូទៅ
            v-expansion-panel-content
              v-row.my-5
                strong ឈ្មោះ:
                v-spacer
                p sample-user@email.com
              v-row.my-5
                strong ថ្ងៃខែឆ្នាំកំណើត:
                v-spacer
                p 2020/09/09
              v-row.my-5
                strong អាស័យដ្ឋាន:
                v-spacer
                p ភ្នំពេញថ្មី
              v-row.my-5
                strong នាយកដ្ឋាន:
                v-spacer
                p ផ្នែកលក់
              v-row.my-5
                strong តួនាទី:
                v-spacer
                p ប្រធានផ្នែកលក់
</template>

<script>
export default {
  layout: 'admin',
  data(){
    return {
      panel: [0, 1]
    }
  },
  computed: {
    getUser(){
      this.$store.current_user();
    },
    user(){
      return {
        id: this.$route.params.id,
        name: 'User 1',
        email: 'user1@email.com',
        phone: '09988822'
      }
    }
  }
  // asyncData({ params }) {
  //   debugger
  //   this.$store.dispatch('getCurrentUser', params.id)
  // }
}
</script>

<style lang="scss" scoped>

</style>
