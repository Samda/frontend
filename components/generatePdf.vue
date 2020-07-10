<template>
  <client-only>
    <div>
      <vue-html2pdf
        :show-layout="false"
        :enable-download="true"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="hee hee"
        :pdf-quality="2"
        pdf-format="a4"
        pdf-orientation="landscape"
        pdf-content-width="800px"

        @progress="onProgress($event)"
        @hasStartedGeneration="hasStartedGeneration()"
        @hasGenerated="hasGenerated($event)"
        ref="html2Pdf"
      >
        <section slot="pdf-content">
            <h1>Hello world</h1>
        </section>
      </vue-html2pdf>
    </div>
  </client-only>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
