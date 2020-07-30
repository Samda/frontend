<template lang="pug">
div 
  v-content
    v-container.grey.lighten-5.px-16(fluid)
      v-row.px-16
        v-col(cols="3", align="center")
          v-img(
            max-height="60",
            max-width="60",
            contain,
            src="https://www.khland.com.kh/assets/images/kh_lg.png"
          )
          v-list 
            v-list-item-title.font-weight-medium.display-2 Help Center
            v-list-item-group(v-model="model", color="teal")
              v-list-item(v-for="item in fakeItems", :key="item.id")
                v-list-item-content
                  v-list-item-title(v-text="item.text", color="red")

        v-col.pa-0(cols="9", align="center")
          v-container(fluid)
            v-expansion-panels
              v-expansion-panel(v-for="(item, i) in 5", :key="i")
                v-expansion-panel-header Item
                v-expansion-panel-content(color="green lighten-5") Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</template>

<script>
export default {
  data() {
    return {
      fakeItems: [
        { text: "Buyer guide" },
        { text: "Dictionary" },
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
