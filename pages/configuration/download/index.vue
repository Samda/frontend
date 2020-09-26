<template lang="pug">
  div
    button(@click="exportPDF") Export PDF
    div(ref="section1" id="section1")
      v-card(
        class="mx-auto"
        max-width="400")
        v-img(
          class="white--text align-end"
          height="200px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg")
          v-card-title Top 10 Australian beaches

        v-card-subtitle(class="pb-0") Number 10
        v-card-text(class="text--primary")
          div Whitehaven Beach
          div Whitsunday Island, Whitsunday Islands
        v-card-actions
          v-btn(
            color="orange"
            text) Share
          v-btn(
            color="orange"
            text) Explore
</template>

<script>
import jsPDF from "jspdf";
import html2canvas from 'html2canvas';
export default {
  layout: 'configuration',
  data(){
    return {
      todos: [
        {title: 'todo 1', description: 'description 1'},
        {title: 'todo 2', description: 'description2'},
        {title: 'todo 3', description: 'description 3'},
        {title: 'todo 4', description: 'description 4'},
        {title: 'todo 5', description: 'description 5'}
      ]
    }
  },
  methods: {
    exportPDF() {
      let doc = new jsPDF();
      let page = this.$refs.section1;
      doc.html(page, {
        callback: doc => {
          doc.save();
        },
         x: 10,
         y: 10
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
