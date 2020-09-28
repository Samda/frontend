<template lang="pug">
div
  v-container
    v-row
      v-col(cols="6")
        h1.black--text សមាជិកតាមផ្នែក
      v-col.text-right(cols="6")
        v-btn(small color="primary" to="users/new") Add new
    v-row
      v-col.pb-0
        template
          v-tabs(v-model="tab")
            v-tab(v-for="item in headers" :key="item.tab") {{item.title}}
    v-divider.mb-10
    v-tabs-items( v-model="tab")
      v-tab-item(
        v-for="item in headers"
        :key="item.tab")
        v-row
          v-col(
            cols="6",
            lg="3",
            md="3",
            sm="3",
            v-for="(person, i) in people.team",
            :key="person.id")
            v-card.pt-4.text-center(height="300px")
              v-responsive
                v-avatar.lighten-2(size="100")
                  v-img(:src="person.avatar")
              v-card-text.text-align
                h2.subheading.green--text {{ person.name }}
                h4.brown--text.text-darken-4 {{ person.role }}
              v-card-actions.mt-15
                v-btn.green--text(
                  to="users/2"
                  x-small,
                  outlined,
                  text,
                  color="brown") Preview
                v-btn.green--text(
                  to="users/edit/2"
                  x-small,
                  outlined,
                  text,
                  color="brown") Edit
</template>

<script>
export default {
  layout: "admin",
  computed: {
    people(){
      let index = this.tab || 0
      let role = this.headers[index].tab || admin
      return this.people_group.filter(people => people.role == role)[0]
    }
  },
  data: () => ({
    headers: [
      {
        title: "All Admin",
        tab: "admin"
      },
      {
        title: "Sale Team",
        tab: "sale"
      },
      {
        title: "All Agencies",
        tab: "agency"
      }

    ],
    tab: null,
    people_group: [
      {
        id: 1,
        role: 'admin',
        team: [
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "admin",
            avatar: "/person/img5.png",
          }
        ]
      },
      {
        id: 2,
        role: 'sale',
        team: [
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "sale",
            avatar: "/person/img5.png",
          }
        ]
      },
      {
        id: 3,
        role: 'agency',
        team: [
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          },
          {
            name: "Walter White",
            role: "agency",
            avatar: "/person/img5.png",
          }
        ]
      }
    ]
  }),
};
</script>
