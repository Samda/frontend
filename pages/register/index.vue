<template lang="pug">
  v-container
    v-row(align="center" justify="center")
      v-col(cols="12" sm="12" md="8")
        v-card.mx-auto(max-width="500" outlined)
          v-toolbar( color="teal darken-1" dark flat)
            v-spacer
            v-toolbar-title Regiser
            v-spacer
          v-card-text
            ValidationObserver(ref="observer" v-slot="{ validate, reset }")
              form
                ValidationProvider(v-slot="{ errors }" name="email" rules="required|email")
                  v-text-field(
                    v-model="register.email"
                    :error-messages="errors"
                    label="E-mail"
                    required)
                ValidationProvider(
                  name="password"
                  rules="required|password"
                  v-slot="{ errors }")
                  v-text-field(
                    type="password"
                    v-model="register.password"
                    :error-messages="errors"
                    label="Password"
                    required)
          v-card-actions
            v-btn(class="mr-4" @click="registerUser" ) submit
            v-spacer
</template>

<script>
  import { password, required, email, max } from 'vee-validate/dist/rules'
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

  extend('password', {
    params: ['target'],
    validate(value, { target }) {
      return value === target;
    },
    message: 'password confirmation does not match'
  })

  export default {
    layout: "admin",
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      // name: '',
      // email: '',
      // password: '',
      // confirm_password: '',
      loading: false,
      register: {
        // name: '',
        email: '',
        password: '',
        // password_confirmation: ''
      },
    }),

    methods: {
      // submit () {
      //   console.log('registering ')
      //   // this.$refs.observer.validate()
      // }
      async registerUser() {
        let data = this.register;
        this.$axios.defaults.baseURL = "http://localhost:4000/api"
        let response = await this.$axios.post("/users/signup", data)
        console.log(response)
      }
    },
  }
</script>
<style lang="css" scoped>
</style>
