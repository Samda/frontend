<template>
  <v-container fluid class="fill-height">
    <v-row
      justify="center"
      align="center"
    >
      <v-col class="shrink">
        <v-btn @click="downloadPdf"> Download PDF </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <vueHtml2pdf />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>

import vueHtml2pdf from '@/components/generatePdf'

export default {
  components: {
    vueHtml2pdf
  },
  methods: {
    async downloadPdf() {
      this.$refs.html2Pdf.generatePdf()
    }
  }
}

</script>
<style lang="scss" scoped>
</style>
