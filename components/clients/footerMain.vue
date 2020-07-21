<template lang="pug">
  v-footer(
    color="teal darken-1"
    padless)
    v-container
      v-row(align="center" justify="center")
        v-col(cols="10" color="teal darken-1")
          v-card(
            flat
            tile
            class="teal darken-1 white--text")
            v-card-text(class="ml-n8")
              v-btn(
                v-for="icon in icons"
                :key="icon"
                class="mx-4 blue-grey--text text--darken-4"
                icon
                fab
                outlined)
                v-icon(size="24px") {{ icon }}
              v-spacer
            v-card-text(class="blue-grey--text text--darken-4 pt-0 pa-0")
              | Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            v-divider(style="background-color: #3E2723")
            v-card-text(class="blue-grey--text text--darken-4 pa-0")
              | Copyright
              | &copy;
              | {{ new Date().getFullYear() }}
              span(class="ml-2 mr-2") KHLAND CO.,LTD
              | All Rights Reserved
</template>

<script>
export default {
  data(){
    return {
      icons: [
        'mdi-facebook',
        'mdi-instagram',
        'mdi-twitter',
        'mdi-telegram',
        'mdi-whatsapp'

      ],
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
