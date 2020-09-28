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
            template(v-for="(configuration, i) in configured_options")
              v-row.row-data(no-gutters)
                v-col.pl-3(cols="12")
                  .caption
                    strong {{configuration.title}}
              template(v-for="(config, index) in configuration.items")
                configuredRow(:key="index" :image="config.image" :title="config.title" :price="config.price" :name="config.name" )
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
          title: 'សំភារៈសំរាប់សួន',
          items: [
            {
              title: "ពូជផ្ការ",
              price: 90,
              name: '1120202010',
              image: 'https://homebnc.com/homeimg/2017/03/front-yard-landscaping-garden-ideas-featured-homebnc.jpg'
            },
            {
              title: "ថូរផ្ការ",
              price: 50,
              name: '20202010',
              image: "https://5.imimg.com/data5/SY/ED/MY-23421727/outdoor-garden-pots-500x500.jpg"
            },
            {
              title: "ពូជស្មៅ",
              price: 50,
              name: '20202010',
              image: "https://cdn.shopify.com/s/files/1/1191/5138/products/il_570xN.769073785_cvj9_grande.jpg?v=1456849847"
            },
            {
              title: "ការ៉ូសំរាប់សួន",
              price: 50,
              name: '20202010',
              image: "https://5.imimg.com/data5/UI/RU/MY-2724088/garden-tile-500x500.jpg"
            }
          ]
        },
        {
          title: 'សំភារៈក្នុងខាងក្រៅផ្ទះ',
          items: [
            {
              title: "ក្បឿងដំបូល",
              price: 90,
              name: '1120202010',
              image: 'https://www.cupapizarras.com/wp-content/uploads/2018/11/CUPA-natural-slate.png'
            },
            {
              title: "ការ៉ូជញ្ជាំង",
              price: 50,
              name: '20202010',
              image: 'https://mobileimages.lowes.com/product/converted/097518/097518333775.jpg'
            }
          ]
        },
        {
          title: 'សំភារៈក្នុងបន្ទប់ទទួលភ្ញៀវ',
          items: [
            {
              title: "សាឡុង",
              price: 90,
              name: '1120202010',
              image: 'https://www.pngkey.com/png/full/250-2506199_home-furniture-png.png'
            },
            {
              title: "ម៉ូដកៅអី",
              price: 50,
              name: '20202010',
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char1.png'
            },
            {
              title: "ថូរផ្ការ",
              price: 50,
              name: '20202010',
              image: 'https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg'
            }
          ]
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
          src: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117716105_1802415089924722_3006423376808006100_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=xSJ8KQ3NDbwAX8467My&_nc_ht=scontent.fpnh1-2.fna&oh=37f05b376c75c2bbac246734d3c042af&oe=5F9578A0',
        },
        {
          src: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117716105_1802415089924722_3006423376808006100_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=xSJ8KQ3NDbwAX8467My&_nc_ht=scontent.fpnh1-2.fna&oh=37f05b376c75c2bbac246734d3c042af&oe=5F9578A0',
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
