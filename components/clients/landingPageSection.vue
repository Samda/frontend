<template lang="pug">
div
  v-carousel(
    v-model="model"
    delimiter-icon="mdi-minus"
    hide-delimiter-background
    height="500")
    v-carousel-item(
      v-for="(color, i) in colors"
      :key="i")
      v-row
        div(class="col col-12")
          div(class="v-card v-card--flat v-sheet v-sheet--tile theme--dark" dark="")
            v-img(
              :src="color.image"
              class="grey lighten-2"
              height="400"
              width="100%")
              v-row(
                class="fill-height pa-3"
                align="center" justify="center")
                v-col(
                  cols="12"
                  md="7"
                  offset-md="5")
                  h1(class="text-h4 font-weight-light") {{color.title}}
                  div(class="text-h6 text-uppercase pl-2 mb-4") {{color.content}}
  v-container
    v-row(justify="space-around", align="center", height="500px")
      div( class="col col-12")
        div(class="v-card v-card--flat v-sheet v-sheet--tile theme--dark" dark="")
          div(class="v-responsive v-image grey lighten-2" style="height: 400px; width: 100%;")
            div(class="v-responsive__sizer" style="padding-bottom: 66.7273%;")
              div(class="v-image__image v-image__image--cover" style="background-image: url('https://blog-free.johnleider.com/img/blurcamera.d2d68327.jpg'); background-position: center center;")
              div(class="v-responsive__content" style="width: 1100px;")
              div(class="row fill-height pa-3 align-center")
              div(class="col-md-7 offset-md-5 col-12")
                h1(class="display-3 font-weight-light") The Art Of Travel
                div(class="subheading text-uppercase pl-2 mb-4") Finding Beauty, One flight at a time
      v-col.pa-15(cols="12", md="6")
        div.pa-10
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 modify dream house with us
          p.body-1.text-center.brown--text.text--darken-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col(cols="12", md="6")
        v-img(
          max-height="250",
          contain,
          :src="require('~/assets/images/featureImage1.jpg')"
        )
    v-divider
    v-row.pa-10(justify="space-around", align="center", height="500px")
      v-col(cols="12", md="6")
        v-img(
          :src="require('~/assets/images/featureImage2.jpg')"
        )
      v-col(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4 Start building your dream house with us today !
          p.body-1.text-center.brown--text.text--darken-4 We provide you tools and ability to select all appliances, decoration equipments and housing utilities.
    v-divider
    v-row.pa-10(justify="space-around", align="center", height="500px")
      v-col(cols="12", md="6")
        div
          h1.text-h5.text-center.text-uppercase.brown--text.text--darken-4
            | Choose your favorite materials
          p.body-1.text-center.brown--text.text--darken-4 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      v-col.pa-10(cols="12", md="6")
        v-img(
          :src="require('~/assets/images/featureImage3.jpg')"
        )
    v-divider

  v-container
    v-row
      v-col(cols="6", lg="3", md="4", sm="4", :key="i", v-for="i in 4")
        v-card.mx-auto(max-width="400")
          v-img.white--text.align-end(
            height="200px",
            src="./static/"
            :src="require('~/assets/images/house.jpg')"
          )
            v-card-title Twin Villa
          v-card-subtitle.pb-0 Two Bedroom
          v-card-text.text--primary
            div Twin Villa
            div A great family house for you.
          v-card-actions
            v-btn(color="brown", text to="configuration") Share
            v-btn(color="brown", text to="configuration") Explore
  v-container(fluid)
    v-row
      v-col(cols="12")
        v-img(
          gradient="rgba(0,0,0,.6), rgba(0,0,0,.6) ",
          height="450px",
          :src="require('~/assets/images/featureImage4.jpg')")
          v-row
            v-col(cols="12")
              .text-center.mt-15
                h1.mb-15.text--h4(style="color: #78a152;") ជ្រើរើសសំភារៈដោយខ្លួនអ្នកផ្ទាល់
          v-row
            v-col(
              :key="i"
              class="d-flex justify-space-around"
              v-for="(content, i) in contents")
              .text-center
                p
                  img(
                    width="100"
                    :src="content.image")
                h5.text-h5.light-green--text.text-lighten-2 {{content.title}}
                p.px-5.mt-3.body-1.light-green--text.text-lighten-2 {{content.text}}
    v-row(justify="center", align="center")
      v-col(cols="6")
        div(style="padding: 120px 0;")
          h1.text-center.brown--text.pa-7 ជ្រើរើសផ្ទះរបស់អ្នក
          .text-center
            v-btn.pa-7(to="/configuration", block, outlined, color="brown") ចុចត្រង់នេះ
</template>

<script>
import image1 from '~/assets/images/landingImage1.jpg'
import image2 from '~/assets/images/landingImage2.jpg'
import image3 from '~/assets/images/landingImage3.jpg'
export default {
  data() {
    return {
      model: 0,
      colors: [
        {
          title: 'បង្កើតក្តីស្រៃរបស់អ្នកជាមួយយើង',
          content: 'ដោយការជ្រើសរើសនូវលំនៅដ្ឋាន ដ៏សែនសមរម្យមួយសំរាប់រូបអ្នកនឹងគ្រួសារអ្នក',
          text: 'primary',
          code: '#78a152',
          image: image1
        },
        {
          title: 'ដោយជ្រើរើសយកផ្ទះណាមួយ',
          content: 'ដែលអ្នកពេញចិត្ត យើងមានផ្ទះជាច្រើនម៉ូតសំរាប់អ្នកជ្រើសរើស ដើម្បីបំពេញតម្រូវការរបស់អ្នក',
          text: 'secondary',
          code: '#59482c',
          image: image2
        },
        {
          title: 'ហើយអាចកែតម្រូវតៅតាមចំនូលចិត្តរបស់អ្នក',
          content: 'អ្នកអាចកែប្រែ ផ្លាស់ប្តូ តុបតែង នឹង ជ្រើរើសសំភារៈ នឹង ឧបករណ៍ផ្សេងៗ',
          text: 'primary',
          code: '#59482c',
          image: image3
        }
      ],
      contents: [
        {
          title: "ផ្នែកខាងក្រៅផ្ទះ",
          text: "ជ្រើរើសសោភណភាពនៃគេហដ្ឋានរបស់អ្នកដោយខ្លួនឯង",
          image: "https://expressyourselfpaint.com/wp-content/uploads/2015/06/exterior-icon1.png"
        },
        {
          title: "ផ្នែកខាងក្នុងផ្ទះ",
          text: "បរិក្ខាប្រើប្រាស់ តុ ទូ កៅអី របស់របស់ដែលអ្នកចង់បាន",
          image: "https://expressyourselfpaint.com/wp-content/uploads/2015/06/interior-icon1.png"
        },
        {
          title: "ឧបករណ៍ប្រើប្រាស់",
          text: "ជ្រើរើសរបស់របរប្រើប្រាស់ទូទៅនៅក្នុងផ្ទះ",
          image: 'https://expressyourselfpaint.com/wp-content/uploads/2015/07/cabinet-icon.png'
        }
      ]
    }
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
  background: rgba(0, 0, 0, 0.9);
  color: white;
  text-align: center;
}

#background {
  color: brightness(10%) !important;
}
</style>
