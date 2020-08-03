<template lang="pug">
div
  v-container(fluid style="position: fixed; top: 0;padding: 0px; ")
    v-row
      v-col(cols="12")
        v-sheet.mt-n5(
          class="mx-auto"
          max-width="100%")
          v-bottom-navigation.elevation-0( horizontal)
            v-slide-group(show-arrows center-active mandatory)
              template(v-for="(b, index) in houseAreabuttons")
                v-slide-item(
                  :key="index"
                  v-slot:default="{ active, toggle }")
                  v-btn.btn-timeline.py-0(
                    x-small
                    :ripple="false"
                    tile
                    :value="b.title"
                    :input-value="active"
                    @click="toggle")
                    span {{b.title}}
                    v-icon mdi-numeric-{{index + 1}}
                v-divider(
                  class="my-4"
                  inset
                  vertical)
              v-slide-item
                v-btn.btn-timeline(
                  value="finish")
                  span Finish
                  v-icon mdi-check
  div
    v-row(no-gutters)
      v-col(cols="12" md="8" sm="12")
        .carousel(style=" padding-left: 5px;position: fixed; top: 50px; width: 750px; height: 70vh;")
          .text-content(style="display: inline;")
            .text-center.mt-5.text-uppercase
              span.mr-2.grey--text Model:
              span.text-h5.brown--text
                strong Twin Villa
            v-btn.pa-0( to="/" small tile text color="#5b3804")
                v-icon(left) mdi-chevron-left
                | go back
          v-carousel(
            height="400"
            :hide-delimiter-background="true"
            delimiter-icon="mdi-minus"
            show-arrows-on-hover)
            v-carousel-item(
              color="black"
              v-for="(slide, i) in slides"
              :key="i")
              v-img(:src="slide.src" contain)
      v-col(cols="12" md="4" sm="12")
        div.options-container.ml-n15(style="top: 70px;position: absolute; overflow: auto; height: 500px;")
          div.option-section.config-section
            template(v-for="(config, index) in config_options")
              strong.sticky-option.config-header {{config.title}}
              div.config-body(v-for="con_attr in config.attributes")
                div.text-overline.config-key {{con_attr.title}}
                div.config-values
                  div.thumbnail-image(v-for="value in con_attr.values")
                    img(:src="value.image")

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
      model: '',
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
      ],
      config_options: [
        {
          title: "Exterior Building Materials",
          attributes: [
            {
              title: 'Outdoor Wall Tiles',
              values: [
                {
                  id: 1,
                  image: 'https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg'
                },
                {
                  id: 2,
                  image: 'https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg'
                },
                {
                  id: 3,
                  image: 'https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY'
                }
              ]
            },
            {
              title: 'Roof Tiles',
              values: [
                {
                  id: 1,
                  image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg"
                },
                {
                  id: 2,
                  image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg'
                },
                {
                  id: 3,
                  image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg'
                }
              ]
            }
          ]
        },
        {
          title: 'Interior Living Room Materials',
          attributes: [
            {
              title: 'Sofa',
              values: [
                {
                  id: 1,
                  image: 'https://www.pngkey.com/png/full/250-2506199_home-furniture-png.png',
                },
                {
                  id: 2,
                  image: 'https://s3.eu-west-1.amazonaws.com/openreply-poltronafrau/prod/poltronafrau/catalog/category/D_divani_1_1.png'
                },
                {
                  id: 3,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/sofa1.png'
                }
              ]
            },
            {
              title: "Chairs",
              values: [
                {
                  id: 1,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char1.png'
                },
                {
                  id: 2,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char2.png'
                },
                {
                  id: 3,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char4.png'
                }
              ]
            }
          ]
        },
        {
          title: 'Bath Room Materials',
          attributes: [
            {
              title: 'Wall Tiles',
              values: [
                {
                  id: 1,
                  image: 'https://5.imimg.com/data5/KC/UX/MY-45131211/wash-basin-500x500.jpg',
                },
                {
                  id: 2,
                  image: 'https://secure.img1-fg.wfcdn.com/im/33521391/resize-h600-w600%5Ecompr-r85/5786/57869117/Bathroom+Wall+Tile.jpg'
                },
                {
                  id: 3,
                  image: 'https://cdn.shopify.com/s/files/1/1140/6776/products/Anchorage_Cream_Tiles_on_Bathroom_Wall_grande.jpg?v=1548782131'
                }
              ]
            },
            {
              title: "Light",
              values: [
                {
                  id: 1,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/light%202.png'
                },
                {
                  id: 2,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/light%20a.png'
                },
                {
                  id: 3,
                  image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/light%20c.png'
                }
              ]
            }
          ]
        }
      ],
      houseAreabuttons: [
        { title: "Garden Area" },
        { title: "Exterior" },
        { title: "Interior" },
        { title: "Livinng Room" },
        { title: "Bathroom" },
        { title: "Kitchen" },
      ]
    }
  },
  mounted(){
    stickybits('.sticky-option', { useStickyClasses: true, stickyBitStickyOffset: 0 });
  }
}
</script>

<style lang="scss" scoped>
div.v-window__prev{
  button:hover {
    span.v-btn__content {
      color: black !important;
    }
  }
}

div.v-window__next{
  button:hover {
    span.v-btn__content {
      i {
        color: black !important;
      }
    }
  }
}

button.btn-timeline.v-btn--active {
  border-bottom: 2px solid #5b3804;
  span.v-btn__content span, i{
    color: #5b3804 !important;
  }
}

div.config-section {
  margin-bottom: 15px;
  strong.config-header {
    background: #fff;
    display: block;
    padding: 8px 0px;
    color: #5b3804;
  }

  div.config-body {

  }
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
  width: 90px;
  height: 90px;
  text-align: center;
  img {
    height: 100%;
    width: auto;
  }
}
</style>
