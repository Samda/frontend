<template lang="pug">
  Hooper(:settings="hooperSettings" class="mt-1" )
      Slide
        div( class="images img1")
          h2 Slider 1
      Slide
        div( class="images img2")
          h2 Slider 2
      Slide
        div( class="images img3")
          h2 Slider 3
      Slide
        div( class="images img4")
          h2 Slider 4
      Slide
        div( class="images img5")
          h2 Slider 5
</template>

<script>
import hooperStyle from "hooper/dist/hooper.css"
import { Hooper, Slide } from 'hooper';

export default {
  components: {
    Hooper,
    Slide
  },
  data(){
    return {
      sliders: [
        {
          number: 1
        },
        {
          number: 2
        },
        {
          number: 3
        },
        {
          number: 4
        }
      ],
      hooper_v: {
        vertical: true,
        itemsToShow: 1,
        itemsToSlide: 1,
        centerMode: true,
        autoPlay: false,
        infiniteScroll: true,
        transition: 1500,
        playSpeed: 4000,
        wheelControl: false,
        hoverPause: true
      },
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
  },
  computed: {
    style(){
      return hooperStyle();
    }
  }
}
</script>

<style lang="scss" scoped>

section.hooper {
  outline: none;
  // box-shadow: -1px 13px 29px 0px rgba(50, 53, 48, 0.34);
  box-shadow: inset 2px 13px 29px 7px rgba(50, 53, 48, 0.34);
}
</style>
