export const state = () => ({
  isLoading: false
})

export const mutations = {
  setAuth(state, data){
    let auth_user = JSON.stringify(data.results)
    localStorage.setItem('auth_user', auth_user)
    this.$auth.setUserToken(data.results.auth_token)
    this.$auth.setUser(data.results.user)
  },
  setLoading(state, data){
    state.isLoading = data
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
      let response = await this.$axios.post('/house_models', formData)
      return res;
    } catch (error) {
      let err = error.response ? error.response.data.error : "Sorry an error occured, check your internet"
      console.log(err)
    }
  },

  async addHouse({}, data) {
    let res = await this.$axios.post('/houses', data)
    return res;
  },

  async getHouses() {
    let res = await this.$axios.get('/houses')
    return res;
  },

  addFeedback({commit}, data){
    commit('setLoading', true)
    let res = this.$axios.post('/feedbacks', data)
                .then( response => {
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
  getisLoading(state){
      return state.isLoading
  },
  isLoggedIn(state, getters){
    return state.auth.user
  },

  getLoggedIn(){
    return this.$store.$auth.loggedIn
  },
  User(){
    return this.$store.$auth.user
  }
}
