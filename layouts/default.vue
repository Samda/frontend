<template lang="pug">
v-main
  v-app#inspire
    navBar
    v-container
      Nuxt
    FooterMain
    feedBack
</template>

<script>
import navBar from "@/components/clients/navBar";
import FooterMain from "@/components/clients/FooterMain";
import feedBack from "@/components/clients/feedBack";

export default {
  name: "default",
  components: {
    feedBack,
    FooterMain,
    navBar,
  },
};
</script>

<style lang="scss" scoped>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
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
