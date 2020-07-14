<template>
  <v-container fluid class="fill-height">
    <v-row>
      <v-dialog v-model="dialog" persistent max-width="600px">
        <v-col cols="12">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
            >
              Add new house
            </v-btn>
          </template>
        </v-col>
        <v-card>
          <v-card-title>
            <span class="headline">House Information</span>
          </v-card-title>
          <v-card-text>
            <v-stepper v-model="e1">
              <v-stepper-header>
                <v-stepper-step :complete="e1 > 1" step="1">ព័តមានទូទៅ</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step :complete="e1 > 2" step="2">ទីតាំងរបស់ផ្ទះ</v-stepper-step>
                <v-divider></v-divider>
                <v-stepper-step step="3">រូបភាព</v-stepper-step>
              </v-stepper-header>

              <v-stepper-items>
                <v-stepper-content step="1">
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="house_attr.location"
                        label="Location*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="house_attr.house_model_id"
                        label="House Model*"
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        label="Land size*"
                        hint="ទំហំផ្ទៃដី"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model.number="house_attr.building_sqaure_meter"
                        label="Building size*"
                        hint="ទំហំក្រឡាផ្ទៃរបស់ផ្ទះ"
                        required
                        ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-textarea
                        type="textarea"
                        v-model="house_attr.description"
                        label="Description*"
                        hint="ពិព័ណរនាអំពីផ្ទះ"
                        required></v-textarea>
                    </v-col>
                  </v-row>
                  <v-btn
                    color="primary"
                    @click="e1 = 2"
                  >
                    Continue
                  </v-btn>

                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="2">
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 3"
                  >
                    Continue
                  </v-btn>

                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>

                <v-stepper-content step="3">
                  <v-card
                    class="mb-12"
                    color="grey lighten-1"
                    height="200px"
                  ></v-card>

                  <v-btn
                    color="primary"
                    @click="e1 = 1"
                  >
                    Continue
                  </v-btn>

                  <v-btn text>Cancel</v-btn>
                </v-stepper-content>
              </v-stepper-items>
            </v-stepper>
          </v-card-text>
          <v-card-actions>
            <small>*សញ្ញានេះមាននៃថា ត្រូវតែបំពេញ</small>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
            <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
    <v-row>
      <v-col md="3" v-for="house in houses" :key="house.id">
        <v-card
          color="brown"
          max-width="300"
        >
          <v-card-title>
            <v-spacer></v-spacer>
            <v-icon size="100" >mdi-home-city-outline</v-icon>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-title class="mt-n10" size="90">
            <v-spacer></v-spacer>
            <span>House</span>
            <v-spacer></v-spacer>
          </v-card-title>
          <v-card-text>
            "Turns out semicolon-less "
          </v-card-text>
          <v-card-actions>
            <v-list-item class="grow">
              <v-list-item-content>
                <v-list-item-title>Evan You</v-list-item-title>
              </v-list-item-content>

              <v-row
                align="center"
                justify="end"
              >
                <v-icon class="mr-1">mdi-heart</v-icon>
                <span class="subheading mr-2">256</span>
                <span class="mr-1">·</span>
                <v-icon class="mr-1">mdi-share-variant</v-icon>
                <span class="subheading">45</span>
              </v-row>
            </v-list-item>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

export default {
  data() {
    return {
      e1: 1,
      dialog: false,
      houses: [],
      house_attr: {
        building_sqaure_meter: '',
        description: '',
        latitude: '',
        location: '',
        longitude: '',
        square_meter: '',
        updated_by: '',
        house_model_id: ''
      }
    }
  },
  computed: {
    async addHouse() {
      let data = this.house;
      let formData = new FormData();
      let house_keys = Object.keys(this.house)
      for(let i = 0; i < house_keys.length; i++){
        formData.append(house_keys[i], this.house[house_keys[i]]);
      }

      try {
        let res = await this.$store.dispatch("addHouse", formData, this.$store.state.request_options);
        this.$router.push("/houses");
      } catch (error) {
        this.$notify({
          group: "error",
          title: "Error!",
          text: error.response
            ? error.response.data.error
            : "Sorry an error occured, check your internet"
        })
      }
    },
    async getHouses() {
      let res = await this.$store.dispatch("getHouses");
      console.log(res)
      this.houses = res.data.resutls.houses;
    }
  },
  // mounted(){
  //   this.getIncidents()
  // }
  async asyncData({ $axios }) {
    let { data } = await $axios.get("/houses");
    return { houses: data.results };
  },
}

</script>
<style lang="scss" scoped>
  div.v-messages__wrapper {
    .v-messages__message {
      padding: 3px !important;
    }
  }
</style>
