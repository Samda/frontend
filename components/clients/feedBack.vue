<template lang="pug">
div
  v-btn(
    outlined
    class="comment-button-sheet"
    color="brown darken-3"
    fab
    @click="comment_dialog = !comment_dialog"
    v-bind="attrs"
    v-on="on")
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
            v-btn(outlined color="brown darken-1" @click="comment_dialog = false") close
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
.comment-button-sheet {
  position: fixed !important;
  right: 10px;
  bottom: 10px;
  z-index: 999;
}
</style>
