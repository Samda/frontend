<template lang="pug">
div
  v-container(fluid)
    v-row(no-gutters)
      v-col(cols="12" md="8" sm="12")
        .sidebar-carousel.mt-5
          .carousel
            .text-content
              .text-center.mt-15.text-uppercase
                span.text-h5.brown--text
                  strong វីឡាតូលកូនកាត់
              v-btn.pa-2( to="houses" small tile text color="#5b3804")
                v-icon(left) mdi-chevron-left
                | go back
            v-carousel(
              v-model="model"
              height="400"
              :hide-delimiter-background="true"
              delimiter-icon="mdi-minus"
              show-arrows-on-hover
              value="model")
              v-carousel-item(
                color="black"
                v-for="(slide, i) in carousel_images"
                :key="i")
                v-row(
                  class="fill-height ma-0"
                  align="center"
                  justify="center")
                  v-img(
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                    :src="slide.src"
                    lazy-src="https://www.khland.com.kh/assets/images/kh_lg.png"
                    contain)
                    template(v-slot:placeholder)
                      v-row(
                        class="fill-height ma-0"
                        align="center"
                        justify="center")
                        v-progress-circular(indeterminate color="brown darken-4")
      v-col(cols="12" md="4" sm="12")
        div.options-container.ml-n15(style="padding-top: 90px; top: 100px;")
          div.option-section.config-section
            template(v-for="(config, index) in configureOptions")
              div.values-container(:id="replaceSpaceWith(config.head_title, '_')")
                div.sticky-option.config-header
                  h6.text-h6 {{ config.title }}
                template(v-for="(con_attr, index) in config.attributes")
                  v-item-group(mandatory)
                    v-container(class="pa-0")
                      v-row
                        v-col.text-overline.config-key(cols="12")
                          .caption {{ con_attr.title }}
                      v-row
                        template(v-for="(value, index) in con_attr.values")
                          v-col.config-body(cols="4")
                            v-item(v-slot:default="{ active, toggle }")
                              v-img(
                                :key="index"
                                :src="value.image"
                                lazy-src="https://www.khland.com.kh/assets/images/kh_lg.png"
                                height="80"
                                class="text-right pa-2 item-image")
                                template(v-slot:placeholder)
                                  v-row(
                                    class="fill-height ma-0"
                                    align="center"
                                    justify="center")
                                    v-progress-circular( indeterminate color="brown darken-4")
                //--
                  div.config-values
                    template(v-for="value in con_attr.values")
                      v-item-group(
                        v-model="selected"
                        mandatory)
                          .thumbnail-image
                            v-item(v-slot:default="{ active, toggle }")
            div.options-footer(style="height: 200px;")
  v-footer(fixed)
    span.pt-8.text-caption House Modify Web Application
    v-row
      v-col.pa-0(cols="12")
        div.text-center
          v-avatar(
            size="50"
            tile)
            v-img(src="https://www.khland.com.kh/assets/images/kh_lg.png")
    span.pt-8.text-caption &copy; {{ new Date().getFullYear() }},  KHLAND CO.,TLD.
</template>

<script>
import stickybits from "stickybits"
export default {
  layout: 'admin',
  data () {
    return {
      prev_image: '',
      configured_selected: {
        head_title: [{
          attributes: []
        }]
      },
      model: 0,
      slides: [
        {
          src: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117783770_1802414876591410_3603053929977972203_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=Dqy3C1A3DAoAX8WQqUg&_nc_ht=scontent.fpnh1-2.fna&oh=c793360342c558be9e8f398a07a72a4d&oe=5F95D15F',
        },
        {
          src: 'https://scontent.fpnh1-1.fna.fbcdn.net/v/t1.0-9/117610617_1802414863258078_30441688992698031_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=BO8zTUJZxNUAX-OfdMy&_nc_ht=scontent.fpnh1-1.fna&oh=5f29fb77de2fc28ff36625daa8ba2cb0&oe=5F977F62',
        },
        {
          src: 'https://scontent.fpnh1-2.fna.fbcdn.net/v/t1.0-9/117716105_1802415089924722_3006423376808006100_o.jpg?_nc_cat=111&_nc_sid=730e14&_nc_ohc=xSJ8KQ3NDbwAX8467My&_nc_ht=scontent.fpnh1-2.fna&oh=37f05b376c75c2bbac246734d3c042af&oe=5F9578A0',
        }
      ]
    }
  },

  computed: {
    getConfigTitles(){
      return this.configureOptions.map(config => {
        return config.head_title
      })
    },
    configureOptions(){
      return this.$store.getters['configure/getConfigureOptions']
    },

    carousel_images(){
      return this.slides
    }
  },

  methods: {
    replaceSpaceWith(text, replace_text) {
      return text.toString().toLowerCase().replace(' ', replace_text)
    },

    getImage(image){
      let index = this.slides.findIndex( slide => slide.active === true )
      if(index > 0){
        this.slides[index].src = image
        this.model = index
      }else{
        this.slides.push({ src: image, active: true })
      }
    },

    setConfigOptions(val1,val2,val3){
      console.log(`${val1}, ${val2}, ${val3}`)
    }
  },
  mounted(){
    const makeNavLinksSmooth = ( ) => {
      const navLinks = document.querySelectorAll( '.btn-timeline' );

      for ( let n in navLinks ) {
        if ( navLinks.hasOwnProperty( n ) ) {
          navLinks[ n ].addEventListener( 'click', e => {
            e.preventDefault( );
            document.querySelector( navLinks[ n ].hash )
              .scrollIntoView( {
                behavior: "smooth"
              } );
          } );
        }
      }
    }

    const spyScrolling = ( ) => {
      const sections = document.querySelectorAll( '.config-header' );

      window.onscroll = ( ) => {

        const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(scrollPos)
        for ( let s in sections )
          if ( sections.hasOwnProperty( s ) && (sections[ s ].offsetTop + 170) <= (scrollPos) ) {
            const id = sections[ s ].id;
            document.querySelector( '.v-btn--active').classList.remove( 'v-btn--active' );
            // document.querySelector("a[href='#"+id+"']").classList.add( 'v-btn--active' );
          }
      }
    }
    makeNavLinksSmooth( );
    // spyScrolling( );
    stickybits('.sticky-option', {
      useStickyClasses: true,
      stickyBitStickyOffset: 70
    });
  }
}
</script>

<style lang="scss" scoped>

$color-primary: #6b4912;

.v-slide-group__wrapper {
  z-index: 999 !important;
}

span.v-btn__content span, i {
  margin-right: 0px !important;
  color: #5b3804 !important;
}

.item-image:hover {
  cursor: pointer;
}

div.config-section {
  margin-bottom: 15px;

  .config-header {
    z-index: 99;
    background: #fff;
    display: block;
    color: #5b3804;
  }

  div.config-body {

  }
}

div.image-active {
  background: red;
}

div.config-values {
  display: flex;
  align-items: center;
  justify-content: center;

  div.thumbnail-image {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30%;
    height: 70px;
    cursor: pointer;
    text-align: center;
    margin-right: 3px;
    margin-bottom: 3px;

    img {
      display: block;
      margin: auto;
      width: 100%;
    }
  }
}

@media only screen and (min-width: 979px) {
  .sidebar-carousel {
    width: 700px;
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
