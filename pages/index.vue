<template>
  <v-container fluid>
    <v-row dense>
      <v-col
        v-for="(item, i) in items"
        :key="i"
        cols="12"
        md="3"
      >
        <cardVerticle :item="item"/>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col col="6" md="6">
        <v-card>
          <v-spacer></v-spacer>
          <v-card-title
            class="headline"
          >តារាងនៃការលក់ប្រចាំខែ</v-card-title>
          <v-spacer></v-spacer>
          <VueApexCharts type="bar" height="350" :options="chartOptions" :series="series"/>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col
        cols="12"
        md="3"
      >
      <cardIcon color="color" />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <cardIcon />
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <cardIcon />
      </v-col>
      <v-col
        cols="3"
        md="3"
      >
        <cardIcon />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import cardIcon from '@/components/cardIcon'
import cardVerticle from '@/components/cardVerticle'

export default {
  components: {
    cardIcon,
    cardVerticle,
    VueApexCharts: () => import('vue-apexcharts')
  },
  data: () => ({
    color: '#1F7087',
    items: [
      {
        icon: 'mdi-home-circle-outline',
        color: '#633336',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ផ្ទះអតិថិជនរៀប',
        total: '120',
        unit: 'ខ្នង'
      },
      {
        icon: 'mdi-home-group',
        color: '#1F7087',
        src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
        title: 'ម៉ូតសំរាប់ផ្ទះគំរូ',
        total: '១០០',
        unit: 'ម៉ូត'
      },
      {
        icon: 'mdi-account-group',
        color: '#2d5089',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ភ្នាក់ងារលក់',
        total: '៧៧៧',
        unit: 'នាក់'
      },
      {
        icon: 'mdi-account-tie',
        color: '#42c7b2',
        src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
        title: 'ភ្នាក់ងារទីផ្សារ',
        total: '២០០',
        unit: 'នាក់'
      }
    ],
    series: [{ // vue VueApexCharts
      name: 'Inflation',
      data: [40.5, 36.1, 30.0, 20.1, 20.0, 40.6, 23.2, 42.3, 61.4, 60.8, 70.5, 90.2]
    }],
    chartOptions: {
      chart: {
        height: 350,
        type: 'bar',
      },
      plotOptions: {
        bar: {
          dataLabels: {
            position: 'top', // top, center, bottom
          },
        }
      },
      dataLabels: {
        enabled: true,
        formatter: function (val) {
          return val + "%";
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },

      xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        position: 'top',
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          fill: {
            type: 'gradient',
            gradient: {
              colorFrom: '#D8E3F0',
              colorTo: '#BED1E6',
              stops: [0, 100],
              opacityFrom: 0.4,
              opacityTo: 0.5,
            }
          }
        },
        tooltip: {
          enabled: true,
        }
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false,
        },
        labels: {
          show: false,
          formatter: function (val) {
            return val + "%";
          }
        }

      },
      title: {
        text: '',
        floating: true,
        offsetY: 330,
        align: 'center',
        style: {
          fontSize: '12px',
          color: '#444'
        }
      }
    },
  }),
  // computed: {
  //   loginUser(){
  //     return this.$store.$auth.$state.loggedIn
  //   }
  // }
}
</script>

<style>
</style>
