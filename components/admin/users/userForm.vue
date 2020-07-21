<template lang="pug">
  v-card
    v-card-title
      span(class="headline") User Profile
    v-card-text
      v-container
        v-row
          v-col(cols="12" sm="6" md="4")
            v-text-field(
              color="teal"
              label="Legal first name*"
              required)
          v-col(cols="12" sm="6" md="4")
            v-text-field(
              color="teal"
              label="Legal middle name"
              hint="example of helper text only on focus")
          v-col(cols="12" sm="6" md="4")
            v-text-field(
              color="teal"
              label="Legal last name*"
              hint="example of persistent helper text"
              persistent-hint
              required)
          v-col(cols="12")
            v-text-field(color="teal" label="Email*" required)
          v-col(cols="12")
            v-text-field(
              color="teal"
              label="Password*"
              type="password"
              required)
          v-col(cols="12" sm="6")
            v-select(
              color="teal"
              :items="['0-17', '18-29', '30-54', '54+']"
              label="Age*"
              required)
          v-col(cols="12" sm="6")
            v-autocomplete(
              color="teal"
              :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
              label="Interests"
              multiple)
      small *indicates required field
    v-card-actions
      v-spacer
      v-btn(color="teal darken-1" text @click="dialog = false") Close
      v-btn(color="teal darken-1" text @click="dialog = false") Save
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    }
  }
}
</script>

<style lang="css" scoped>
</style>
