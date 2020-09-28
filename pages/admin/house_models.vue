<template lang="pug">
  v-container(fluid)
    v-row
      v-col(cols="12")
        v-dialog(v-model="dialog" persistent max-width="600px")
          template(v-slot:activator="{ on, attrs }")
            v-btn(
              color="primary"
              dark
              v-bind="attrs"
              v-on="on") Open Dialog
          v-card
            ValidationObserver(ref="observer" v-slot="{ validate, reset }")
              form
                v-card-title
                  span(class="headline") House Model Infromation
                v-card-text
                  v-container
                    v-row
                      v-col(cols="12" sm="6" md="6")
                        ValidationProvider(v-slot="{ errors }" name="Name" rules="required")
                          v-text-field(
                            v-model="house_model_attr.name"
                            :error-messages="errors"
                            label="Model name*"
                            required)
                      v-col(cols="12" sm="6" md="6")
                        ValidationProvider(v-slot="{ errors }" name="Floor" rules="required")
                          v-text-field(
                            v-model.number="house_model_attr.floors"
                            :error-messages="errors"
                            label="Floor*"
                            hint="ចំនួនជាន់"
                            required)
                      v-col(cols="12" sm="12" md="12")
                        v-textarea(v-model="house_model_attr.description" label="Description" required)
                  small *indicates required field
                v-card-actions
                  v-spacer
                  v-btn(color="blue darken-1" text @click="dialog = false") Close
                  v-btn(color="blue darken-1" text @click="addHouseModel(house_model_attr)") Save
      v-col(cols="12")
        v-row
          v-col(cols="6" sm="4" md="4" lg="4" xl="4" v-for="i in 8")
            v-card(
              class="mx-auto"
              max-width="400")
              v-img(
                class="white--text align-end"
                height="200px"
                src="https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117796197_1802415263258038_2997845702096680340_o.jpg?_nc_cat=100&_nc_sid=730e14&_nc_ohc=62bzCsR8PyMAX_xIdZu&_nc_ht=scontent.fpnh1-1.fna&oh=a7a15f3ab216413bd1387da0b643f91e&oe=5F953FE3")
              v-card-subtitle(class="pb-0") $ 100000

              v-card-text
                v-row(
                  align="center"
                  class="mx-0")
                  v-rating(
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    readonly
                    size="14")
                  div(class="grey--text ml-4") 4.5 (413)
                div(class="my-4 subtitle-1") វីឡាតូលកូនកាត់ ពីរជាន់
                div 4 bed room, 5 Bathroom - come with full furnitures.
              v-card-actions
                v-btn(
                  to="houses/edit/2"
                  color="orange"
                  text) Edit
                v-btn(
                  to="houses/2"
                  color="orange"
                  text) Explore
</template>

<script>
import { extend, ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate';
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

export default {
  layout: "admin",
  components: {
    ValidationProvider,
    ValidationObserver
  },

  data(){
    return {
      dialog: false,
      house_model_attr: {
        description: '',
        floors: '',
        level: '',
        name: '',
        square_meter: ''
      }
    }
  },

  methods: {
    addHouseModel(data) {
      this.$store.dispatch('addHouseModel', data)
    },

    submit () {
        this.$refs.observer.validate()
    },

    clear () {
      this.name = ''
      this.email = ''
      this.select = null
      this.checkbox = null
      this.$refs.observer.reset()
    },
  }
}
</script>

<style lang="css" scoped>
</style>
