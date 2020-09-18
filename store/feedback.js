export const state = () =>  ({

  isLoading: false,

  feedbacks: [],

  links: {
    current_page: 1,
    per_page: 1,
    total_page: 1
  }
})

//MUTAIONS
export const mutations = {

  setLoading(state, val){
    state.isLoading = val
  },

  setFeedbacks(state, data){
    state.feedbacks = data.data
  },

  setLink(state, link_data){
    state.links = link_data.links
  },

  setCurrentPage(state, val){
    state.links.current_page = val
  }
}
//ACTIONS
export const actions = {
  addFeedback({commit}, data){
    commit('setLoading', true)
    let res = this.$axios.post('/api/v1/feedbacks', data)
                .then( response => {
                  console.log(response.status)
                  commit('setLoading', false)
                }).catch( error => {
                  commit('setLoading', false)
                  console.log(error)
                })
  },

  async FETCH_FEEDBACKS({commit}, params){
    try {
      let res = await this.$axios.get(`/api/v1/feedbacks?${params}`).then(response => {
        commit('setFeedbacks', response.data)
        commit('setLink', response.data)
      }).catch( error => {
        console.log('error')
      })
    }
    catch {
      console.log("bad connection")
    }

  }

}

//GETTERS
export const getters = {

  isLoading(state){
      return state.isLoading
  },

  GET_FEEDBACKS(state){
    return state.feedbacks
  },

  getCurrentPage(state){
    return state.links.current_page
  }

}
