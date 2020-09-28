<template lang="pug">
div
  v-main
    v-container(fluid)
      v-row
        v-col(cols="12" md="4" ms="4" lg="4")
          v-container.lighten-5.mx-0.px-0(fluid, fill-height)
            v-row.px-10
              v-col(cols="12")
                .text-center(style="color: #78a152;")
                  v-icon(size="60" color="#78a152") mdi-lifebuoy
                  h1.mb-4.text-h5
                    strong ជំនួយក្នុងការប្រើប្រាស់
                  .body-2
                    p ដើម្បីមានភាពងាយស្រួលនឹងមានទំនុកចិត្ត
                    p សូមអានអោយនឹងធ្វើតាមការណែរនាំអោយបានត្រឹមត្រូវ.
            v-row
              v-col(cols="12")
                v-btn.mb-3(
                  tile
                  outlined
                  block
                  color="#78a152"
                  @click="setContent(item.id)"
                  v-for="item in getTitles"
                  :key="item.id") {{item.title}}
        v-col(cols="12" md="8" ms="8" lg="8")
          v-row.pt-15(align="center")
            v-col(cols="12")
              v-expansion-panels(focusable)
                v-expansion-panel(
                  v-for="(item,i) in getArticle.contents"
                  :key="i")
                  v-expansion-panel-header
                    strong.brown--text {{ item.sub_title }}
                    template( v-slot:actions)
                      v-icon(color="primary") $expand
                  v-expansion-panel-content
                    .brown--text {{ item.content }}
</template>

<script>
export default {
  layout: 'default',
  computed: {
    getArticle(){
      return this.articles.filter(content => { return  content.id == this.item_content })[0]
    },
    getTitles(){
      return this.articles.map(content => { return {title: content.title, id: content.id} })
    }
  },
  methods: {
    setContent(title){
      this.item_content = title
    }
  },
  data(){
    return {
      item_content: 1,
      articles: [
        {
          id: 1,
          title: "ជំនួួយក្នុងការប្រើប្រាស់",
          contents: [
            {
              sub_title: "ការជ្រើរើសផ្ទះ",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "ការជ្រើសរើសសំភារៈខាងក្នុងផ្ទះ",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "ការជ្រើសរើសសំភារៈខាងក្រៅផ្ទះ",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "ការជ្រើរើសសំភាៈ នឹង ឧបរណ៍ផ្សេងៗ",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          ]
        },
        {
          id: 2,
          title: "លក្ខណក្នុងការទិញ នឹង ទំនុកចិត្ត ",
          contents: [
            {
              sub_title: "លក្ខណនៃការទិញ",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "ការកក់ប្រាក់ នឹង ការបង់ប្រាក់",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "ការទទួលសិទ្ធក្នុងការគ្រប់គ្រង",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "ការទទាត់ផ្តាច់ នឹង សិទ្ធគ្រប់គ្រងពេញលេញ",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.v-expansion-panel-header--active {
  background: #78a152;
}
</style>
