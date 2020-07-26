<template lang="pug">
div
  //-carouselHeader
  v-container
    v-row(justify="space-around" align="center" height="500px")
      v-col(cols="12" md="6" class="pa-15")
        div
          h1(class="text-h5 text-center text-uppercase brown--text text--darken-4") modify dream house with us
          p(class="body-1 text-center brown--text text--darken-4") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col(cols="12" md="6")
        v-img( max-height="250" contain src="https://raw.githubusercontent.com/Samda/khland-assets/master/slide1.JPG")
    v-divider
    v-row(justify="space-around" align="center" height="500px")
      v-col(cols="12" md="6" class="pa-10")
        //-v-img(src="https://i.pinimg.com/originals/ed/11/c3/ed11c33ed70d7635c615e6dc0605e28b.jpg")
        v-img(src="https://www.givdo.com/wp-content/uploads/2017/03/2-Storey-Modern-House-Designs-and-Floor-Plans-Small.jpg")
      v-col(cols="12" md="6")
        div
          h1(class="text-h5 text-center text-uppercase brown--text text--darken-4") Start building your dream house with us today !
          p(class="body-1 text-center brown--text text--darken-4") We provide you tools and ability to select all appliances, decoration equipments and housing utilities.
    v-divider
    v-row(justify="space-around" align="center" height="500px")
      v-col(cols="12" md="6")
        div
          h1(class="text-h5 text-center text-uppercase brown--text text--darken-4")
            | Choose your favorite materials
          p(class="body-1 text-center brown--text text--darken-4") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col(cols="12" md="6" class="pa-10")
        v-img(src="https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%204.jpg")
</template>

<script>
import carouselHeader from "@/components/clients/carouselHeader"
import parallax from "vue-parallaxy"
export default {
  components: {
    carouselHeader
  }
}
</script>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}
</style>
