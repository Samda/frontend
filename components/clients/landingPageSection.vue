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
        v-col(cols="12")
          v-img(
            gradient="rgba(0,0,0,.5), rgba(0,0,0,.5) ",
            height="500px",
            :src="color.image")
            v-container
              v-row
                v-col(cols="12" md="8" sm="8" lg="8" xl="8")
                  .text-left.mt-15
                    h1.text-h4 {{color.title}}
                    h5.text-h5 {{color.content}}
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
          src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117893929_1802415019924729_149439977059688306_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=kd6fPa7JFIIAX-mWGl1&_nc_ht=scontent.fpnh1-2.fna&oh=71dd99e25253c3fcedede97989ae70ef&oe=5F94A453"
        )
    v-divider
    v-row(justify="space-around", align="center", height="500px")
      v-col.pa-10(cols="12", md="6")
        //-v-img(src="https://i.pinimg.com/originals/ed/11/c3/ed11c33ed70d7635c615e6dc0605e28b.jpg")
        v-img(
          src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117716105_1802415089924722_3006423376808006100_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=xSJ8KQ3NDbwAX8467My&_nc_ht=scontent.fpnh1-2.fna&oh=37f05b376c75c2bbac246734d3c042af&oe=5F9578A0"
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

  v-container
    v-row
      v-col(cols="6", lg="3", md="4", sm="4", :key="i", v-for="i in 6")
        v-card.mx-auto(max-width="400")
          v-img.white--text.align-end(
            height="200px",
            src="https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117972144_1802415126591385_8918528493799312042_o.jpg?_nc_cat=108&_nc_sid=730e14&_nc_ohc=VnQ5SthFxKgAX8CyK6-&_nc_ht=scontent.fpnh1-2.fna&oh=479cddd2b7b2cfa29bfc00b78faa60fb&oe=5F962CE6"
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
          src="https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117879720_1802414966591401_3975173550225361756_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_eui2=AeEAV2Utzzv-oLSnwD5JEX3qwMaW0-45qmfAxpbT7jmqZwcgkYBp3dxHhyGhfB3k8W0&_nc_ohc=J-dr_L3EApkAX9bPErf&_nc_ht=scontent.fpnh1-1.fna&oh=86f3958e691bdbab90412e3152202e6e&oe=5F8B99F0")
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
          image: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117783770_1802414876591410_3603053929977972203_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=Dqy3C1A3DAoAX8WQqUg&_nc_ht=scontent.fpnh1-2.fna&oh=c793360342c558be9e8f398a07a72a4d&oe=5F95D15F'
        },
        {
          title: 'ដោយជ្រើរើសយកផ្ទះណាមួយ',
          content: 'ដែលអ្នកពេញចិត្ត យើងមានផ្ទះជាច្រើនម៉ូតសំរាប់អ្នកជ្រើសរើស ដើម្បីបំពេញតម្រូវការរបស់អ្នក',
          text: 'secondary',
          code: '#59482c',
          image: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117610617_1802414863258078_30441688992698031_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=BO8zTUJZxNUAX-OfdMy&_nc_ht=scontent.fpnh1-1.fna&oh=5f29fb77de2fc28ff36625daa8ba2cb0&oe=5F977F62'
        },
        {
          title: 'ហើយអាចកែតម្រូវតៅតាមចំនូលចិត្តរបស់អ្នក',
          content: 'អ្នកអាចកែប្រែ ផ្លាស់ប្តូ តុបតែង នឹង ជ្រើរើសសំភារៈ នឹង ឧបករណ៍ផ្សេងៗ',
          text: 'primary',
          code: '#59482c',
          image: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117716105_1802415089924722_3006423376808006100_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=xSJ8KQ3NDbwAX8467My&_nc_ht=scontent.fpnh1-2.fna&oh=37f05b376c75c2bbac246734d3c042af&oe=5F9578A0'
        }
      ],
      contents: [
        {
          title: "ផ្នែកខាងក្រៅផ្ទះ",
          text: "ជ្រើរើសសោភណភាពនៃគេហដ្ឋានរបស់អ្នកដោយខ្លួនឯងបាន",
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
