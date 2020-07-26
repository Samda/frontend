<template lang="pug">
v-container(fluid)
  v-row(align="center" justify="center" style="height: 100vh")
    v-col(cols="12")
      v-list-item.text-center
        v-list-item-content(v-if="error.statusCode === 404")
          v-list-item-title
            div
              h1.text-h1.mb-1.text-uppercase 404
              h1.headline Page not found
          v-list-item-subtitle
            p.mb-5 Sorry we can't find the page you want to acces to.
          v-list-item-subtitle
            v-btn(outlined large to="/" class="text-uppercase" color="brown text-darken-1") Bring me back
        v-list-item-content(v-else)
          v-list-item-title
            div
              h1.text-h1.mb-1(class="text-uppercase") 500
              h1.headline.text-uppercase An error occurred
          v-list-item-subtitle
            p.mb-5 Oop! look like something went wrong, please contact your support.
          v-list-item-subtitle
            v-btn(outlined large to="/admin" class="text-uppercase" color="brown text-darken-1") Back to main page
</template>

<script>
export default {
  layout: 'error-layout',
  props: ['error'],
}
</script>
<style lang="css" scoped>
</style>
