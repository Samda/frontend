export const mutations = {
  setAuth(state, data){
    let auth_user = JSON.stringify(data.results)
    localStorage.setItem('auth_user', auth_user)
    this.$auth.setUserToken(data.results.auth_token)
    this.$auth.setUser(data.results.user)
  },
  isLoggedIn(state, getters){
    return state.auth.user
  }
}

export const actions = {
  logOut() {
    localStorage.removeItem('auth_user')
    this.$auth.logout()
  },

  async userLogin({commit}, loginInfo) {
    try {
      let response = await this.$auth.loginWith('local', { data: loginInfo }).then((res) => {
        let data = res.data
        commit('setAuth', data)
      })
      this.$router.push('/admin')
    } catch (error) {
      let err = error.response ? error.response.data.error : "Sorry an error occured, check your internet"
      console.log(err)
    }
  },

  async addHouseModel({commit}, formData){
    try{
      let response = await this.$axios.post('/admins/contents/house_models', formData)
      return res;
    } catch (error) {
      let err = error.response ? error.response.data.error : "Sorry an error occured, check your internet"
      console.log(err)
    }
  },

  async addHouse({}, data) {
    let res = await this.$axios.post('/admins/contents/houses', data)
    return res;
  },

  async getHouses() {
    let res = await this.$axios.get('/admins/contents/houses')
    return res;
  }
}
