<template lang="pug">
  div
    VueApexCharts(
      type="bar" height="350"
      :options="chartOptions"
      :series="series")
</template>

<script>
export default {
  components: {
    VueApexCharts: () => import('vue-apexcharts')
  },
  data () {
    return {
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
