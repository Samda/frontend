<template lang="pug">
  v-container(class="mt-15")
    v-row
      v-col(cols="4")
        v-container(fluid)
          v-row(justify="center" align="end")
            v-col(cols="12")
              div.text-container.text-center( style="height: 400px; width: 350px;position: fixed;" class="brown--text text--darken-3")
                h1.text-h5 System Management
                blockquote.blockquote ការប្រើប្រាស់ នឹង ការគ្រប់គ្រង់ទិន្ន័យរបស់ System សំរាប់ការគ្រប់គ្រងទូទៅ នឹង គ្រប់គ្រងនឹងបញ្ចូលព័តមានរបស់សំរាប់ house configuration
                blockquote.blockquote ការប្រើប្រាស់ នឹង ការគ្រប់គ្រង់ទិន្ន័យរបស់ System សំរាប់ Developer នឹង ការអនុញ្ញាត្តិក្នុងការប្រើប្រាស់ទិន្ន័យរបស់ house configuration
      v-col(cols="8")
        v-expansion-panels(
          popout
          multiple)
          v-expansion-panel(
            v-for="(item,i) in system_info"
            :key="i")
            v-expansion-panel-header
              strong(class="brown--text text--darken-4") {{item.title}}
            v-expansion-panel-content(class="brown--text text--darken-3") {{item.content}}
</template>

<script>
export default {
  layout: 'admin',
  data(){
    return {
      system_info: [
        {
          title: 'ការគ្រប់គ្រងទិន្ន័យ សំរាប់ផ្ទះ',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        },
        {
          title: 'ការគ្រប់គ្រង់ទិន្ន័យ សំរាប់ម៉ូតផ្ទះ',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        },
        {
          title: 'ការគ្រប់គ្រងទិន្ន័ បុគ្គលិក',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        },
        {
          title: 'ការគ្រប់គ្រងទិន្ន័ ផ្នែកងារលក់',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        },
        {
          title: 'ការបញ្ចូលទិន្ន័ របស់អតិថិជន',
          content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. "
        }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
