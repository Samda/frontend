<template lang="pug">
v-container(style="position: fixed; top: 10px;padding: 0px; z-index: 9999;")
  v-row
    v-col(cols="12")
      v-sheet.mt-n5(
        class="mx-auto"
        max-width="100%")
        v-bottom-navigation.elevation-0( horizontal)
          v-slide-group(show-arrows center-active mandatory)
            template(v-for="(title, index) in getConfigTitles")
              v-slide-item(
                :key="index")
                v-btn.btn-timeline.py-0(
                  x-small
                  :href="'#'+replaceSpaceWith(title, '_')"
                  :ripple="false"
                  tile)
                  | {{title}}
                  v-icon.pr-0(left) mdi-numeric-{{index + 1}}
              v-divider(
                class="my-4"
                inset
                vertical)
            v-slide-item
              v-btn.btn-timeline(router to="configuration/configured")
                | Details
                v-icon(left) mdi-check
</template>

<script>
export default {
  name: 'navbarConfig',
  layout: 'configuration'
}
</script>

<style lang="css" scoped>
</style>
