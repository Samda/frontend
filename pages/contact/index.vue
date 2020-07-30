<template lang="pug">
v-container(fluid)
  v-row
    v-col.mt-0(cols="3", align="center")
      h3.pb-6 Contact us
      v-text-field(label="Your full name", single-lined, outlined)
      v-text-field(label="Your email address", single-lined, outlined)
      v-textarea(label="Your message", outlined)
      v-btn.py-8(block, bottom, color="teal lighten-1", large) Send your message
    v-col(cols="9")
      div
        l-map.min-h-screen.z-10(
          style="min-height:70vh",
          :zoom="zoom",
          :center="center",
          :options="{ zoomControl: true }"
        )
          l-tile-layer(:url="url")
          div(v-for="item in items", :key="item.id") {{ item }}
          div(v-if="state")
            l-marker(
              v-for="item in state.items",
              :key="item.objectID",
              :lat-lng="item._geoloc"
            )
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
  layout: "default",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      zoom: 14,
      center: [11.55645, 104.9282],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
