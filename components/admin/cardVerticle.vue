<template lang="pug">
  v-card( :color="item.color" dark)
    div(class="d-flex flex-no-wrap justify-space-between")
      div
        v-card-title( class="headline" v-text="item.title")
        v-card-text
          .mt-2 {{item.total}} {{item.unit}}
        v-card-actions
          v-btn( :color="item.color" small :to="item.link") បើកចូល
      v-card-title
        v-spacer
        v-icon(size="80") {{item.icon}}
        v-spacer
</template>

<script>
export default {
  data: () => ({
  }),
  props: ['item']
}
</script>

<style lang="css" scoped>
</style>
