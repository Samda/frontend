<template lang="html">
  <v-row dense>
    <v-col
      v-for="card in cards"
      :key="card.title"
      :cols="card.flex"
    >
    <v-card>
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>
        <v-card-text>
          <div class="my-4 subtitle-1">
            $ • Italian, Cafe
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            outlined
            small
            color="teal darken-1"
            class="white--text"
          >
            Preview
            <v-icon right dark>mdi-camera-control</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      show: false
      ,
      cards: [
        { title: 'ផ្ទះខ្មែរបុរាណ សម័យអង្គ', src: 'https://www.shoreexcursions.asia/wp-content/uploads/2015/03/traditional-house-in-Cambodia.jpg', flex: 3 },
        { title: 'ផ្ទះខ្មែរបុរាណ សម័យលង្វែក', src: 'https://i.pinimg.com/originals/0e/d4/42/0ed44290ce0d7214da1db7b62bd5fdd0.jpg', flex: 3 },
        { title: 'ផ្ទះខ្មែរបុរាណ សម័យចេនឡា', src: 'https://i.pinimg.com/originals/2c/a9/d1/2ca9d171278ab23c3218a764a39a3934.jpg', flex: 3 },
        { title: 'ផ្ទះខ្មែរបុរាណ សម័យចេនឡា', src: 'https://2.bp.blogspot.com/-OzacZ_cCT7U/TxIwSAJ4RHI/AAAAAAAAKrI/MxLoxwzEPdw/s1600/Millionaire+House+in+Cambodia.JPG', flex: 3 }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
