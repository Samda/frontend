<template lang="html">
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Open Dialog
            </v-btn>
          </template>
          <v-card>
            <ValidationObserver ref="observer" v-slot="{ validate, reset }">
              <form>
                <v-card-title>
                  <span class="headline">House Model Infromation</span>
                </v-card-title>
                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12" sm="6" md="6">
                        <ValidationProvider v-slot="{ errors }" name="Name" rules="required">
                          <v-text-field
                            v-model="house_model_attr.name"
                            :error-messages="errors"
                            label="Model name*"
                            required
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="12" sm="6" md="6">
                        <ValidationProvider v-slot="{ errors }" name="Floor" rules="required">
                          <v-text-field
                            v-model.number="house_model_attr.floors"
                            :error-messages="errors"
                            label="Floor*"
                            hint="ចំនួនជាន់"
                            required
                          ></v-text-field>
                        </ValidationProvider>
                      </v-col>
                      <v-col cols="12" sm="12" md="12">
                        <v-textarea v-model="house_model_attr.description" label="Description" required></v-textarea>
                      </v-col>
                    </v-row>
                  </v-container>
                  <small>*indicates required field</small>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
                  <v-btn color="blue darken-1" text @click="addHouseModel(house_model_attr)">Save</v-btn>
                </v-card-actions>
              </form>
            </ValidationObserver>
          </v-card>
        </v-dialog>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { extend, ValidationProvider, ValidationObserver, setInteractionMode } from 'vee-validate';
import { required } from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: '{_field_} can not be empty',
})

export default {

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
