<template lang="pug">
v-carousel
  v-carousel-item(
    v-for="(item,i) in items"
    :key="i"
    :src="item.src"
    reverse-transition="fade-transition"
    transition="fade-transition")
</template>

<script>
export default {
  data(){
    return {
      items: [
          {
            src: 'https://i.ytimg.com/vi/hqezzpW_atk/maxresdefault.jpg',
          },
          {
            src: 'https://www.karndean.com/-/media/images/landing-page/res/heritage/heritage_residential.ashx?la=en-gb&hash=A65F195E11677C38E8C6BAFB61A3BA725E12C8A6',
          },
          {
            src: 'https://s.alicdn.com/@sc01/kf/HTB1b7WqXyDxK1Rjy1zcq6yGeXXaz.jpg',
          }
      ],
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
