<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        .text-center
          h1 Add new user {{date}}
    v-row
      v-col(cols="12")
        ValidationObserver(ref="observer" v-slot="{ validate, reset }")
          form
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
                      v-btn(color="brown" x-small outlined @click="openFile($event)") Profile picture
              v-col(cols="12" md="8" sm="8" lg="8" xl="8")
                v-row
                  v-col(cols="12" sm="6" md="6" lg="6" xl="6")
                    ValidationProvider( v-slot="{ errors }" name="Name" rules="required|max:10")
                      v-text-field(
                        v-model="first_name"
                        :counter="10"
                        :error-messages="errors"
                        label="First Name"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors }" name="email" rules="required|email")
                      v-text-field(
                        v-model="last_name"
                        :error-messages="errors"
                        label="Last Name"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors, valid }" rules="required" name="checkbox")
                      v-text-field(
                        v-model="email"
                        :error-messages="errors"
                        value="1"
                        label="Email"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors, valid }" rules="required" name="checkbox")
                      v-text-field(
                        v-model="phone"
                        :error-messages="errors"
                        value="1"
                        label="Phone"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors, valid }" rules="required" name="checkbox")
                      v-text-field(
                        v-model="id_number"
                        :error-messages="errors"
                        value="1"
                        label="ID Number"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors, valid }" rules="required" name="checkbox")
                      v-text-field(
                        v-model="Address"
                        :error-messages="errors"
                        value="1"
                        label="Address"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    v-menu(
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      transition="scale-transition"
                      offset-y
                      min-width="290px")
                      template(v-slot:activator="{ on, attrs }")
                        v-text-field(
                          v-model="date"
                          label="Picker without buttons"
                          prepend-icon="mdi-calendar"
                          readonly
                          v-bind="attrs"
                          v-on="on")
                      v-date-picker(
                        v-model="date"
                        @input="menu2 = false")
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors }" name="select" rules="required")
                      v-select(
                        v-model="select"
                        :items="items"
                        :error-messages="errors"
                        label="Role"
                        data-vv-name="select"
                        required)
                v-row
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors, valid }" rules="required" name="checkbox")
                      v-text-field(
                        v-model="password"
                        :error-messages="errors"
                        value="1"
                        label="New Password"
                        required)
                  v-col(cols="12" md="6" sm="6" lg="6" xl="6")
                    ValidationProvider(v-slot="{ errors, valid }" rules="required" name="checkbox")
                      v-text-field(
                        v-model="confirm_password"
                        :error-messages="errors"
                        value="1"
                        label="Confirm Password"
                        required)
                  v-col(cols="12")
                    v-btn(class="mr-4" small @click="submit" color="primary") Add
                    v-btn(@click="clear" small) Cancel
</template>

<script>
  import { required, email, max } from 'vee-validate/dist/rules'
  import { extend, ValidationObserver, ValidationProvider, setInteractionMode } from 'vee-validate'

  setInteractionMode('eager')

  extend('required', {
    ...required,
    message: '{_field_} can not be empty',
  })

  extend('max', {
    ...max,
    message: '{_field_} may not be greater than {length} characters',
  })

  extend('email', {
    ...email,
    message: 'Email must be valid',
  })

  export default {
    layout: 'admin',
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      image: {
        type: '',
        size: '',
        url: '/person/img5.png',
      },
      date_of_birth: '2020/09/09',
      first_name: 'Same 1',
      last_name: 'Same 2',
      phone: '09889223',
      email: 'simple@email.com',
      select: 1,
      items: [
        'Admin',
        'Editor',
        'Sale Team',
        'Sale Manager',
        'Agency',
      ],
      checkbox: null,
    }),

    methods: {
      submit () {
        this.$refs.observer.validate()
      },
      clear () {
        this.first_name = ''
        this.last_name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$refs.observer.reset()
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
      }
    },
  }
</script>

<style lang="scss" scoped>
.image-container{

  .thumbnail-image{
    overflow: hidden;
    width: 100px;
    height: 100px;
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
</style>
