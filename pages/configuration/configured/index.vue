<template lang="pug">
  v-main
    v-container(fluid style="position: fixed; top: 0px; display: block; z-index: 9999; background: #fff;")
      v-row(align="center" justify="center")
        v-col
          div.mb-5.text-center
            nuxt-link(to="/configuration/configured")
              v-avatar(
                size="60"
                tile)
                v-img(src="https://www.khland.com.kh/assets/images/kh_lg.png")
          v-divider(color="#6b4912")
    v-container(fluid style="padding-top: 120px;")
      v-row
        v-col(cols="12" sm="12" md="6" lg="6" xl="6")
          div.sidebar-carousel
            .text-centent
              h1.config-header.text-h6.mt-2(style="color: #6b4912;" align="center" justify="center")
                strong វីឡាតូលកូនកាត់
              v-btn.pa-2( to="/configuration" small tile text color="#5b3804")
                v-icon(left) mdi-chevron-left
                | go back
            v-carousel(
              width="500"
              height="350"
              cycle
              hide-delimiter-background
              show-arrows-on-hover)
              v-carousel-item(
                v-for="(item,i) in items"
                :key="i"
                :src="item.src")
            .text-right
              v-btn.mt-2(small outlined tile color="primary" dark) រក្សាទុក
              v-btn.ml-2.mt-2(to="/configuration/download" small outlined tile color="primary" dark) ព័ត៌មានលម្អិត
        v-col.mt-n3(cols="12" sm="12" md="6" lg="6" xl="6")
          v-row.row-details(no-gutters)
            v-col.pl-3(cols="6")
              .text-subtitle-2(justify="center")
                strong ពិពណ៌នា
            v-col(cols="2")
              .subtitle-2
                strong លេខកូដ
            v-col(cols="2")
            v-col(cols="2")
              .pr-5.text-right.subtitle-2
                strong តំលៃ
          v-row.row-details(no-gutters)
            v-col.pl-3(cols="6")
              .caption
                strong វីឡាតូលកូនកាត់
            v-col(cols="2")
              span.caption 20200914
            v-col(cols="2")
              v-spacer
              v-btn( x-small tile icon color="primary")
                v-icon mdi-pencil
            v-col(cols="2")
              .pr-5.text-right.caption 90000$
          div.row-details
            v-row.row-data(no-gutters)
              v-col.pl-3(cols="12")
                .caption
                  strong សំភារៈសំរាប់សួន
            template(v-for="(config, index) in configured_options")
              configuredRow(:key="index" :title="config.title" :price="config.price" :name="config.name" )
          v-row.row-details(no-gutters)
            v-col.pl-3(cols="6")
              .caption
                strong សម្ភារៈសំរាប់ដំបូល
              v-row
                v-col
                  div.caption ផ្ការ
            v-col(cols="2")
              span.caption 20200914
            v-col(cols="2")
              v-spacer
              v-btn( x-small tile icon color="primary")
                v-icon mdi-pencil
            v-col(cols="2")
              .pr-5.text-right.caption 90$
          v-row.row-data
            v-col.pl-3(cols="12")
              .pr-5.text-right
                .subtitle-2 Total: 99000$
    v-footer(padless fixed)
      v-col(class="text-center" cols="12")
        div.caption(class="brown--text text--darken-4") KHLAND CO.,LTD.
</template>

<script>
import configuredRow from '@/components/configuration/configuredRow'
export default {
  layout: 'configuration',
  components: {
    configuredRow
  },
  data () {
    return {
      configured_options: [
        {
          title: "ផ្ការ",
          price: 90,
          name: '1120202010'
        },
        {
          title: "ថូរផ្ការ",
          price: 50,
          name: '20202010'
        }
      ],
      item_details: [
        { active: true, title: 'Jason Oner', avatar: 'https://picsum.photos/200/200' },
        { active: true, title: 'Ranee Carlson', avatar: 'https://picsum.photos/200/200' },
        { title: 'Cindy Baker', avatar: 'https://picsum.photos/200/200' },
        { title: 'Ali Connors', avatar: 'https://picsum.photos/200/200' },
      ],
      items: [
        {
          src: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117783770_1802414876591410_3603053929977972203_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=Ag5SXRCccTMAX_wqOWV&_nc_ht=scontent.fpnh1-2.fna&oh=c2c3e58e7726c392ee82d52fbff820cf&oe=5F85FF5F',
        },
        {
          src: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117802743_1802415066591391_2684241018431028380_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=ykikfurTGrsAX_iV5FG&_nc_ht=scontent.fpnh1-1.fna&oh=09c1db641f1e2fe67816146d6181ea23&oe=5F84CBA0',
        },
        {
          src: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/118079817_1802415026591395_8305645295699313094_o.jpg?_nc_cat=107&_nc_sid=730e14&_nc_ohc=J5AuWzL8DGoAX8GW_1o&_nc_ht=scontent.fpnh1-1.fna&oh=efc145f8f5004aa8b9230cece3717ee0&oe=5F860604',
        },
        {
          src: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/118088335_1802414846591413_3822124463928800760_o.jpg?_nc_cat=102&_nc_sid=730e14&_nc_ohc=FjJyRfVL7ZkAX-PYshO&_nc_ht=scontent.fpnh1-1.fna&oh=802913714830902fb4d47b691f73eab4&oe=5F863324',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

$color-primary: #6b4912;

#configured_table table thead tr th {
  color: $color-primary;
}

#configured_table table tbody tr:hover {
  background: none;
}

.details-header {
  color: $color-primary;
}

.text-details {
  color: $color-primary;
}

.row-data {
  color: $color-primary;
  padding: 8px 0px;
}

.row-details {
  color: $color-primary;
  border-bottom: 1px solid #ddd;
  padding: 8px 0px;
}

@media only screen and (min-width: 979px) {
  .sidebar-carousel {
    width: 600px;
    position: fixed;
  }
}

@media only screen and (max-width: 979px) {
  .sidebar-carousel {
    width: auto;
    height: auto;
    position: relative;
  }
}
</style>
