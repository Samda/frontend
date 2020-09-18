<template lang="pug">
v-container(fluid)
  v-row.px-10
    v-col.mt-0(cols="12", lg="3", md="4", align="center")
      h3.display-1.pb-6 Contact us
      v-text-field.mb-n5(label="Your full name", single-lined, outlined)
      v-text-field.mb-n5(label="Your email address", single-lined, outlined)
      v-textarea(label="Your message", outlined)
      v-btn.py-8(block, bottom, color="teal lighten-1", large) Send your message
    v-col(cols="12", lg="9", md="8")
      client-only
        v-container
          l-map.min-h-screen(
            style="min-height:80vh",
            :zoom="zoom",
            :center="center",
            :options="{ zoomControl: true }"
          )
            l-tile-layer(:url="url")
            l-marker(:lat-lng="markerPos")
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
      markerPos: [11.563015, 104.87324],
    };
  },
};
</script>

<style lang="scss" scoped>
.leaflet-container.leaflet-touch-drag {
  z-index: 0;
}
</style>
