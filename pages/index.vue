<template lang="pug">
  v-container(fluid)
    v-row(dense)
      v-col(cols="12" md="6" class="pa-0")
        v-row(dense)
          v-col( v-for="(item, i) in items" :key="i" cols="12" md="6")
            cardVerticle(:item="item")
      v-col( cols="12" md="6" class="pl-4")
        v-card
          v-spacer
          v-card-title.headline តារាងនៃការលក់ប្រចាំខ
          v-spacer
          annualSale

    v-row( dense)
      v-col(cols="12" md="3")
        cardIcon( color="color" )
      v-col(cols="12" md="3")
        cardIcon
      v-col( cols="12" md="3")
        cardIcon
      v-col( cols="3" md="3")
        cardIcon
</template>

<script>
import cardIcon from '@/components/cardIcon'
import cardVerticle from '@/components/cardVerticle'
import annualSale from '@/components/annualSale'
export default {
  components: {
    cardIcon,
    cardVerticle,
    annualSale
  },
  data: () => ({
    color: '#1F7087',
    items: [
      {
        icon: 'mdi-home-circle-outline',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ផ្ទះអតិថិជនរៀប',
        total: '120',
        unit: 'ខ្នង',
        link: 'configured_houses'
      },
      {
        icon: 'mdi-home-group',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'ម៉ូតសំរាប់ផ្ទះគំរូ',
        total: '១០០',
        unit: 'ម៉ូត',
        link: 'house_models'
      },
      {
        icon: 'mdi-account-group',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ភ្នាក់ងារលក់',
        total: '៧៧៧',
        unit: 'នាក់',
        link: 'agencies'
      },
      {
        icon: 'mdi-account-tie',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ភ្នាក់ងារទីផ្សារ',
        total: '២០០',
        unit: 'នាក់',
        link: '/team_sales'
      },
      {
        icon: 'mdi-account-tie',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'Management',
        total: '10',
        unit: 'នាក់',
        link: '/users'
      }
    ]
  })
}
</script>

<style>
</style>
