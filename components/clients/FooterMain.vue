<template lang="pug">
v-footer.main-footer(, dark, padless, color="#6b4912")
  v-container.ma-0.pa-0(fluid)
    v-row.pb-10(align="top", no-gutters, style="background-color: #78a152")
      v-col(cols="3")
        v-card.brown--text.text--darken-2(style="background-color: #78a152", flat)
          v-card-title.justify-center(color="#6b4912") KH LAND
      v-col(cols="9")
        v-row(no-gutters)
          v-col(v-for="title in itemTitle", :key="title")
            v-card-title.brown--text.text--darken-2(style="background-color: #78a152") {{ title.text }}
            v-list.pl-4(
              style="background-color: #78a152",
              v-for="(content, index) in itemContent",
              :key="index"
            )
              v-list-item-title.brown--text.text--darken-2 {{ content.text }}
    v-row(style="background-color: #628740")
      v-col(cols="12")
        .caption Copyright © 2020 by KHLAND CO,.LTD. All Right Reserved.
</template>

<script>
export default {
  data() {
    return {
      brandName: [{ text: "KH LAND" }],
      itemTitle: [
        { text: "ABOUT" },
        { text: "INTERACT" },
        { text: "COMMERCIAL" },
        { text: "PURCHASE" },
      ],
      itemContent: [
        { text: "fake content" },
        { text: "make up content" },
        { text: "test content" },
        { text: "content try out" },
      ],
    };
  },
};
</script>

<style type="scss" scoped>
  .main-footer {
    color: #6b4912;
  }
</style>
