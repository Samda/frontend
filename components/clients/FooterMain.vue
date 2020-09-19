<template lang="pug">
v-footer(padless, color="#8a6628")
  v-container.ma-0.pa-0(fluid)
    v-row
      v-col(cols="12") 
        v-container
          v-row(align="center", justify="center")
            v-divider.mx-4(style="height:5px")
            v-btn.mx-4(
              v-for="icon in icons",
              :key="icon",
              icon,
              small,
              fab,
              outlined,
              color="secondary"
            )
              v-icon(size="24px") {{ icon }}
            v-divider
    v-row(align="center", justify="center")
      v-img(
        max-height="120",
        max-width="120",
        contain,
        src="https://www.khland.com.kh/assets/images/kh_lg.png"
      )
    v-row(justify="center")
      v-col(cols="12")
        h4.text-center.font-weight-regular.light-green--text.text--darken-2 Copyright &copy; khlang co,.LTD.
    v-row
      v-col(cols="12")
        v-container(style="background-color:#8a6628")
          v-row(justify="center")
            v-btn(
              v-for="title in itemTitle",
              :key="title",
              depressed,
              style="background-color:#8a6628"
            )
              v-btn--flat
                v-btn--text {{ title.text }}
</template>

<script>
export default {
  data() {
    return {
      icons: [
        "mdi-facebook",
        "mdi-instagram",
        "mdi-twitter",
        "mdi-telegram",
        "mdi-whatsapp",
      ],

      itemTitle: [
        { text: "HOME" },
        { text: "ABOUT" },
        { text: "SUPPORT" },
        { text: "CONTACT" },
        { text: "LOGIN" },
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
  color: #a37e3e;
}
v-btn:hover {
  color: chartreuse !important;
}
.greenlight--text {
  color: green darken-1 !important;
}
</style>
