<template lang="pug">
  v-container(fluid)
    v-row(dense)
      v-col(cols="12" md="6" class="pa-0" sm="6")
        v-row(dense)
          v-col( v-for="(item, i) in items" :key="i" cols="12" md="6")
            cardVerticle(:item="item")
      v-col( cols="12" sm="6" md="6" class="pl-4")
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
import cardIcon from '@/components/admin/cardIcon'
import cardVerticle from '@/components/admin/cardVerticle'
import annualSale from '@/components/admin/annualSale'

export default {
  name: "admin",
  layout: "admin",
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
        total: '២៣',
        unit: 'ខ្នង',
        link: 'admin/modified_houses'
      },
      {
        icon: 'mdi-home-group',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'ម៉ូតសំរាប់ផ្ទះគំរូ',
        total: '៤០',
        unit: 'ម៉ូត',
        link: 'admin/house_models'
      },
      {
        icon: 'mdi-account-group',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ភ្នាក់ងារលក់',
        total: '៩៩',
        unit: 'នាក់',
        link: 'admin/users'
      },
      {
        icon: 'mdi-account-tie',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ភ្នាក់ងារទីផ្សារ',
        total: '៨៩',
        unit: 'នាក់',
        link: 'admin/users'
      },
      {
        icon: 'mdi-briefcase-account-outline',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'បុគ្គលិក',
        total: '10',
        unit: 'នាក់',
        link: 'admin/users'
      },
      {
        icon: 'mdi-briefcase-account-outline',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'សំភារៈ, ឧបករណ៍',
        total: '100',
        unit: 'មុខទំនេញ',
        link: 'admin/utilities'
      }
    ]
  })
}
</script>

<style>
</style>
