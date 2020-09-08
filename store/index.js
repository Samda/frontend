export const mutations = {
  setAuth(state, response){
    let auth_user = JSON.stringify(response.data)
    localStorage.setItem('auth_user', auth_user)
    localStorage.setItem('auth_token', response.headers.authorization)
    this.$auth.setUserToken(response.headers.authorization)
    this.$auth.setUser(response.data)
  },
  isLoggedIn(state, getters){
    return state.auth.user
  }
}

export const actions = {
  logOut() {
    localStorage.removeItem('auth_user')
    localStorage.removeItem('auth_token')
    this.$auth.logout()
  },

  userLogin({commit}, loginInfo) {

    try {
      let response = this.$axios.post('/api/v1/auth/login', loginInfo).then((res) => {
        commit('setAuth', res)
        this.$router.push('/admin')
      })
    } catch (error) {
      let err = error.response ? error.response.data.error : "Sorry an error occured, check your internet"
      console.log(err)
    }
  },

  async addHouseModel({commit}, formData){
    try{
      let response = await this.$axios.post('/api/v1/house_models', formData)
      return res;
    } catch (error) {
      let err = error.response ? error.response.data.error : "Sorry an error occured, check your internet"
      console.log(err)
    }
  }
}
