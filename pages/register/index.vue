<template>
  <v-container>
    <v-row
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        sm="12"
        md="8"
      >
        <v-card
        class="mx-auto"
        max-width="500"
        outlined >
          <v-toolbar
            color="teal darken-1"
            dark
            flat
          >
            <v-spacer> </v-spacer>
            <v-toolbar-title >Regiser</v-toolbar-title>
            <v-spacer> </v-spacer>
          </v-toolbar>
          <v-card-text>
            <ValidationObserver ref="observer" v-slot="{ validate, reset }">
              <form>
                <ValidationProvider v-slot="{ errors }" name="Name" rules="required|max:10">
                  <v-text-field
                    v-model="register.name"
                    :counter="10"
                    :error-messages="errors"
                    label="Name"
                    required
                  ></v-text-field>
                </ValidationProvider>
                <ValidationProvider v-slot="{ errors }" name="email" rules="required|email">
                  <v-text-field
                    v-model="register.email"
                    :error-messages="errors"
                    label="E-mail"
                    required
                  ></v-text-field>
                </ValidationProvider>

                <ValidationProvider name="password" rules="required|password:confirm" v-slot="{ errors }">
                  <v-text-field
                    type="password"
                    v-model="register.password"
                    :error-messages="errors"
                    label="Password"
                    required
                  ></v-text-field>
                    <span>{{ errors[0] }}</span>
                </ValidationProvider>

                <ValidationProvider name="confirm" rules="required" v-slot="{ errors }">
                  <v-text-field
                    type="password"
                    v-model="register.password_confirmation"
                    :error-messages="errors"
                    label="Confirm Password"
                    required
                  ></v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>
              </form>
            </ValidationObserver>
          </v-card-text>
          <v-card-actions>
            <v-btn class="mr-4" @click="registerUser">submit</v-btn>
            <v-spacer></v-spacer>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
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
    components: {
      ValidationProvider,
      ValidationObserver,
    },
    data: () => ({
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      loading: false,
      register: {
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
      },
    }),

    methods: {
      // submit () {
      //   console.log('registering ')
      //   // this.$refs.observer.validate()
      // }
      async registerUser() {
        this.loading = true;
        let data = this.register;
        try {
          await this.$axios.post("/auth/signup", data);
          this.$router.push("/login");
          this.loading = false;
          // this.$notify({
          //   group: "success",
          //   title: "Success!",
          //   text: "Account created successfully"
          // });
        } catch (error) {
          this.loading = false;
          // this.$notify({
          //   group: "error",
          //   title: "Error!",
          //   text: error.response
          //     ? error.response.data.error
          //     : "Sorry an error occured, check your internet"
          // });
        }
      }
    },
  }
</script>
<style lang="css" scoped>
</style>
