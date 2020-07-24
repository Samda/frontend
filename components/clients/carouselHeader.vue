<template lang="pug">
  hooper(:settings="hooperSettings")
    Slide
      v-container
        v-row(align="center" justify="center")
          v-col(cols="12")
            h1() Slide 1
            p Hello
    Slide
      h1 Slide 2
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
        itemsToShow: 1,
        itemsToSlide: 1,
        playSpeed: 2000,
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: false,
        transition: 1500,
        playSpeed: 4000,
        hoverPause: true
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
