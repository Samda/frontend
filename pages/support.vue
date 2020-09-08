<template lang="pug">
div
  v-main
    v-container.grey.lighten-5(fluid fill-height)
      v-row.px-10
        v-col(cols="12", md="3", sm="3", align="center" )
          v-img.mb-5(
            max-height="60",
            max-width="60",
            contain,
            src="https://www.khland.com.kh/assets/images/kh_lg.png"
          )
          v-list.grey.lighten-5
            v-list-item-title.mb-10.font-weight-medium.display-5 Help Center
            v-list-item-group.p-5(v-model="model", color="brown")
              v-list-item.mb-5(v-for="item in fakeItems", :key="item.id")
                v-list-item-content
                  v-list-item-title(v-text="item.text", color="brown darken-4")

        v-col.pa-0(cols="12", md="9", sm="9", align="center")
          v-container(fluid)
            v-expansion-panels( flat)
              v-expansion-panel(v-for="(item, i) in 5", :key="i")
                v-expansion-panel-header
                  h1.brown--text support text {{i+1}}
                v-expansion-panel-content.pt-5.brown--text Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<script>
export default {
  layout: "default",
  data() {
    return {
      fakeItems: [
        { text: "System guide" },
        { text: "Buyer support" },
        { text: "Trust & Safety" },
      ],
      model: 0,
    };
  },
};
</script>

<style lang="css" scoped>
.tile {
  border-radius: 4px;
}
.tile:hover {
  background: green;
}
.title:active {
  color: green;
  background: yellow !important;
}
</style>
