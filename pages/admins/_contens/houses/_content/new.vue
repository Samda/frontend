<template lang="pug">
  v-container
    v-row
      v-col(cols="12")
        .container
          h1.text-h5.text-uppercase Add New Record For House Configuration
    v-row
      v-col.mt-n10(cols="12" md="4" sm="4")
        v-form.container( ref="form")
          v-row
            v-col(cols="12" md="12" sm="12")
              v-select(
                color="brown"
                v-model="house.house_model_id"
                :items="house_models_items"
                label="House Models")
            v-col(cols="12" md="12" sm="12")
              v-text-field(
                color="brown"
                v-model="house.location"
                label="House Location")
            v-col(cols="12" md="12" sm="12")
              v-text-field(
                color="brown"
                v-model="house.building_square_meter"
                label="Building Square Metter")
            v-col(cols="12" md="12" sm="12")
              v-text-field(
                color="brown"
                v-model="house.square_meter"
                label="Building Sqaure Metter")
            v-col(cols="12" md="12" sm="12")
              v-btn(
                color="brown"
                block
                class="mr-4"
                @click="submitForm") Create Record
      v-col(cols="12" md="8" sm="8")
        strong Recommend Image Size
        code Height: 400px x Width: 800px
        div.image-container
          .thumbnail-image(@click="openFile($event)")
            img( :src="image.url")
            input(type="file" accept="image/*" hidden="true" ref="fileInput" @change="changeFile($event)")
          .bottons-group(class="mt-2")
            v-btn.mr-2(color="red" small outlined @click="CancelFile") Cancel
            v-btn.mr-2(color="brown" small outlined @click="openFile($event)") Choose file
        //-div.image-container
          .thumbnail-image
            img( :src="image.url" @click="openFile($event)")
            input(type="file" accept="image/*" ref="fileInput" hidden="true" @change="changeFile($event)")
          .bottons-group(class="mt-2")
            v-btn.mr-2(color="red" small outlined @click="CancelFile") Cancel
            v-btn.mr-2(color="brown" small outlined @click="openFile($event)") Choose file
</template>

<script>
export default {
  layout: 'admin',
  data(){
    return {
      house: {
        square_meter: '',
        building_square_meter: '',
        location: '',
        house_model_id: '',
        house_pictures: [],
      },
      house_models: [
        {title: "Twin Villa"},
        {title: "Twin Villa"},
        {title: "Twin Villa"},
        {title: "Twin Villa"},
      ],
      imageOne: '',
      image: {
        type: '',
        size: '',
        url: '',
      }
    }
  },
  methods: {
    submitForm(){
      let formData = new FormData()

      formData.append('house[square_meter]', this.house.square_meter)
      formData.append('house[building_square_meter]', this.house.building_square_meter)
      formData.append('house[location]', this.house.location)
      formData.append('house[house_model_id]', this.house.house_model_id)
      formData.append('house[pictures]', this.$refs.fileInput.files[0], this.image.name)
      //formData.append('house[pictures]', this.$refs.fileInput.files[1])
      this.$store.dispatch('house/addHouse', formData)

      this.house =  {
        square_meter: '',
        building_square_meter: '',
        location: '',
        house_model_id: '',
        house_pictures: [],
      }
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
    CancelFile(){
      console.log("change file")
    }
  },

  computed: {
    house_models_items(){
      return this.house_models.map( item => item.title )
    }
  }
}
</script>

<style lang="scss" scoped>
  .image-container{
    margin-bottom: 5px;

    .thumbnail-image{
      width: 400px;
      height: 200px;
      border: 2px dashed #6e4c41;
      padding: 10px;
      text-align: center;

      img {
        height: 100%;
      }
    }
  }
</style>
