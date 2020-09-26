<template lang="pug">
  v-container
    v-row
      v-col(cols="12" md="5" ms="4" lg="5")
        v-container(fluid)
          v-row
            v-col(cols="12")
              .text-center(style="color: #78a152;")
                v-icon(size="60" color="#78a152") mdi-lifebuoy
                h1.mb-4.text-h5
                  strong ជំនួយក្នុងការប្រើប្រាស់ {{item_content}}
                .body-2
                  p ដើម្បីមានភាពងាយស្រួលក្នុងការគ្រប់គ្រង
                  p នឹង ការប្រើប្រាស់តាមតម្រូវការផ្សេង សូមធ្វើតាមការណែរនាំអោយបានត្រឹមត្រូវ.
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
      v-col(cols="12" md="7" ms="8" lg="7")
        v-expansion-panels(popout focusable)
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
  layout: 'admin',
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
          title: "សមាជិក នឹង បុគ្គលិក",
          contents: [
            {
              sub_title: "Add new user",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "Edit user",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "Approve user",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "Disactive user",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            }
          ]
        },
        {
          id: 2,
          title: "សំភារៈសំរាប់ផ្ទះ",
          contents: [
            {
              sub_title: "Add new utilities",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "Edit utilities",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "Approve utilities",
              content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            },
            {
              sub_title: "Disactive utilities",
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
