<template lang="pug">
  div
    v-btn(
      outlined
      class="comment-button-sheet"
      color="brown darken-3"
      fab
      @click="comment_dialog = !comment_dialog")
      v-icon(v-if="comment_dialog") mdi-close
      v-icon(v-else) mdi-comment
    v-dialog(
      scrollable
      transition="fab-transition"
      class="comments-dialog"
      v-model="comment_dialog"
      max-width="500px")
      v-card
        v-card-title(class="text-center")
          p Give us a feedback
          v-spacer
          v-btn(text icon small color="brown darken-1" @click="comment_dialog = false")
            v-icon mdi-close
        v-card-subtitle
          div This will help us serve you better.
        v-card-text
          v-form(ref="feedback_form")
            div(class="text-left")
              span Rating
              v-rating(
                v-model="feedback.rate"
                color="yellow darken-3"
                background-color="grey darken-1"
                empty-icon="$ratingFull"
                half-increments
                hover)
            v-menu(bottom left)
              v-btn(icon)
                v-icon mdi-dots-vertical
            v-text-field(
              color="brown darken-1"
              v-model="feedback.title"
              label="Title"
              required)
            v-textarea(
              rows="3"
              color="brown darken-1"
              v-model="feedback.comment"
              label="Feedback"
              required)
            v-file-input(
              v-model="feedback.picture"
              color="brown darken-1"
              counter
              label="Picture"
              multiple
              placeholder="Select file"
              prepend-icon="mdi-paperclip"
              outlined
              :show-size="1000")
              template(v-slot:selection="{ index, text }")
                v-chip(
                  v-if="index < 2"
                  color="brown darken-1"
                  dark
                  label
                  small) {{ text }}
                span(
                  v-else-if="index === 2"
                  class="overline grey--text text--darken-3 mx-2") + {{ feedback.picture.length - 2 }} File(s)
        v-card-actions
          v-progress-circular(
            v-if="isLoading"
            :width="1"
            color="brown darken-1"
            indeterminate)
          v-spacer
          v-btn(outlined color="brown darken-1" class="mr-4" @click="formSubmit") submit
          v-btn(outlined color="brown darken-1" @click="comment_dialog = false") close
</template>

<script>
export default {
  data() {
    return {
      comment_dialog: '',
      feedback: {
        title: "",
        comment: "",
        picture: [],
        rate: 4.5,
      }
    }
  },

  methods: {
    async formSubmit(){
      const formData = new FormData()

      formData.append('feedback[title]', this.feedback.title)
      formData.append('feedback[rate]', this.feedback.rate)
      formData.append('feedback[comment]', this.feedback.comment)
      if(this.feedback.picture[0] !== undefined){
        formData.append('feedback[picture]', this.feedback.picture[0])
      }
      const result = await this.$store.dispatch('feedback/addFeedback', formData)
      this.feedback = {title: '', comment: '', rate: 1, picture: [] }
      this.comment_dialog = false
    }
  },
  computed: {
    isLoading(){
      return this.$store.getters['feedback/isLoading']
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
