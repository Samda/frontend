<template lang="pug">
v-row.row-data(no-gutters)
  v-col.pl-3(cols="6")
    .caption ម៉ូតផ្ការ
    v-avatar.detail-image(tile size="80px")
      img(src="https://i.pinimg.com/600x315/3f/6a/2a/3f6a2adab86aea19e3abbb6846f8c551.jpg")
  v-col(cols="2")
    .caption Flower Name
  v-col(cols="2")
    v-btn( x-small tile icon color="primary")
      v-icon mdi-pencil
  v-col.pr-5(cols="2")
    .caption.text-right 80$
</template>

<script>
export default {
  name: 'configuredRow',
  layout: 'configuration'
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
