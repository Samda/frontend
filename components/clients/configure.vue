<template lang="pug">
div
  v-container.pb-1(fluid style="position: fixed; z-index: 9999; background: #fff;")
    v-row
      v-col(cols="12")
        v-sheet.mt-n5(
          class="mx-auto"
          max-width="100%")
          v-bottom-navigation.elevation-0( horizontal)
            v-slide-group(show-arrows center-active mandatory)
              template(v-for="(title, index) in getConfigTitles")
                v-slide-item(:key="index")
                  v-btn.btn-timeline.py-0(
                    x-small
                    :href="'#'+replaceSpaceWith(title, '_')"
                    :ripple="false"
                    tile)
                    | {{title}}
                    v-icon.pr-0(left) mdi-numeric-{{index + 1}}
                v-divider(
                  class="my-4"
                  inset
                  vertical)
              v-slide-item
                v-btn.btn-timeline(router to="/configuration/configured")
                  | Details
                  v-icon(left) mdi-check
  v-container(fluid)
    v-row(no-gutters)
      v-col(cols="12" md="8" sm="12")
        .sidebar-carousel.mt-5
          .carousel
            .text-content(style="display: inline;")
              .text-center.mt-15.text-uppercase
                span.mr-2.grey--text
                span.text-h5.brown--text
                  strong វីឡាភ្លោះ
              v-btn.pa-0( to="/" small tile text color="#5b3804")
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
                v-img(:src="slide.src" contain)

      v-col(cols="12" md="4" sm="12")
        div.options-container.ml-n15(style="padding-top: 90px; top: 100px;")
          div.option-section.config-section
            template(v-for="(config, index) in configureOptions")
              div.values-container(:id="replaceSpaceWith(config.head_title, '_')")
                div.sticky-option.config-header
                  h6.text-h6 {{ config.title }}
                template(v-for="(con_attr, index) in config.attributes")
                  v-item-group(mandatory v-model="selected.attr[index]")
                    v-container(class="pa-0")
                      v-row
                        v-col.text-overline.config-key(cols="12")
                          .caption {{ con_attr.title }} {{ model }}
                      v-row
                        template(v-for="(value, index) in con_attr.values")
                          v-col.config-body(
                            :key="value.id"
                            cols="4")
                            v-item(v-slot:default="{ active, toggle }")
                              v-img(
                                :key="index"
                                :src="value.image"
                                height="80"
                                class="text-right pa-2 item-image"
                                :class="active ? 'item-active' : ''"
                                @click="getImage(value.pre_image); toggle()")
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
  data () {
    return {
      prev_image: '',
      selected: {
        attr: []
      },
      model: 0,
      slides: [
        {
          src: 'https://raw.githubusercontent.com/Samda/khland-assets/master/living%20room%201.jpg',
        },
        {
          src: 'https://raw.githubusercontent.com/Samda/khland-assets/master/slide1.JPG',
        },
        {
          src: 'https://raw.githubusercontent.com/Samda/khland-assets/master/slide2.jpg',
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

a.btn-timeline.v-btn--active {
  border-bottom: 2px solid #5b3804;
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
  border: 2px solid red;
}

div.config-values {
  display: block;
  div.thumbnail-image {
    border: 1px solid #5b3804;
    display: inline-grid;
    width: 30%;
    height: 70px;
    text-align: center;
    margin-right: 3px;
    margin-bottom: 3px;

    img {
      width: 100%;
      height: 100%;
      margin-left: auto;
      margin-right: auto;
      display: block;
      object-fit: contain;
    }
  }
}

div.thumbnail-image {
  cursor: pointer;
  width: 90px;
  height: 90px;
  text-align: center;
  img {
    height: 100%;
    width: auto;
  }
}

.item-active {
  border: 2px dashed $color-primary;
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
