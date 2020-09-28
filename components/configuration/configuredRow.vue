<template lang="pug">
v-row.row-data(no-gutters)
  v-col.pl-3(cols="6")
    .caption {{title}}
    .detail-image(tile size="80px")
      img.align-self-center(:src="image")
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
    image: {
      type: String,
      required: true
    },
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  border-radius: 5px !important;
  transition: all .2s;
  overflow: hidden;
  width: 100px;
  height: 100px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;

  img {
    display: block;
    margin: auto 0;
    width: 100%;
  }
}

.detail-image:hover{
  border: 2px solid $color-primary;
  transform: scale(2.5);
  right: 20;
  z-index: 999;
}
</style>
