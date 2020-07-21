<template lang="pug">
div
  v-app-bar(
    app
    min-height="90")
    v-toolbar-items
      a(href="/")
        v-img(
          class="mt-2"
          src="https://www.khland.com.kh/assets/images/kh_lg.png"
          max-height="80"
          max-width="80"
          contain
        )
      ul( id="nav-mobile" class="right hide-on-med-and-down")
        li
          a(href="sass.html") Sass
        li
          a(href="badges.html") Components
        li
          a(href="collapsible.html") JavaScript
    v-toolbar-title(class="ml-2") Page title
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
