<template lang="pug">
div
  landingPageSection
</template>

<script>
import landingPageSection from "@/components/clients/landingPageSection";

export default {
  layout: "default",
  components: {
    landingPageSection,
  },
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
