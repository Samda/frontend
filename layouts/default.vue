<template lang="pug">
  v-main
    v-app(id="inspire")
      Nuxt
      v-container
        v-row(justify="space-around" align="center" height="500px")
          v-col(cols="12" md="6" class="pa-10")
            div
              h1(class="text-h4 text-center text-uppercase") modify dream house with us
              p(class="body-1 text-center") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          v-col(cols="12" md="6" class="pa-10")
            v-img(src="https://www.houzone.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-12-at-4.01.28-PM.png")
        v-divider
        v-row(justify="space-around" align="center" height="500px")
          v-col(cols="12" md="6" class="pa-10")
            v-img(src="https://www.givdo.com/wp-content/uploads/2017/03/2-Storey-Modern-House-Designs-and-Floor-Plans-Small.jpg")
          v-col(cols="12" md="6" class="pa-10")
            div
              h1(class="text-h4 text-center text-uppercase") Turn your dream to reallity
              p(class="body-1 text-center") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        v-divider
        v-row(justify="space-around" align="center" height="500px")
          v-col(cols="12" md="6" class="pa-10")
            div
              h1(class="text-h4 text-center text-uppercase")
                | Choose your favorite materials
              p(class="body-1 text-center") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          v-col(cols="12" md="6" class="pa-10")
            v-img(src="https://customisedhomes.com/sites/all/themes/customisedhomes/images/Interior_banner.jpg")
          feedBack
      footerMain
</template>

<script>
import footerMain from "@/components/clients/footerMain"
import feedBack from "@/components/clients/feedBack"
export default {
  components: {
    feedBack,
    footerMain
  }
}
</script>

<style lang="scss" scoped>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

</style>
