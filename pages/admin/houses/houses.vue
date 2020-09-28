<template lang="pug" scoped>
  v-container( fluid class="fill-height")
    v-row(align="center" justify="center")
      v-col(cols="12" md="8")
        v-row(align="center" justify="center")
          v-col( cols="12" sm="6" md="6")
            v-text-field(
              v-model="house_attr.location"
              label="Location*"
              required)
          v-col(cols="12" sm="6" md="6")
            v-text-field(
              v-model="house_attr.house_model_id"
              label="House Model*"
              required)
          v-col(cols="12" sm="6" md="6")
            v-text-field(
              label="Land size*"
              hint="ទំហំផ្ទៃដី"
              required)
          v-col(cols="12" sm="6" md="6")
            v-text-field(
              v-model.number="house_attr.building_sqaure_meter"
              label="Building size*"
              hint="ទំហំក្រឡាផ្ទៃរបស់ផ្ទះ"
              required)
          v-col(cols="12")
            v-textarea(
              type="textarea"
              v-model="house_attr.description"
              label="Description*"
              hint="ពិព័ណរនាអំពីផ្ទះ"
              required)
        v-btn(
          color="primary"
          @click="addHouse") Add new house

        v-btn(text @click="cancel") Cancel
    v-row
      v-col(md="3" v-for="house in houses" :key="house.id")
        v-card( color="brown" max-width="300")
          v-card-title
            v-spacer
            v-icon(size="100") mdi-home-city-outline
            v-spacer
          v-card-title(class="mt-n10" size="90")
            v-spacer
            span House
            v-spacer
          v-card-text "Turns out semicolon-less "
          v-card-actions
            v-list-item(class="grow")
              v-list-item-content
                v-list-item-title Evan You
              v-row( align="center" justify="end")
                v-icon(class="mr-1") mdi-heart
                span(class="subheading mr-2") 256
                span(class="mr-1") ·
                v-icon.mr-1 mdi-share-variant
                span.subheading 45
    v-row
      v-col(md="3" v-if="!houses > 0")
        v-card( color="brown" max-width="300")
          h1 No houses yet
</template>
<script>

export default {
  layout: "admin",
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
  methods: {
    setFormData(houses){
      let formData = new FormData();
      if(houses){
        let house_keys = Object.keys(this.house_attr)
        for(let i = 0; i < house_keys.length; i++){
          formData.append(house_keys[i], this.house[house_keys[i]]);
        }
      }else{

      }
    },
    addHouse() {
      let data = this.house;
      formData = setFormData
      try {
        let res = this.$store.dispatch("addHouse", formData, this.$store.state.request_options);
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
  },
  computed: {
    async getHouses() {
      let res = await this.$store.dispatch("getHouses");
      this.houses = res.data.data.length >= 1 ? res.data.resutls.houses : []
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
