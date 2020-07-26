export const state = () =>  ({

  isLoading: false,

  feedbacks: []

})

export const mutations = {

  setLoading(state, val){
    state.isLoading = val
  },

  setFeedbacks(state, payload){
    state.feedbacks = palload
  }

}

export const actions = {
  addFeedback({commit}, data){
    commit('setLoading', true)
    let res = this.$axios.post('/feedbacks', data)
                .then( response => {
                  debugger
                  console.log(response.status)
                  commit('setLoading', false)
                }).catch( error => {
                  commit('setLoading', false)
                  console.log(error)
                })
    console.log(res)
  }

}

export const getters = {

  isLoading(state){
      return state.isLoading
  },

  getFeedbacks(state){
    return state.feedbacks
  }

}
