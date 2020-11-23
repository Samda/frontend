<template lang="pug">
v-container(fluid)
  v-row.px-10
    v-col.mt-0(cols="12", lg="3", md="4", align="center")
      h3.display-1.pb-6 Contact us
      v-text-field.mb-n5(label="Your full name", single-lined, outlined)
      v-text-field.mb-n5(label="Your email address", single-lined, outlined)
      v-textarea(label="Your message", outlined)
      v-btn.py-8(block, bottom, color="#704F42", large) Send your message
  v-col(cols="12")
    div.map-responsive
      iframe(
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1954.4231260776658!2d104.87225401730481!3d11.562877462236177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e278ab97fb%3A0xec3ddbecb14ecbb1!2sKH%20Land%20Co.%2C%20Ltd!5e0!3m2!1sen!2skh!4v1606098961334!5m2!1sen!2skh"
        width="100%"
        height="400"
        frameborder="0"
        style="border:0;"
        allowfullscreen=""
        aria-hidden="false"
        tabindex="0")
</template>

<script>

export default {
  layout: "default"
};
</script>

<style lang="scss" scoped>

.map-responsive{
    overflow:hidden;
    padding-bottom:30.25%;
    position:relative;
    height:0;
}

.map-responsive iframe{
    left:0;
    top:0;
    height:100%;
    width:100%;
    position:absolute;
}

@media only screen
   and (min-width : 1600px) {
     .map-responsive{
         overflow:hidden;
         padding-bottom:20.25%;
         position:relative;
         height:0;
     }

     .map-responsive iframe{
         left:0;
         top:0;
         height:100%;
         width:100%;
         position:absolute;
     }
}

@media only screen
   and (min-width : 1200px) {
     .map-responsive{
         overflow:hidden;
         padding-bottom:30.25%;
         position:relative;
         height:0;
     }

     .map-responsive iframe{
         left:0;
         top:0;
         height:100%;
         width:100%;
         position:absolute;
     }
}

@media only screen
   and (min-width : 768px) {
     .map-responsive{
         overflow:hidden;
         padding-bottom:40.25%;
         position:relative;
         height:0;
     }

     .map-responsive iframe{
         left:0;
         top:0;
         height:100%;
         width:100%;
         position:absolute;
     }
}

@media only screen
   and (min-width : 320px) {
     .map-responsive{
         overflow:hidden;
         padding-bottom:50.25%;
         position:relative;
         height:0;
     }

     .map-responsive iframe{
         left:0;
         top:0;
         height:100%;
         width:100%;
         position:absolute;
     }
}
</style>
