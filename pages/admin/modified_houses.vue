<template lang="pug">
  v-main
    v-container
      v-row
        v-col(cols="12")
          h1 Modifed Houses
      v-row
        v-col(cols="12" sm="4" md="4" lg="4" xl="4"
          v-for="(house, i) in modified_houses"
          :key="i")
          v-card(
            class="mx-auto"
            max-width="344")
            v-img(
              :src="house.image"
              height="200px")

            v-card-title {{house.title}}
            v-card-subtitle $ {{house.price}}
            v-card-text {{house.text}}
            v-card-actions
              v-btn(
                color="orange lighten-2"
                text) Explore
              v-spacer
              v-btn(
                icon
                @click="show = !show")
                v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
            v-expand-transition
              div(v-show="show")
                v-divider
                v-card-text
                  .caption កៅអី
                  .detail-image
                    img(src="https://raw.githubusercontent.com/Samda/khland-assets/master/char1.png")
                  .caption សាឡុង
                  .detail-image
                    img(src="https://www.pngkey.com/png/full/250-2506199_home-furniture-png.png")
        template(v-for=" i in 8")
          v-col(cols="12" sm="4" md="4" lg="4" xl="4"
            v-for="(house, i) in modified_houses")
            v-card(
              class="mx-auto"
              max-width="344")
              v-img(
                :src="house.image"
                height="200px")
              v-card-title {{house.title}}
              v-card-subtitle $ {{house.price}}
              v-card-text {{house.text}}
              v-card-actions
                v-btn(
                  color="orange lighten-2"
                  text) Explore
                v-spacer
                v-btn(icon)
                  v-icon {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
</template>

<script>
export default {
  layout: 'admin',
  data() {
    return {
      show: false,
      modified_houses: [
        {
          text: "Double bed room",
          image: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117716105_1802415089924722_3006423376808006100_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=xSJ8KQ3NDbwAX8467My&_nc_ht=scontent.fpnh1-2.fna&oh=37f05b376c75c2bbac246734d3c042af&oe=5F9578A0',
          title: 'Villa Twin',
          price: 100000,
          items: [
            {
              title: '',
              head_title: '',
              image: ''
            },
            {
              title: '',
              head_title: '',
              image: ''
            }
          ]
        }
      ]
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
  transition: all .2s;
  z-index: 99999;
  img {
    display: block;
    margin: 0 auto;
    width: 100%;
    border-radius: 10px;
  }
}

.detail-image:hover{
  border: 2px solid $color-primary;
  transform: scale(2.5);
  right: 20;
  img {
    display: block;
    margin: auto;
    width: 100%;
    border-radius: 10px;
  }
}

</style>
