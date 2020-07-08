export const state = () => ({
  counter: 0,
  isLoggedIn: false
})

export const mutations = {
  Logout(state) {
    state.isLoggedIn = false
    this.$router.push({ path: '/' })
  },

  loginUser(state) {
    state.isLoggedIn = true
    this.$router.push({ path: '/home' })
  }
}

export const actions = {
  loginUser({commit}){
    commit('loginUser')
  },
  Logout({commit}){
    commit('Logout')
  }
}

export const getters = {
  isLoggedIn(state, getters){
    return state.isLoggedIn
  }
}
