<template lang="pug">
v-app
  landingPageSection
</template>

<script>
import landingPageSection from '@/components/clients/landingPageSection'

export default {
  layout: "default",
  head () {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        },
        {
          property: "og:url",
          content: "https://house.khland.com.kh"
        },
        {
          property: "og:title",
          content: "KH LAND Co,. Ltd. Customize your dream house with us today."
        },
        {
          property: "og:image",
          // 1200 x 630 best display
          content: "https://www.khland.com.kh/assets/images/kh_lg.png"
        }
      ]
    }
  },
  components: {
    landingPageSection
  }
};
</script>

<style lang="scss" scoped>
// .v-application ul, .v-application ol {
//   padding-left: 0px;
// }

// div.hooper-list {
//   margin: 0;
//   padding: 0;
// }

section.hooper,
section.hooper:active,
section.hooper:focus {
  outline: none;
}
</style>
