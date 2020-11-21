<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        v-dialog(v-model="dialog" persistent max-width="600px")
          template(v-slot:activator="{ on, attrs }")
            v-btn(
              color="primary"
              dark
              v-bind="attrs"
              v-on="on") New Materials
          v-card
            ValidationObserver(ref="observer" v-slot="{ validate, reset }")
              form
                v-card-title
                  span(class="headline") Add New Materials
                v-card-text
                  v-container
                    v-row
                      v-col(cols="12" md="4" sm="4" lg="4" xl="4")
                        v-row(justify="center" align="center")
                          v-col(cols="12")
                            div.image-container(class="d-flex justify-center")
                              .thumbnail-image(@click="openFile($event)")
                                .text-center
                                  img( :src="image.url")
                                input(type="file" accept="image/*" hidden="true" ref="fileInput" @change="changeFile($event)")
                            .mt-2.text-center
                              v-btn(color="brown" x-small outlined @click="openFile($event)") រូបសំភារៈ
                    v-row
                      v-col(cols="12" sm="6" md="6")
                        ValidationProvider(v-slot="{ errors }" name="Name" rules="required")
                          v-text-field(
                            v-model="house_model_attr.name"
                            :error-messages="errors"
                            label="ទីតាំងនៃសំផារៈ*"
                            required)
                      v-col(cols="12" sm="6" md="6")
                        ValidationProvider(v-slot="{ errors }" name="Name" rules="required")
                          v-text-field(
                            v-model="house_model_attr.floors"
                            :error-messages="errors"
                            label="តំលៃ*"
                            required)
                      v-col(cols="12" sm="6" md="6")
                        ValidationProvider(v-slot="{ errors }" name="Floor" rules="required")
                          v-text-field(
                            v-model.number="house_model_attr.square_meter"
                            :error-messages="errors"
                            label="ឈ្មោះសំភារៈ*"
                            required)
                      v-col(cols="12" sm="12" md="12")
                        v-textarea(v-model="house_model_attr.description" label="Description" required)
                  small *indicates required field
                v-card-actions
                  v-spacer
                  v-btn(color="blue darken-1" text @click="dialog = false") Close
                  v-btn(color="blue darken-1" text @click="dialog = false") Save
      v-row
        v-col(cols="12" md="12" sm="12")
          v-container
            v-row(align="center" justify="center")
              v-col(cols="12" md="12")
                v-expansion-panels
                  v-expansion-panel(
                    v-for="(config, index) in configureOptions"
                    :key="i")
                    v-expansion-panel-header {{config.title}}
                    v-expansion-panel-content(v-for="(con_attr, index) in config.attributes", :key="index")
                      v-container
                        v-row
                          v-col.text-overline.config-key(cols="12")
                            .caption {{ con_attr.title }}
                        v-row
                          template(v-for="(value, index) in con_attr.values")
                            v-col.config-body(cols="4")
                              v-img(
                                aspect-ratio="1.7"
                                contain
                                :key="index"
                                :src="value.image"
                                lazy-src="https://www.khland.com.kh/assets/images/kh_lg.png"
                                class="text-right pa-2 item-image")
                                template(v-slot:placeholder)
                                  v-row(
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center")
                                    v-progress-circular( indeterminate color="brown darken-4")
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
      image: {
        type: '',
        size: '',
        url: '',
      },
      house_model_attr: {
        description: '',
        floors: '',
        level: '',
        name: '',
        square_meter: ''
      }
    }
  },
  computed: {
    getConfigTitles(){
      return this.configureOptions.map(config => {
        return config.head_title
      })
    },
    configureOptions(){
      return this.$store.getters['configure/getConfigureOptions']
    }
  },
  methods: {
    replaceSpaceWith(text, replace_text) {
      return window.btoa(unescape(encodeURIComponent( text )));
    },
    openFile(e){
      const file = this.$refs.fileInput.click()
    },

    changeFile(e){
      let files = this.$refs.fileInput.files
      if(files.length > 0){
        const file = files[0]
        this.image.url = URL.createObjectURL(file)
        this.image.size = (files[0].size / (1024*1024)).toFixed(2)
        this.image.name = files[0].name
        this.image.type = files[0].type
      }
    },
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

<style lang="scss" scoped>
.image-container{

  .thumbnail-image{
    overflow: hidden;
    width: 120px;
    height: 120px;
    border-radius: 10px;
    border: 2px dashed #6e4c41;
    padding: 2px;
    text-align: center;

    img {
      display: block;
      margin: auto;
      width: 100%;
      border-radius: 10px;
    }
  }
}

div.thumbnail-image {
  cursor: pointer;
  width: 90px;
  height: 90px;
  text-align: center;
  img {
    height: 100%;
    width: auto;
  }
}
</style>
