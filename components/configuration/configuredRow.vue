<template lang="pug">
v-row.row-data(no-gutters)
  v-col.pl-3(cols="6")
    .caption {{title}}
    v-avatar.detail-image(tile size="80px")
      img(src="https://i.pinimg.com/600x315/3f/6a/2a/3f6a2adab86aea19e3abbb6846f8c551.jpg")
  v-col(cols="2")
    .caption {{name}}
  v-col(cols="2")
    v-btn( x-small tile icon color="primary")
      v-icon mdi-pencil
  v-col.pr-5(cols="2")
    .caption.text-right {{price}}$
</template>

<script>
export default {
  name: 'configuredRow',
  layout: 'configuration',
  props: {
    title: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>

$color-primary: #6b4912;

.detail-image {
  border-radius: 5px !important;
  transition: all .2s;
}

.detail-image:hover{
  border: 2px solid $color-primary;
  transform: scale(2.5);
  right: 20;
  z-index: 999;
}
</style>
