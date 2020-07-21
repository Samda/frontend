<template lang="pug" >
  v-container
    v-row(justify="center")
      v-dialog(v-model="dialog" persistent max-width="600px")
        template(v-slot:activator="{ on, attrs }")
          v-btn(
            color="primary"
            dark
            v-bind="attrs"
            v-on="on") Open Dialog
        userForm
    v-row(align="center" justify="center")
      v-col(cols="12" sm="10" md="10")
        v-card
          v-card-title( class="text-center justify-center py-6")
            h1(class="font-weight-bold display-1 teal--text") User Management
            v-spacer
          v-tabs(
            v-model="tab"
            background-color="transparent"
            color="teal")
            v-tab(href="#tab-admin") Admin
            v-tab(href="#tab-editor") Editor
            v-tab(href="#tab-agencies") Agencies
            v-tab(herf="#tab-sales") Sales
          v-tabs-items(v-model="tab")
            v-tab-item(value="tab-admin")
              v-card
                v-card-title(class="black--text darken-4")
                  v-btn(color="teal" class="text--primary" fab small )
                    v-icon mdi-plus
                  v-spacer
                v-card-text
                  v-row
                    v-col(cols="12" md="6" sm="6" :key="user + user.name" v-for="user in users")
                      v-card( color="teal dark-1" dark class="mt-2")
                        div(class="d-flex flex-no-wrap justify-space-between")
                          div
                            v-card-title( class="headline" v-text="user.name")
                            v-card-text
                              div
                                //-v-icon mdi-briefcase-variant
                                span(class="mr-2") Role:
                                span {{user.title}}
                              div
                                span(class="mr-2") Role:
                                span {{user.title}}
                          v-avatar( class="ma-3" size="125" rouned)
                            v-img(:src="user.src")
                        v-card-actions
                          v-btn(small color="teal") View
                          v-btn(small color="teal") Edit
            v-tab-item(value="tab-editor")
              v-card
                v-card-title(class="black--text darken-4")
                  v-btn(color="teal" class="text--primary" fab small )
                    v-icon mdi-plus
                  v-spacer
                v-card-text
                  v-row
                    v-col(cols="12" md="6" sm="6" :key="user" v-for="user in users")
                      v-card( color="teal dark-1" dark class="mt-2")
                        div(class="d-flex flex-no-wrap justify-space-between")
                          div
                            v-card-title( class="headline" v-text="user.name")
                            v-card-text
                              div
                                //-v-icon mdi-briefcase-variant
                                span(class="mr-2") Role:
                                span {{user.title}}
                              div
                                span(class="mr-2") Role:
                                span {{user.title}}

                          v-avatar( class="ma-3" size="125" tile)
                            v-img(:src="user.src")
                        v-card-actions
                          v-btn(small color="teal") View
                          v-btn(small color="teal") Edit
            v-tab-item(value="tab-agencies")
              h1 Agencies
            v-tab-item(value="tab-sales")
              h1 Sales
</template>

<script>
import userForm from '@/components/admin/users/userForm'
export default {
  layout: 'admin',
  components: {
    userForm
  },
  data() {
    return {
      tab: null,
      items: [
        'Appetizers', 'Entrees', 'Deserts', 'Cocktails',
      ],
      users: [
        {
          name: "Super User 1",
          title: "Admin User",
          src: 'http://placegoat.com/200/200'
        },
        {
          name: "Super User 1",
          title: "Admin User",
          src: 'https://placegoat.com/goatse/200/200'
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
