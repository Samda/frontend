//STATES
export const state = () => ({
  houses: [],
})

//MUTATIONS
export const mutations = {
  setHouses(state, data){
    state.houses = data
  }
}

//ACTIONS
export const actions = {

  async addHouse({commit}, data) {
    try {
      let res = await this.$axios.post('/houses', data)
    }catch{
      console.log("can't post to houses, bad connections.")
    }
  },

  async getHouses() {
    try{
      let res = await this.$axios.get('/houses')
    }catch{
      console.log("can't get /houses, bad connections.")
    }

  }

}

//GETTERS
export const getters = {

}
