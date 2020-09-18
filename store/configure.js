export const state = () => ({
  new_configure: {
    house_model: {
      id: ''
    },
    config_options: {
      id: '',
      opt_attrs: []
    }
  },
  configure_options: [
    { id: 1,
      head_title: 'Garden',
      title: "Materials For Garden",
      attributes: [
        {
          id: 1,
          title: 'Flowers',
          values: [
            {
              id: 1,
              image: 'https://5.imimg.com/data5/KC/UX/MY-45131211/wash-basin-500x500.jpg',
              pre_image: 'https://i.picsum.photos/id/554/600/350.jpg?hmac=DRfbWTCjVTtoTvp_MsSuBCofpnKzNTRIIDZtHokMGXo'
            },
            {
              id: 2,
              image: 'https://secure.img1-fg.wfcdn.com/im/33521391/resize-h600-w600%5Ecompr-r85/5786/57869117/Bathroom+Wall+Tile.jpg',
              pre_image: 'https://i.picsum.photos/id/642/600/350.jpg?hmac=e0ycJ5tS4UU8h1FEPJbbGSgc4YnlgsIQrwUDFJt39Jk'
            },
            {
              id: 3,
              image: 'https://cdn.shopify.com/s/files/1/1140/6776/products/Anchorage_Cream_Tiles_on_Bathroom_Wall_grande.jpg?v=1548782131',
              pre_image: 'https://i.picsum.photos/id/330/600/350.jpg?hmac=_gmZDbngfHbt9NDQZSdffksMjYQzKf28JwhnPzGpimE'
            }
          ]
        },
        {
          id: 2,
          title: 'Grass',
          values: [
            {
              id: 1,
              image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        },
        {
          id: 3,
          title: 'Flower pot',
          values: [
            {
              id: 1,
              image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        },
        {
          id: 3,
          title: 'Garden tiles',
          values: [
            {
              id: 1,
              image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        }
      ]
    },
    {
      id: 2,
      head_title: 'Roof',
      title: "Materials For Roof",
      attributes: [
        {
          id: 1,
          title: 'Outdoor Wall Tiles',
          values: [
            {
              id: 1,
              image: 'https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        },
        {
          id: 2,
          title: 'Roof Tiles',
          values: [
            {
              id: 1,
              image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        }
      ]
    },
    {
      id: 3,
      head_title: 'Wall',
      title: "Materials For Wall",
      attributes: [
        {
          id: 1,
          title: 'Outdoor Wall Tiles',
          values: [
            {
              id: 1,
              image: 'https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        },
        {
          id: 2,
          title: 'Roof Tiles',
          values: [
            {
              id: 1,
              image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      head_title: 'Exterior',
      title: "Exterior Building Materials",
      attributes: [
        {
          id: 1,
          title: 'Outdoor Wall Tiles',
          values: [
            {
              id: 1,
              image: 'https://5.imimg.com/data5/IH/XU/MY-1689641/ceramic-wall-tiles-250x250.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://media.casa39.com/media/catalog/product/cache/3ef59482406050ce57d87f18d0364b53/j/8/j86619.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://lh3.googleusercontent.com/d/1eN0_zEDM_tG5ESDDBj241eoHU5sXiJEY',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        },
        {
          id: 2,
          title: 'Roof Tiles',
          values: [
            {
              id: 1,
              image: "https://miro.medium.com/max/320/0*g-BhuwNygRdwy2wt.jpg",
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://www.textures.com/system/categories/2130/frontend-large.jpg',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://i.pinimg.com/originals/74/2a/0d/742a0d0853d0da2bb6b579834c618610.jpg',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        }
      ]
    },
    {
      id: 5,
      head_title: 'Interior',
      title: 'Interior Living Room Materials',
      attributes: [
        {
          id: 1,
          title: 'Sofa',
          values: [
            {
              id: 1,
              image: 'https://www.pngkey.com/png/full/250-2506199_home-furniture-png.png',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://s3.eu-west-1.amazonaws.com/openreply-poltronafrau/prod/poltronafrau/catalog/category/D_divani_1_1.png',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/sofa1.png',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        },
        {
          id: 1,
          title: "Chairs",
          values: [
            {
              id: 1,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char1.png',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char2.png',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/char4.png',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        }
      ]
    },
    {
      id: 6,
      head_title: 'Bath Room',
      title: 'Bath Room Materials',
      attributes: [
        {
          id: 1,
          title: 'Wall Tiles',
          values: [
            {
              id: 1,
              image: 'https://5.imimg.com/data5/KC/UX/MY-45131211/wash-basin-500x500.jpg',
              pre_image: 'https://i.picsum.photos/id/554/600/350.jpg?hmac=DRfbWTCjVTtoTvp_MsSuBCofpnKzNTRIIDZtHokMGXo'
            },
            {
              id: 2,
              image: 'https://secure.img1-fg.wfcdn.com/im/33521391/resize-h600-w600%5Ecompr-r85/5786/57869117/Bathroom+Wall+Tile.jpg',
              pre_image: 'https://i.picsum.photos/id/642/600/350.jpg?hmac=e0ycJ5tS4UU8h1FEPJbbGSgc4YnlgsIQrwUDFJt39Jk'
            },
            {
              id: 3,
              image: 'https://cdn.shopify.com/s/files/1/1140/6776/products/Anchorage_Cream_Tiles_on_Bathroom_Wall_grande.jpg?v=1548782131',
              pre_image: 'https://i.picsum.photos/id/330/600/350.jpg?hmac=_gmZDbngfHbt9NDQZSdffksMjYQzKf28JwhnPzGpimE'
            }
          ]
        },
        {
          id: 2,
          title: "Light",
          values: [
            {
              id: 1,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/light%202.png',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 2,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/light%20a.png',
              pre_image: 'https://picsum.photos/600/350'
            },
            {
              id: 3,
              image: 'https://raw.githubusercontent.com/Samda/khland-assets/master/light%20c.png',
              pre_image: 'https://picsum.photos/600/350'
            }
          ]
        }
      ]
    }
  ]
})

export const getters = {
  getConfigureOptions(state){
    return state.configure_options
  }
}