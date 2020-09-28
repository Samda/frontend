<template lang="pug">
v-container
  v-row(justify="space-around", align="center", height="500px")
    v-col.pa-15(cols="12", md="6")
      div
        h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 អំពី KHLAND House Modify
        p.body-1.text-center.brown--text.text--darken-4
          |នេះគឺជាគេហទំព័រដែលអាចអោយលោកអ្នកអាចធ្វើការជ្រើសរើសយកម៉ូតផ្ទះណាមួយដែលអ្នកពេញចិត្តហើយ
        p.body-1.text-center.brown--text.text--darken-4
          |ធ្វើការកែរប្រើ នឹង ជ្រើរើសទៅតាមសំភារៈ នឹង ឧបករណ៍ប្រើប្រាស់នានាដែលបានកំណត់នៅក្នុងប្រព័ន្ធរួចជាស្រាច់
    v-col(cols="12", md="6")
      v-img(
        max-height="250",
        contain,
        src="/images/about.jpg"
      )
</template>

<script>
export default {
  layout: "default",
};
</script>

<style lang="scss" scoped>
</style>
