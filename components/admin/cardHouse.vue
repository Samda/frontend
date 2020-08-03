<template lang="pug">
  v-row(dense)
    v-col(
      v-for="(card, index) in cards"
      :key="index"
      cols="6" sm="4" md="3")
      v-card
          v-img(
            :src="card.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px")
            v-card-title(v-text="card.title")
          v-card-text
            div.my-4.subtitle-1 Sample Data for house
          v-card-actions
            v-spacer
            v-btn(
              @click.stop="dialog = true"
              outlined
              small
              color="teal darken-1"
              class="white--text") Prev
              v-icon(right dark) mdi-camera-control
    v-dialog.pa-15(
      v-model="dialog"
      max-width="800")
      v-card(elevation="24"
            class="mx-auto" )
        v-carousel(
          :continuous="false"
          :cycle="cycle"
          :show-arrows="false"
          hide-delimiter-background
          delimiter-icon="mdi-minus"
          height="300")
          v-carousel-item(
            v-for="(slide, i) in slides"
            :key="i")
            v-sheet(
              :color="colors[i]"
              height="100%"
              tile)
              v-row(
                class="fill-height"
                align="center"
                justify="center")
                .display-3 {{slide}} House's Picture
        v-card-content
          v-list-item(three-line)
            v-list-item-content
              div(class="overline mb-4") Descript
              v-list-item-title(class="headline mb-1") House Title
              v-list-item-subtitle Information for about house configuration
              v-list-item-subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              v-list-item-subtitle Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            v-list-item-avatar(
              tile
              size="80"
              color="grey")
        v-card-actions
          v-spacer
          v-btn(
            color="green darken-1"
            text
            @click="dialog = false") Edit
          v-btn(
            color="green darken-1"
            text
            @click="dialog = false") Close
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'green',
        'secondary',
        'yellow darken-4',
        'red lighten-2',
        'orange darken-1',
      ],
      cycle: false,
      slides: [
        'First',
        'Second',
        'Third',
        'Fourth',
        'Fifth',
      ],
      dialog: false,
      show: false,
      cards: [
        {
          title: 'បុរី ផ្ទះល្វែង',
          src: 'https://www.bvmpp.com/wp-content/uploads/2018/01/Exterior-2.15m-x-1.60m-Flat.jpg'
        },
        {
          title: 'បុរី វីឡាភ្លោះ',
          src: 'https://photosrp.dotproperty-kh.com/2.0-KH-1547340-PP-4961753-14006974105ea2741e60949-1-490-325-ct/8-bedroom-house-for-sale-in-mean-chey-phnom-penh.jpg'
        },
        {
          title: 'ផ្ទះល្វែង ពីរជាន់',
          src: 'https://images.realestate.com.kh/listings/32_flat_b-c_uLNEgxU.jpg'
        },
        {
          title: 'ផ្ទះល្វែង បីជាន់',
          src: 'https://images.adsttc.com/media/images/5ec5/4ab4/b357/657a/0500/033a/large_jpg/0FI_a-1.jpg?1589988009'
        },
        {
          title: 'ផ្ទះខ្មែរបុរាណ សម័យអង្គ',
          src: 'https://www.shoreexcursions.asia/wp-content/uploads/2015/03/traditional-house-in-Cambodia.jpg'
        },
        {
          title: 'ផ្ទះខ្មែរបុរាណ សម័យលង្វែក',
          src: 'https://i.pinimg.com/originals/0e/d4/42/0ed44290ce0d7214da1db7b62bd5fdd0.jpg'
        },
        {
          title: 'ផ្ទះខ្មែរបុរាណ សម័យចេនឡា',
          src: 'https://i.pinimg.com/originals/2c/a9/d1/2ca9d171278ab23c3218a764a39a3934.jpg'
        },
        {
          title: 'ផ្ទះខ្មែរបុរាណ សម័យចេនឡា',
          src: 'https://2.bp.blogspot.com/-OzacZ_cCT7U/TxIwSAJ4RHI/AAAAAAAAKrI/MxLoxwzEPdw/s1600/Millionaire+House+in+Cambodia.JPG'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
