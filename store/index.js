export const state = () => ({
  counter: 0,
  isLoggedIn: false
})

export const mutations = {
  Logout(state) {
    state.isLoggedIn = false
    this.$router.push({ path: '/' })
  },
  async userLogin(stats) {
    try {
      let response = await this.$auth.loginWith('local', { data: this.login })
      console.log(response)
    } catch (err) {
      console.log(err)
    }
  },

  loginUser(state) {
    state.isLoggedIn = true
    this.$router.push({ path: '/home' })
  }
}

export const actions = {
  userLogin({commit}){
    commit('userLogin')
  },
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
