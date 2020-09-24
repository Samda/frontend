<template lang="pug">
div
  v-container
    v-row
      v-col(cols="6")
        h1.black--text KH LAND
      v-col.text-right(cols="6")
        v-btn(text) Exit

    v-row
      v-col.pb-0
        v-template
          v-tabs
            v-tab All Client
            v-tab Current Client
            v-tab Past Client

    v-divider.mb-10
    v-row 
      v-col(
        cols="6",
        lg="3",
        md="4",
        sm="4",
        v-for="person in team",
        :key="person.name"
      )
        v-card.pt-4.text-center(height="300px")
          v-responsive
            v-avatar.lighten-2(size="100")
              v-img(:src="person.avatar")
          v-card-text.text-align
            h2.subheading {{ person.name }}
            h4.grey--text {{ person.role }}
          v-card-actions.justify-center
            v-btn.white--text.px-12.py-5.mt-10(
              depressed,
              ,
              text,
              style="background-color:rgba(112, 79,66, .7)"
            ) Message
</template>

<script>
export default {
  name: "team",
  components: {},
  data: () => ({
    client: ["All Client", "Current Client", "Past Client"],

    team: [
      {
        name: "Reda",
        role: "Graphic designer",
        avatar: "/person/img1.png",
      },
      {
        name: "Roy Long",
        role: "Video editor",
        avatar: "/person/img2.png",
      },
      {
        name: "Carolyn Green",
        role: "Civil Engineer",
        avatar: "/person/img3.png",
      },
      {
        name: "Arthur Newman",
        role: "Web developer",
        avatar: "/person/img4.png",
      },
      {
        name: "Walter White",
        role: "Driver",
        avatar: "/person/img5.png",
      },
      {
        name: "Anna Thompson",
        role: "Database Designer",
        avatar: "/person/img6.png",
      },
    ],
  }),
};
</script>