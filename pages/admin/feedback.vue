<template lang="pug">
v-container(fluid)
  v-row
    v-col(cols="12" md="5" ms="4")
      v-container(fluid)
        v-row(align="center" justify="center" style="height: 400px; position: fixed;")
          v-col(cols="12")
            v-list-item
              v-list-item-content
                v-list-item-title
                  h1.headline.mb-1
                    | Reviews from the customers
                v-list-item-subtitle
                  p.mb-5 Best way to improve the system is tracking how user feel with it.
    v-col(cols="12" md="7" ms="8")
      v-text-field(
          :append-icon="search ? 'mdi-close' : 'mdi-magnify' "
          :append-icon-cb="() => (search = '')"
          @keydown.native.escape="search=''"
          label="Search"
          single-line
          hide-details
          v-model="search")
      v-row
        v-container(fluid)
          v-row(justify="center")
            v-subheader
            v-expansion-panels(popout)
              v-expansion-panel(
                v-for="(f, i) in searchFeedback"
                :key="i"
                hide-actions)
                v-expansion-panel-header
                  v-row(
                    align="center"
                    class="spacer"
                    no-gutters)
                    v-col(cols="4" sm="2" md="1")
                      v-avatar(size="36px")
                        img(
                          alt="Avatar"
                          src="https://place-hold.it/200")
                        v-icon(
                          color="grey")
                    v-col(
                      class="hidden-xs-only"
                      sm="5"
                      md="3")
                      strong(v-if="f.user")
                        | {{f.attributes.title}}
                      strong(v-else) Unkown

                    v-col(
                      class="text-no-wrap"
                      cols="6"
                      sm="6")
                      strong {{f.attributes.title}}
                    v-rating(:value="f.attributes.rate || 0" readonly x-small color="orange" background-color="orange lighten-3")
                v-expansion-panel-content
                  v-divider
                  v-card-text {{f.attributes.comment}}
      v-row
        v-col(cols="12")
          div(class="text-center")
            v-container
              v-row(justify="center")
                v-col(cols="8")
                  v-container(class="max-width")
                    v-pagination(
                      color="brown text-darken-1"
                      total-visible="10"
                      v-model="current_page"
                      value="current_page"
                      class="my-4"
                      :length="links.total_page")
</template>
<script>

import { mapState, mapGetters } from 'vuex';

export default {

  layout: "admin",

  data() {
    return {
      search: '',
      feedback: [
        {
          title: 'Very long title',
          comment: 'comment',
          user:{
            name: "Same Smith",
            image_url: 'https://placegoat.com/goatse/200/200'
          }
        }
      ]
    }
  },

  computed: {
    current_page: {
      get(){
        return this.$store.getters["feedback/getCurrentPage"]
      },
      set(val){
        this.fetch_feedbacks(val)
      }
    },
    searchFeedback(){
      return this.$store.getters["feedback/GET_FEEDBACKS"].filter( f => {
        return f.attributes.title.toLowerCase().includes(this.search.toLowerCase())
      })
    },
    ...mapState("feedback", ["feedbacks", "links"]),
    ...mapGetters(["feedback/GET_FEEDBACKS"]),
  },

  methods: {
    fetch_feedbacks(param){
      this.$store.dispatch("feedback/FETCH_FEEDBACKS", `page=${param}`)
    }
  },

  created() {
    this.$store.dispatch("feedback/FETCH_FEEDBACKS", `page=1`)
  }

}
</script>

<style lang="css" scoped>
</style>
