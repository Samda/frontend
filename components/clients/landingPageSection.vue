<template lang="pug">
div
  v-container
    v-row(justify="space-around", align="center", height="500px")
      v-col.pa-15(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 modify dream house with us
          p.body-1.text-center.brown--text.text--darken-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col(cols="12", md="6")
        v-img(
          max-height="250",
          contain,
          src="https://raw.githubusercontent.com/Samda/khland-assets/master/slide1.JPG"
        )
    v-divider
    v-row(justify="space-around", align="center", height="500px")
      v-col.pa-10(cols="12", md="6")
        //-v-img(src="https://i.pinimg.com/originals/ed/11/c3/ed11c33ed70d7635c615e6dc0605e28b.jpg")
        v-img(
          src="https://www.givdo.com/wp-content/uploads/2017/03/2-Storey-Modern-House-Designs-and-Floor-Plans-Small.jpg"
        )
      v-col(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 Start building your dream house with us today !
          p.body-1.text-center.brown--text.text--darken-4 We provide you tools and ability to select all appliances, decoration equipments and housing utilities.
    v-divider
    v-row(justify="space-around", align="center", height="500px")
      v-col(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4
            | Choose your favorite materials
          p.body-1.text-center.brown--text.text--darken-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col.pa-10(cols="12", md="6")
        v-img(
          src="https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%204.jpg"
        )
    v-divider

  v-container(fluid)
    v-row
      v-col(cols="6", lg="3", md="4", sm="4", :key="i", v-for="i in 6")
        v-card.mx-auto(max-width="400")
          v-img.white--text.align-end(
            height="200px",
            src="https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%201.jpg"
          )
            v-card-title Twin Villa
          v-card-subtitle.pb-0 Two Bedroom
          v-card-text.text--primary
            div Twin Villa
            div A great family house for you.
          v-card-actions
            v-btn(color="brown", text) Share
            v-btn(color="brown", text) Explore

    v-row
      v-col(cols="12")
        v-img(
          gradient="rgba(0,0,0,.4), rgba(0,0,0,.4) ",
          height="450px",
          src="https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117879720_1802414966591401_3975173550225361756_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_eui2=AeEAV2Utzzv-oLSnwD5JEX3qwMaW0-45qmfAxpbT7jmqZwcgkYBp3dxHhyGhfB3k8W0&_nc_ohc=J-dr_L3EApkAX9bPErf&_nc_ht=scontent.fpnh1-1.fna&oh=86f3958e691bdbab90412e3152202e6e&oe=5F8B99F0"
        )
          v-container
            v-row.mb-15
              v-col(cols="12")
                container
                  v-row(justify="center")
                    h1.white--text Real Estate Cambodia with KH land
                  v-row(justify="center")
                    h5.white--text Our customer care team is among the highest-rated support squads online, fast, muilti
            v-row.pt-15(justify="space-around", align="center")
              v-col(cols="3")
                v-container(fluid)
                  v-row(justify="center", align="center")
                    v-col
                      v-img(
                        max-height="60",
                        max-width="60",
                        contain,
                        src="https://www.khland.com.kh/assets/images/kh_lg.png"
                      )
                      h4.white--text this is text
                      h4.white--text this is text 2
                      h4.white--text this is text 3
              v-col(cols="3")
                v-container(fluid)
                  v-row
                    v-col
                      v-img(
                        max-height="60",
                        max-width="60",
                        contain,
                        src="https://www.khland.com.kh/assets/images/kh_lg.png"
                      )
                      h4.white--text this is text
                      h4.white--text this is text 2
                      h4.white--text this is text 3
              v-col(cols="3")
                v-container(fluid)
                  v-row
                    v-col
                      v-img(
                        max-height="60",
                        max-width="60",
                        contain,
                        src="https://www.khland.com.kh/assets/images/kh_lg.png"
                      )
                      h4.white--text this is text
                      h4.white--text this is text 2
                      h4.white--text this is text 3
              v-col(cols="3")
                v-container(fluid)
                  v-row
                    v-col
                      v-img(
                        max-height="60",
                        max-width="60",
                        contain,
                        src="https://www.khland.com.kh/assets/images/kh_lg.png"
                      )
                      h4.white--text this is text
                      h4.white--text this is text 2
                      h4.white--text this is text 3

    v-row(justify="center", align="center")
      v-col(cols="6")
        div(style="padding: 120px 0;")
          h1.text-center.brown--text.pa-7 Build your dream house with us
          .text-center
            v-btn.pa-7(to="/configuration", block, outlined, color="brown") Build now
</template>

<script>
export default {
  data() {
    return {
      hooperSettings: {
        centerMode: true,
        itemsToShow: 1,
        itemsToSlide: 1,
        playSpeed: 2000,
        infiniteScroll: true,
        wheelControl: false,
        autoPlay: false,
        transition: 1500,
        playSpeed: 4000,
        hoverPause: true,
        breakpoints: {
          2400: {
            itemsToShow: 5,
          },
          1800: {
            itemsToShow: 4,
          },
          1500: {
            itemsToShow: 3,
          },
          1100: {
            itemsToShow: 2.5,
          },
          0: {
            itemsToShow: 1.5,
          },
        },
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.parallax-container {
  position: relative;
}
.parallax-title {
  position: absolute;
  top: 30%;
  left: 0;
  right: 0;
  padding: 20px;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  text-align: center;
}
#background {
  color: brightness(10%) !important;
}
</style>
