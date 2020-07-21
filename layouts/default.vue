<template lang="pug">
  v-main
    v-app(id="inspire")
      Nuxt
      v-container
        v-row(justify="space-around" align="center" height="500px")
          v-col(cols="12" md="6" class="pa-10")
            div
              h1(class="text-h4 text-center text-uppercase") modify dream house with us
              p(class="body-1 text-center") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

          v-col(cols="12" md="6" class="pa-10")
            v-img(src="https://www.houzone.com/wp-content/uploads/2020/06/Screen-Shot-2020-06-12-at-4.01.28-PM.png")
        v-divider
        v-row(justify="space-around" align="center" height="500px")
          v-col(cols="12" md="6" class="pa-10")
            v-img(src="https://www.givdo.com/wp-content/uploads/2017/03/2-Storey-Modern-House-Designs-and-Floor-Plans-Small.jpg")
          v-col(cols="12" md="6" class="pa-10")
            div
              h1(class="text-h4 text-center text-uppercase") Turn your dream to reallity
              p(class="body-1 text-center") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        v-divider
        v-row(justify="space-around" align="center" height="500px")
          v-col(cols="12" md="6" class="pa-10")
            div
              h1(class="text-h4 text-center text-uppercase")
                | Choose your favorite materials
              p(class="body-1 text-center") Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          v-col(cols="12" md="6" class="pa-10")
            v-img(src="https://customisedhomes.com/sites/all/themes/customisedhomes/images/Interior_banner.jpg")

          v-btn(
            outlined
            class="comment-button-sheet"
            color="brown darken-3"
            fab
            @click="comment_dialog = !comment_dialog"
            )
            v-icon(v-if="comment_dialog") mdi-close
            v-icon(v-else) mdi-comment
          div.comments-dialog
            v-dialog(
              transition="fab-transition"
              class="comments-dialog"
              v-model="comment_dialog"
              max-width="500px")
              v-card
                v-card-title
                  span Thanks for you feedback
                div(class="text-center mt-12")
                  span Rating
                  v-rating(
                    v-model="comment_attr.rating"
                    color="yellow darken-3"
                    background-color="grey darken-1"
                    empty-icon="$ratingFull"
                    half-increments
                    hover)
                v-spacer
                v-menu(bottom left)
                  v-btn(icon)
                    v-icon mdi-dots-vertical
                v-card-text
                  form
                    v-text-field(
                      color="brown darken-1"
                      v-model="comment_attr.title"
                      :counter="10"
                      label="Title"
                      required)
                    v-textarea(
                      color="brown darken-1"
                      v-model="comment_attr.comments"
                      label="Comment"
                      required)
                  v-card-actions
                    v-btn(outlined color="brown darken-1" class="mr-4" @click="formSubmit(comment_attr)") submit
                    v-btn(outlined color="brown darken-1" @click="comment_dialog = false") Close
</template>

<script>

export default {
  data() {
    return {
      comment_dialog: false,
      comment_attr: {
        title: "",
        comments: "",
        images: "",
        rating: 4.5,
      }
    }
  },

  methods: {
    formSubmit(formData){
      console.log(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.v-dialog {
  position: absolute;
  bottom: 0;
  right: 0;
}
.comment-button-sheet {
  position: fixed !important;
  right: 10px;
  bottom: 10px;
}

</style>
