<template lang="pug">
v-footer(, dark, padless)
  v-container.ma-0.pa-0(fluid)
    v-row.pb-10(align="top", no-gutters, style="background-color: #3B3B3B")
      v-col(cols="3")
        v-card.white--text(style="background-color: #3B3B3B", flat)
          v-card-title.justify-center KH LAND
      v-col(cols="9")
        v-row(no-gutters)
          v-col(v-for="title in itemTitle", :key="title")
            v-card-title(style="background-color: #3B3B3B") {{ title.text }}
            v-list.pl-4(
              style="background-color: #3B3B3B",
              v-for="(content, index) in itemContent",
              :key="index"
            )
              v-list-item-title {{ content.text }}
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