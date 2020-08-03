<template lang="pug">
div
  carouselHeader
  v-container
    v-row(justify="space-around", align="center", height="500px")
      v-col.pa-15(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 modify dream house with us
          p.body-1.text-center.brown--text.text--darken-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col(cols="12", md="6")
        v-img(
          max-height="250",
          contain,
          src="https://raw.githubusercontent.com/Samda/khland-assets/master/slide1.JPG"
        )
    v-divider
    v-row(justify="space-around", align="center", height="500px")
      v-col.pa-10(cols="12", md="6")
        //-v-img(src="https://i.pinimg.com/originals/ed/11/c3/ed11c33ed70d7635c615e6dc0605e28b.jpg")
        v-img(
          src="https://www.givdo.com/wp-content/uploads/2017/03/2-Storey-Modern-House-Designs-and-Floor-Plans-Small.jpg"
        )
      v-col(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 Start building your dream house with us today !
          p.body-1.text-center.brown--text.text--darken-4 We provide you tools and ability to select all appliances, decoration equipments and housing utilities.
    v-divider
    v-row(justify="space-around", align="center", height="500px")
      v-col(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4
            | Choose your favorite materials
          p.body-1.text-center.brown--text.text--darken-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col.pa-10(cols="12", md="6")
        v-img(
          src="https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%204.jpg"
        )
    v-divider

  v-container(fluid)
    v-row
      v-col(cols="6", lg="3", md="4", sm="4", :key="i", v-for="i in 6")
        v-card(
          class="mx-auto"
          max-width="400")
          v-img(
            class="white--text align-end"
            height="200px"
            src="https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%201.jpg")
            v-card-title Twin Villa
          v-card-subtitle.pb-0 Two Bedroom
          v-card-text.text--primary
            div Twin Villa
            div A great family house for you.
          v-card-actions
            v-btn(
              color="brown"
              text) Share
            v-btn(
              color="brown"
              text) Explore
    v-row(justify="center" align="center")
      v-col(cols="6")
        div(style="padding: 120px 0;")
          h1.text-center.brown--text.pa-7 Build your dream house with us
          .text-center
            v-btn( to="/configuration" class="pa-7" block outlined color="brown") Build now
</template>

<script>
import carouselHeader from "@/components/clients/carouselHeader";
import parallax from "vue-parallaxy";
import hooperStyle from "hooper/dist/hooper.css";
import { Hooper, Slide } from 'hooper';
export default {
  components: {
    carouselHeader,
    Hooper,
    Slide
  },
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        itemsToShow: 1,
        itemsToSlide: 1,
        playSpeed: 2000,
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: false,
        transition: 1500,
        playSpeed: 4000,
        hoverPause: true,
        breakpoints: {
          2400: {
              itemsToShow: 5
          },
          1800: {
              itemsToShow: 4
          },
          1500: {
              itemsToShow: 3
          },
          1100: {
              itemsToShow: 2.5
          },
          0: {
              itemsToShow: 1.5
          }
        }
      }
    }
  }
};
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
